export class AchievementsScreen extends Application {
  activateListeners(html) {
    super.activateListeners(html);
    html.find(".SyncAch").click((event) => {
      //update the actor
      ui.notifications.notify("SYNC");
    });
  }
  openDialog() {
    //LOAD TEMPLATE DATA
    let $dialog = $(".achievementsscreen-window");
    if ($dialog.length > 0) {
      $dialog.remove();
      //return;
    }
    const templateData = {
      data: [],
    };
    templateData.data = super.getData();
    templateData.title = "Farchievements";

    const templatePath = "modules/farchievements/AchievementsScreen.html";
    if (document.getElementsByClassName("achievementsscreen-window").length > 0) {
    }
    AchievementsScreen.renderMenu(templatePath, templateData);
  }
  static renderMenu(path, data) {
    const dialogOptions = {
      width: 1050,
      heith: 630,
      top: 200,
      left: window.innerWidth / 2 - 510,
      classes: ["achievementsscreen-window resizable"],
    };
    dialogOptions.resizable = true;
    renderTemplate(path, data).then((dlg) => {
      new Dialog(
        {
          title: game.settings.get(CONSTANTS.MODULE_ID, "AchievementWindowTitle"),
          content: dlg,
          buttons: {},
        },
        dialogOptions
      ).render(true);
    });
  }
}
