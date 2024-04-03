const monsters = [
    {
        number: 1,
        name: "Spectral Wolf",
        link: "https://monster-sanctuary.fandom.com/wiki/Spectral_Wolf"
    },
    {
        number: 2,
        name: "Spectral Toad",
        link: "https://monster-sanctuary.fandom.com/wiki/Spectral_Toad"
    },
    {
        number: 3,
        name: "Spectral Eagle",
        link: "https://monster-sanctuary.fandom.com/wiki/Spectral_Eagle"
    },
    {
        number: 4,
        name: "Spectral Lion",
        link: "https://monster-sanctuary.fandom.com/wiki/Spectral_Lion"
    },
    {
        number: 5,
        name: "Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/Blob"
    },
    {
        number: 6,
        name: "Magmapillar",
        link: "https://monster-sanctuary.fandom.com/wiki/Magmapillar"
    },
    {
        number: 7,
        name: "Rocky",
        link: "https://monster-sanctuary.fandom.com/wiki/Rocky"
    },
    {
        number: 8,
        name: "Vaero",
        link: "https://monster-sanctuary.fandom.com/wiki/Vaero"
    },
    {
        number: 9,
        name: "Catzerker",
        link: "https://monster-sanctuary.fandom.com/wiki/Catzerker"
    },
    {
        number: 10,
        name: "Yowie",
        link: "https://monster-sanctuary.fandom.com/wiki/Yowie"
    },
    {
        number: 11,
        name: "Steam Golem",
        link: "https://monster-sanctuary.fandom.com/wiki/Steam_Golem"
    },
    {
        number: 12,
        name: "Monk",
        link: "https://monster-sanctuary.fandom.com/wiki/Monk"
    },
    {
        number: 13,
        name: "Grummy",
        link: "https://monster-sanctuary.fandom.com/wiki/Monk"
    },
    {
        number: 14,
        name: "Tengu",
        link: "https://monster-sanctuary.fandom.com/wiki/Tengu"
    },
    {
        number: 15,
        name: "Fungi",
        link: "https://monster-sanctuary.fandom.com/wiki/Fungi"
    },
    {
        number: 16,
        name: "Frosty",
        link: "https://monster-sanctuary.fandom.com/wiki/Frosty"
    },
    {
        number: 17,
        name: "Minitaur",
        link: "https://monster-sanctuary.fandom.com/wiki/Minitaur"
    },
    {
        number: 18,
        name: "Specter",
        link: "https://monster-sanctuary.fandom.com/wiki/Specter"
    },
    {
        number: 19,
        name: "Crackle Knight",
        link: "https://monster-sanctuary.fandom.com/wiki/Crackle_Knight"
    },
    {
        number: 20,
        name: "G'rulu",
        link: "https://monster-sanctuary.fandom.com/wiki/G'rulu"
    },
    {
        number: 21,
        name: "Mad Eye",
        link: "https://monster-sanctuary.fandom.com/wiki/Mad_Eye"
    },
    {
        number: 22,
        name: "Nightwing",
        link: "https://monster-sanctuary.fandom.com/wiki/Nightwing"
    },
    {
        number: 23,
        name: "Toxiquus",
        link: "https://monster-sanctuary.fandom.com/wiki/Toxiquus"
    },
    {
        number: 24,
        name: "Beetloid",
        link: "https://monster-sanctuary.fandom.com/wiki/Beetloid"
    },
    {
        number: 25,
        name: "Druid Oak",
        link: "https://monster-sanctuary.fandom.com/wiki/Druid_Oak"
    },
    {
        number: 26,
        name: "Magmamoth",
        link: "https://monster-sanctuary.fandom.com/wiki/Magmamoth"
    },
    {
        number: 27,
        name: "Molebear",
        link: "https://monster-sanctuary.fandom.com/wiki/Molebear"
    },
    {
        number: 28,
        name: "Glowfly",
        link: "https://monster-sanctuary.fandom.com/wiki/Glowfly"
    },
    {
        number: 29,
        name: "Goblin Brute",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_Brute"
    },
    {
        number: 30,
        name: "Goblin Hood",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_Hood"
    },
    {
        number: 31,
        name: "Goblin Warlock",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_Warlock"
    },
    {
        number: 32,
        name: "Goblin King",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_King"
    },
    {
        number: 33,
        name: "Raduga",
        link: "https://monster-sanctuary.fandom.com/wiki/Raduga"
    },
    {
        number: 34,
        name: "Ice Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/Ice_Blob"
    },
    {
        number: 35,
        name: "Caraglow",
        link: "https://monster-sanctuary.fandom.com/wiki/Caraglow"
    },
    {
        number: 36,
        name: "Aurumtail",
        link: "https://monster-sanctuary.fandom.com/wiki/Aurumtail"
    },
    {
        number: 37,
        name: "Megataur",
        link: "https://monster-sanctuary.fandom.com/wiki/Megataur"
    },
    {
        number: 38,
        name: "Mogwai",
        link: "https://monster-sanctuary.fandom.com/wiki/Mogwai"
    },
    {
        number: 39,
        name: "Crystal Snail",
        link: "https://monster-sanctuary.fandom.com/wiki/Crystal_Snail"
    },
    {
        number: 40,
        name: "Akhlut",
        link: "https://monster-sanctuary.fandom.com/wiki/Akhlut"
    },
    {
        number: 41,
        name: "Blade Widow",
        link: "https://monster-sanctuary.fandom.com/wiki/Blade_Widow"
    },
    {
        number: 42,
        name: "Ninki",
        link: "https://monster-sanctuary.fandom.com/wiki/Ninki"
    },
    {
        number: 43,
        name: "Ninki Nanka",
        link: "https://monster-sanctuary.fandom.com/wiki/Ninki_Nanka"
    },
    {
        number: 44,
        name: "Vasuki",
        link: "https://monster-sanctuary.fandom.com/wiki/Vasuki"
    },
    {
        number: 45,
        name: "Kame",
        link: "https://monster-sanctuary.fandom.com/wiki/Kame"
    },
    {
        number: 46,
        name: "Sycophantom",
        link: "https://monster-sanctuary.fandom.com/wiki/Sycophantom"
    },
    {
        number: 47,
        name: "Imori",
        link: "https://monster-sanctuary.fandom.com/wiki/Imori"
    },
    {
        number: 48,
        name: "Qilin",
        link: "https://monster-sanctuary.fandom.com/wiki/Qilin"
    },
    {
        number: 49,
        name: "Sizzle Knight",
        link: "https://monster-sanctuary.fandom.com/wiki/Sizzle_Knight"
    },
    {
        number: 50,
        name: "Koi",
        link: "https://monster-sanctuary.fandom.com/wiki/Koi"
    },
    {
        number: 51,
        name: "Tanuki",
        link: "https://monster-sanctuary.fandom.com/wiki/Tanuki"
    },
    {
        number: 52,
        name: "Kanko",
        link: "https://monster-sanctuary.fandom.com/wiki/Kanko"
    },
    {
        number: 53,
        name: "Dodo",
        link: "https://monster-sanctuary.fandom.com/wiki/Dodo"
    },
    {
        number: 54,
        name: "Kongamato",
        link: "https://monster-sanctuary.fandom.com/wiki/Kongamato"
    },
    {
        number: 55,
        name: "Ucan",
        link: "https://monster-sanctuary.fandom.com/wiki/Ucan"
    },
    {
        number: 56,
        name: "Brawlish",
        link: "https://monster-sanctuary.fandom.com/wiki/Brawlish"
    },
    {
        number: 57,
        name: "Thornish",
        link: "https://monster-sanctuary.fandom.com/wiki/Thornish"
    },
    {
        number: 58,
        name: "Nautilid",
        link: "https://monster-sanctuary.fandom.com/wiki/Nautilid"
    },
    {
        number: 59,
        name: "Silvaero",
        link: "https://monster-sanctuary.fandom.com/wiki/Silvaero"
    },
    {
        number: 60,
        name: "Elderjel",
        link: "https://monster-sanctuary.fandom.com/wiki/Elderjel"
    },
    {
        number: 61,
        name: "Manticorb",
        link: "https://monster-sanctuary.fandom.com/wiki/Manticorb"
    },
    {
        number: 62,
        name: "Goblin Miner",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_Miner"
    },
    {
        number: 63,
        name: "Salahammer",
        link: "https://monster-sanctuary.fandom.com/wiki/Salahammer"
    },
    {
        number: 64,
        name: "Lava Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/Lava_Blob"
    },
    {
        number: 65,
        name: "Glowdra",
        link: "https://monster-sanctuary.fandom.com/wiki/Glowdra"
    },
    {
        number: 66,
        name: "Draconov",
        link: "https://monster-sanctuary.fandom.com/wiki/Draconov"
    },
    {
        number: 67,
        name: "Dracogran",
        link: "https://monster-sanctuary.fandom.com/wiki/Dracogran"
    },
    {
        number: 68,
        name: "Asura",
        link: "https://monster-sanctuary.fandom.com/wiki/Asura"
    },
    {
        number: 69,
        name: "Skorch",
        link: "https://monster-sanctuary.fandom.com/wiki/Skorch"
    },
    {
        number: 70,
        name: "Stolby",
        link: "https://monster-sanctuary.fandom.com/wiki/Stolby"
    },
    {
        number: 71,
        name: "Ornithopter",
        link: "https://monster-sanctuary.fandom.com/wiki/Ornithopter"
    },
    {
        number: 72,
        name: "Polterofen",
        link: "https://monster-sanctuary.fandom.com/wiki/Polterofen"
    },
    {
        number: 73,
        name: "Oculus",
        link: "https://monster-sanctuary.fandom.com/wiki/Oculus"
    },
    {
        number: 74,
        name: "Mimic",
        link: "https://monster-sanctuary.fandom.com/wiki/Mimic"
    },
    {
        number: 75,
        name: "Goblin Pilot",
        link: "https://monster-sanctuary.fandom.com/wiki/Goblin_Pilot"
    },
    {
        number: 76,
        name: "Shockhopper",
        link: "https://monster-sanctuary.fandom.com/wiki/Shockhopper"
    },
    {
        number: 77,
        name: "Targoat",
        link: "https://monster-sanctuary.fandom.com/wiki/Targoat"
    },
    {
        number: 78,
        name: "Dracozul",
        link: "https://monster-sanctuary.fandom.com/wiki/Dracozul"
    },
    {
        number: 79,
        name: "Troll",
        link: "https://monster-sanctuary.fandom.com/wiki/Troll"
    },
    {
        number: 80,
        name: "Brutus",
        link: "https://monster-sanctuary.fandom.com/wiki/Brutus"
    },
    {
        number: 81,
        name: "Mega Rock",
        link: "https://monster-sanctuary.fandom.com/wiki/Mega_Rock"
    },
    {
        number: 82,
        name: "Argiope",
        link: "https://monster-sanctuary.fandom.com/wiki/Argiope"
    },
    {
        number: 83,
        name: "Arachlich",
        link: "https://monster-sanctuary.fandom.com/wiki/Arachlich"
    },
    {
        number: 84,
        name: "Moccus",
        link: "https://monster-sanctuary.fandom.com/wiki/Moccus"
    },
    {
        number: 85,
        name: "Promethean",
        link: "https://monster-sanctuary.fandom.com/wiki/Promethean"
    },
    {
        number: 86,
        name: "Draconoir",
        link: "https://monster-sanctuary.fandom.com/wiki/Draconoir"
    },
    {
        number: 87,
        name: "Spinner",
        link: "https://monster-sanctuary.fandom.com/wiki/Spinner"
    },
    {
        number: 88,
        name: "Plague Egg",
        link: "https://monster-sanctuary.fandom.com/wiki/Plague_Egg"
    },
    {
        number: 89,
        name: "Sutsune",
        link: "https://monster-sanctuary.fandom.com/wiki/Sutsune"
    },
    {
        number: 90,
        name: "Darnation",
        link: "https://monster-sanctuary.fandom.com/wiki/Darnation"
    },
    {
        number: 91,
        name: "Thanatos",
        link: "https://monster-sanctuary.fandom.com/wiki/Thanatos"
    },
    {
        number: 92,
        name: "Rainbow Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/Rainbow_Blob"
    },
    {
        number: 93,
        name: "Changeling",
        link: "https://monster-sanctuary.fandom.com/wiki/Changeling"
    },
    {
        number: 94,
        name: "King Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/King_Blob"
    },
    {
        number: 95,
        name: "Worm",
        link: "https://monster-sanctuary.fandom.com/wiki/Worm"
    },
    {
        number: 96,
        name: "Vodinoy",
        link: "https://monster-sanctuary.fandom.com/wiki/Vodinoy"
    },
    {
        number: 97,
        name: "Aazerach",
        link: "https://monster-sanctuary.fandom.com/wiki/Aazerach"
    },
    {
        number: 98,
        name: "Diavola",
        link: "https://monster-sanctuary.fandom.com/wiki/Diavola"
    },
    {
        number: 99,
        name: "Gryphonix",
        link: "https://monster-sanctuary.fandom.com/wiki/Gryphonix"
    },
    {
        number: 100,
        name: "Vertraag",
        link: "https://monster-sanctuary.fandom.com/wiki/Vertraag"
    },
    {
        number: 101,
        name: "Mad Lord",
        link: "https://monster-sanctuary.fandom.com/wiki/Mad_Lord"
    },
    {
        number: 102,
        name: "Ascendant",
        link: "https://monster-sanctuary.fandom.com/wiki/Ascendant"
    },
    {
        number: 103,
        name: "Fumagus",
        link: "https://monster-sanctuary.fandom.com/wiki/Fumagus"
    },
    {
        number: 104,
        name: "Rampede",
        link: "https://monster-sanctuary.fandom.com/wiki/Rampede"
    },  
    {
        number: 105,
        name: "Rathops",
        link: "https://monster-sanctuary.fandom.com/wiki/Rathops"
    },  
    {
        number: 106,
        name: "Krakaturtle",
        link: "https://monster-sanctuary.fandom.com/wiki/Krakaturtle"
    },  
    {
        number: 107,
        name: "Tar Blob",
        link: "https://monster-sanctuary.fandom.com/wiki/Tar_Blob"
    },  
    {
        number: 108,
        name: "Amberlgna",
        link: "https://monster-sanctuary.fandom.com/wiki/Amberlgna"
    },  
    {
        number: 109,
        name: "Dracomer",
        link: "https://monster-sanctuary.fandom.com/wiki/Dracomer"
    },  
    {
        number: 110,
        name: "Terradrile",
        link: "https://monster-sanctuary.fandom.com/wiki/Terradrile"
    }, 
    {
        number: 111,
        name: "Bard",
        link: "https://monster-sanctuary.fandom.com/wiki/Bard"
    }  
]