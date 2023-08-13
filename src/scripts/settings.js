import { debug, log, warn, i18n } from "./lib/lib.js";
import CONSTANTS from "./constants/constants.js";

export const registerSettings = function () {
  const debouncedReload = debounce(() => window.location.reload(), 100);
  game.settings.register(CONSTANTS.MODULE_ID, "EnableChatBarButton", {
    name: game.i18n.localize("Farchievements.Settings.EnableChatBarButton.Text"),
    hint: game.i18n.localize("Farchievements.Settings.EnableChatBarButton.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: debouncedReload,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "EnableAchievementMessage", {
    name: game.i18n.localize("Farchievements.Settings.EnableAchievementMessage.Text"),
    hint: game.i18n.localize("Farchievements.Settings.EnableAchievementMessage.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "EnableScoreboard", {
    name: game.i18n.localize("Farchievements.Settings.EnableScoreboard.Text"),
    hint: game.i18n.localize("Farchievements.Settings.EnableScoreboard.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  if (game.modules.get("confetti")?.active === true) {
    game.settings.register(CONSTANTS.MODULE_ID, "EnableConfettiSupport", {
      name: game.i18n.localize("Farchievements.Settings.EnableConfettiSupport.Text"),
      hint: game.i18n.localize("Farchievements.Settings.EnableConfettiSupport.Hint"),
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
    });
  }
  game.settings.register(CONSTANTS.MODULE_ID, "EnableContextButton", {
    name: game.i18n.localize("Farchievements.Settings.EnableContextButton.Text"),
    hint: game.i18n.localize("Farchievements.Settings.EnableContextButton.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "OmniView", {
    name: game.i18n.localize("Farchievements.Settings.OmniView.Text"),
    hint: game.i18n.localize("Farchievements.Settings.OmniView.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "ListView", {
    name: game.i18n.localize("Farchievements.Settings.ListView.Text"),
    hint: game.i18n.localize("Farchievements.Settings.ListView.Hint"),
    scope: "world",
    config: false,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "GameSettingsButton", {
    name: game.i18n.localize("Farchievements.Settings.GameSettingsButton.Text"),
    hint: game.i18n.localize("Farchievements.Settings.GameSettingsButton.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: debouncedReload,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "AchievementWindowTitle", {
    name: game.i18n.localize("Farchievements.Settings.AchievementWindowTitle.Text"),
    hint: game.i18n.localize("Farchievements.Settings.AchievementWindowTitle.Hint"),
    scope: "world",
    config: true,
    default: "Your Achievements",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "PlayerBackColor", {
    name: game.i18n.localize("Farchievements.Settings.PlayerBackColor.Text"),
    hint: game.i18n.localize("Farchievements.Settings.PlayerBackColor.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "HideUnknown", {
    name: game.i18n.localize("Farchievements.Settings.HideUnknown.Text"),
    hint: game.i18n.localize("Farchievements.Settings.HideUnknown.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "UnknownName", {
    name: game.i18n.localize("Farchievements.Settings.UnknownName.Text"),
    hint: game.i18n.localize("Farchievements.Settings.UnknownName.Hint"),
    scope: "world",
    config: true,
    default: "Unknown Achievement",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "AlwaysShowName", {
    name: game.i18n.localize("Farchievements.Settings.AlwaysShowName.Text"),
    hint: game.i18n.localize("Farchievements.Settings.AlwaysShowName.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "UnknownDes", {
    name: game.i18n.localize("Farchievements.Settings.UnknownDes.Text"),
    hint: game.i18n.localize("Farchievements.Settings.UnknownDes.Hint"),
    scope: "world",
    config: true,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "AlwaysShowDes", {
    name: game.i18n.localize("Farchievements.Settings.AlwaysShowDes.Text"),
    hint: game.i18n.localize("Farchievements.Settings.AlwaysShowDes.Hint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "DescriptionOnHover", {
    name: game.i18n.localize("Farchievements.Settings.DescriptionOnHover.Text"),
    hint: game.i18n.localize("Farchievements.Settings.DescriptionOnHover.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "achamount", {
    name: game.i18n.localize("Farchievements.Settings.achamount.Text"),
    hint: game.i18n.localize("Farchievements.Settings.achamount.Hint"),
    scope: "world",
    config: false,
    default: "3",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "standarticon", {
    name: game.i18n.localize("Farchievements.Settings.standarticon.Text"),
    hint: game.i18n.localize("Farchievements.Settings.standarticon.Hint"),
    scope: "world",
    config: true,
    default: "modules/farchievements/standardIcon.PNG",
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, "bannerBackground", {
    name: game.i18n.localize("Farchievements.Settings.bannerBackground.Text"),
    hint: game.i18n.localize("Farchievements.Settings.bannerBackground.Hint"),
    scope: "world",
    config: true,
    default: "modules/farchievements/achievementbanner.jpg",
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, "achievementStinger", {
    name: game.i18n.localize("Farchievements.Settings.achievementStinger.Text"),
    hint: game.i18n.localize("Farchievements.Settings.achievementStinger.Hint"),
    scope: "world",
    config: true,
    default: "modules/farchievements/standardStinger_by_JFarenheit.mp3",
    type: String,
    filePicker: "audio",
  });
  game.settings.register(CONSTANTS.MODULE_ID, "achievementStingerVolume", {
    name: game.i18n.localize("Farchievements.Settings.achievementStingerVolume.Text"),
    hint: game.i18n.localize("Farchievements.Settings.achievementStingerVolume.Hint"),
    scope: "world",
    config: true,
    default: 0.1,
    type: Number,
    range: {
      min: 0,
      max: 1,
      step: 0.01,
    },
  });
  game.settings.register(CONSTANTS.MODULE_ID, "achpretext", {
    name: game.i18n.localize("Farchievements.Settings.achpretext.Text"),
    hint: game.i18n.localize("Farchievements.Settings.achpretext.Hint"),
    scope: "world",
    config: true,
    default: "Achievement Gained: ",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "greyscale", {
    name: game.i18n.localize("Farchievements.Settings.greyscale.Text"),
    hint: game.i18n.localize("Farchievements.Settings.greyscale.Hint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "mystery", {
    name: game.i18n.localize("Farchievements.Settings.mystery.Text"),
    hint: game.i18n.localize("Farchievements.Settings.mystery.Hint"),
    scope: "world",
    config: true,
    default: "modules/farchievements/mystery.JPG",
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, "achievementdata", {
    name: game.i18n.localize("Farchievements.Settings.AchievementData.Text"),
    hint: game.i18n.localize("Farchievements.Settings.AchievementData.Hint"),
    scope: "world",
    config: false,
    default:
      "1:::Mounted////systems/dnd5e/icons/items/inventory/horseshoe.jpg////Acquire a mount.;;;2:::Translator////systems/dnd5e/icons/items/inventory/note-scroll.jpg////Act as the party translator.;;;3:::Argumenter////systems/dnd5e/icons/items/inventory/monster-beak.jpg////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////systems/dnd5e/icons/items/inventory/runestone-dwarven.jpg////Ask a deity for a favor.;;;5:::Hardmode////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////systems/dnd5e/icons/skills/blood_12.jpg////Be ignored by the DM when citing rules.;;;7:::Special////systems/dnd5e/icons/skills/green_27.jpg////Be the only person to roll 20 at a session;;;8:::Actor////systems/dnd5e/icons/skills/emerald_07.jpg////Beat a performance check while in disguise;;;9:::Deiety////systems/dnd5e/icons/skills/yellow_13.jpg////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////https://assets.forge-vtt.com/5fa2d7054f8a4cf1b34c8a38/Icons/spellbook_page1/SpellBook08_13.png////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I've nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted. Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;24:::Lorax////https://c.tenor.com/BzpCcZbxOAIAAAAd/lorax-the-lorax.gif////Speak for the trees;;;",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "clientdataSYNC", {
    name: game.i18n.localize("Farchievements.Settings.ClientDataList.Text"),
    hint: game.i18n.localize("Farchievements.Settings.ClientDataList.Hint"),
    scope: "world",
    config: false,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "clientdata", {
    name: game.i18n.localize("Farchievements.Settings.ClientData.Text"),
    hint: game.i18n.localize("Farchievements.Settings.ClientData.Hint"),
    scope: "client",
    config: false,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", {
    name: game.i18n.localize("Farchievements.Settings.loadSettingsForPlayer.Text"),
    hint: game.i18n.localize("Farchievements.Settings.loadSettingsForPlayer.Hint"),
    scope: "client",
    config: false,
    default: "",
    type: String,
  });
  // ========================================================================

  game.settings.register(CONSTANTS.MODULE_ID, "debug", {
    name: `${CONSTANTS.MODULE_ID}.setting.debug.name`,
    hint: `${CONSTANTS.MODULE_ID}.setting.debug.hint`,
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });
};
