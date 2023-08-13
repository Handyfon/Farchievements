import { debug, log, warn, i18n } from "./lib/lib.js";
import CONSTANTS from "./constants/constants.js";
import SETTINGS from "./constants/settings.js";

export const registerSettings = function () {
  const debouncedReload = debounce(() => window.location.reload(), 100);
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.EnableChatBarButton, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableChatBarButton.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableChatBarButton.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: debouncedReload,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.EnableAchievementMessage, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableAchievementMessage.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableAchievementMessage.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.EnableScoreboard, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableScoreboard.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableScoreboard.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  if (game.modules.get("confetti")?.active === true) {
    game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.EnableConfettiSupport, {
      name: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableConfettiSupport.Text`),
      hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableConfettiSupport.Hint`),
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
    });
  }
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.EnableContextButton, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableContextButton.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.EnableContextButton.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.OmniView, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.OmniView.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.OmniView.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.ListView, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.ListView.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.ListView.Hint`),
    scope: "world",
    config: false,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.GameSettingsButton, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.GameSettingsButton.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.GameSettingsButton.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: debouncedReload,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.AchievementWindowTitle, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.AchievementWindowTitle.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.AchievementWindowTitle.Hint`),
    scope: "world",
    config: true,
    default: "Your Achievements",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.PlayerBackColor, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.PlayerBackColor.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.PlayerBackColor.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.HideUnknown, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.HideUnknown.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.HideUnknown.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.UnknownName, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.UnknownName.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.UnknownName.Hint`),
    scope: "world",
    config: true,
    default: "Unknown Achievement",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.AlwaysShowName, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.AlwaysShowName.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.AlwaysShowName.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.UnknownDes, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.UnknownDes.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.UnknownDes.Hint`),
    scope: "world",
    config: true,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.AlwaysShowDes, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.AlwaysShowDes.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.AlwaysShowDes.Hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.DescriptionOnHover, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.DescriptionOnHover.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.DescriptionOnHover.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.achamount, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.achamount.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.achamount.Hint`),
    scope: "world",
    config: false,
    default: "3",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.standarticon, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.standarticon.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.standarticon.Hint`),
    scope: "world",
    config: true,
    default: `modules/${CONSTANTS.MODULE_ID}/assets/images/standard_icon/standardIcon.png`,
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.bannerBackground, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.bannerBackground.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.bannerBackground.Hint`),
    scope: "world",
    config: true,
    default: `modules/${CONSTANTS.MODULE_ID}/assets/achievementbanner.jpg`,
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.achievementStinger, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.achievementStinger.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.achievementStinger.Hint`),
    scope: "world",
    config: true,
    default: `modules/${CONSTANTS.MODULE_ID}/assets/tracks/standardStinger_by_JFarenheit.mp3`,
    type: String,
    filePicker: "audio",
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.achievementStingerVolume, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.achievementStingerVolume.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.achievementStingerVolume.Hint`),
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
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.achpretext, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.achpretext.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.achpretext.Hint`),
    scope: "world",
    config: true,
    default: "Achievement Gained: ",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.greyscale, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.greyscale.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.greyscale.Hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.mystery, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.mystery.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.mystery.Hint`),
    scope: "world",
    config: true,
    default: `modules/${CONSTANTS.MODULE_ID}/assets/mystery.jpg`,
    type: String,
    filePicker: "image",
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.achievementdata, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.AchievementData.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.AchievementData.Hint`),
    scope: "world",
    config: false,
    default:
      "1:::Mounted////systems/dnd5e/icons/items/inventory/horseshoe.jpg////Acquire a mount.;;;2:::Translator////systems/dnd5e/icons/items/inventory/note-scroll.jpg////Act as the party translator.;;;3:::Argumenter////systems/dnd5e/icons/items/inventory/monster-beak.jpg////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////systems/dnd5e/icons/items/inventory/runestone-dwarven.jpg////Ask a deity for a favor.;;;5:::Hardmode////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////systems/dnd5e/icons/skills/blood_12.jpg////Be ignored by the DM when citing rules.;;;7:::Special////systems/dnd5e/icons/skills/green_27.jpg////Be the only person to roll 20 at a session;;;8:::Actor////systems/dnd5e/icons/skills/emerald_07.jpg////Beat a performance check while in disguise;;;9:::Deiety////systems/dnd5e/icons/skills/yellow_13.jpg////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////https://assets.forge-vtt.com/5fa2d7054f8a4cf1b34c8a38/Icons/spellbook_page1/SpellBook08_13.png////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I've nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted. Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;24:::Lorax////https://c.tenor.com/BzpCcZbxOAIAAAAd/lorax-the-lorax.gif////Speak for the trees;;;",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.clientdataSYNC, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.ClientDataList.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.ClientDataList.Hint`),
    scope: "world",
    config: false,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.clientdata, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.ClientData.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.ClientData.Hint`),
    scope: "client",
    config: false,
    default: "",
    type: String,
  });
  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.loadSettingsForPlayer, {
    name: i18n(`${CONSTANTS.MODULE_ID}.Settings.loadSettingsForPlayer.Text`),
    hint: i18n(`${CONSTANTS.MODULE_ID}.Settings.loadSettingsForPlayer.Hint`),
    scope: "client",
    config: false,
    default: "",
    type: String,
  });
  // ========================================================================

  game.settings.register(CONSTANTS.MODULE_ID, SETTINGS.debug, {
    name: `${CONSTANTS.MODULE_ID}.setting.debug.name`,
    hint: `${CONSTANTS.MODULE_ID}.setting.debug.hint`,
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
  });
};
