Hooks.once('init', function() {
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
	game.settings.register('farchievements', 'achamount', {
        name: 'Achievement Amount',
        hint: 'AchAmount',
        scope: 'world',
        config: false,
        default: "1",
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
        hint: 'Background for the achievement banner',
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
        default: "1:::Welcome to FoundryVTT////icons/vtt-512.png////You are using the best VTT software available!;;;2:::Ruler of the Night////icons/magic/control/silhouette-aura-energy.webp////Sucessfully make a stealth check with a DC of 25 or higher;;;3:::Powerful////icons/magic/control/buff-strength-muscle-damage-orange.webp////Sucessfully make a Strength check with a DC of 25 or higher;;;",
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
	console.log("Initialised Farchievements");
});
class Achievements {
    static addChatControl() {
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
            return;
        }
        const templateData = {
            data: []
        };
        templateData.data = super.getData();
        templateData.title = "Farchievements";
        //LOAD QUESTTABLE
		
        const templatePath = "modules/farchievements/AchievementsScreen.html";
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
			AudioHelper.play({src: game.settings.get('farchievements', 'achievementStinger'), volume: 0.2, autoplay: true, loop: false}, false);
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
			//CHECK FOR NEW USERS
			let clientDataSYNC = game.settings.get('farchievements', 'clientdataSYNC');
			for(let i = 1; i < game.users.entries.length; i++){
				if(!clientDataSYNC.includes(game.users.entries[i].id)){ //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
					clientDataSYNC += game.users.entries[i].id + ":||"
					ui.notifications.notify("Foundry Achievements | Added "+game.users.entries[i].name+" with ID: " + game.users.entries[i].id);
				}
			}
			//CHECK FOR REDUNDANT USERS AND REMOVE THEM
			let userID;
			let ToSYNC = clientDataSYNC.split('||');
			for(let i = 1; clientDataSYNC.split('||').length > game.users.entries.length; i++){
				userID = clientDataSYNC.split('||')[i].split(":")[0];
				if(game.users.find(user => user.id == userID) == null){ //IF A NEW USER IS DETECTED ADD HIM TO THE SYNC SETTING
					ToSYNC.pop(i);
					clientDataSYNC = ToSYNC.join("||") + "||";
					//console.log(clientDataSYNC);
					if(userID != "")
					ui.notifications.notify("Foundry Achievements | Purged Player with ID: " + userID);
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
Hooks.on('createChatMessage', function() {
	AchievementSync.SyncAchievements();
});