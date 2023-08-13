import CONSTANTS from "./constants/constants";
import { log, i18n } from "./lib/lib";

export class AchievementSync {
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static async PlayAnimation(achievementsGainedList, amount) {
    let achievementsToGain = achievementsGainedList.split(",");
    let data;
    let name, icon, description;
    let toGain;
    let stingerVolume = game.settings.get(CONSTANTS.MODULE_ID, "achievementStingerVolume");
    for (let i = 0; i < achievementsToGain.length; i++) {
      await AchievementSync.sleep(100);
      toGain = achievementsToGain[i];
      if (toGain == "") return;
      data = game.settings.get(CONSTANTS.MODULE_ID, "achievementdata").split(";;;")[toGain];
      name = data.split(":::")[1].split("////")[0];
      icon = data.split(":::")[1].split("////")[1];
      description = data.split(":::")[1].split("////")[2];
      if (icon == "icon") {
        icon = game.settings.get(CONSTANTS.MODULE_ID, "standarticon");
      } //IF STANDARD ICON USE ICON DEFINED IN GAMESETTINGS
      await AudioHelper.play(
        {
          src: game.settings.get(CONSTANTS.MODULE_ID, "achievementStinger"),
          volume: stingerVolume,
          autoplay: true,
          loop: false,
        },
        false
      );
      await AchievementSync.sleep(1800);
      document.getElementsByClassName("AchievementText")[0].innerHTML =
        '<label class="AchievementTextLabel">' + game.settings.get("farchievements", "achpretext") + "</label>" + name;
      document.getElementById("AchievementIMG").src = icon;
      document.getElementById("Achievementbar").style.setProperty("display", "flex");
      if (game.settings.get(CONSTANTS.MODULE_ID, "EnableAchievementMessage")) {
        ChatMessage.create({
          user: game.user.id,
          content: `	<div class="ChatAchName">${name}</div>
								<img class="AchIcon" src="${icon}"/>
								<div class="ChatAchDescription">${description}</div>
							`,
          blind: false,
        });
      }

      if (
        game.modules.get("confetti")?.active === true &&
        game.settings.get(CONSTANTS.MODULE_ID, "EnableConfettiSupport")
      ) {
        for (let c = 0; c < 3; c++) {
          await AchievementSync.sleep(500);
          const strength = window.confetti.confettiStrength.high;
          const shootConfettiProps = window.confetti.getShootConfettiProps(strength);
          window.confetti.handleShootConfetti(shootConfettiProps);
        }
      } else await AchievementSync.sleep(1000);

      await AchievementSync.sleep(8000);
      document.getElementById("Achievementbar").style.setProperty("display", "none");
    }
  }
  static SyncAchievements() {
    if (game.user.isGM) {
      if (!game.ready) return; //IF GAME IS READY, ELSE CHANGES WOULDN'T BE SAVED
      //CHECK FOR NEW USERS
      if (document.getElementById("SyncAchUnsaved") != null) {
        document.getElementById("SyncAchUnsaved").id = "SyncAch";
      }
      let clientDataSYNC = game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC");
      if (clientDataSYNC == "") {
        //IF THERE ARE NO USERS YET ADD ALL OF THEM
        for (let i = 0; i < game.users.contents.length; i++) {
          if (game.users.contents[i].isGM) continue;
          clientDataSYNC += game.users.contents[i].id + ":||";
          log("Foundry Achievements | Added " + game.users.contents[i].name + " with ID: " + game.users.contents[i].id);
        }
      } else {
        for (let i = 0; i < game.users.contents.length; i++) {
          if (game.users.contents[i].isGM) continue;
          if (!clientDataSYNC.includes(game.users.contents[i].id)) {
            //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
            clientDataSYNC += game.users.contents[i].id + ":||";
            //ui.notifications.notify("Foundry Achievements | Added "+game.users.contents[i].name+" with ID: " + game.users.contents[i].id);
            log(
              "Foundry Achievements | Added " + game.users.contents[i].name + " with ID: " + game.users.contents[i].id
            );
          }
        }
        //CHECK FOR REDUNDANT USERS AND REMOVE THEM
        let userID;
        let ToSYNC = clientDataSYNC.split("||");
        if (game.users.contents.length == 1) {
          //ui.notifications.notify("Farchievements | you need to create some players in order to use this module");
          return;
        }
        for (let i = 0; i < clientDataSYNC.split("||").length; i++) {
          userID = clientDataSYNC.split("||")[i].split(":")[0];
          if (game.users.get(userID) == null) {
            //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
            //ToSYNC.pop(i);
            ToSYNC.splice(i, 1);
            clientDataSYNC = ToSYNC.join("||") + "||";
            log(clientDataSYNC);
            if (userID != "")
              ui.notifications.notify(
                i18n("farchievements.Notification.Prefix") +
                  i18n("farchievements.Notification.PlayerIdChanged") +
                  userID
              );
          }
        }
      }
      game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", clientDataSYNC);
    } else {
      //IF USER IS PLAYER
      let myID = game.user.id;
      let SYNCSETTINGS = game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC");
      let mysettings = game.settings.get(CONSTANTS.MODULE_ID, "clientdata");
      if (mysettings == "") mysettings = ":"; //hotfix by XLilCasper#9701
      let mySYNCSettings = "";
      for (
        let i = 0;
        i < game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC").split("||").length;
        i++ //FOR EVERY ENTRY IN CLIENTDATASYNC
      ) {
        if (game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC").split("||")[i].includes(myID)) {
          //FIND THE SETTINGS FOR THE CURRENT USER BY USERID
          mySYNCSettings = game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC").split("||")[i]; // MYSYNC = SETTINGS FOR MY USERID
        }
      }
      if (mysettings != mySYNCSettings) {
        //IF THERE IS A DIFFERENCE BETWEEN VERSIONS
        let clientDataToSync = game.user.id + ":";
        let achievementnumber = 0;
        let amountGained = 0;
        let achievementsGainedList = "";
        if (mySYNCSettings == "") return;
        for (let i = 0; i < mySYNCSettings.split(":")[1].split(",").length; i++) {
          achievementnumber = mySYNCSettings.split(":")[1].split(",")[i];
          if (mySYNCSettings.split(":")[1].split(",")[i] != "") {
            if (!mysettings.split(":")[1].includes(achievementnumber)) {
              //IF THE USER DOESN'T ALREADY HAVE THE ACHIEVEMENT
              amountGained++;
              achievementsGainedList += achievementnumber + ","; // ADD ACHIEVEMENT TO ACHIEVEMENTGAINEDLIST
            }
            clientDataToSync += achievementnumber + ","; //ADD THE ACHIEVEMENT TO THE SYNC REGARDLESS
          }
        }
        if (amountGained != 0) AchievementSync.PlayAnimation(achievementsGainedList, amountGained);
        game.settings.set(CONSTANTS.MODULE_ID, "clientdata", clientDataToSync);
        if (document.getElementById("AchievementScript") != null)
          //IF ACHIEVEMENTSCREEN IS OPEN FOR THE PLAYER RELOAD IT
          document.getElementById("AchievementScript").onclick();
      }
    }
  }
}
