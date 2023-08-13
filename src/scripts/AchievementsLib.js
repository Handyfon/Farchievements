export async function addAchievementFromCommand(achievementID, PID) {
  let cleanPlayerID = game.users.contents.indexOf(game.users.get(PID)) - 1;
  let dataPlayerID = cleanPlayerID; //++xathick
  let player = game.users.get(PID);
  let playerName = player.name;
  let clientdataSYNC = game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC"); //GET DATA
  let dataArray = clientdataSYNC.split("||"); //DATA TO ARRAY
  let dataArrayPlayer; //DATA TO ARRAY
  let toSYNC;
  let index = 0;
  for (index; index < dataArray.length; index++) {
    if (dataArray[index].split(":")[0] == PID) {
      dataPlayerID = index;
    }
    game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC").split("||");
  }
  if (dataArray[dataPlayerID] == "" || dataArray[dataPlayerID] == "NULL") {
    // IF NO DATA YET ADD ACHIEVEMENT
    dataArrayPlayer = game.users.contents[dataPlayerID]._id + ":" + achievementID + ",";
    dataArray[dataPlayerID] = dataArrayPlayer; //++xathick
    toSYNC = dataArray.join("||");
    await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", toSYNC);
    if (document.getElementById("AchPlayerNav").className == "AchPlayerNav") {
      //CHECK FOR EDITING WITHIN NORMAL WINDOW
      await game.settings.set(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", PID);
      $("#achsyncnormalmode").append(
        '<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>'
      );
      loadAchievements();
    } else loadAchievementsEditMode();
    return;
  }

  if (dataArray[dataPlayerID].split(":")[1].includes("," + "" + achievementID + ",")) {
    //DETECT EXISTING ACHIEVEMENT, SKIP REST
    ui.notifications.notify("Farchievements | This player already has the achievement");
    return;
  } else if (dataArray[dataPlayerID].split(":")[1].split(",")[0] == "" + achievementID) {
    //FIRST ACHIEVEMENT IN DATA? => CHECK AGAIN SPECIAL FORMATTING
    ui.notifications.notify("Farchievements | This player already has the achievement");
    return;
  } else if (
    dataArray[dataPlayerID].split(":")[1].split(",")[dataArray[dataPlayerID].split(":")[1].split(",")[0].length + 1] ==
    "" + achievementID
  ) {
    //LAST ACHIEVEMENT IN DATA? => SPECIAL FORMATTING
    let toReplace = achievementID + ","; //REPLACE FIRST ENTRY IN DATA
    var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
    firstDataArray.pop();
    dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
    toSYNC = dataArray.join("||");
  } else {
    //IF IT DOESN'T EXIST ON THIS PLAYER YET, ADD THE ACHIEVEMENT
    dataArrayPlayer =
      dataArray[dataPlayerID].split(":")[0] + ":" + dataArray[dataPlayerID].split(":")[1] + achievementID + ",";
    dataArray[dataPlayerID] = dataArrayPlayer;
    toSYNC = dataArray.join("||");
  }
  if (document.getElementById("SyncAchUnsaved") != null) {
    if (document.getElementById("SyncAchUnsaved").value == toSYNC) {
      document.getElementById("SyncAchUnsaved").id = "SyncAch";
      document.getElementById("SyncAch").value = "";
    }
  }
  if (document.getElementById("SyncAch") != null) {
    document.getElementById("SyncAch").value = toSYNC;
    document.getElementById("SyncAch").id = "SyncAchUnsaved";
  }

  await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", toSYNC);
  SendSyncMessage();
  //RELOAD ANY OPEN WINDOW
  if (document.getElementById("AchPlayerNav") == null) return;
  if (document.getElementById("AchPlayerNav").className == "AchPlayerNav") {
    //CHECK FOR EDITING WITHIN NORMAL WINDOW
    await game.settings.set(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", PID);
    $("#achsyncnormalmode").append(
      '<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>'
    );
    window.loadAchievements();
  } else window.loadAchievementsEditMode();
}
export async function removeAchievementFromCommand(achievementID, PID) {
  let cleanPlayerID = game.users.contents.indexOf(game.users.get(PID)) - 1;
  let dataPlayerID = cleanPlayerID; //++xathick
  let player = game.users.get(PID);
  let playerName = player.name;
  let clientdataSYNC = game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC"); //GET DATA
  let dataArray = clientdataSYNC.split("||"); //DATA TO ARRAY
  let dataArrayPlayer; //DATA TO ARRAY
  let toSYNC;
  let index = 0;
  for (index; index < dataArray.length; index++) {
    if (dataArray[index].split(":")[0] == PID) {
      dataPlayerID = index;
    }
    game.settings.get(CONSTANTS.MODULE_ID, "clientdataSYNC").split("||");
  }
  if (dataArray[dataPlayerID] == "" || dataArray[dataPlayerID] == "NULL") {
    // IF NO DATA YET ADD ACHIEVEMENT
    dataArrayPlayer = game.users.contents[dataPlayerID]._id + ":" + achievementID + ",";
    dataArray[dataPlayerID] = dataArrayPlayer; //++xathick
    toSYNC = dataArray.join("||");
    await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", toSYNC);
    if (document.getElementById("AchPlayerNav").className == "AchPlayerNav") {
      //CHECK FOR EDITING WITHIN NORMAL WINDOW
      await game.settings.set(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", PID);
      $("#achsyncnormalmode").append(
        '<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>'
      );
      loadAchievements();
    } else loadAchievementsEditMode();
    return;
  }

  if (dataArray[dataPlayerID].split(":")[1].includes("," + "" + achievementID + ",")) {
    //DETECT EXISTING ACHIEVEMENT, REMOVE IT
    let toReplace = achievementID + ","; //REPLACE FROM WITHIN DATA
    dataArrayPlayer =
      dataArray[dataPlayerID].split(":")[0] + ":" + dataArray[dataPlayerID].split(":")[1].replace(toReplace, "");
    dataArray[dataPlayerID] = dataArrayPlayer;
    toSYNC = dataArray.join("||");
    //log(toSYNC);
  } else if (dataArray[dataPlayerID].split(":")[1].split(",")[0] == "" + achievementID) {
    //FIRST ACHIEVEMENT IN DATA?
    let toReplace = achievementID + ","; //REPLACE FIRST ENTRY IN DATA
    var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
    firstDataArray.shift();
    dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
    toSYNC = dataArray.join("||");
    //log(toSYNC);
  } else if (
    dataArray[dataPlayerID].split(":")[1].split(",")[dataArray[dataPlayerID].split(":")[1].split(",")[0].length + 1] ==
    "" + achievementID
  ) {
    //LAST ACHIEVEMENT IN DATA?
    let toReplace = achievementID + ","; //REPLACE FIRST ENTRY IN DATA
    var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
    firstDataArray.pop();
    dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
    toSYNC = dataArray.join("||");
    //log(toSYNC);
  }
  if (document.getElementById("SyncAchUnsaved") != null) {
    if (document.getElementById("SyncAchUnsaved").value == toSYNC) {
      document.getElementById("SyncAchUnsaved").id = "SyncAch";
      document.getElementById("SyncAch").value = "";
    }
  }
  if (document.getElementById("SyncAch") != null) {
    document.getElementById("SyncAch").value = toSYNC;
    document.getElementById("SyncAch").id = "SyncAchUnsaved";
  }

  await game.settings.set(CONSTANTS.MODULE_ID, "clientdataSYNC", toSYNC);
  SendSyncMessage();
  //RELOAD ANY OPEN WINDOW
  if (document.getElementById("AchPlayerNav") == null) {
    return;
  }
  if (document.getElementById("AchPlayerNav").className == "AchPlayerNav") {
    //CHECK FOR EDITING WITHIN NORMAL WINDOW
    await game.settings.set(CONSTANTS.MODULE_ID, "loadSettingsForPlayer", PID);
    $("#achsyncnormalmode").append(
      '<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>'
    );
    window.loadAchievements();
  } else {
    window.loadAchievementsEditMode();
  }
}

export async function SendSyncMessage() {
  ChatMessage.create({
    user: game.user._id,
    content: "Achievements Synced",
    blind: false,
    whisper: game.users.filter((u) => u.isGM).map((u) => u.id),
  });

  if (document.getElementById("achsyncnormalmode") != null) {
    if (document.getElementById("achsyncnormalmode").innerHTML != "")
      document.getElementById("achsyncnormalmode").innerHTML = "";
  }
}
