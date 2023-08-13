import { addAchievementFromCommand, removeAchievementFromCommand } from "./AchievementsLib";

//PUBLICLY ACCESSIBLE FUNCTIONS
export class Farchievement {
  static Open() {
    $("#SettingsAchievementsButton").click();
  }
  static Render() {
    $("#SettingsAchievementsButton").click();
  }
  static async AddAchievement(AchievementName, PlayerName) {
    if (!game.user.isGM) return;
    log(AchievementName);
    let data = game.settings.get("farchievements", "achievementdata").split(";;;");
    let AchievementID, PlayerID;
    for (let i = 0; i < game.settings.get("farchievements", "achievementdata").split(";;;").length; i++) {
      if (
        AchievementName ==
        game.settings.get("farchievements", "achievementdata").split(";;;")[i].split("////")[0].split(":::")[1]
      ) {
        AchievementID =
          game.settings.get("farchievements", "achievementdata").split(";;;")[i].split("////")[0].split(":::")[0] - 1;
      }
    }
    PlayerID = game.users.getName(PlayerName).id;

    if (PlayerID == null) {
      ui.notifications.warn("Farchievements | Is the player name right?");
      return;
    }
    if (AchievementID == null) {
      ui.notifications.warn("Farchievements | Is the achievement name right?");
      return;
    }
    addAchievementFromCommand(AchievementID, PlayerID);
  }
  static async RemoveAchievement(AchievementName, PlayerName) {
    if (!game.user.isGM) return;
    log(AchievementName);
    let data = game.settings.get("farchievements", "achievementdata").split(";;;");
    let AchievementID, PlayerID;
    for (let i = 0; i < game.settings.get("farchievements", "achievementdata").split(";;;").length; i++) {
      if (
        AchievementName ==
        game.settings.get("farchievements", "achievementdata").split(";;;")[i].split("////")[0].split(":::")[1]
      ) {
        AchievementID =
          game.settings.get("farchievements", "achievementdata").split(";;;")[i].split("////")[0].split(":::")[0] - 1;
      }
    }
    PlayerID = game.users.getName(PlayerName).id;

    if (PlayerID == null) {
      ui.notifications.warn("Farchievements | Is the player name right?");
      return;
    }
    if (AchievementID == null) {
      ui.notifications.warn("Farchievements | Is the achievement name right?");
      return;
    }
    removeAchievementFromCommand(AchievementID, PlayerID);
  }
}
