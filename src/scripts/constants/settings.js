import { SYSTEMS } from "../systems.mjs";
import { applySystemSpecificStyles } from "../settings.mjs";
import CONSTANTS from "./constants.mjs";
import ItemProperties from "../apps/ItemProperties.mjs";
import DefaultIcons from "../apps/DefaultIcons.mjs";

const SETTINGS = {
  // Client settings

  // Module Settings
  EnableChatBarButton: "EnableChatBarButton",
  EnableAchievementMessage: "EnableAchievementMessage",
  EnableScoreboard: "EnableScoreboard",
  EnableConfettiSupport: EnableConfettiSupport, // TODO TO REMOVE AND EMBEDDED THE CODE
  EnableContextButton: "EnableContextButton",
  OmniView: "OmniView",
  ListView: "ListView",
  GameSettingsButton: "GameSettingsButton",
  AchievementWindowTitle: "AchievementWindowTitle",
  PlayerBackColor: "PlayerBackColor",
  HideUnknown: "HideUnknown",
  UnknownName: "UnknownName",
  AlwaysShowName: "AlwaysShowName",
  UnknownDes: "UnknownDes",
  AlwaysShowDes: "AlwaysShowDes",
  DescriptionOnHover: "DescriptionOnHover",

  standarticon: "standarticon",
  bannerBackground: "bannerBackground",
  achievementStinger: "achievementStinger",
  achievementStingerVolume: "achievementStingerVolume",
  achpretext: "achpretext",
  greyscale: "greyscale",
  mystery: "mystery",
  achievementdata: "achievementdata",
  debug: "debug",

  // Style settings

  // System Settings

  // Hidden settings
  achamount: "achamount",
  clientdataSYNC: "clientdataSYNC",
  clientdata: "clientdata",
  loadSettingsForPlayer: "loadSettingsForPlayer",
};

export default SETTINGS;
