Hooks.once('init', function() {
	const debouncedReload = debounce(() => window.location.reload(), 100);
	game.settings.register('farchievements', 'EnableChatBarButton', {
        name: 'Enable Chatbar Button',
        hint: 'Allowes to access Farchivements from the chat bar',
        scope: 'world',
        config: true,
        default: false,
        type: Boolean,
		onChange: debouncedReload,
    });
	game.settings.register('farchievements', 'EnableContextButton', {
        name: 'Enable the button for the player-list context menu',
        hint: 'Enable the button for the player-list context menu.',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
    });
	game.settings.register('farchievements', 'GameSettingsButton', {
        name: 'Game Settings-Button',
        hint: 'Enable the button within the Game Settings tab',
        scope: 'world',
        config: true,
        default: true,
        type: Boolean,
		onChange: debouncedReload,
    });
	game.settings.register('farchievements', 'AchievementWindowTitle', {
        name: 'Title',
        hint: 'Title of Achievement Window',
        scope: 'world',
        config: true,
        default: "Your Achievements",
        type: String,
    });
	game.settings.register('farchievements', 'UnknownName', {
        name: 'Unknown Achievement',
        hint: 'Standard name of unknown Achievement (leave empty to disable)',
        scope: 'world',
        config: true,
        default: "Unknown Achievement",
        type: String,
    });
	game.settings.register('farchievements', 'UnknownDes', {
        name: 'Unknown Description',
        hint: 'Standard description of unknown Achievement (leave empty to disable)',
        scope: 'world',
        config: true,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'DescriptionOnHover', {
        name: 'Description on Hover',
        hint: 'Display the discription only when the achievment is hovered.',
        scope: 'world',
        config: true,
        default: "true",
        type: Boolean,
    });
	game.settings.register('farchievements', 'achamount', {
        name: 'Achievement Amount',
        hint: 'AchAmount',
        scope: 'world',
        config: false,
        default: "3",
        type: String,
    });
	game.settings.register('farchievements', 'standarticon', {
        name: 'Standard Achievement Icon',
        hint: 'Standard Icon',
        scope: 'world',
        config: true,
        default: "modules/farchievements/standardIcon.PNG",
        type: String,
    });
	game.settings.register('farchievements', 'bannerBackground', {
        name: 'Banner background',
        hint: 'Background for the achievement banner (2000 x 180 px)',
        scope: 'world',
        config: true,
        default: "modules/farchievements/achievementbanner.jpg",
        type: String,
    });
	game.settings.register('farchievements', 'achievementStinger', {
        name: 'Achievement Stinger SFX',
        hint: 'Background for the achievement banner',
        scope: 'world',
        config: true,
        default: "modules/farchievements/standardStinger_by_JFarenheit.mp3",
        type: String,
    });
	game.settings.register('farchievements', 'achpretext', {
        name: 'New Achievement Prefix',
        hint: 'Prefix that is infront of the achievement name within the banner',
        scope: 'world',
        config: true,
        default: "Achievement Gained: ",
        type: String,
    });
	game.settings.register('farchievements', 'greyscale', {
        name: 'Greyscale Unowned Achievements',
        hint: 'Displays the achievement icon but grayscaled instead of the mystery icon.',
        scope: 'world',
        config: true,
        default: "true",
        type: Boolean,
    });
	game.settings.register('farchievements', 'mystery', {
        name: 'Mystery Icon',
        hint: 'Standard icon for unknown achievements',
        scope: 'world',
        config: true,
        default: "modules/farchievements/mystery.JPG",
        type: String,
    });
	game.settings.register('farchievements', 'achievementdata', {
        name: 'AchievementData (DONTTOUCH)',
        hint: 'The data for the achievements is saved here !!DONT TOUCH!!',
        scope: 'world',
        config: false,
        default: "1:::Mounted////systems/dnd5e/icons/items/inventory/horseshoe.jpg////Acquire a mount.;;;2:::Translator////systems/dnd5e/icons/items/inventory/note-scroll.jpg////Act as the party translator.;;;3:::Argumenter////systems/dnd5e/icons/items/inventory/monster-beak.jpg////Argue with the DM over a dice roll.;;;4:::Bitte, Bitte Papa////systems/dnd5e/icons/items/inventory/runestone-dwarven.jpg////Ask a deity for a favor.;;;5:::Oblivious////icons/skills/wounds/injury-eyes-blood-red-pink.webp////Be deaf and blind simultaneously.;;;6:::You have no power here////systems/dnd5e/icons/skills/blood_12.jpg////Be ignored by the DM when citing rules.;;;7:::Special////systems/dnd5e/icons/skills/green_27.jpg////Be the only person to roll 20 at a session;;;8:::Actor////systems/dnd5e/icons/skills/emerald_07.jpg////Beat a performance check while in disguise;;;9:::Deiety////systems/dnd5e/icons/skills/yellow_13.jpg////Become deified.;;;10:::Brute////icons/magic/earth/barrier-stone-brown-green.webp////Burst through a wall.;;;11:::Ouch////https://assets.forge-vtt.com/5fa2d7054f8a4cf1b34c8a38/Icons/spellbook_page1/SpellBook08_13.png////Reach 0 HP twice in 1 encounter.;;;12:::Amazing Roleplayer////icons/skills/social/diplomacy-peace-alliance.webp////Roleplay your character exceptionally.;;;13:::(Un)advantage////icons/magic/control/voodoo-doll-pain-damage-purple.webp////Roll 2 1’s on an advantaged roll.;;;14:::Lucky////icons/magic/light/projectile-flare-blue.webp////Roll 2 20’s in a row.;;;15:::Never tell me the odds////icons/magic/control/buff-luck-fortune-clover-green.webp////Roll 2 20’s on a disadvantaged roll.;;;16:::Strongest in the Land////icons/skills/melee/unarmed-punch-fist.webp////Have a strength score over 20.;;;17:::Fastest in the Land////icons/magic/lightning/bolt-strike-cloud-gray.webp////Have a dexterity score over 20.;;;18:::Toughest in the Land////icons/magic/earth/strike-fist-stone-light.webp////Have a constitution score over 20.;;;19:::Smartest in the Land////icons/magic/control/silhouette-hold-beam-blue.webp////Have a intelligence score over 20.;;;20:::Wisest in the Land////icons/magic/nature/tree-elm-roots-brown.webp////Have a wisdom score over 20.;;;21:::The most Charming in the Land////icons/magic/unholy/strike-body-explode-disintegrate.webp////Have a charisma score over 20.;;;22:::I've nothing left to lose...////icons/magic/death/undead-skeleton-deformed-red.webp////...so the only path to choose is twisted                                Be the sole survivor of a TPK;;;23:::Necromancer////icons/commodities/bones/bones-dragon-grey.webp////Raise the dead.;;;",
        type: String,
    });
	game.settings.register('farchievements', 'clientdataSYNC', {
        name: 'ClientDataList (DONTTOUCH)',
        hint: 'will be synced between clients !!DONT TOUCH!!',
        scope: 'world',
        config: false,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'clientdata', {
        name: 'ClientData (DONTTOUCH)',
        hint: 'your clients achievements !!DONT TOUCH!!',
        scope: 'client',
        config: false,
        default: "",
        type: String,
    });
	game.settings.register('farchievements', 'loadSettingsForPlayer', {
        name: 'loadSettingsForPlayer (DONTTOUCH)',
        hint: 'loadSettingsForPlayer !!DONT TOUCH!!',
        scope: 'client',
        config: false,
        default: "",
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
	static async PlayAnimation(achievementsGainedList, amount){
		let achievementsToGain = achievementsGainedList.split(",");
		let data;
		let name,icon;
		let toGain;
		for(let i = 0; i < achievementsToGain.length; i++){
			await AchievementSync.sleep(100);
			toGain = achievementsToGain[i];
			if(toGain == "") return;
			data = game.settings.get('farchievements', 'achievementdata').split(';;;')[toGain-1];
			name = data.split(":::")[1].split("////")[0];
			icon = data.split(":::")[1].split("////")[1];
			if(icon == "icon"){icon = game.settings.get('farchievements', 'standarticon')} //IF STANDARD ICON USE ICON DEFINED IN GAMESETTINGS
			await AudioHelper.play({src: game.settings.get('farchievements', 'achievementStinger'), volume: 0.2, autoplay: true, loop: false}, false);
			await AchievementSync.sleep(1800);
			document.getElementsByClassName("AchievementText")[0].innerHTML = '<label class="AchievementTextLabel">'+game.settings.get("farchievements", "achpretext")+'</label>' + name;
			document.getElementById("AchievementIMG").src = icon;
			document.getElementById("Achievementbar").style.setProperty("display", "flex");
			if(game.modules.get('confetti')?.active === true){
				for(let c = 0; c <3; c++){
					await AchievementSync.sleep(500);
					const strength = window.confetti.confettiStrength.high;
					const shootConfettiProps = window.confetti.getShootConfettiProps(strength);
					window.confetti.handleShootConfetti(shootConfettiProps);
				}
			}
			else
			await AchievementSync.sleep(1000);
			
			await AchievementSync.sleep(8000);
			document.getElementById("Achievementbar").style.setProperty("display", "none");
		}
	}
	static SyncAchievements(){
		if(game.user.isGM){
			if(!game.ready) return; //IF GAME IS READY, ELSE CHANGES WOULDN'T BE SAVED
			//CHECK FOR NEW USERS
			let clientDataSYNC = game.settings.get('farchievements', 'clientdataSYNC');
			if(clientDataSYNC == ""){ //IF THERE ARE NO USERS YET ALL ALL OF THEM
				for(let i = 1; i < game.users._source.length; i++){
					clientDataSYNC += game.users._source[i]._id + ":||"
					console.log("Foundry Achievements | Added "+game.users._source[i].name+" with ID: " + game.users._source[i]._id);
				}
			}
			else{
				for(let i = 1; i < game.users._source.length; i++){
					if(!clientDataSYNC.includes(game.users._source[i]._id)){ //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
						clientDataSYNC += game.users._source[i]._id + ":||"
						//ui.notifications.notify("Foundry Achievements | Added "+game.users._source[i].name+" with ID: " + game.users._source[i]._id);
						console.log("Foundry Achievements | Added "+game.users._source[i].name+" with ID: " + game.users._source[i]._id);
					}
				}
				//CHECK FOR REDUNDANT USERS AND REMOVE THEM
				let userID;
				let ToSYNC = clientDataSYNC.split('||');
				for(let i = 1; clientDataSYNC.split('||').length > game.users._source.length; i++){
					userID = clientDataSYNC.split('||')[i].split(":")[0];
					if(game.users.find(user => user.id == userID) == null){ //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
						ToSYNC.pop(i);
						clientDataSYNC = ToSYNC.join("||") + "||";
						//console.log(clientDataSYNC);
						if(userID != "")
						ui.notifications.notify("Foundry Achievements | Player ID's Changed, purged Player with ID: " + userID);
					}
				}
			}
			game.settings.set('farchievements', 'clientdataSYNC', clientDataSYNC);
		}
		else{//IF USER IS PLAYER
			let myID = game.user.id;
			let SYNCSETTINGS = game.settings.get('farchievements', 'clientdataSYNC');
			let mysettings = game.settings.get('farchievements', 'clientdata');
			let mySYNCSettings = "";
			for(let i = 0; i < game.settings.get('farchievements', 'clientdataSYNC').split("||").length; i++)//FOR EVERY ENTRY IN CLIENTDATASYNC
			{
				if(game.settings.get('farchievements', 'clientdataSYNC').split("||")[i].includes(myID)){//FIND THE SETTINGS FOR THE CURRENT USER BY USERID
					mySYNCSettings = game.settings.get('farchievements', 'clientdataSYNC').split("||")[i]; // MYSYNC = SETTINGS FOR MY USERID
				}
			}
			if(mysettings != mySYNCSettings){//IF THERE IS A DIFFERENCE BETWEEN VERSIONS
				let clientDataToSync = game.user.id + ":";
				let achievementnumber = 0;
				let amountGained = 0;
				let achievementsGainedList = "";
				if(mySYNCSettings == "") return;
				for(let i = 0; i < mySYNCSettings.split(':')[1].split(',').length; i++){
					achievementnumber = mySYNCSettings.split(':')[1].split(',')[i];
					if(mySYNCSettings.split(':')[1].split(',')[i] != ""){
						if(!mysettings.split(":")[1].includes(achievementnumber)){ //IF THE USER DOESN'T ALREADY HAVE THE ACHIEVEMENT
							amountGained ++;
							achievementsGainedList += achievementnumber + ","; // ADD ACHIEVEMENT TO ACHIEVEMENTGAINEDLIST
						}
						clientDataToSync += achievementnumber + ","; //ADD THE ACHIEVEMENT TO THE SYNC REGARDLESS
					}
				}
				if(amountGained != 0)AchievementSync.PlayAnimation(achievementsGainedList, amountGained);
				game.settings.set('farchievements', 'clientdata', clientDataToSync);
				if(document.getElementById("AchievementScript")!= null)//IF ACHIEVEMENTSCREEN IS OPEN FOR THE PLAYER RELOAD IT
					document.getElementById("AchievementScript").onclick();
			}
		}
	}
}
Hooks.on('renderSceneNavigation', function() {
        Achievements.addChatControl();
        //console.log("AchievementsScreen GM true");
		//sync achievements
		AchievementSync.SyncAchievements();
		let bannerstyle = 'top: -200px;background: url('+game.settings.get("farchievements", "bannerBackground")+')!important;background-size: cover !important;background-position: center !important;box-shadow: 0px -4px 6px black !important;display: flex;';
		var el = '<div id="Achievementbar" style="display: none;" class="Achievementbar"><div id="FoundryAchievements" class="FoundryAchievementsBanner" style="'+bannerstyle+'"><img id="AchievementIMG" class="AchievementIMG" src="modules/farchievements/standardIcon.PNG"></img><p class="AchievementText"><label class="AchievementTextLabel">New Achievement:</label> (Achievement) </p><i class="Shiny"></i></div></div>';
		document.getElementById("notifications").innerHTML = el;
	
});


Hooks.on('renderSceneDirectory', function() {
	//ADD BUTTON TO SETTINGS
	if(document.getElementById("SettingsAchievementsButton") == null && game.settings.get('farchievements', 'GameSettingsButton')){
		$('#settings-game').append('<button id="SettingsAchievementsButton" data-action="Achievements"><i class="fas fa-medal achievements-button"></i>Achievements</button>');
		let AchievementsButton = document.getElementById("SettingsAchievementsButton");
		if(AchievementsButton != null)
		AchievementsButton.onclick = Achievements.initializeAchievements;
	}
	function refreshData(){
		let x = 0.1;  // 0.1 seconds
		// Do your thing here
		//ui.notifications.notify("Test");
		if(document.getElementsByClassName("context-items")[0] != null){
			if(document.getElementById("contextAchievement") == null){
				let id = document.getElementsByClassName("context-items")[0].closest('.player').getAttribute("data-user-id");
				if(id != game.user.id && game.user.isGM){//You can't open your own achievements
					document.getElementsByClassName("context-items")[0].innerHTML+='<li class="context-item" id="contextAchievement"><i class="fas fa-medal"></i> View Achievements</li>'
					let AchievmentContextButton = document.getElementById("contextAchievement");
					game.settings.set('farchievements', 'loadSettingsForPlayer', id);
					AchievmentContextButton.onclick = Achievements.initializeAchievements;
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
	if(message.data.content.includes("Achievements Synced"))
	AchievementSync.SyncAchievements();
if(message.data.content.includes("Farchievements-SyncRequest")){
	if(!game.user.isGM)return;
	
	let NAME = message.data.content.split("|")[1];
	let ACHIEVMENTNAME = message.data.content.split("|")[2];
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
		ui.notifications.error("This user doesn't exist");
		return;
	}
	PID = dataArray.indexOf(dataArray.filter(entry => entry.includes(Player.id))[0]);
	achievementID = achData.filter(entry => entry.split("////")[0].includes(ACHIEVMENTNAME))[0][0];
	if(dataArray[PID] == "" || dataArray[PID] == null){ // IF NO DATA YET
				dataArrayPlayer = game.users._source[PID]._id + ":" + achievementID + ",";
				dataArray[PID] = dataArrayPlayer;
				toSYNC = dataArray.join("||");
				console.log(toSYNC);
				//await game.settings.set('farchievements', 'clientdataSYNC', toSYNC);
						
				console.log("Setting Achievement: " + achievementname + "(ID:"+ achievementID + ")" + " for user: " + playerName); //TODO ACTUALLY ADD THE ACHIEVEMENT
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
		user : game.user._id,
		content: "Achievements Synced",
		blind: false,
		whisper : game.users.entities.filter(u => u.isGM).map(u => u._id)
	});
	AchievementSync.SyncAchievements();
}
});
