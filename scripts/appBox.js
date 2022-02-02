(function() {
		var apps = [
			{
				"name": "Midnight Animal",
				"url": null,
				"developer": "ilotterytea",
				"logo": "./assets/images/posters/manimal_black.png",
				"download": [
					{"title": "Download on itch.io","download": "https://ilotterytea.itch.io/midnight3d", "item": "Download on <b>itch.io</b>", "main": true},
					{"title": "Download on GameJolt","download": null, "item": '<i class="fas fa-bolt"></i>', "main": false},
					{"title": "Get it on Google Play","download": null, "item": '<i class="fab fa-google-play"></i>', "main": false},
					{"title": "Download on the App Store","download": null, "item": '<i class="fab fa-app-store-ios"></i>', "main": false},
					{"title": "Get it on Steam","download": null, "item": '<i class="fab fa-steam-square"></i>', "main": false}
				],
				"details": "<img src='./assets/images/indev_badge.png' class='icon-small'> - PC (Game)",
				"description": "Experimental ultraviolent top-down shooter platform created as a postmortem exercise for the since-cancelled titular Midnight Animal, presented as a continuous rolling release.",
				"screenshots": ["./assets/images/screenshots/manimal_scr_1.png", "./assets/images/screenshots/manimal_scr_3.png", "./assets/images/screenshots/manimal_scr_2.png"]
			},
			// Midnight Animal
			{
				"name": "The Kopublica News",
				"url": null,
				"developer": "ilotterytea",
				"logo": "./assets/images/posters/kpnews_thumbnail.png",
				"download": [
					{"title": "Download on GameJolt","download": "https://ilotterytea.gamejolt.io/news", "item": "Download on <b>GameJolt</b>", "main": true}
				],
				"details": "January 20, 2021 - PC (Game)",
				"description": 'The game is set in the authoritarian country of Kopublica. The protagonist has applied for a job as editor-in-chief at the newspaper "The Kopublica News" and has been hired for the position. The player needs to collect 35 loyalties in 5 days. Loyalties can be obtained by choosing good news about the Kopublica.',
				"screenshots": ["./assets/images/screenshots/kpnews_scr_1.png","./assets/images/screenshots/kpnews_scr_2.png"]
			},
			// The Kopublica News
			{
				"name": "Xen Engine",
				"url": null,
				"developer": "ilotterytea",
				"logo": "./assets/images/posters/xen_thumbnail.png",
				"download": [
					{"title": "Download on itch.io","download": "https://ilotterytea.itch.io/xen", "item": "Download on <b>itch.io</b>", "main": true}
				],
				"details": "<img src='./assets/images/indev_badge.png' class='icon-small'> - PC (App)",
				"description": "Free, Fast, Lightweight 3D Game Engine",
				"screenshots": ["./assets/images/unavailable.png", "./assets/images/unavailable.png"]
			},
			// Xen Engine
			{
				"name": "HOME",
				"url": null,
				"developer": "ilotterytea",
				"logo": "./assets/images/posters/home_thumbnail.png",
				"download": [
					{"title": "Download on itch.io","download": "https://ilotterytea.itch.io/home", "item": "Download on <b>itch.io</b>", "main": true}
				],
				"details": "<img src='./assets/images/indev_badge.png' class='icon-small'> - PC (App)",
				"description": "90's game console emulator, similar to SNES (1990) and PlayStation (1994).",
				"screenshots": ["./assets/images/unavailable.png"]
			},
			// HOME
			{
				"name": "ilotterybot²",
				"url": null,
				"developer": "ilotterytea",
				"logo": "./assets/images/posters/ilotterybot_thumbnail.png",
				"download": [
					{"title": "GitHub","download": "https://github.com/ilotterytea/ilotterybot2", "item": "GitHub", "main": true}
				],
				"details": "October 16, 2021 - JavaScript",
				"description": "A simple, free and open source Twitch IRC Bot with application.",
				"screenshots": ["./assets/images/unavailable.png", "./assets/images/screenshots/ilbot_scr_2.png"]
			},
			// ilotterytea's twitch bot
		];
		var appRandom = apps[Math.floor(Math.random() * apps.length)];
		var downloadList = []
		var screenshotList = []
		for (i = 0; i < appRandom.download.length; i++) {
			if (appRandom.download[i].download == null) {
				console.log('null download link ' + i)
			}
			else {
				if (appRandom.download[i].main == true ) {
					downloadList.push('<a href="' + appRandom.download[i].download + '" target="_blank" class="button" title="' + appRandom.download[i].title + '">' + appRandom.download[i].title + '</a>')

				} else {
				downloadList.push('<a href="' + appRandom.download[i].download + '" target="_blank" class="button-icon" title="' + appRandom.download[i].title + '">' + appRandom.download[i].item + '</a>')
				}
			}
		}
		for (i = 0; i < appRandom.screenshots.length; i++) {
			if (appRandom.screenshots[i] == null) {
				console.log('null screenshot ' + i);
			}
			else {
				screenshotList.push('<a href="' + appRandom.screenshots[i] + '" target="_blank"><img src="'+ appRandom.screenshots[i] + '"></a>');
			}
		}
		document.getElementById("appboxLogo").innerHTML = '<img src="' + appRandom.logo + '" alt="' + appRandom.name + ' preview">'
		if (appRandom.url == null) {
			document.getElementById("appboxTitle").innerHTML = appRandom.name + '<span class="appbox_author">by ' + appRandom.developer + '</span><div class="appbox_download">' + downloadList.join(" ")
		} else {
			document.getElementById("appboxTitle").innerHTML = '<a href="">' + appRandom.name + '</a><span class="appbox_author">by ' + appRandom.developer + '</span><div class="appbox_download">' + downloadList.join(" ")
		}
		document.getElementById("appboxDetails").innerHTML = appRandom.details;
		document.getElementById("appboxDescription").innerHTML = appRandom.description;
		document.getElementById("appboxScreenshots").innerHTML = screenshotList.join(" ");
		})();