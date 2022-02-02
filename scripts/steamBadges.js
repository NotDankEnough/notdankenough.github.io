(function () {
    var badgespng = [
        /*
        -- Steam Global Badges
        Community Badges
        */
        {
            PNG: "https://community.akamai.steamstatic.com/public/images/badges/09_communitytranslator/translator80.png",
            Title: "Product Registration - Level 0"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level2_80.png",
            Title: "Pillar of Community - Level 1"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level3_80.png",
            Title: "Community Ambassador - Level 2"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level4_80.png",
            Title: "Community Leader - Level 3"
        },
        /*
        -- Steam Global Badges
        Special Badges
        */
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/generic/CommunityModerator_80.png",
            Title: "Steam Community Moderator"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/generic/ValveEmployee_80.png",
            Title: "Valve Employee"
        },
        /*
        -- Steam Global Badges
        Community Translator
        */
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator80.png",
            Title: "Steam Community Translator - Level 1"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level2_80.png",
            Title: "Steam Community Translator (Bronze) - Level 2"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level3_80.png",
            Title: "Steam Community Translator (Silver) - Level 3"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/09_communitytranslator/translator_level4_80.png",
            Title: "Steam Community Translator (Gold) - Level 4"
        },
        /*
        -- Steam Global Badges
        Game Collector
        */
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/1_80.png",
            Title: "One-Stop Shopper"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/5_80.png",
            Title: "Select Collector"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/10_80.png",
            Title: "Adept Accumulator"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/25_80.png",
            Title: "Sharp-Eyed Stockpiler"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/50_80.png",
            Title: "Collection Agent"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/100_80.png",
            Title: "Power Player"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/250_80.png",
            Title: "Game Mechanic"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/500_80.png",
            Title: "Director of Acquisitions"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/1000_80.png",
            Title: "Game Industry Guardian"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/2000_80.png",
            Title: "Gaming God"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/3000_80.png",
            Title: "Accrual Expert"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/4000_80.png",
            Title: "Ambassador of Amassment"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/5000_80.png",
            Title: "Digital Deity"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/6000_80.png",
            Title: "Collection King"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/7000_80.png",
            Title: "Magnate of Amassment"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/8000_80.png",
            Title: "Stockpiler Supreme"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/9000_80.png",
            Title: "Almighty Aggregator"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/10000_80.png",
            Title: "Master Gatherer (New)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/11000_80.png",
            Title: "Omnipotent Assembler"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/12000_80.png",
            Title: "Acquisition Idol"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/13000_80.png",
            Title: "Game Collector: 13,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/14000_80.png",
            Title: "Game Collector: 14,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/15000_80.png",
            Title: "Game Collector: 15,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/16000_80.png",
            Title: "Game Collector: 16,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/17000_80.png",
            Title: "Game Collector: 17,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/18000_80.png",
            Title: "Game Collector: 18,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/19000_80.png",
            Title: "Game Collector: 19,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/20000_80.png",
            Title: "Game Collector: 20,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/21000_80.png",
            Title: "Game Collector: 21,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/22000_80.png",
            Title: "Game Collector: 22,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/23000_80.png",
            Title: "Game Collector: 23,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/24000_80.png",
            Title: "Game Collector: 24,000+"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/25000_80.png",
            Title: "Game Collector: 25,000+"
        },
        /*
        -- Steam Global Badges
        Years of Service
        */
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears1_80.png",
            Title: "Years of Service - Level 1"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears2_80.png",
            Title: "Years of Service - Level 2"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears3_80.png",
            Title: "Years of Service - Level 3"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears4_80.png",
            Title: "Years of Service - Level 4"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears5_80.png",
            Title: "Years of Service - Level 5"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears6_80.png",
            Title: "Years of Service - Level 6"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears7_80.png",
            Title: "Years of Service - Level 7"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears8_80.png",
            Title: "Years of Service - Level 8"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears9_80.png",
            Title: "Years of Service - Level 9"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears10_80.png",
            Title: "Years of Service - Level 10"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears11_80.png",
            Title: "Years of Service - Level 11"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears12_80.png",
            Title: "Years of Service - Level 12"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears13_80.png",
            Title: "Years of Service - Level 13"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears14_80.png",
            Title: "Years of Service - Level 14"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears15_80.png",
            Title: "Years of Service - Level 15"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears16_80.png",
            Title: "Years of Service - Level 16"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears17_80.png",
            Title: "Years of Service - Level 17"
        },
        /*
        -- Steam Global Badges
        Pre-Trading Card Sales
        */
        // Holiday Sale 2011
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/06_winter2011/coal01_80.png",
            Title: "Completed 1-9 achievements (Holiday Sale 2011)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/06_winter2011/coal02_80.png",
            Title: "Completed 10-77 achievements (Holiday Sale 2011)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/06_winter2011/coal03_80.png",
            Title: "Completed 78 achievements (Holiday Sale 2011)"
        },
        // Summer Sale 2012
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/07_summer2012/Summer2012_stage1_80.png",
            Title: "Participated in a Community Voting event (Summer Sale 2012)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/07_summer2012/Summer2012_stage2_80.png",
            Title: "Participated in several Community Voting events (Summer Sale 2012)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/07_summer2012/Summer2012_stage3_80.png",
            Title: "King of the Fort - Get 7 badges (Summer Sale 2012)"
        },
        // Holiday Sale 2012
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/08_winter2012/winter2012_badge80.png",
            Title: "Holiday Sale 2012"
        },
        /*
        -- Steam Global Badges
        Events
        */
        // The Great Steam Treasure Hunt
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/04_treasurehunt/treasurehunt01_80.png",
            Title: "Received the Bounty hat (The Great Steam Treasure Hunt)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/04_treasurehunt/treasurehunt02_80.png",
            Title: "Received the Treasure hat (The Great Steam Treasure Hunt)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/04_treasurehunt/treasurehunt03_80.png",
            Title: "Received the Hat of Undeniable Weatlh and Respect (The Great Steam Treasure Hunt)"
        },
        // Potato Fools Day ARG
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/03_potato/potato01_80.png",
            Title: "Collected 1-12 potatoes (Potato Fools Day ARG)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/03_potato/potato02_80.png",
            Title: "Collected 13-34 potatoes (Potato Fools Day ARG)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/03_potato/potato03_80.png",
            Title: "Collected all 36 potatoes (Potato Fools Day ARG)"
        },
        // Steam Summer Camp
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/05_summer2011/tickets80.png",
            Title: "Collected 1-76 tickets (Steam Summer Camp)"
        },
        // Steam ARG 2015
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/24_winter2015_arg_red_herring/red_herring.png",
            Title: "Red Herring (Steam ARG 2015)"
        },
        // Steam Awards 2016
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/25_steamawardnominations/level01_80.png",
            Title: "1 task completed (Steam Awards 2016)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/25_steamawardnominations/level02_80.png",
            Title: "2 tasks completed (Steam Awards 2016)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/25_steamawardnominations/level03_80.png",
            Title: "3 tasks completed (Steam Awards 2016)"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/25_steamawardnominations/level04_80.png",
            Title: "4 tasks completed (Steam Awards 2016)"
        },
        /*
        -- Steam Global Badges
        Steam Hardware Beta
        */
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/15_hwbeta/hwbeta01_80.png",
            Title: "Steam Hardware Enthusiast"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/15_hwbeta/hwbeta02_80.png",
            Title: "Steam Hardware Beta Candidate"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/15_hwbeta/hwbeta03_80.png",
            Title: "Steam Hardware Beta Participant"
        },
        {
            PNG: "https://community.cloudflare.steamstatic.com/public/images/badges/generic/TradingCardBeta_80.png",
            Title: "Trading Card Beta Tester"
        }
    ];
    var bgvideos = [
        // Winter Collection 2020
        "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1492660/3b67d75c3161ff8ebb1501f4436b839ea490e050.webm",
        "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1263950/4d466f77edf3265a253fba79d47bc91a37e34920.webm",
        "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1263950/f23886b58f6060646bd1442e0e639c91c229c1d6.webm",
        "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1263950/3943c0a569b5f095ada7983a1eb8c012ee5b8f60.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/6c0a7998c55d09d6c69677a5b7c7002125d66024.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/f5a81e23cd49ad90be88d31c136e9fed35e9aa6a.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/bf4e74b60ae2602d2d1535fda32a0ffaa492f3be.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/1127f03c832f3ee0b2a51265e385828e2d910686.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/8640b3b89faac7bb99ffb0071b03098523e2b5f0.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/5eacdd65ba44e3591c9831bc096d66ad4fe7be60.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/cba7f6ad5a2a96638ff91e5900e17fa671d0385e.webm",
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/931ccccf84db553f8f87a2dd01e1578839ba7457.webm"
    ];

    var badges = badgespng[Math.floor(Math.random() * badgespng.length)];
    document.getElementById("steamBadge").innerHTML = '<a onClick="history.go(0)" class="nodash"><img src="' + badges.PNG + '" title="' + badges.Title + '" style="padding-right:12px;border-radius:4px;width:42px;height:auto;cursor:pointer;"></a>';
    var vsource = bgvideos[Math.floor(Math.random() * bgvideos.length)];
    document.getElementById("videoFullscreenBG").innerHTML = '<video autoplay muted loop id="videoFullscreenBG"><source src="' + vsource + '" type="video/webm"></video>'
})();