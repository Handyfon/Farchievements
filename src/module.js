/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module
 */
// Import JavaScript modules

// Import TypeScript modules
import { registerSettings } from "./scripts/settings.js";
import CONSTANTS from "./scripts/constants/constants.js";
import API from "./scripts/API/api.js";
import { error } from "./scripts/lib/lib.js";

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once("init", () => {
  // Do anything once the module is ready
  //   if (!game.modules.get("lib-wrapper")?.active && game.user?.isGM) {
  //     let word = "install and activate";
  //     if (game.modules.get("lib-wrapper")) word = "activate";
  //     throw error(`Requires the 'libWrapper' module. Please ${word} it.`);
  //   }

  // Register custom module settings
  registerSettings();

  // initHooks();
});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once("setup", function () {
  // setupHooks();
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once("ready", () => {
  // if (!game.modules.get("socketLib")?.active && game.user?.isGM) {
  // 	let word = "install and activate";
  // 	if (game.modules.get("socketLib")) word = "activate";
  // 	throw error(`Requires the 'socketLib' module. Please ${word} it.`);
  // }
  // readyHooks();
});

// Add any additional hooks if necessary

Hooks.on("renderSceneNavigation", async function () {
  Achievements.addChatControl();
  //log("AchievementsScreen GM true");
  //sync achievements
  if (!game.user.isGM) {
    AchievementSync.SyncAchievements();
  }
  let style = await game.settings.get("farchievements", "bannerBackground");
  let imageStandardIconPath = `modules/${CONSTANTS.MODULE_ID}/assets/images/standard_icon/standardIcon.png`;
  let bannerstyle =
    "top: -200px;background: url(" +
    style +
    ")!important;background-size: cover !important;background-position: center !important;box-shadow: 0px -4px 6px black !important;display: flex;";
  var el =
    `<div id="Achievementbar" style="display: none;" class="Achievementbar"><div id="FoundryAchievements" class="FoundryAchievementsBanner" style="` +
    bannerstyle +
    `"><img id="AchievementIMG" class="AchievementIMG" src="${imageStandardIconPath}"></img><p class="AchievementText"><label class="AchievementTextLabel">${i18n(
      "farchievements.NewAchievement"
    )}</label> (${i18n("farchievements.Achievement")}) </p><i class="Shiny"></i></div></div>`;
  document.getElementById("notifications").innerHTML = el;
});

Hooks.on("renderSettings", function () {
  //ADD BUTTON TO SETTINGS
  function refreshData() {
    let x = 0.1; // 0.1 seconds

    if (
      document.getElementById("FarchievementsSettings") == null &&
      game.settings.get("farchievements", "GameSettingsButton")
    ) {
      $("#settings-game").append(
        `<div id="FarchievementsSettings" style="margin:0;"><h4>Farchievements</h4><button id="SettingsAchievementsButton" data-action="Achievements"><i class="fas fa-medal achievements-button"></i>${i18n(
          "farchievements.Achievements"
        )}</button></div>`
      );
      let AchievementsButton = document.getElementById("SettingsAchievementsButton");
      if (AchievementsButton != null) AchievementsButton.onclick = Achievements.initializeAchievements;
    }
    // Do your thing here
    //ui.notifications.notify("Test");
    if (document.getElementsByClassName("context-items")[0] != null) {
      if (document.getElementById("contextAchievement") == null) {
        let id = document.getElementsByClassName("context-items")[0].closest(".player").getAttribute("data-user-id");
        if (id != game.user.id && game.user.isGM) {
          //You can't open your own achievements
          $(".context-items").append(
            `<li class="context-item" id="contextAchievement"><i class="fas fa-medal"></i> ${i18n(
              "farchievements.ViewAchievements"
            )}</li>`
          );
          let AchievmentContextButton = document.getElementById("contextAchievement");
          game.settings.set(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", id);
          AchievmentContextButton.onclick = Achievements.initializeAchievements;
        }
      }
    }

    setTimeout(refreshData, x * 1000);
  }
  if (game.user.isGM) {
    function WaitForReady() {
      let x = 0.1; // 0.1 seconds
      // Do your thing here
      if (game.ready == true) {
        AchievementSync.SyncAchievements();
      } else setTimeout(WaitForReady, x * 1000);
    }
    WaitForReady();
  }

  refreshData();
});

Hooks.on("createChatMessage", async function (message) {
  if (message.data.content.includes("Achievements Synced")) {
    AchievementSync.SyncAchievements();
  }
  if (message.data.content.includes("Farchievements-SyncRequest")) {
    if (!game.user.isGM) return;
    let NAME = message.data.content.split("|")[1];
    let ACHIEVMENTNAME = message.data.content.split("|")[2];
    //==========================================
    let achData = game.settings.get("farchievements", "achievementdata").split(";;;");
    let dataArray = game.settings.get("farchievements", "clientdataSYNC").split("||");
    let Player, achievementID, dataArrayPlayer, toSYNC, PID;
    if (NAME != "") Player = game.users.getName(NAME);
    else {
      Player = game.user;
    }
    if (Player == null) {
      ui.notifications.error(
        i18n("farchievements.Notification.Prefix") + i18n("farchievements.Notification.UserDoesNotExist")
      );
      return;
    }
    PID = dataArray.indexOf(dataArray.filter((entry) => entry.includes(Player.id))[0]);
    achievementID = achData.filter((entry) => entry.split("////")[0].includes(ACHIEVMENTNAME))[0][0];
    if (dataArray[PID] == "" || dataArray[PID] == null) {
      // IF NO DATA YET
      dataArrayPlayer = game.users._source[PID].id + ":" + achievementID + ",";
      dataArray[PID] = dataArrayPlayer;
      toSYNC = dataArray.join("||");
      log(toSYNC);
      //await game.settings.set(CONSTANTS.MODULE_ID, 'clientdataSYNC', toSYNC);

      log("Setting Achievement: " + achievementname + "(ID:" + achievementID + ")" + " for user: " + playerName); //TODO ACTUALLY ADD THE ACHIEVEMENT
      return;
    } else {
      dataArrayPlayer = dataArray[PID].split(":")[0] + ":" + dataArray[PID].split(":")[1] + achievementID + ",";
      dataArray[PID] = dataArrayPlayer;
      toSYNC = dataArray.join("||");
      log(toSYNC);
    }
    await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", toSYNC);

    ChatMessage.create({
      user: game.user.id,
      content: "Achievements Synced",
      blind: false,
      whisper: game.users.entities.filter((u) => u.isGM).map((u) => u.id),
    });
    ui.notifications.notify("Achievements Synced");
    AchievementSync.SyncAchievements();
  }
});

// window.farchievements_DEBUG_Reset_EVERYTHING = async function resetSettings() {
//   if (!game.user.isGM) return;
//   await game.settings.set(
//     "farchievements",
//     "achievementdata",
//     "1:::Mounted////systems/dnd5e/icons/items/inventory/horseshoe.jpg////Acquire a mount.;;;2:::Translator////systems/dnd5e/icons/items/inventory/note-scroll.jpg////Act as the party translator.;;;3:::Argumenter////systems/dnd5e/icons/items/inventory/monster-beak.jpg////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////systems/dnd5e/icons/items/inventory/runestone-dwarven.jpg////Ask a deity for a favor.;;;5:::Hardmode////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////systems/dnd5e/icons/skills/blood_12.jpg////Be ignored by the DM when citing rules.;;;7:::Special////systems/dnd5e/icons/skills/green_27.jpg////Be the only person to roll 20 at a session;;;8:::Actor////systems/dnd5e/icons/skills/emerald_07.jpg////Beat a performance check while in disguise;;;9:::Deiety////systems/dnd5e/icons/skills/yellow_13.jpg////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////https://assets.forge-vtt.com/5fa2d7054f8a4cf1b34c8a38/Icons/spellbook_page1/SpellBook08_13.png////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I've nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted. Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;24:::Lorax////https://c.tenor.com/BzpCcZbxOAIAAAAd/lorax-the-lorax.gif////Speak for the trees;;;"
//   );
//   await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", "");
//   await game.settings.set(CONSTANTS.MODULE_ID, "clientdata", "");
// };
// window.farchievements_DEBUG_Reset_PlayerAchievements = async function resetPlayers() {
//   if (!game.user.isGM) return;
//   await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", "");
//   await game.settings.set(CONSTANTS.MODULE_ID, "clientdata", "");
//   location.reload();
// };

/**
 * Initialization helper, to set API.
 * @param api to set to game module.
 */
export function setApi(api) {
  const data = game.modules.get(CONSTANTS.MODULE_ID);
  data.api = api;
}

/**
 * Returns the set API.
 * @returns Api from games module.
 */
export function getApi() {
  const data = game.modules.get(CONSTANTS.MODULE_ID);
  return data.api;
}

/**
 * Initialization helper, to set Socket.
 * @param socket to set to game module.
 */
export function setSocket(socket) {
  const data = game.modules.get(CONSTANTS.MODULE_ID);
  data.socket = socket;
}

/*
 * Returns the set socket.
 * @returns Socket from games module.
 */
export function getSocket() {
  const data = game.modules.get(CONSTANTS.MODULE_ID);
  return data.socket;
}
