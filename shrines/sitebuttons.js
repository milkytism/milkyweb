const basedom = "https://sapero.neocities.org"
// const basedom = "../"

friends = [
    {img: "gemstone.gif", alt:"Gemstone", link:"https://crystal.tilde.institute/"},
    {img: "sapphiccafe.png", alt:"Lauren SHE/HER", link:"https://sapphic-cafe.neocities.org/"},
    {img: "webcatz.gif", alt:"webcatz", link:"https://webcatz.neocities.org/"},
    {img: "virosm.png", alt:"Virosm", link:"https://virosm.net/"},
    {img: "wiregrrrl.gif", alt:"WireGrrrl", link:"https://wiregrrrl.neocities.org/"},
    {img: "jennydxxth.png", alt:"jennydxxth", link:"https://jennydxxth.neocities.org/"},
    {img: "teethinvitro.gif", alt:"teeth in vitro", link:"https://teethinvitro.neocities.org/"},
    {img: "wormlungs.gif", alt:"WORM LUNGS", link:"https://worm-lungs.neocities.org/"},
    {img: "bathouse.gif", alt:"THE BAT HOUSE", link:"https://the-bat-house.neocities.org/"},
];

try {
shuffleArray(friends).forEach(x => { if (x.link != "") {document.getElementById('friends').innerHTML += `<a href="${x.link}"><img class="button" src="${basedom}/assets/mq/friend/${x.img}" alt="${x.alt}"></a>`} else {document.getElementById('friends').innerHTML += `<img class="button" src="${basedom}/assets/mq/friend/${x.img}" alt="${x.alt}">`} });
} catch(_) {}

neighbours = [
    {img: "slaid.png", alt:"slaid's beach", link:"https://slaid.neocities.org/"},
    {img: "madeinv.gif", alt:"madeinv", link:"https://madeinv.neocities.org/"},
    {img: "federiefederi.png", alt:"federiefederi", link:"https://federiefederi.neocities.org/"},
    {img: "skelenby.gif", alt:"skelenby: create - collect", link:"https://skelenby.neocities.org/"},
    {img: "pencilvoid.png", alt:"pencilvoid", link:"https://pencilvoid.neocities.org/"},
    {img: "wormlungs.gif", alt:"WORM LUNGS", link:"https://worm-lungs.neocities.org/"},
    {img: "owthehedge.gif", alt:"owthehedge", link:"https://owthehedge.neocities.org/"},
    {img: "wrender.gif", alt:"WRENDERING. VISIT NOW!", link:"https://wrender.neocities.org/"},
    {img: "docworld.png", alt:"docworld", link:"https://docgoestohell.neocities.org/"},
    {img: "spacebar.gif", alt:"🆂🅿🅰🅲🅴👽🅱🅰🆁", link:"https://space-bar.neocities.org/"},
    {img: "gradientos.gif", alt:"GradientOS", link:"https://gradientos.neocities.org"},
    {img: "vivyblue.png", alt:"Velvet Blue", link:"https://humanityisnotbeautiful.neocities.org"},
    {img: "00s.gif", alt:"00s", link:"https://00s.neocities.org"},
    {img: "ridvenge.gif", alt:"ridvenge", link:"https://ridvenge.neocities.org"},
    {img: "rob.jpg", alt:"R.O.B.", link:"https://roboticoperatingbuddy.neocities.org"},
    {img: "acidicalchemist.gif", alt:"acidic Alchemist", link:"https://acidicalchemist.neocities.org"},
    {img: "shinyexe.gif", alt:"Shiny EXE", link:"https://shinyexe.neocities.org"},
];

try {
shuffleArray(neighbours).forEach(x => { if (x.link != "") {document.getElementById('neighbours').innerHTML += `<a href="${x.link}"><img class="button" src="${basedom}/assets/mq/neighbour/${x.img}" alt="${x.alt}"></a>`} else {document.getElementById('neighbours').innerHTML += `<img class="button" src="${basedom}/assets/mq/neighbour/${x.img}" alt="${x.alt}">`} });
} catch(_) {}

smallweb = [
    {img: "aei.gif", alt:"aei's site", link:"https://aei.sh"},
    {img: "juiceterminal.png", alt:"juice terminal", link:"https://juice-terminal.neocities.org"},
    {img: "shishka.gif", alt:"Button ✿ Shishka", link:"https://shishka.neocities.org"},
    {img: "troysucks.gif", alt:"troy sucks", link:"https://troy-sucks.neocities.org"},
    {img: "absolute-realm.gif", alt:"the absolute realm", link:"https://theabsoluterealm.com"},
    {img: "neonbandit.png", alt:"NE0NBANDIT STREET", link:"https://ne0nbandit.neocities.org"},
    {img: "zombiesoda.gif", alt:"ZOMBIE SODA", link:"https://zombiigutz.neocities.org"},
    {img: "sugarforbrains.gif", alt:"SUGAR FOR BRAINS", link:"https://sugarforbrains.neocities.org"},
    {img: "burialcloth.png", alt:"burial cloth", link:"https://burialcloth.neocities.org"},
    {img: "maia.png", alt:"maia crimew", link:"https://maia.crimew.gay"},
    {img: "oatzone.gif", alt:"OAT ZONE", link:"https://oat.zone"},
    {img: "robophobia.gif", alt:"ROBOPHOBIA", link:"https://robophobia.neocities.org"},
    {img: "item64.gif", alt:"ITEM64", link:"https://item64.neocities.org"},
    {img: "phrogee.gif", alt:"phrogee", link:"https://phrogee.neocities.org"},
    {img: "fizzsea.gif", alt:"fizzsea", link:"https://fizzsea.neocities.org"},
    {img: "publictransit.gif", alt:"publictransit", link:"https://publictransit.neocities.org"},
    {img: "kelcity.gif", alt:"kelcity", link:"https://kelprot.neocities.org"},
    {img: "cadence.png", alt:"The text &quot;cadence now!&quot; on a purple background. There is a moon-shaped logo on the left side and a tiny star in the bottom right.", link:"https://cadence.moe"},
    {img: "testtubesterone.png", alt:"TESTTUBESTERONE", link:"https://testtubesterone.neocities.org"},
    {img: "mooeena.png", alt:"Moo Like a Goat!", link:"https://mooeena.neocities.org"},    
];

try {
shuffleArray(smallweb).forEach(x => { document.getElementById('smallweb').innerHTML += `<a href="${x.link}"><img class="button" src="${basedom}/assets/mq/cool/${x.img}" alt="${x.alt}"></a>`} );
} catch(_) {}
