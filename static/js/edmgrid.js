$(document).ready(function() {
    $(data).each(function(i,e) {
	var label = createLabel(e);
	$('body').append(label);
    });
})

var labelTemplate = "<div class='label'><a href='#'></a></div>"

function createLabel(entry) {
    var template$ = $(labelTemplate);
    $('a',template$).html(entry.label)
    template$.css("position","absolute")
    template$.css("left",entry.x+"%")
    template$.css("top",entry.y+"%")
    return template$;    
}

var data = [
    {
	"label":"Madeon",
	"x":20,
	"y":20
    },
    {
	"label":"JackLNDN",
	"x":10,
	"y":22
    },
    {
	"label":"Daft Punk",
	"x":20,
	"y":40
    },
    {
	"label":"Justice",
	"x":15,
	"y":45
    },
    {
	"label":"Siriusmo",
	"x":15,
	"y":85
    },
    {
	"label":"Orbital",
	"x":10,
	"y":62
    },
    {
	"label":"Pretty Lights",
	"x":25,
	"y":65
    },
    {
	"label":"Flux Pavilion",
	"x":55,
	"y":65
    },
    {
	"label":"Bassnectar",
	"x":75,
	"y":75
    },
    {
	"label":"Wolfgang Gartner",
	"x":43,
	"y":24
    },
    {
	"label":"Krewella",
	"x":64,
	"y":40
    },
    {
	"label":"Zomboy",
	"x":80,
	"y":50
    },
    {
	"label":"Dada Life",
	"x":55,
	"y":35
    },
    {
	"label":"Adventure Club",
	"x":45,
	"y":55
    },
    {
	"label":"Alesso",
	"x":80,
	"y":15
    },
    {
	"label":"Hardwell",
	"x":75,
	"y":25
    },
    {
	"label":"Avicii",
	"x":90,
	"y":8
    },
    {
	"label":"Big Gigantic",
	"x":35,
	"y":50
    },
    {
	"label":"Candyland",
	"x":45,
	"y":9
    },
    {
	"label":"Calvin Harris",
	"x":73,
	"y":7
    },
    {
	"label":"DeadMau5",
	"x":45,
	"y":45
    },
    {
	"label":"Dillon Francis",
	"x":65,
	"y":85
    },
    {
	"label":"Major Lazer",
	"x":40,
	"y":75
    },
    {
	"label":"Butch Clancy",
	"x":50,
	"y":85
    },
    {
	"label":"Knife Party",
	"x":70,
	"y":55
    },
    {
	"label":"Savoy",
	"x":60,
	"y":50
    },
    {
	"label":"Skrillex",
	"x":90,
	"y":53
    },
    {
	"label":"Feed Me",
	"x":30,
	"y":35
    },
    {
	"label":"Porter Robinson",
	"x":40,
	"y":37
    },
    {
	"label":"Gemini",
	"x":60,
	"y":8
    },
    {
	"label":"Griz",
	"x":43,
	"y":60
    },
    {
	"label":"Kaskade",
	"x":65,
	"y":10
    },
    {
	"label":"KDrew",
	"x":75,
	"y":35
    },
    {
	"label":"Kill Paris",
	"x":28,
	"y":55
    },
    {
	"label":"Kill the Noise",
	"x":80,
	"y":60
    },
    {
	"label":"Koan Sound",
	"x":8,
	"y":80
    },
    {
	"label":"Lazerdisk Party Sex",
	"x":18,
	"y":10
    },
    {
	"label":"MSTRKRFT",
	"x":38,
	"y":28
    },
    {
	"label":"Nero",
	"x":68,
	"y":28
    },
    {
	"label":"Overwerk",
	"x":48,
	"y":28
    },
    {
	"label":"Pegboard Nerds",
	"x":77,
	"y":43
    },
    {
	"label":"Project 46",
	"x":63,
	"y":18
    },
    {
	"label":"Swedish House Mafia",
	"x":83,
	"y":18
    },
    {
	"label":"Zedd",
	"x":35,
	"y":18
    },
    {
	"label":"Myndset",
	"x":38,
	"y":10
    },
    {
	"label":"Dotcom",
	"x":58,
	"y":73
    },
    {
	"label":"Pantyraid",
	"x":38,
	"y":83
    },
    {
	"label":"Sound Remedy",
	"x":48,
	"y":18
    },
    {
	"label":"The Glitch Mob",
	"x":21,
	"y":78
    },
    {
	"label":"Flosstradamus",
	"x":45,
	"y":90
    }
]
