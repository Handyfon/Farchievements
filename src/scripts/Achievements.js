import CONSTANTS from "./constants";

export class Achievements {
  static addChatControl() {
    if (!game.settings.get(CONSTANTS.MODULE_ID, "EnableChatBarButton")) {
      return;
    }
    const chatControlLeft = document.getElementsByClassName("chat-control-icon")[0];
    let tableNode = document.getElementById("achievements-button");

    if (chatControlLeft && !tableNode) {
      const chatControlLeftNode = chatControlLeft.firstElementChild;
      const number = 3;
      tableNode = document.createElement("label");
      tableNode.className = "AchievmentButtonLabel";
      tableNode.innerHTML = `<i id="achievements-button" class="fas fa-medal achievements-button" style="text-shadow: 0 0 1px black;"></i>`;
      tableNode.onclick = Achievements.initializeAchievements;
      chatControlLeft.insertBefore(tableNode, chatControlLeftNode);
    }
  }
  static initializeAchievements() {
    if (this.AchievementsScreen === undefined) {
      this.AchievementsScreen = new AchievementsScreen();
    }
    this.AchievementsScreen.openDialog();
  }
}
