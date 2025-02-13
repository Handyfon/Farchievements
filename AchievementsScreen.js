Hooks.once('init', function() {
	const debouncedReload = debounce(() => window.location.reload(), 100);
	game.settings.register('farchievements', 'EnableAchievementPopup', {
        name: game.i18n.localize('Farchievements.Settings.EnableAchievementPopup.Text'),
        hint: game.i18n.localize('Farchievements.Settings.EnableAchievementPopup.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
    // New setting: Disable achievement banner
    game.settings.register('farchievements', 'DisableAchievementBanner', {
        name: game.i18n.localize('Farchievements.Settings.DisableAchievementBanner.Text'),
        hint: game.i18n.localize('Farchievements.Settings.DisableAchievementBanner.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'showAchOnStartup', {
        name: game.i18n.localize('Farchievements.Settings.showAchOnStartup.Text'),
        hint: game.i18n.localize('Farchievements.Settings.showAchOnStartup.Hint'),
        scope: 'client',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'EnableChatBarButton', {
        name: game.i18n.localize('Farchievements.Settings.EnableChatBarButton.Text'),
        hint: game.i18n.localize('Farchievements.Settings.EnableChatBarButton.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
		onChange: debouncedReload,
	});
	game.settings.register('farchievements', 'EnableScoreboard', {
        name: game.i18n.localize('Farchievements.Settings.EnableScoreboard.Text'),
        hint: game.i18n.localize('Farchievements.Settings.EnableScoreboard.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
	});
	if (game.modules.get('confetti')?.active === true)
	game.settings.register('farchievements', 'EnableConfettiSupport', {
        name: game.i18n.localize('Farchievements.Settings.EnableConfettiSupport.Text'),
		hint: game.i18n.localize('Farchievements.Settings.EnableConfettiSupport.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('farchievements', 'EnableContextButton', {
        name: game.i18n.localize('Farchievements.Settings.EnableContextButton.Text'),
        hint: game.i18n.localize('Farchievements.Settings.EnableContextButton.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('farchievements', 'OmniView', {
        name: game.i18n.localize('Farchievements.Settings.OmniView.Text'),
        hint: game.i18n.localize('Farchievements.Settings.OmniView.Hint'),
        scope: 'client',
        config: false,
		default: false,
		type: Boolean,
    });
	game.settings.register('farchievements', 'ListView', {
        name: game.i18n.localize('Farchievements.Settings.ListView.Text'),
        hint: game.i18n.localize('Farchievements.Settings.ListView.Hint'),
        scope: 'world',
        config: true,
		default: false,
		type: Boolean,
    });
	game.settings.register('farchievements', 'chatMessage', {
        name: game.i18n.localize('Farchievements.Settings.ChatMessage.Text'),
        hint: game.i18n.localize('Farchievements.Settings.ChatMessage.Hint'),
        scope: 'world',
        config: true,
		default: true,
		type: Boolean,
    });
	game.settings.register('farchievements', 'loadPerPage', {
        name: game.i18n.localize('Farchievements.Settings.loadPerPage.Text'),
        hint: game.i18n.localize('Farchievements.Settings.loadPerPage.Hint'),
        scope: 'client',
        config: true,
		default: 50,
		type: Number,
		range: {
			min: 25,
			max: 150,
			step: 1
		}
    });
	game.settings.register('farchievements', 'currentPage', {
        name: game.i18n.localize('Farchievements.Settings.currentPage.Text'),
        hint: game.i18n.localize('Farchievements.Settings.currentPage.Hint'),
        scope: 'client',
        config: false,
		default: 1,
		type: Number,
    });
	game.settings.register('farchievements', 'GameSettingsButton', {
        name: game.i18n.localize('Farchievements.Settings.GameSettingsButton.Text'),
        hint: game.i18n.localize('Farchievements.Settings.GameSettingsButton.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
		onChange: debouncedReload,
    });
	game.settings.register('farchievements', 'AchievementWindowTitle', {
        name: game.i18n.localize('Farchievements.Settings.AchievementWindowTitle.Text'),
        hint: game.i18n.localize('Farchievements.Settings.AchievementWindowTitle.Hint'),
        scope: 'world',
        config: true,
        default: 'Your Achievements',
        type: String,
    });
	game.settings.register('farchievements', 'PlayerBackColor', {
        name: game.i18n.localize('Farchievements.Settings.PlayerBackColor.Text'),
        hint: game.i18n.localize('Farchievements.Settings.PlayerBackColor.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('farchievements', 'HideUnknown', {
        name: game.i18n.localize('Farchievements.Settings.HideUnknown.Text'),
        hint: game.i18n.localize('Farchievements.Settings.HideUnknown.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'UnknownName', {
        name: game.i18n.localize('Farchievements.Settings.UnknownName.Text'),
        hint: game.i18n.localize('Farchievements.Settings.UnknownName.Hint'),
        scope: 'world',
        config: true,
        default: 'Unknown Achievement',
        type: String,
    });
	game.settings.register('farchievements', 'AlwaysShowName', {
        name: game.i18n.localize('Farchievements.Settings.AlwaysShowName.Text'),
        hint: game.i18n.localize('Farchievements.Settings.AlwaysShowName.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'UnknownDes', {
        name: game.i18n.localize('Farchievements.Settings.UnknownDes.Text'),
        hint: game.i18n.localize('Farchievements.Settings.UnknownDes.Hint'),
        scope: 'world',
        config: true,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'AlwaysShowDes', {
        name: game.i18n.localize('Farchievements.Settings.AlwaysShowDes.Text'),
        hint: game.i18n.localize('Farchievements.Settings.AlwaysShowDes.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'DescriptionOnHover', {
        name: game.i18n.localize('Farchievements.Settings.DescriptionOnHover.Text'),
        hint: game.i18n.localize('Farchievements.Settings.DescriptionOnHover.Hint'),
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('farchievements', 'achamount', {
        name: game.i18n.localize('Farchievements.Settings.achamount.Text'),
        hint: game.i18n.localize('Farchievements.Settings.achamount.Hint'),
        scope: 'world',
        config: false,
        default: "3",
        type: String,
    });
	game.settings.register('farchievements', 'standarticon', {
        name: game.i18n.localize('Farchievements.Settings.standarticon.Text'),
        hint: game.i18n.localize('Farchievements.Settings.standarticon.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/standardIcon.PNG",
		type: String,
		filePicker: 'image',
    });	
	game.settings.register('farchievements', 'standardBackground', {
        name: game.i18n.localize('Farchievements.Settings.standardBackground.Text'),
        hint: game.i18n.localize('Farchievements.Settings.standardBackground.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/farchievementslogo.png",
		type: String,
		filePicker: 'image',
    });
	game.settings.register('farchievements', 'bannerBackground', {
        name: game.i18n.localize('Farchievements.Settings.bannerBackground.Text'),
        hint: game.i18n.localize('Farchievements.Settings.bannerBackground.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/achievementbanner.jpg",
		type: String,
		filePicker: 'image',
    });
	game.settings.register('farchievements', 'bannerAnimation', {
        name: game.i18n.localize('Farchievements.Settings.bannerAnimation.Text'),
        hint: game.i18n.localize('Farchievements.Settings.bannerAnimation.Hint'),
        scope: 'world',
        config: true,
        default: "slidein",
        type: String,
		choices: {
			"slidein": "sliding banner (SFX: stinger)",
			"fadeOut": "fade out (SFX: sound)",
		},
    });
	game.settings.register('farchievements', 'achievementStinger', {
        name: game.i18n.localize('Farchievements.Settings.achievementStinger.Text'),
		hint: game.i18n.localize('Farchievements.Settings.achievementStinger.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/standardStinger_by_JFarenheit.mp3",
		type: String,
		filePicker: 'audio',
	});
	game.settings.register('farchievements', 'achievementSound', {
        name: game.i18n.localize('Farchievements.Settings.achievementSound.Text'),
		hint: game.i18n.localize('Farchievements.Settings.achievementSound.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/mixkit-tile-game-reveal-960.mp3",
		type: String,
		filePicker: 'audio',
	});
	game.settings.register('farchievements', 'achievementStingerVolume', {
        name: game.i18n.localize('Farchievements.Settings.achievementStingerVolume.Text'),
        hint: game.i18n.localize('Farchievements.Settings.achievementStingerVolume.Hint'),
        scope: 'world',
        config: true,
        default: 0.1,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: 0.01
		}
    });
	game.settings.register('farchievements', 'achievementSoundVolume', {
        name: game.i18n.localize('Farchievements.Settings.achievementSoundVolume.Text'),
        hint: game.i18n.localize('Farchievements.Settings.achievementSoundVolume.Hint'),
        scope: 'world',
        config: true,
        default: 0.1,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: 0.01
		}
    });
	game.settings.register('farchievements', 'achpretext', {
        name: game.i18n.localize('Farchievements.Settings.achpretext.Text'),
        hint: game.i18n.localize('Farchievements.Settings.achpretext.Hint'),
        scope: 'world',
        config: true,
        default: "Achievement Gained: ",
        type: String,
    });
	game.settings.register('farchievements', 'greyscale', {
        name: game.i18n.localize('Farchievements.Settings.greyscale.Text'),
        hint: game.i18n.localize('Farchievements.Settings.greyscale.Hint'),
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
    });
	game.settings.register('farchievements', 'mystery', {
        name: game.i18n.localize('Farchievements.Settings.mystery.Text'),
        hint: game.i18n.localize('Farchievements.Settings.mystery.Hint'),
        scope: 'world',
        config: true,
        default: "modules/farchievements/mystery.jpg",
		type: String,
		filePicker: 'image',
    });
	game.settings.register('farchievements', 'achievementdata', {
        name: game.i18n.localize('Farchievements.Settings.AchievementData.Text'),
        hint: game.i18n.localize('Farchievements.Settings.AchievementData.Hint'),
        scope: 'world',
		config: false,
		default: "1:::Mounted////icons/sundries/misc/horseshoe-iron.webp////Acquire a mount.;;;2:::Translator////icons/sundries/scrolls/scroll-bound-blue-white.webp////Act as the party translator.;;;3:::Argumenter////icons/commodities/bones/beak-orange-green.webp////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////icons/sundries/lights/candle-pillar-lit-yellow.webp////Ask a deity for a favor.;;;5:::Hardmode////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be ignored by the DM when citing rules.;;;7:::Special////icons/magic/unholy/silhouette-light-fire-blue.webp////Be the only person to roll 20 at a session;;;8:::Actor////icons/environment/people/spearfighter.webp////Beat a performance check while in disguise;;;9:::Deiety////icons/magic/holy/barrier-shield-winged-blue.webp////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////icons/skills/wounds/bone-broken-marrow-red.webp////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I have nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted. Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;24:::Lorax////https://c.tenor.com/BzpCcZbxOAIAAAAd/lorax-the-lorax.gif////Speak for the trees;;;",
        type: String,
    });
	game.settings.register('farchievements', 'achievementdataNEW', {
        name: game.i18n.localize('Farchievements.Settings.achievementdataNEW.Text'),
        hint: game.i18n.localize('Farchievements.Settings.achievementdataNEW.Hint'),
        scope: 'world',
		config: true,
		default: '',
        type: String,
    });
	game.settings.register('farchievements', 'clientdataSYNC', {
        name: game.i18n.localize('Farchievements.Settings.ClientDataList.Text'),
        hint: game.i18n.localize('Farchievements.Settings.ClientDataList.Hint'),
        scope: 'world',
		config: false,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'clientdata', {
        name: game.i18n.localize('Farchievements.Settings.ClientData.Text'),
        hint: game.i18n.localize('Farchievements.Settings.ClientData.Hint'),
        scope: 'client',
        config: false,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'loadSettingsForPlayer', {
        name: game.i18n.localize('Farchievements.Settings.loadSettingsForPlayer.Text'),
        hint: game.i18n.localize('Farchievements.Settings.loadSettingsForPlayer.Hint'),
        scope: 'client',
        config: false,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'lastSearchTerm', {
		name: 'Farchievements.Settings.lastSearchTerm.Text',
		hint: 'this will hold the last searched term for the search functionality, this will reset when the screen is opened',
		scope: 'client',
		config: false,
		default: "",
		type: String,
	});
	
	game.settings.register('farchievements', 'lastSortType', {
		name: 'Farchievements.Settings.lastSortType.Text',
		hint: 'this will hold the sort type for the sort functionality',
		scope: 'client',
		config: false,
		default: "nameAsc",
		type: String,
	});	

	console.log("Initialised Farchievements");
});
class Achievements {
    static addChatControl() {
		if(!game.settings.get('farchievements', 'EnableChatBarButton'))
			return;
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
class AchievementsScreen extends Application {
	activateListeners(html) {
        super.activateListeners(html);
		html.find('.SyncAch').click(event => {
		   //update the actor
		   ui.notifications.notify("SYNC");
		});
	}
    openDialog() {
        //LOAD TEMPLATE DATA
        let $dialog = $('.achievementsscreen-window');
        if ($dialog.length > 0) {
            $dialog.remove();
            //return;
        }
        const templateData = {
            data: []
        };
        templateData.data = super.getData();
        templateData.title = "Farchievements";
		
        const templatePath = "modules/farchievements/AchievementsScreen.html";
		if(document.getElementsByClassName("achievementsscreen-window").length > 0){}
        AchievementsScreen.renderMenu(templatePath, templateData);

    }
    static renderMenu(path, data) {
        const dialogOptions = {
            width: 1050,
			heith: 630,
            top: 200,
            left: window.innerWidth/2 - 510,
            classes: ['achievementsscreen-window resizable']
        };
		dialogOptions.resizable = true;
        renderTemplate(path, data).then(dlg => {
            new Dialog({
                title: game.settings.get('farchievements', 'AchievementWindowTitle'),
                content: dlg,
                buttons: {}
            }, dialogOptions).render(true);
        });
    }
}
class AchievementSync{
	static sleep(ms){
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	static async PlayAnimation(achievementsGainedList) {
		await game.settings.set('farchievements', 'clientdata', game.settings.get('farchievements', 'clientdata') + achievementsGainedList);
		
		let AchievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
		let achievementsToGain = achievementsGainedList.split("||||%%%||||");
	
		let showPopup = game.settings.get('farchievements', 'EnableAchievementPopup');
		let disableBanner = game.settings.get('farchievements', 'DisableAchievementBanner');
		
		for (let i = 0; i < achievementsToGain.length; i++) {
			await AchievementSync.sleep(100);
	
			let AchievementToGain = AchievementList.find(ach => ach.name == achievementsToGain[i]);
			if (AchievementToGain == null) return;
	
			displayMyNewAchievementInChat(AchievementToGain.name);
	
			// Show Popup if enabled
			if (showPopup) {
				Farchievements.DisplayAchievementPopup(AchievementToGain.name);
			}
	
			// Skip banner if disabled
			if (disableBanner) continue;
	
			// Banner animation logic
			let name = AchievementToGain.name;
			let icon = AchievementToGain.image || game.settings.get('farchievements', 'standarticon');
			let anim = game.settings.get('farchievements', 'bannerAnimation');
			let dur = (anim == "fadeOut") ? 5 : 13;
	
			document.getElementsByClassName("AchievementText")[0].innerHTML = `<label class="AchievementTextLabel">${game.settings.get("farchievements", "achpretext")}</label>` + name;
			document.getElementById("AchievementIMG").src = icon;
	
			if (AchievementToGain.glowing)
				document.getElementById("FoundryAchievements").classList.add('glowingAch');
			else
				document.getElementById("FoundryAchievements").classList.remove('glowingAch');
	
			document.getElementById("Achievementbar").style.setProperty("animation-name", anim);
			document.getElementById("Achievementbar").style.setProperty("animation-duration", `${dur}s`);
			
			let sound = (anim == "fadeOut") ? 'achievementSound' : 'achievementStinger';
			let volume = (anim == "fadeOut") ? 'achievementSoundVolume' : 'achievementStingerVolume';
			await AudioHelper.play({ src: game.settings.get('farchievements', sound), volume: game.settings.get('farchievements', volume), autoplay: true, loop: false }, false);
	
			if (anim == "slidein") await AchievementSync.sleep(1800);
			document.getElementById("Achievementbar").style.setProperty("display", "flex");
	
			if (game.modules.get('confetti')?.active === true && game.settings.get('farchievements', 'EnableConfettiSupport')) {
				for (let c = 0; c < 3; c++) {
					await AchievementSync.sleep(500);
					const strength = window.confetti.confettiStrength.high;
					const shootConfettiProps = window.confetti.getShootConfettiProps(strength);
					window.confetti.handleShootConfetti(shootConfettiProps);
				}
			} else {
				await AchievementSync.sleep(dur * 1000);
			}
			document.getElementById("Achievementbar").style.setProperty("display", "none");
		}
	}
	static SyncAchievements(skip = null, start = false){
		//console.log("SYNC Achievements");//DEBUG
		if(game.user.isGM){
			if(!game.ready) return; //IF GAME IS READY, ELSE CHANGES WOULDN'T BE SAVED
			//CHECK FOR NEW USERS
			if(document.getElementById('SyncAchUnsaved') != null){
				document.getElementById('SyncAchUnsaved').id = "SyncAch";
			}
			return;
		}
		else{//IF USER IS PLAYER
			//FOR EACH ACHIEVEMENT IF NOT IN CLIENTDATA PLAY ANIMATION AND ADD IT
			let AchievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
			let existingAchievements = game.settings.get('farchievements', 'clientdata');
			let AchievementsToPlay = "";
			
			AchievementList.forEach(function (achievement, index) {
				if (achievement.players && achievement.players.includes(game.userId)) {
					if (existingAchievements.includes(achievement.name)) return;
					AchievementsToPlay += achievement.name + "||||%%%||||";
				}
			});
			//console.log(AchievementsToPlay);
			if(AchievementsToPlay != ""){
				let amount = AchievementsToPlay.split("||||%%%||||").length -1;
				if(skip == true){
					game.settings.set('farchievements', 'clientdata', game.settings.get('farchievements', 'clientdata') + AchievementsToPlay);
					return;
				}
				if(start && amount > 0){
					let d = new Dialog({
						title: `${game.i18n.localize('Farchievements.Html.SanitySaver.Title')}`,
						content: `${game.i18n.localize('Farchievements.Html.SanitySaver.Body1')} ` + amount + `${game.i18n.localize('Farchievements.Html.SanitySaver.Body2')}`,
						buttons: {
							one: {
								icon: '<i class="fas fa-check"></i>',
								label: `${game.i18n.localize('Farchievements.Html.SanitySaver.ButtonSeeAll')}`,
								callback: () => AchievementSync.PlayAnimation(AchievementsToPlay)
							},
							two: {
								icon: '<i class="fas fa-times"></i>',
								label: `${game.i18n.localize('Farchievements.Html.SanitySaver.ButtonSkip')}`,
								callback: () => {
									game.settings.set('farchievements', 'clientdata', game.settings.get('farchievements', 'clientdata') + AchievementsToPlay);
								}
							}
						}
					});
					d.render(true);
				}
				else{
					AchievementSync.PlayAnimation(AchievementsToPlay);
				}
			}
			//PLAY LIST AS ANIMATION 
			//console.log(AchievementList);//DEBUG
				if(document.getElementById("AchievementScript")!= null)//IF USER IS ON THE ACHIEVEMENTSSCREEN, RELOAD IT
					document.getElementById("AchievementScript").onclick();
		}
	}
}
Hooks.on('renderSceneNavigation', async function() {
        Achievements.addChatControl();
        //console.log("AchievementsScreen GM true");
		let style = await game.settings.get("farchievements", "bannerBackground");
		let banner = "";
		
		if(style != "")
			banner = "background: url("+style+")!important;";
		
		let bannerstyle = 'top: -200px; '+banner+' background-position: center!important; display: flex;  background-size: 100% 100% !important;';
		var el = `<div id="Achievementbar" style="display: none;" class="Achievementbar"><div id="FoundryAchievements" class="FoundryAchievementsBanner" style="`+bannerstyle+`"><img id="AchievementIMG" class="AchievementIMG" src="modules/farchievements/standardIcon.PNG"></img><p class="AchievementText"><label class="AchievementTextLabel">${game.i18n.localize('Farchievements.NewAchievement')}</label> (${game.i18n.localize('Farchievements.Achievement')}) </p><i class="Shiny"></i></div></div>`;
		document.getElementById("notifications").innerHTML = el;
});

Hooks.on('createChatMessage', (chatMessage) => {
    if (!game.user.isGM) return;

    // Check if the chat message contains roll data
    if (chatMessage.rolls && chatMessage.rolls.length > 0) {
        console.log("Farchievements | Checking rolls in chat message...");

        let rollData = chatMessage.rolls[0];
        let rolledValue = rollData.total;
        let userId = chatMessage.user.id;

        console.log(`Farchievements | Roll detected in chat message for user: ${userId}, roll total: ${rolledValue}`);

        let achievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
        console.log(`Farchievements | Loaded achievement list:`, achievementList);

        // Filter for achievements that have a progressType of 'dice' or 'diceChain'
        let diceAchievements = achievementList.filter(ach => ach.progressType === 'dice' || ach.progressType === 'diceChain');
        console.log(`Farchievements | Filtered dice achievements:`, diceAchievements);

        let hasAchievementUpdated = false;

        diceAchievements.forEach(achievementData => {
            console.log(`Farchievements | Processing achievement: ${achievementData.name}`);
            
            let achievement = new Achievement(
                achievementData.name,
                achievementData.description,
                achievementData.image,
                achievementData.players,
                achievementData.seenBy,
                achievementData.playerDates,
                achievementData.progressRequired,
                achievementData.progressType,
                achievementData.playerProgress,
                achievementData.chainLength,
                achievementData.diceType
            );

            // Check if the dice type matches the achievement's diceType requirement
            if (rollData.formula.includes(achievement.diceType)) {
                // Check if the achievement already applies to the player who rolled
                if (achievement.players.includes(userId)) {
                    console.log(`Farchievements | Player ${userId} already has achievement: ${achievement.name}`);
                    return; // Skip if the player already has the achievement
                }

                console.log(`Farchievements | Rolled value: ${rolledValue}`);

                if (achievement.progressType === 'dice') {
                    console.log(`Farchievements | Handling [dice] achievement for: ${achievement.name}`);
                    
                    let condition = achievement.progressRequired;
                    if (typeof condition === 'string') {
                        let targetValue;
                        console.log(`Farchievements | Condition is a string: ${condition}`);

                        if (condition.startsWith('<')) {
                            targetValue = parseInt(condition.substring(1).trim());
                            console.log(`Farchievements | Target value is less than ${targetValue}`);
                            if (rolledValue < targetValue) {
                                achievement.addPlayer(userId);
                                hasAchievementUpdated = true;
                                console.log(`Farchievements | Achievement unlocked for player: ${userId} (rolled < ${targetValue})`);
                            }
                        } else if (condition.startsWith('>')) {
                            targetValue = parseInt(condition.substring(1).trim());
                            console.log(`Farchievements | Target value is greater than ${targetValue}`);
                            if (rolledValue > targetValue) {
                                achievement.addPlayer(userId);
                                hasAchievementUpdated = true;
                                console.log(`Farchievements | Achievement unlocked for player: ${userId} (rolled > ${targetValue})`);
                            }
                        } else {
                            targetValue = parseInt(condition);
                            console.log(`Farchievements | Target value is equal to ${targetValue}`);
                            if (rolledValue === targetValue) {
                                achievement.addPlayer(userId);
                                hasAchievementUpdated = true;
                                console.log(`Farchievements | Achievement unlocked for player: ${userId} (rolled == ${targetValue})`);
                            }
                        }
                    }
                } else if (achievement.progressType === 'diceChain') {
                    console.log(`Farchievements | Handling [diceChain] achievement for: ${achievement.name}`);
                    
                    let condition = achievement.progressRequired;
                    if (typeof condition === 'string') {
                        let targetValue;
                        console.log(`Farchievements | Condition is a string: ${condition}`);

                        if (condition.startsWith('<')) {
                            targetValue = parseInt(condition.substring(1).trim());
                            console.log(`Farchievements | Target value is less than ${targetValue}`);
                            if (rolledValue < targetValue) {
                                achievement.addProgress(userId, true, true); // Increment chain
                                console.log(`Farchievements | Successful roll for chain (rolled < ${targetValue})`);
                            } else {
                                // Reset the chain on failure
                                achievement.addProgress(userId, false, true);
                                console.log(`Farchievements | Chain reset for player ${userId}`);
                            }
                        } else if (condition.startsWith('>')) {
                            targetValue = parseInt(condition.substring(1).trim());
                            console.log(`Farchievements | Target value is greater than ${targetValue}`);
                            if (rolledValue > targetValue) {
                                achievement.addProgress(userId, true, true); // Increment chain
                                console.log(`Farchievements | Successful roll for chain (rolled > ${targetValue})`);
                            } else {
                                // Reset the chain on failure
                                achievement.addProgress(userId, false, true);
                                console.log(`Farchievements | Chain reset for player ${userId}`);
                            }
                        } else {
                            targetValue = parseInt(condition);
                            console.log(`Farchievements | Target value is equal to ${targetValue}`);
                            if (rolledValue === targetValue) {
                                achievement.addProgress(userId, true, true); // Increment chain
                                console.log(`Farchievements | Successful roll for chain (rolled == ${targetValue})`);
                            } else {
                                // Reset the chain on failure
                                achievement.addProgress(userId, false, true);
                                console.log(`Farchievements | Chain reset for player ${userId}`);
                            }
                        }
                    }

                    if (achievement.getProgress(userId) >= achievement.chainLength) {
                        // Chain complete, award achievement
                        console.log(`Farchievements | Chain complete, awarding achievement to player ${userId}`);
                        achievement.addPlayer(userId);
                        hasAchievementUpdated = true;
                    }
                }

                // Update the achievement list in game settings
                let updatedAchievementList = achievementList.map(a => (a.name === achievement.name ? achievement : a));
                game.settings.set('farchievements', 'achievementdataNEW', JSON.stringify(updatedAchievementList));
            }
        });

        // Only send the update message if any achievement was updated
        if (hasAchievementUpdated) {
            SendSyncMessage();
        }
    }
});

Hooks.on('ready', async function() {
	//START MIGRATION
	if(game.user.isGM && game.settings.get('farchievements', 'achievementdataNEW') == ""){
		Farchievements.MigrateAchievements();
	}
	//sync achievements
	if(!game.user.isGM)
		AchievementSync.SyncAchievements(game.settings.get('farchievements', 'showAchOnStartup'), true);
});
Hooks.on('renderSettings', function() {
	//ADD BUTTON TO SETTINGS
	function refreshData(){
		let x = 0.1;  // 0.1 seconds
		
		if(document.getElementById("FarchievementsSettings") == null && game.settings.get('farchievements', 'GameSettingsButton')){
			$('#settings-game').append(`<div id="FarchievementsSettings" style="margin:0;"><h4>Farchievements</h4><button id="SettingsAchievementsButton" data-action="Achievements"><i class="fas fa-medal achievements-button"></i>${game.i18n.localize('Farchievements.Achievements')}</button></div>`);
			let AchievementsButton = document.getElementById("SettingsAchievementsButton");
			if(AchievementsButton != null)
			AchievementsButton.onclick = Achievements.initializeAchievements;
		}
		// Do your thing here
		//ui.notifications.notify("Test");
		if(document.getElementsByClassName("context-items")[0] != null){
			if(document.getElementById("contextAchievement") == null){
				if(document.getElementsByClassName("context-items")[0].closest('.player') != null){
					let id = document.getElementsByClassName("context-items")[0].closest('.player').getAttribute("data-user-id");
					if(id != game.user.id && game.user.isGM){//You can't open your own achievements
						$(".context-items").append(`<li class="context-item" id="contextAchievement"><i class="fas fa-medal"></i> ${game.i18n.localize('Farchievements.ViewAchievements')}</li>`);
						let AchievmentContextButton = document.getElementById("contextAchievement");
						game.settings.set('farchievements', 'loadSettingsForPlayer', id);
						AchievmentContextButton.onclick = Achievements.initializeAchievements;
					}
				}
			}
		}
	
		setTimeout(refreshData, x*1000);
	}
	if(game.user.isGM){
		function WaitForReady(){
			let x = 0.1;  // 0.1 seconds
			// Do your thing here
			if(game.ready == true){
				AchievementSync.SyncAchievements();
			}
			else
			setTimeout(WaitForReady, x*1000);
		}
		WaitForReady();
	}
	
	refreshData();
});
Hooks.on("createChatMessage", async function (message){
	if(message.content.includes('Achievements Synced'))
	AchievementSync.SyncAchievements();

if(message.content.includes("Farchievements-SyncRequest")){
	if(!game.user.isGM)return;
	let NAME = message.content.split("|")[1];
	let ACHIEVMENTNAME = message.content.split("|")[2];
	//==========================================
	let achData = game.settings.get('farchievements', 'achievementdata').split(';;;');
	let dataArray = game.settings.get('farchievements', 'clientdataSYNC').split("||");
	let Player, achievementID, dataArrayPlayer, toSYNC, PID;
	if(NAME != "")
	Player = game.users.getName(NAME);
	else{
	Player = game.user;
	}
	if(Player == null){
		ui.notifications.error(game.i18n.localize('Farchievements.Notification.Prefix') + game.i18n.localize('Farchievements.Notification.UserDoesNotExist'));
		return;
	}
	PID = dataArray.indexOf(dataArray.filter(entry => entry.includes(Player.id))[0]);
	achievementID = achData.filter(entry => entry.split("////")[0].includes(ACHIEVMENTNAME))[0][0];
	if(dataArray[PID] == "" || dataArray[PID] == null){ // IF NO DATA YET
				dataArrayPlayer = game.users._source[PID].id + ":" + achievementID + ",";
				dataArray[PID] = dataArrayPlayer;
				toSYNC = dataArray.join("||");
				console.log(toSYNC);
				//await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);

				console.log("Setting Achievement: " + achievementname + "(ID:"+ achievementID + ")" + " for user: " + playerName);
				return;
	}
	else{
		dataArrayPlayer = dataArray[PID].split(":")[0] + ":" + dataArray[PID].split(":")[1] + achievementID + ",";
		dataArray[PID] = dataArrayPlayer;
		toSYNC = dataArray.join("||");
		console.log(toSYNC);
	}
	await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);

	ChatMessage.create({
		user : game.user.id,
		content: 'Achievements Synced',
		blind: false,
		whisper : game.users.entities.filter(u => u.isGM).map(u => u.id)
	});
	ui.notifications.notify('Achievements Synced');
	AchievementSync.SyncAchievements();
}});
window.farchievements_DEBUG_Reset_EVERYTHING = async function resetSettings(){
	if(!game.user.isGM) return;
	await game.settings.set('farchievements', 'achievementdata', "1:::Mounted////systems/dnd5e/icons/items/inventory/horseshoe.jpg////Acquire a mount.;;;2:::Translator////systems/dnd5e/icons/items/inventory/note-scroll.jpg////Act as the party translator.;;;3:::Argumenter////systems/dnd5e/icons/items/inventory/monster-beak.jpg////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////systems/dnd5e/icons/items/inventory/runestone-dwarven.jpg////Ask a deity for a favor.;;;5:::Hardmode////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////systems/dnd5e/icons/skills/blood_12.jpg////Be ignored by the DM when citing rules.;;;7:::Special////systems/dnd5e/icons/skills/green_27.jpg////Be the only person to roll 20 at a session;;;8:::Actor////systems/dnd5e/icons/skills/emerald_07.jpg////Beat a performance check while in disguise;;;9:::Deiety////systems/dnd5e/icons/skills/yellow_13.jpg////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////https://assets.forge-vtt.com/5fa2d7054f8a4cf1b34c8a38/Icons/spellbook_page1/SpellBook08_13.png////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I've nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted. Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;24:::Lorax////https://c.tenor.com/BzpCcZbxOAIAAAAd/lorax-the-lorax.gif////Speak for the trees;;;");
	await game.settings.set('farchievements', 'achievementdataNEW',"");
	await game.settings.set('farchievements', 'clientdataSYNC',"");
	await game.settings.set('farchievements', 'clientdata', "");
}
window.farchievements_DEBUG_Reset_PlayerAchievements = async function resetPlayers(){
	if(!game.user.isGM) return;
	await game.settings.set('farchievements', 'clientdataSYNC',"");
	await game.settings.set('farchievements', 'clientdata', "");
	location.reload();
}
//PUBLICLY ACCESSIBLE FUNCTIONS		
window.Farchievements = class Farchievement{
	static Open (){
		$("#SettingsAchievementsButton").click()
	}
	static Render (){
		$("#SettingsAchievementsButton").click()
	}
	static async AddAchievement(AchievementName, PlayerName){
		if(!game.user.isGM) return;
		console.log(AchievementName);
		let data = game.settings.get('farchievements', 'achievementdata').split(';;;');
		let AchievementID, PlayerID;
		for(let i = 0; i < game.settings.get('farchievements', 'achievementdata').split(';;;').length; i++){
			if(AchievementName == game.settings.get('farchievements', 'achievementdata').split(';;;')[i].split('////')[0].split(":::")[1]){
				AchievementID = game.settings.get('farchievements', 'achievementdata').split(';;;')[i].split('////')[0].split(":::")[0] - 1;
			}
		}
		PlayerID = game.users.getName(PlayerName).id;

		if(PlayerID == null){
			ui.notifications.warn("Farchievements | Is the player name right?")
			return;
		}
		if(AchievementID == null){
			ui.notifications.warn("Farchievements | Is the achievement name right?")
			return;
		}
		addAchievementFromCommand(AchievementID, PlayerID);
	}
	static async RemoveAchievement(AchievementName, PlayerName) {
		if (!game.user.isGM) return;
	
		let achievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW')); // Get the achievement list
		let AchievementToRemove = achievementList.find(ach => ach.name === AchievementName); // Find the specific achievement
		let PlayerID = game.users.getName(PlayerName).id; // Get the player ID
	
		if (PlayerID == null) {
			ui.notifications.warn("Farchievements | Is the player name correct?");
			return;
		}
	
		if (AchievementToRemove == null) {
			ui.notifications.warn("Farchievements | Is the achievement name correct?");
			return;
		}
	
		// Call the removePlayer method to remove the player from the achievement
		AchievementToRemove.removePlayer(PlayerID);
	
		// Save the updated achievement list back to the settings
		game.settings.set('farchievements', 'achievementdataNEW', JSON.stringify(achievementList));
	
		ui.notifications.notify(`Achievement "${AchievementName}" removed from player "${PlayerName}".`);
	}	
	static async MigrateAchievements(){
		await ui.notifications.notify("Farchievements | Beginning migration of old data...");
		//console.log(game.settings.get('farchievements', 'achievementdataNEW'));
		await game.settings.set('farchievements', 'currentPage', 1);
		let oldData = game.settings.get('farchievements', 'achievementdata');
		let oldDataArr = oldData.split(";;;");
		let oldClientData = game.settings.get('farchievements', 'clientdataSYNC');
		let oldClientDataArr = oldClientData.split("||");
		let newData = "";
		let AchievementList = [];
		//console.log(oldDataArr.length);
		for(let i = 0; i < oldDataArr.length -1; i++){//FOR EVERY OLD ACHIEVEMENT
			//console.log(oldDataArr[i]);
			//constructor: name, description, image, players
			let playerslist = [];
			if(oldClientData != ""){
				for(let j = 0; j < oldClientDataArr.length -1; j++){//FOR EVERY CLIENT
					if(oldClientDataArr[j] == "")continue;
					if(oldClientDataArr[j].split(":")[1] == "")continue;
					
					let clientAchArray = oldClientDataArr[j].split(":")[1].split(",");
					for(let k = 0; k < clientAchArray.length-1; k++){//FOR EVERY ENTRY IN THE CLIENT ACHIEVEMENTS LIST
						if(clientAchArray[k] == i){
							playerslist.push(oldClientDataArr[j].split(":")[0]);
						}
					}
				}
			}
			
			let newAch = new Achievement(oldDataArr[i].split(":::")[1].split("////")[0], oldDataArr[i].split("////")[2], oldDataArr[i].split("////")[1], playerslist);
			if(AchievementList.find(ach => ach.name == newAch.name)){
				var number = AchievementList.filter(ach => ach.name.includes(newAch.name)).length
				newAch.name += "("+number+")"
			}
			//console.log(newAch);
			AchievementList.push(newAch);
		}
		//console.log(game.settings.get('farchievements', 'achievementdataNEW'));
		let data = JSON.stringify(AchievementList);
		//console.log(data);
		//let TestData = JSON.parse(data);
		game.settings.set('farchievements', 'achievementdataNEW', data);
		await ui.notifications.notify("Farchievements | Migration Finished");

	}
	static async debugAchievements(){
		return JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
	}
}
window.Farchievements.DisplayAchievementPopup = function (achievementName, playerId = "") {
    let achievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
    let achievement = achievementList.find(ach => ach.name === achievementName);
    
    if (!achievement) {
        ui.notifications.warn(`Farchievements | Achievement '${achievementName}' not found.`);
        return;
    }

    // If a playerId is provided, check if they are in the achievement's players list
    let player = playerId ? game.users.get(playerId) : game.user;
    if (!player) {
        ui.notifications.warn(`Farchievements | Player with ID '${playerId}' not found.`);
        return;
    }

    // Ensure the player is actually in the achievement's players list
    if (!achievement.players && !game.user.isGM && !achievement.players.includes(player.id) ) {
        ui.notifications.warn(`Farchievements | Player '${player.name}' does not have this achievement.`);
        return;
    }

    let receivedDate = achievement.playerDates?.[player.id] ? new Date(achievement.playerDates[player.id]) : null;
    let formattedDate = receivedDate
        ? receivedDate.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
        : null;

    let popupContent = `
        <div class="farchievements-popup" style="
            position: relative; 
            text-align: center; 
            padding: 20px; 
            border-radius: 10px;
            background: url('${achievement.image}') center/cover no-repeat;
            border: 3px solid ${achievement.color};
        ">
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(0 0 0 / 84%);
                backdrop-filter: blur(15px);
                border-radius: 10px;
            "></div>
            <img class="farchievements-popup-img" src="${achievement.image}" alt="${achievement.name}" style="
                width: 100px; 
                height: 100px; 
                display: block; 
                margin: auto; 
                border-radius: 10px; 
                border: 1px solid ${achievement.color};
                position: relative;
            ">
            <h2 class="farchievements-popup-title" style="
                margin-top: 10px; 
                color: ${achievement.color};
                position: relative;
            ">${achievement.name}</h2>
            <p class="farchievements-popup-description" style="
                margin-top: 5px; 
                color: white;
                position: relative;
            ">${achievement.description}</p>
            ${formattedDate ? `
            <p class="farchievements-popup-date" style="
                margin-top: 10px; 
                color: white;
                font-size: 0.9em;
                position: relative;
            "><b>Received:</b> ${formattedDate}</p>` : ""}
        </div>
    `;

    new Dialog({
        title: "Achievement Unlocked!",
        content: popupContent,
        buttons: {
            close: {
                label: "Close",
                callback: () => {}
            }
        }
    }).render(true);
};


async function addAchievementFromCommand(achievementID, PID) {
			let cleanPlayerID = game.users.contents.indexOf(game.users.get(PID)) - 1;
			let dataPlayerID = cleanPlayerID; //++xathick
			let player = game.users.get(PID);
			let playerName = player.name;
			let clientdataSYNC = game.settings.get('farchievements', 'clientdataSYNC'); //GET DATA
			let dataArray = clientdataSYNC.split("||"); //DATA TO ARRAY
			let dataArrayPlayer; //DATA TO ARRAY
			let toSYNC;
			let index = 0;
			for (index; index < dataArray.length; index++) {
				if (dataArray[index].split(":")[0] == PID) {
					dataPlayerID = index;
				}
				game.settings.get('farchievements', 'clientdataSYNC').split("||");
			}
			if (dataArray[dataPlayerID] == "" || dataArray[dataPlayerID] == 'NULL') { // IF NO DATA YET ADD ACHIEVEMENT
				dataArrayPlayer = game.users.contents[dataPlayerID]._id + ":" + achievementID + ",";
				dataArray[dataPlayerID] = dataArrayPlayer; //++xathick
				toSYNC = dataArray.join("||");
				await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);
				if (document.getElementById('AchPlayerNav').className == "AchPlayerNav") //CHECK FOR EDITING WITHIN NORMAL WINDOW
				{
					await game.settings.set('farchievements', 'loadSettingsForPlayer', PID);
					$('#achsyncnormalmode').append('<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>');
					loadAchievements();
				}
				else
					loadAchievementsEditMode();
				return;
			}

			if (dataArray[dataPlayerID].split(":")[1].includes(',' + "" + achievementID + ',')) { //DETECT EXISTING ACHIEVEMENT, SKIP REST
				ui.notifications.notify("Farchievements | This player already has the achievement");
				return;
			}
			else if (dataArray[dataPlayerID].split(":")[1].split(",")[0] == "" + achievementID) { //FIRST ACHIEVEMENT IN DATA? => CHECK AGAIN SPECIAL FORMATTING
				ui.notifications.notify("Farchievements | This player already has the achievement");
				return;
			}
			else if (dataArray[dataPlayerID].split(":")[1].split(",")[dataArray[dataPlayerID].split(":")[1].split(",")[0].length + 1] == "" + achievementID) { //LAST ACHIEVEMENT IN DATA? => SPECIAL FORMATTING
				let toReplace = achievementID + ",";//REPLACE FIRST ENTRY IN DATA
				var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
				firstDataArray.pop();
				dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
				toSYNC = dataArray.join("||");
			}
			else {//IF IT DOESN'T EXIST ON THIS PLAYER YET, ADD THE ACHIEVEMENT
				dataArrayPlayer = dataArray[dataPlayerID].split(":")[0] + ":" + dataArray[dataPlayerID].split(":")[1] + achievementID + ",";
				dataArray[dataPlayerID] = dataArrayPlayer;
				toSYNC = dataArray.join("||");
			}
			if (document.getElementById('SyncAchUnsaved') != null) {
				if (document.getElementById('SyncAchUnsaved').value == toSYNC) {
					document.getElementById('SyncAchUnsaved').id = "SyncAch";
					document.getElementById('SyncAch').value = "";
				}
			}
			if (document.getElementById('SyncAch') != null) {
				document.getElementById('SyncAch').value = toSYNC;
				document.getElementById('SyncAch').id = "SyncAchUnsaved";
			}

			await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);
			SendSyncMessage();
			//RELOAD ANY OPEN WINDOW
			if(document.getElementById('AchPlayerNav') == null) return;
			if (document.getElementById('AchPlayerNav').className == "AchPlayerNav") //CHECK FOR EDITING WITHIN NORMAL WINDOW
			{
				await game.settings.set('farchievements', 'loadSettingsForPlayer', PID);
				$('#achsyncnormalmode').append('<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>');
				window.loadAchievements();
			}
			else
				window.loadAchievementsEditMode();
}
async function removeAchievementFromCommand(achievementID, PID) {
			let cleanPlayerID = game.users.contents.indexOf(game.users.get(PID)) - 1;
			let dataPlayerID = cleanPlayerID; //++xathick
			let player = game.users.get(PID);
			let playerName = player.name;
			let clientdataSYNC = game.settings.get('farchievements', 'clientdataSYNC'); //GET DATA
			let dataArray = clientdataSYNC.split("||"); //DATA TO ARRAY
			let dataArrayPlayer; //DATA TO ARRAY
			let toSYNC;
			let index = 0;
			for (index; index < dataArray.length; index++) {
				if (dataArray[index].split(":")[0] == PID) {
					dataPlayerID = index;
				}
				game.settings.get('farchievements', 'clientdataSYNC').split("||");
			}
			if (dataArray[dataPlayerID] == "" || dataArray[dataPlayerID] == 'NULL') { // IF NO DATA YET ADD ACHIEVEMENT
				dataArrayPlayer = game.users.contents[dataPlayerID]._id + ":" + achievementID + ",";
				dataArray[dataPlayerID] = dataArrayPlayer; //++xathick
				toSYNC = dataArray.join("||");
				await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);
				if (document.getElementById('AchPlayerNav').className == "AchPlayerNav") //CHECK FOR EDITING WITHIN NORMAL WINDOW
				{
					await game.settings.set('farchievements', 'loadSettingsForPlayer', PID);
					$('#achsyncnormalmode').append('<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>');
					loadAchievements();
				}
				else
					loadAchievementsEditMode();
				return;
			}

			if (dataArray[dataPlayerID].split(":")[1].includes(',' + "" + achievementID + ',')) { //DETECT EXISTING ACHIEVEMENT, REMOVE IT
				let toReplace = achievementID + ",";//REPLACE FROM WITHIN DATA
				dataArrayPlayer = dataArray[dataPlayerID].split(":")[0] + ":" + dataArray[dataPlayerID].split(":")[1].replace(toReplace, "");
				dataArray[dataPlayerID] = dataArrayPlayer;
				toSYNC = dataArray.join("||");
				//console.log(toSYNC);
			}
			else if (dataArray[dataPlayerID].split(":")[1].split(",")[0] == "" + achievementID) { //FIRST ACHIEVEMENT IN DATA?
				let toReplace = achievementID + ",";//REPLACE FIRST ENTRY IN DATA
				var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
				firstDataArray.shift();
				dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
				toSYNC = dataArray.join("||");
				//console.log(toSYNC);
			}
			else if (dataArray[dataPlayerID].split(":")[1].split(",")[dataArray[dataPlayerID].split(":")[1].split(",")[0].length + 1] == "" + achievementID) { //LAST ACHIEVEMENT IN DATA?
				let toReplace = achievementID + ",";//REPLACE FIRST ENTRY IN DATA
				var firstDataArray = dataArray[dataPlayerID].split(":")[1].split(",");
				firstDataArray.pop();
				dataArray[dataPlayerID] = dataArray[dataPlayerID].split(":")[0] + ":" + firstDataArray;
				toSYNC = dataArray.join("||");
				//console.log(toSYNC);
			}
			if (document.getElementById('SyncAchUnsaved') != null) {
				if (document.getElementById('SyncAchUnsaved').value == toSYNC) {
					document.getElementById('SyncAchUnsaved').id = "SyncAch";
					document.getElementById('SyncAch').value = "";
				}
			}
			if (document.getElementById('SyncAch') != null) {
				document.getElementById('SyncAch').value = toSYNC;
				document.getElementById('SyncAch').id = "SyncAchUnsaved";
			}

			await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);
			SendSyncMessage();
			//RELOAD ANY OPEN WINDOW
			if(document.getElementById('AchPlayerNav') == null) return;
			if (document.getElementById('AchPlayerNav').className == "AchPlayerNav") //CHECK FOR EDITING WITHIN NORMAL WINDOW
			{
				await game.settings.set('farchievements', 'loadSettingsForPlayer', PID);
				$('#achsyncnormalmode').append('<i id="SyncAch2" onclick="SendSyncMessage()" class="fas fa-sync achievementsettings" title="Click to push changes right now"></i>');
				window.loadAchievements();
			}
			else
				window.loadAchievementsEditMode();
}
async function displayMyNewAchievementInChat(newAchievements){
	if(!game.settings.get('farchievements', 'chatMessage')) return;
	let AchievementList = JSON.parse(game.settings.get('farchievements', 'achievementdataNEW'));
	if (!Array.isArray(newAchievements)) {
		if(newAchievements != ""){
			if (newAchievements === "" || newAchievements === " ") return; // Skip empty or space strings
			console.log("Achievement to display:", newAchievements);
			let achievementData = AchievementList.find(x=>x.name == newAchievements);
			let displayContent = '<p class="achGainedChatText">Achievement Gained:</p>'+ '<div class="AchievementChatDisplay"><img class="chatAchImg" src="'+achievementData.image+'"></img><b class="achNameChatP">'+newAchievements+'<b/> </div>';

			ChatMessage.create({
				content: displayContent,
				blind: false,
			});
		}
        return;
    }

    newAchievements.forEach(achievement => {
        if (achievement === "" || achievement === " ") return; // Skip empty or space strings
        console.log("Achievement to display:", achievement);
		let achievementData = AchievementList.find(x=>x.name == achievement);
		let displayContent = '<p class="achGainedChatText">Achievement Gained:</p>'+ '<div class="AchievementChatDisplay"><img class="chatAchImg" src="'+achievementData.image+'"></img><b class="achNameChatP">'+achievement+'<b/> </div>';

        ChatMessage.create({
            content: displayContent,
            blind: false,
        });
    });
}

Hooks.on("renderChatMessage", (chatMessage, html, data) => {
    if (html.find(".achGainedChatText").length) {
        html.addClass("achievementChatDisplayMessage");
    }
});

async function SendSyncMessage() {
	ChatMessage.create({
		user: game.user._id,
		content: "Achievements Synced",
		blind: false,
		whisper: game.users.filter(u => u.isGM).map(u => u.id)
	});

	if(document.getElementById('achsyncnormalmode') != null)
		if (document.getElementById('achsyncnormalmode').innerHTML != "") 
			document.getElementById('achsyncnormalmode').innerHTML = "";
}

class Achievement {
    constructor(
        name, description, image, points = 1, glowing = false, color="#f7ff9e", players, seenBy = [], playerDates = {}, 
        progressRequired = 0, progressType = "standard", playerProgress = {}, chainLength = 2, diceType = "d20"
    ) {
        this.name = name;
        this.description = description;
        this.image = image;
		this.points = points;
		this.glowing = glowing;
		this.color = color;
        this.players = players;
        this.seenBy = seenBy;
        this.playerDates = playerDates;
        this.progressRequired = progressRequired;
        this.progressType = progressType;
        this.playerProgress = playerProgress; // Track player progress, used for both standard and chain
		this.diceType = diceType;
		this.chainLength = chainLength; //The Amount of times a player needs to roll the value required for a chain
    }

    // Method to add progress for a player
    addProgress(playerId, progress, isChain = false) {
        if (!this.playerProgress[playerId]) {
            this.playerProgress[playerId] = 0; // Initialize player's progress if it doesn't exist
        }

        if (isChain) {
            // Handle chain progress
            if (progress) {
                this.playerProgress[playerId] += 1; // Increment chain on success
                console.log(`Farchievements | Chain progress for player ${playerId}: ${this.playerProgress[playerId]}`);
                
                if (this.playerProgress[playerId] >= this.progressRequired) {
                    this.addPlayer(playerId); // Award achievement if chain is complete
                    this.playerProgress[playerId] = 0; // Reset chain after achievement
                }
            } else {
                this.playerProgress[playerId] = 0; // Reset chain on failure
                console.log(`Farchievements | Chain reset for player ${playerId}`);
            }
        } else {
            // Standard progress
            this.playerProgress[playerId] = Math.max(0, Math.min(this.playerProgress[playerId] + progress, this.progressRequired));

            // Check if the progress is equal to or greater than the required progress
            if (this.playerProgress[playerId] >= this.progressRequired) {
                this.addPlayer(playerId);
				SendSyncMessage();
            } else if (this.playerProgress[playerId] < this.progressRequired) {
                // If the progress is below the required progress, remove the player from the achievement
                this.removePlayer(playerId);
            }

            console.log(`Farchievements | Updated progress for player: ${playerId}, new progress: ${this.playerProgress[playerId]}`);
        }
    }

    // Method to check progress for a player
    getProgress(playerId) {
        return this.playerProgress[playerId] || 0;
    }

    // Method to add a player to the achievement
    addPlayer(playerId) {
		// Ensure the players array is defined
		if (!Array.isArray(this.players)) {
			this.players = [];
		}
	
		let dateAchieved = new Date().toISOString();
		if (!this.players.includes(playerId)) {
			this.players.push(playerId);
			this.playerDates[playerId] = dateAchieved; // Store the date the player obtained the achievement
			console.log("Farchievements | Added Achievement to: " + playerId);
			if (this.progressType === "diceChain") {
				this.playerProgress[playerId] = this.progressRequired;
			}
		}
	}
    // Method to remove a player from the achievement
    removePlayer(playerId) {
        const playerIndex = this.players.indexOf(playerId);
        if (playerIndex > -1) {
            this.players.splice(playerIndex, 1); // Remove the player from the players array
            delete this.playerDates[playerId]; // Remove the associated date from playerDates
            console.log("Farchievements | Removed Achievement from: " + playerId);
        }

        const seenByIndex = this.seenBy.indexOf(playerId);
        if (seenByIndex > -1) {
            this.seenBy.splice(seenByIndex, 1); // Remove the player from the seenBy array if present
            console.log("Farchievements | Removed Achievement from: " + playerId);
        }
		if(this.progressType == "diceChain")
			this.playerProgress[playerId] = 0;
    }
	// Method to mark that a player has seen the achievement animation
	markSeen(playerId) {
		if (!this.seenBy.includes(playerId)) {
			this.seenBy.push(playerId); // Add player to seenBy array if they haven't seen it yet
			console.log("Farchievements | Achievement was seen by: " + playerId);
		}
	}
}




