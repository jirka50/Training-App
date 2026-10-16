/* ===== Knihovna: hry z dokumentu „31 her pro baseballový tým U7“ + cviky a rutiny ===== */
const CATS={warm:'Rozehřátí',hazeni:'Házení',chytani:'Chytání',odpal:'Odpal',mety:'Běh po metách',hra:'Pozornost a hra',rutina:'Rutina'};
const FOCUS=['hazeni','chytani','odpal','mety','hra'];
const KINDS={game:'Hra',drill:'Cvik',seq:'Rutina',routine:'Organizace'};
const LL='https://www.littleleague.org/videos/video-tags/tee-ball-drill/';
const A=[
/* --- HRY --- */
{id:'g01',k:'game',n:'Ukliď si zahrádku',v:'Přehazovaná',c:'hazeni',t:['tym'],e:3,min:8,kids:6,
 gear:['Měkké míčky', 'Kužely'],gn:'20–40 míčků; místo kuželů jde i lano na dělicí čáru',dev:'vrchní hod, pohyb paže, krok při hodu, rychlé sebrání míče, koordinace těla, týmová spolupráce',
 d:'Hřiště se rozdělí čárou (kužely nebo lano) na dvě poloviny, každý tým má svoji „zahrádku“. Na obou stranách leží hromada měkkých míčků. Na povel děti sbírají míčky na své straně a házejí je vrchním hodem přes čáru k soupeři. Na zapískání všichni přestanou a spočítá se, kolik míčků zůstalo na každé straně. Vyhrává tým s „čistší zahrádkou“. Hraje se 3–4 kola po 1–2 minutách.',
 va:'Přehazovaná: každý tým má na začátku stejný počet míčů (např. 20) a úkolem je přehodit všechny své míče na stranu soupeře. Pro větší pohyb musí děti před hodem ležet, zvednout se, hodit míč a zase si lehnout.'},
{id:'g02',k:'game',n:'Pirátský poklad',c:'hazeni',e:1,min:8,kids:2,st:1,
 gear:['Měkké míčky', 'Kbelíky', 'Obruče', 'Kužely'],dev:'přesnost hodu, míření na cíl, soustředění',
 d:'Na zemi se rozmístí cíle (kbelíky, obruče, kužely). Každý cíl je „truhla s pokladem“ a má jinou bodovou hodnotu podle vzdálenosti. Děti stojí za vyznačenou čarou ve dvou družstvech a postupně házejí míčky na cíle. Za každý zásah získá družstvo „zlaťáky“. Pro mladší děti lze čáru posunout blíž, pro šikovnější dál.',
 link:LL,lt:'Little League – Hit The Bucket, Team Throwing'},
{id:'g03',k:'game',n:'Štafeta s míčem',v:'Vlak',c:'hazeni',t:['chytani','tym'],e:2,min:8,kids:6,
 gear:['Měkké míčky', 'Rukavice', 'Kbelíky'],gn:'kbelík pro každé družstvo',dev:'hod na spoluhráče, chytání, rychlé přehození, pozornost, držení míče, balanc, týmovost',
 d:'Družstva stojí každé v jedné řadě, mezi dětmi jsou rozestupy 3–4 metry. První hráč hodí míč druhému, ten třetímu a tak dál až k poslednímu, který míč hodí do kbelíku. Když míč spadne, musí se vrátit k hráči, který ho hodil. Vyhrává družstvo, které dopraví do kbelíku více míčků za daný čas.',
 va:'Vlak: děti stojí těsně za sebou v zástupu a míč si předávají dozadu střídavě spodem mezi nohama a horem nad hlavou. Vyhrává družstvo, jehož míč dorazí první na konec zástupu.'},
{id:'g04',k:'game',n:'Raketa',c:'hazeni',e:2,min:7,kids:1,st:1,out:1,
 gear:['Měkké míčky', 'Kužely'],gn:'kužely na značení vzdáleností',dev:'technika vrchního hodu, práce nohou, síla hodu',
 d:'Děti stojí na čáře a házejí míček co nejdál. Hod se počítá jen tehdy, když dítě udělá krok nohou opačnou k házející ruce a ruku po hodu „dotáhne“ dolů. Místo dopadu se označí kuželem a v dalších pokusech se každé dítě snaží překonat svůj vlastní rekord.'},
{id:'g05',k:'game',n:'Trenérská vybíjená',v:'Míčová lavina',c:'hazeni',t:['warm'],e:3,min:7,kids:4,
 gear:['Malé fotbalové míče', 'Měkké míčky', 'Kužely'],gn:'Míčová lavina: koš měkkých míčků a kužely na území',dev:'házecí dovednosti, odhad vzdálenosti, rychlé starty, kličkování, házení na cíl',
 d:'Děti si vezmou malé fotbalové míče a snaží se vybít trenéra. Za každý trefený míč si počítají body a při zásahu nahlas zakřičí, kolik bodů mají. Trenér může míče chytat nebo se jim vyhýbat jako při vybíjené.',
 va:'Míčová lavina: polovina dětí přebíhá vymezené území, druhá polovina (lovci) stojí po stranách s košem měkkých míčků a míří výhradně na nohy (od kolen dolů). Zasažený si sedne a v dalším kole smí běžce kolem sebe plácnout. Po 2 minutách se týmy prohodí.'},
{id:'g06',k:'game',n:'Horký brambor',v:'Hasičský kroužek',c:'chytani',t:['hazeni'],e:2,min:7,kids:4,st:1,
 gear:['Měkké míčky', 'Malé fotbalové míče', 'Rukavice'],gn:'1–3 míčky; Hasičský kroužek: fotbalové nebo baseballové míče a rukavice',dev:'chytání, rychlé přehození z rukavice do ruky, reakce, zpracování míče, týmová spolupráce',
 d:'Děti stojí v kruhu a přihazují si míček co nejrychleji, jako by pálil. Kdo míč upustí nebo hodí mimo, jde doprostřed kruhu do „hrnce s polévkou“ a vrátí se, až míč upustí někdo další. S každým kolem se tempo zrychluje. U nejmenších dětí se začíná vsedě s podáváním, pak kutálením a teprve potom házením.',
 va:'Hasičský kroužek: týmy po alespoň 6 hráčích stojí v kruzích. V 1. inningu putuje kruhem jeden míč, ve 2. dva, ve 3. tři… Vyhrává tým, u kterého míče projdou kolečkem první. Upuštěný míč se zvedne, hráč se zařadí a podá znovu.',
 link:'https://www.playworks.org/game-library/hot-potato/',lt:'Playworks – Hot Potato'},
{id:'g07',k:'game',n:'Sbírání vajíček',v:'Brankář',c:'chytani',e:2,min:8,kids:2,st:1,
 gear:['Měkké míčky', 'Rukavice', 'Kužely', 'Kbelíky'],gn:'košík na „vajíčka“',dev:'chytání přízemních míčů, postoj polaře, souhra rukavice a druhé ruky, přesun bokem, odvaha postavit se před míč',
 d:'Děti stojí v řadách za kuželi. Trenér kutálí míčky po zemi a dítě je chytá technikou „krokodýlí tlama“: rukavice dole u země, druhá ruka nahoře připravená míč „zaklapnout“. Chycený míček je „vajíčko“, dítě ho hodí trenérovi zpátky a jde na konec řady. Každé vajíčko je bod pro družstvo.',
 va:'Brankář: dítě stojí mezi dvěma kužely asi 2 m od sebe. Trenér z 5–8 m kutálí míče různě do stran a dítě se musí přesunout bokem před míč a chytit ho, aby „nedostalo gól“. Po pěti míčích se děti vystřídají.',
 link:'https://littleleague.org/university/articles/tee-ball-drills-fielding/',lt:'Little League – Fielding'},
{id:'g08',k:'game',n:'Chyť balón',v:'Můj!',c:'chytani',t:['hra'],e:1,min:7,kids:2,st:1,
 gear:['Nafukovací balónky', 'Měkké míčky', 'Rukavice'],dev:'chytání vysokých míčů, sledování míče očima, odhad dráhy letu, komunikace, spolupráce',
 d:'Trenér vyhazuje do vzduchu nafukovací balónek a dítě ho chytá nad hlavou oběma rukama, palce u sebe („okénko“). Balónek padá pomalu, takže dítě má čas se pod něj postavit. Postupně se přechází na velmi měkký míček a pak na chytání do rukavice. Varianta: děti stojí v kruhu a balónek nesmí spadnout.',
 va:'Můj!: dvě děti stojí asi 2 m od sebe, trenér vyhodí míč mezi ně. Chytat smí jen ten, kdo jako první nahlas zavolá „Můj!“, druhé dítě uhne a jistí ho za zády.',link:LL,lt:'Little League – Beach Volleyball Circle'},
{id:'g09',k:'game',n:'Žonglér',c:'chytani',e:1,min:5,kids:1,st:1,
 gear:['Měkké míčky', 'Rukavice'],gn:'pro každé dítě',dev:'koordinace oko–ruka, chytání do rukavice, zakrytí míče',
 d:'Každé dítě si samo vyhazuje měkký míček nad hlavu a chytá ho do rukavice, pak míč přikryje druhou rukou. Počítá se, kolikrát za sebou se to podaří bez upuštění. Pro pokročilé: vyhodit výš, tlesknout před chycením nebo chytit v podřepu.'},
{id:'g10',k:'game',n:'Odpal do zón',c:'odpal',e:1,min:10,kids:2,st:1,
 gear:['Tee (stojánek)', 'Pálky', 'Helmy', 'Měkké míčky', 'Kužely'],gn:'barevné kužely na zóny',dev:'švih pálkou, kontakt s míčem, směrování odpalu',
 d:'Pole před domácí metou se kužely rozdělí na 3–4 barevné zóny s různými body (blízko 1, daleko 3, „zlatá zóna“ uprostřed 5). Děti se střídají u tee a každé má 3 odpaly. Body se sčítají za družstvo. Trenér u tee hlídá postoj, úchop pálky a vodorovný švih.',
 link:'https://littleleague.org/?p=11408',lt:'Little League – Tee Hitting'},
{id:'g11',k:'game',n:'Nudle a balónek',c:'odpal',e:2,min:7,kids:1,st:1,
 gear:['Pěnové nudle', 'Nafukovací balónky'],dev:'postoj pálkaře, načasování švihu, sledování míče očima',
 d:'Každé dítě má bazénovou nudli místo pálky a zaujme postoj pálkaře. Trenér nebo spoluhráč mu jemně nahodí nafukovací balónek a dítě ho odpálí. Balónek letí pomalu, takže dítě má čas sledovat ho očima až do kontaktu. Hra je bezpečná i pro větší skupinu najednou.'},
{id:'g12',k:'game',n:'Odpal a běž',c:'odpal',t:['mety'],e:2,min:10,kids:4,st:1,
 gear:['Tee (stojánek)', 'Pálky', 'Helmy', 'Měkké míčky', 'Obruče', 'Mety'],dev:'odpal, okamžitý start po odpalu, bezpečnost s pálkou',
 d:'Dítě odpálí míček z tee, odloží pálku do vyznačené obruče vedle mety a běží na první metu. Za správně odloženou pálku (ne odhozenou za sebe) dostane bod navíc. Polaři mezitím míč seberou a hodí ho na první metu.'},
{id:'g13',k:'game',n:'Závody kolem met',c:'mety',e:3,min:6,kids:2,st:1,
 gear:['Mety', 'Stopky'],gn:'stopky nepovinné',dev:'běh po metách, správné obíhání a šlapání na mety, rychlost',
 d:'Děti startují po dvojicích z domácí mety a běží kolem všech met proti směru hodinových ručiček. Na každou metu musí šlápnout, jinak se vracejí. Trenér cestou nahlas vyvolává mety („první, druhá, třetí, domů“).',
 va:'Štafeta dvou družstev: jedno startuje z domácí, druhé z druhé mety.',link:LL,lt:'Little League – Run the Bases'},
{id:'g14',k:'game',n:'Chyť běžce',c:'mety',t:['hazeni'],e:3,min:7,kids:3,st:1,
 gear:['Mety', 'Měkké míčky', 'Rukavice'],gn:'2 mety asi 10 m od sebe',dev:'běh a změna směru, tagování běžce, hod pod tlakem',
 d:'Zjednodušený „pickle“. Dva polaři s rukavicí stojí na dvou metách asi 10 m od sebe, mezi nimi je běžec. Polaři si přihazují míč a snaží se běžce dotknout míčem v rukavici. Běžec se snaží bezpečně doběhnout na jednu z met. Po každém kole se role vymění.'},
{id:'g15',k:'game',n:'Autopark na metách',v:'Semafor, Barevné mety',c:'mety',t:['warm','hra'],e:3,min:8,kids:3,
 gear:['Kužely', 'Mety', 'Barevné šátky'],gn:'kužel pro každé dítě jako volant; šátky jen pro variantu Barevné mety',dev:'rychlá reakce, balanc na jedné noze, orientace na hřišti, čísla a barvy met, běh pozpátku, starty a zastavení',
 d:'Každé dítě drží kužel jako volant a jezdí po hřišti. Povely: „Červená!“ = stop a stoj na jedné noze. „Parkovat u mety číslo 1!“ (2, 3) = doběhnout k metě, první šlápne a ostatní se řadí za ním. „Garáž!“ = zacouvat pozpátku na domácí metu. „Zelená!“ = jezdit dál. Kdo parkuje poslední nebo splete metu, udělá 3 dřepy.',
 va:'Semafor (pro nejmenší): jen Zelená (běž k první metě), Červená (stůj), Žlutá (vrať se). Barevné mety: mety označené barvou, trenér volá barvu.'},
{id:'g16',k:'game',n:'Sochy',c:'hra',t:['warm','chytani'],e:2,min:5,kids:2,
 gear:['Kužely'],gn:'kužely jen na vymezení prostoru, nepovinné',dev:'připravený postoj v poli, rovnováha, disciplína',
 d:'Děti volně běhají po vymezeném prostoru. Na povel „Socha!“ musí okamžitě zamrznout v postoji polaře: nohy na šířku ramen, kolena pokrčená, zadek dole, rukavice vpředu u země. Trenér obchází a kontroluje postoje. Varianta: „Pálkař!“ = zamrznout v postoji pálkaře.',
 link:'https://www.greenstone.ca/en/our-government/resources/Tee-Ball-Practice-plan-2.pdf',lt:'Tee Ball plán #2 (PDF)'},
{id:'g17',k:'game',n:'Trenér říká',c:'hra',e:1,min:5,kids:2,
 gear:[],dev:'pozornost, nácvik baseballových pohybů, koordinace',
 d:'Baseballová varianta „Simon říká“. Trenér dává pokyny jako „Trenér říká: švihni pálkou“, „chyť vysoký míč“, „běž na místě“, „hoď na první metu“. Děti pohyb jen předvádějí. Pokud pokyn nezačíná slovy „Trenér říká“, nesmí se pohnout. Kdo se splete, udělá 3 dřepy a hraje dál.'},
{id:'g18',k:'game',n:'Vláček a mini zápas',c:'hra',t:['odpal','mety'],e:2,min:15,kids:6,match:1,
 gear:['Mety', 'Tee (stojánek)', 'Pálky', 'Helmy', 'Měkké míčky', 'Rukavice'],dev:'pochopení pravidel, pozice v poli, týmová spolupráce',
 d:'Na začátku tým jako „vláček“ obíhá mety, aby si děti zapamatovaly pořadí. Pak se hraje zjednodušený zápas na 2–3 směny. Každé dítě odpálí jednou z tee, polaři se snaží míč sebrat a hodit na první metu. Nepočítají se auty, všichni se vystřídají na všech pozicích.',link:LL,lt:'Little League – Offense and Defense'},
{id:'g19',k:'game',n:'Přenášení pokladu',c:'hra',e:1,min:6,kids:2,st:1,
 gear:['Pěnové nudle', 'Velké měkké míče'],gn:'2 nudle a 1 míč na dvojici',dev:'koordinace oko–ruka–tělo, orientace v prostoru, týmovost, balanc',
 d:'Dvojice drží mezi sebou dvě pěnové tyče, na kterých leží velký měkký míč („poklad“). Úkolem je přenést poklad z bodu A do bodu B. Pokud spadne, vrací se dvojice na začátek. Po každém kole si prohodí strany.'},
{id:'g20',k:'game',n:'Piškvorky',c:'hra',t:['warm'],e:3,min:8,kids:6,
 gear:['Lano', 'Rukavice', 'Měkké míčky'],gn:'lana na mřížku 3 × 3',dev:'koordinace těla, orientace v prostoru, rychlé rozhodování, běh',
 d:'Dva týmy skládají „piškvorky“ z rukavic a míčů do mřížky 3 × 3. Děti vybíhají po jednom a dávají do mřížky svůj předmět (každý tým má jiný). Vyhrává tým, který první složí řadu tří stejných předmětů.'},
{id:'g21',k:'game',n:'Tahání lana v sedě',c:'hra',e:2,min:4,kids:2,st:1,
 gear:['Lano'],dev:'síla rukou a trupu',
 d:'Dvojice sedí proti sobě a drží lano. Snaží se přetáhnout co největší část lana na svou stranu.'},
{id:'g22',k:'game',n:'Stavitelé a Bořitelé',c:'warm',e:3,min:6,kids:6,
 gear:['Kužely'],gn:'20–30 kuželů',dev:'ohýbání, dřepy a rotace trupu v rychlém tempu',
 d:'Po hřišti se rozházejí kužely, polovina stojí a polovina leží. Děti jsou ve dvou týmech: jedni kužely rukama staví, druzí je shazují na bok (nohama se nesmí). Asi po minutě se spočítají stojící kužely a týmy si prohodí role.'},
{id:'g23',k:'game',n:'Invaze medvědů',c:'warm',e:3,min:6,kids:4,
 gear:['Kužely'],gn:'na vymezení prostoru, stačí i mety',dev:'síla paží a středu těla, obratnost, kličkování, postřeh',
 d:'Honička. Chytající (trenér nebo dítě) začíná jako medvěd a chodí po čtyřech, břichem k zemi. Koho se dotkne, stává se také medvědem. Hraje se do posledního běžícího dítěte. Lze obměnit podle zvířat (žáby, krabi, raci).'},
{id:'g24',k:'game',n:'Letadýlka na ranveji',v:'Vlny (rybičky)',c:'warm',e:3,min:7,kids:5,
 gear:[],gn:'stačí čáry na hřišti nebo v tělocvičně',dev:'kličkování, postřeh, prostorová orientace, obratnost, rychlost, rozehřátí',
 d:'Běžci přebíhají z jedné strany hřiště na druhou. V cestě jim stojí chytající „letadla“ s rozpaženýma rukama, která se smějí pohybovat jen po vyznačených čarách. Chycený se stává dalším letadlem.',
 va:'Vlny: dva až tři trenéři se drží za ruce, vybíhají proti dětem a zvedají a spouštějí ruce. Děti se snaží proběhnout a nenechat se chytit.'},
{id:'g25',k:'game',n:'Chobotnice',c:'warm',t:['hra'],e:3,min:7,kids:6,
 gear:['Měkké míčky', 'Pěnové nudle', 'Kužely'],gn:'kužely na domečky v rozích',dev:'orientace v prostoru, týmová spolupráce, koordinace těla, úchop míče',
 d:'Trenér stojí uprostřed s míčky u nohou a točí pěnovou nudlí jako chapadlem. Děti jsou ve 3–4 týmech v rozích. Vždy vybíhá jeden z týmu, sleduje chapadlo, vezme míček a donese ho do domečku. Když se ho chapadlo dotkne, vrací se bez míčku. Vyhrává tým s nejvíce míčky.'},
{id:'g26',k:'game',n:'Tečovaná',c:'warm',e:3,min:7,kids:4,co:2,
 gear:['Rukavice', 'Měkké míčky', 'Kužely'],gn:'2–3 rukavice pro trenéry',dev:'obratnost, rychlost, bystrost, rozehřátí',
 d:'Dva až tři trenéři mají rukavici a přihazují si míč. Trenér s míčem se nesmí hýbat nohama, jen se natahuje, a tečuje běžce míčem v rukavici. Tečovaný si jde „dobít život“: vyběhne k dalšímu trenérovi mimo plochu, vezme míč, hodí mu ho do rukavice a vrací se do hry.'},
{id:'g27',k:'game',n:'Ocásky',c:'warm',e:3,min:6,kids:4,
 gear:['Látkové pásky na ocásky'],gn:'pro každé dítě, stačí i čepice',dev:'orientace v prostoru, mrštnost, pozornost, běh',
 d:'Každé dítě má vzadu za kalhotami „ocásek“ a běhá po vymezeném prostoru. Děti si navzájem ocásky berou. Vyhrává ten, kdo jich nasbírá nejvíce.'},
{id:'g28',k:'game',n:'Baseballový mrazík',c:'warm',t:['chytani'],e:3,min:7,kids:5,
 gear:['Rukavice', 'Malé fotbalové míče', 'Velké měkké míče'],gn:'velký balón jen pro variantu',dev:'tečování, práce s míčem, orientace v prostoru, rychlost a bystrost',
 d:'Mrazíci mají rukavice a zamrazují tečováním. Sluníčka mají malé fotbalové míče a rozmrazují předáním míče, míč si nechává rozmrazený hráč. Mrazíci se po čase obměňují.',
 va:'Zmrazené dítě rozmrazí podlezení nebo chycený velký měkký balón; kdo balón chytí, stává se sluníčkem.'},
{id:'g29',k:'game',n:'Nemocniční kopaná',c:'warm',e:3,min:7,kids:4,
 gear:['Malé fotbalové míče', 'Kužely'],gn:'kužely na vyznačení nemocnice',dev:'koordinace nohou, pohyb v poli, sledování míče a soupeře, pozice pod míčem',
 d:'Hráči vedou malé fotbalové míče nohama a navzájem se tečují rukou nebo dotykem soupeřova míče. Po první teči se drží za jedno rameno, po druhé za druhé, po třetí jdou do nemocnice: tam si třikrát vyhodí míč nad hlavu a dají hlavičku, pak se vrací.'},
{id:'g30',k:'game',n:'Pirátské ostrovy',c:'warm',t:['mety'],e:3,min:8,kids:6,
 gear:['Malé fotbalové míče', 'Kužely', 'Mety'],dev:'koordinace nohou, pohyb v poli, sledování svého míče i soupeře',
 d:'Z kuželů se kolem met vytvoří 4 ostrovy. Námořníci vedou míče nohama, musí obeplout všechny ostrovy a vrátit se na domácí metu. Dva piráti uprostřed je tečují nebo jim seberou odkopnutý míč. Chycený se stává pirátem. Na ostrovech jsou námořníci v bezpečí.'},
{id:'g31',k:'game',n:'Trenér velí míče na zem!',v:'Na magnety',c:'warm',t:['hra'],e:3,min:6,kids:2,
 gear:['Malé fotbalové míče'],gn:'varianta Na magnety je bez pomůcek',dev:'poslouchání trenéra, soustředění, koordinace, rychlá reakce na povel, padání a zvedání',
 d:'Hráči si chodí po hřišti a vyhazují míče. Trenér zakřičí povel a děti ho co nejrychleji splní, míč vždy položí na zem: „zadek na míč“, „břicho na míč“, „koleno na míč“, „ucho na míč“, „loket na míč“…',
 va:'Na magnety: na píšťalku trenér zavolá třeba „Magnet na kolena!“ a děti se bleskově přilepí ke kamarádovi koleny. Kdo zbude, udělá 3 dřepy.'},
/* --- CVIKY --- */
{id:'d01',k:'drill',n:'Držení míče',c:'hazeni',e:1,min:5,kids:1,st:1,gear:['Měkké míčky'],gn:'míček pro každé dítě',
 dev:'správný úchop míče, příprava na hod',
 d:'Dítě drží míč dvěma prsty nahoře (ukazovák a prostředník) a palcem dole, z boku je vidět písmeno C. Míč se nedrží v dlani. Trenér řekne „ukaž céčko“ a děti zvednou míč. Pak hledají šev a pokládají prsty přes něj.',
 kid:'„Míček držíme jako vajíčko, dva prstíky nahoře, palec dole. Ukaž mi céčko!“'},
{id:'d02',k:'drill',n:'Hod z kolena',c:'hazeni',e:1,min:6,kids:2,st:1,gear:['Měkké míčky', 'Rukavice'],
 dev:'rotace trupu, práce paže, dotažení hodu',
 d:'Dvojice 4–5 m od sebe. Dítě klečí na koleni na straně házecí ruky, druhá noha vpředu. Rukavice ukáže na partnera, házecí ruka jde dozadu „do kapsy“ a nahoru, hod a ruka dotáhne až ke koleni. 10 hodů, pak výměna.',
 kid:'„Rukavice ukáže na kamaráda, ruka letí nahoru jako letadlo a na konci plácne do kolena.“'},
{id:'d03',k:'drill',n:'Ukaž – krok – hoď',c:'hazeni',e:2,min:7,kids:2,st:1,gear:['Měkké míčky', 'Rukavice', 'Kužely'],
 dev:'krok opačnou nohou, rytmus hodu, přesnost',
 d:'Děti stojí bokem k cíli (trenér nebo síť). Trenér počítá nahlas: „Ukaž“ (rukavice na cíl), „krok“ (krok nohou opačnou k házející ruce), „hoď“ (hod a dotažení). Nejdřív bez míče, pak s míčem. Vzdálenost postupně prodlužovat.',
 kid:'„Ukaž, krok, hoď! Rukavicí míříš, nohou kročíš, rukou hodíš.“'},
{id:'d04',k:'drill',n:'Hod na síť nebo zeď',c:'hazeni',e:2,min:6,kids:1,st:1,gear:['Měkké míčky', 'Síť nebo plachta', 'Kužely'],gn:'koš míčků; místo sítě jde i stěna',
 dev:'opakování hodu, rychlý cyklus „seber–hoď“',
 d:'Každé dítě má u kuželu 3–4 míčky a hází je vrchním hodem na síť nebo zeď z 5–6 m. Po vyházení míčky sesbírá a začíná znovu. Hodně opakování bez čekání, trenér opravuje jednotlivce.',
 kid:'„Kdo dřív vyhází své míčky a správně je sebere?“'},
{id:'d05',k:'drill',n:'Krokodýlí tlama ve dvojicích',c:'chytani',e:1,min:6,kids:2,st:1,gear:['Měkké míčky', 'Rukavice'],
 dev:'chytání přízemních míčů, postoj, souhra obou rukou',
 d:'Dvojice sedí nebo stojí rozkročeně 3–4 m od sebe a kutálí si míček. Chytající má rukavici otevřenou u země („spodní čelist“) a druhou ruku nad ní („horní čelist“). Po chycení tlama zaklapne. Postupně ze stoje a z větší dálky.',
 kid:'„Krokodýl má tlamu dole u země, a když míček přijde – ham!“'},
{id:'d06',k:'drill',n:'Palce a malíčky',c:'chytani',e:1,min:6,kids:1,st:1,gear:['Měkké míčky', 'Rukavice'],
 dev:'postavení rukavice podle výšky míče',
 d:'Trenér hází měkké míčky spodem z 3–4 m. Míč nad pasem chytáme „palci k sobě“ (prsty rukavice nahoru), míč pod pasem „malíčky k sobě“ (prsty dolů). Trenér předem zavolá „palce“ nebo „malíčky“, později už nevolá.',
 kid:'„Vysoko? Palečky! Nízko? Malíčky!“'},
{id:'d07',k:'drill',n:'Krabí krok k míči',c:'chytani',e:2,min:6,kids:2,st:1,gear:['Kužely', 'Měkké míčky', 'Rukavice'],
 dev:'přesun bokem, postavení se před míč',
 d:'Dva kužely 3 m od sebe. Dítě v postoji polaře se posouvá bokem jako krab (nohy se nekříží) a trenér kutálí míč střídavě ke kuželům. Dítě se postaví před míč a chytí ho krokodýlí tlamou.',
 kid:'„Krab běhá bokem a nohy si nepřekříží. Postav se míčku do cesty!“'},
{id:'d08',k:'drill',n:'Chyť a přendej',c:'chytani',t:['hazeni'],e:2,min:6,kids:2,st:1,gear:['Měkké míčky', 'Rukavice'],
 dev:'rychlé přehození míče z rukavice do házecí ruky',
 d:'Dvojice 4 m od sebe. Po chycení dítě obě ruce přitáhne k hrudi („k pupíku“), přendá míč do házecí ruky a hodí zpět. Počítá se, kolik výměn dvojice zvládne za 30 sekund bez upuštění.',
 kid:'„Chyť, přitáhni k bříšku, vezmi a hoď!“'},
{id:'d09',k:'drill',n:'Postoj a úchop pálkaře',c:'odpal',e:1,min:5,kids:1,st:1,gear:['Pálky', 'Mety'],gn:'místo pálek jdou pěnové nudle, místo met kužely',
 dev:'postoj pálkaře, úchop pálky, bezpečná vzdálenost',
 d:'Každé dítě stojí u své mety nebo kuželu. Nohy na šířku ramen, kolena lehce pokrčená, pálka nad zadním ramenem. Úchop „klepání na dveře“: kloubky obou rukou v jedné řadě, ruce u sebe. Trenér kontroluje a děti si to „vyfotí“ (zamrznou).',
 kid:'„Ruce si zaklepou na dveře, pálka sedí na rameni jako papoušek.“'},
{id:'d10',k:'drill',n:'Švih na povel',c:'odpal',e:1,min:5,kids:1,st:1,gear:['Pálky'],gn:'nebo pěnové nudle; velké rozestupy',
 dev:'pořadí pohybu při švihu',
 d:'Děti stojí v řadě s velkými rozestupy, všechny čelem stejným směrem. Trenér volá: „Kouknout“ (hlava k nadhazovači), „krok“ (malý krok přední nohou), „otočit“ (boky a pupík k nadhazovači, švih). Nejdřív pomalu, pak plynule.',
 kid:'„Kouknout, krok, otočit pupík!“'},
{id:'d11',k:'drill',n:'Tee do sítě',c:'odpal',e:1,min:8,kids:1,st:1,gear:['Tee (stojánek)', 'Pálky', 'Helmy', 'Měkké míčky', 'Síť nebo plachta'],gn:'koš míčků',
 dev:'kontakt s míčem, opakování švihu',
 d:'Tee stojí 2–3 m před sítí. Dítě má 5 odpalů za sebou, trenér pokládá míčky na tee a opravuje jednu věc (postoj, oči na míči, dokončení švihu). Ostatní děti mezitím sbírají míčky nebo dělají švihy na sucho mimo dosah.',
 kid:'„Oči na míček až do konce, a pak teprve koukej, kam letí.“'},
{id:'d12',k:'drill',n:'Polož pálku a běž',c:'odpal',t:['mety'],e:2,min:6,kids:2,st:1,gear:['Pálky', 'Obruče', 'Mety'],
 dev:'bezpečné odložení pálky, start po odpalu',
 d:'Dítě udělá švih (s míčem z tee nebo bez), pálku položí do obruče vedle domácí mety a vyrazí na první metu. Pálka, která letí vzduchem, znamená návrat a nový pokus. Trenér stojí bezpečně stranou.',
 kid:'„Pálka si jde lehnout do postýlky, pak teprve utíkáme.“'},
{id:'d13',k:'drill',n:'Proběhni první metu',c:'mety',e:3,min:6,kids:2,st:1,gear:['Mety', 'Kužely'],gn:'kužel 3 m za první metou',
 dev:'běh přes první metu, šlápnutí na metu, zastavení za ní',
 d:'Děti startují od domácí mety a běží přes první metu až ke kuželu za ní. Na metě se nezastavují, jen na ni šlápnou. Za kuželem se otočí doprava a podívají se na trenéra.',
 kid:'„První metu probíháme jako cílem, nezastavujeme na ní!“'},
{id:'d14',k:'drill',n:'Banánek kolem met',c:'mety',e:3,min:6,kids:2,st:1,gear:['Mety', 'Kužely'],gn:'kužely na oblouk',
 dev:'obíhání met obloukem, šlapání na vnitřní roh mety',
 d:'Kužely vyznačí oblouk („banánek“) před první metou. Děti běží z domácí mety po oblouku, šlápnou na vnitřní roh první mety a pokračují na druhou. Trenér na metě ukazuje, kam šlápnout.',
 kid:'„Běžíme jako banán, ne do rohu. Šlápni na metu blíž ke hřišti!“'},
{id:'d15',k:'drill',n:'Start na povel',c:'mety',t:['hra'],e:3,min:5,kids:2,st:1,gear:['Mety'],
 dev:'reakce, start z mety a návrat na metu',
 d:'Děti stojí jednou nohou na metě. Trenér volá „Běž!“ (sprint na další metu), „Zpátky!“ (návrat na metu) nebo zvedne ruku (zůstat stát). Povely střídat rychle, aby děti poslouchaly.',
 kid:'„Noha na metě, uši nastražené!“'},
{id:'d16',k:'drill',n:'Kam hodím?',c:'hra',t:['hazeni'],e:2,min:6,kids:3,st:1,gear:['Mety', 'Měkké míčky', 'Rukavice'],
 dev:'herní myšlení, hod na první metu',
 d:'Trenér kutálí míč polaři a nahlas řekne situaci: „Běžec běží na první!“ Polař míč chytí a hodí na první metu, kde stojí spoluhráč nebo trenér. Později trenér situace střídá (domů, na druhou).',
 kid:'„Kdo má míček, myslí rychle: kam ho hodím?“'},
{id:'d17',k:'drill',n:'Připravený polař',c:'chytani',t:['hra'],e:1,min:5,kids:1,st:1,gear:['Rukavice'],
 dev:'postoj polaře, připravenost na míč',
 d:'Děti stojí na svých pozicích v poli. Trenér volá „Připravit!“ a děti zaujmou postoj: nohy od sebe, kolena pokrčená, ruce vpředu, váha na špičkách. Trenér předvede nadhoz na sucho a děti udělají dva malé skoky vpřed („hop-hop“).',
 kid:'„Pilka, kolena, rukavice dolů – a hop-hop!“'},
/* --- RUTINY --- */
{id:'r01',k:'routine',n:'Nástup a pozdrav',c:'rutina',slot:'start',min:3,kids:1,gear:[],
 dev:'struktura tréninku, pozornost',
 d:'Děti se postaví do kruhu nebo na čáru. Trenér přivítá každé dítě jménem, řekne jednou větou, co se dnes naučíme, a připomene hlavní pravidlo dne (např. „pálka jen u trenéra“).',kid:'„Ahoj baseballisti! Dnes se naučíme…“'},
{id:'r02',k:'routine',n:'Signály trenéra',c:'rutina',slot:'start',min:2,kids:1,gear:['Píšťalka'],
 dev:'pořádek na hřišti, rychlé ztišení skupiny',
 d:'Na začátku sezony a pak občas připomenout: ruka nahoře = všichni zvednou ruku a ztichnou; píšťalka = míče na zem a stát; „ke mně“ = přiběhnout do kruhu. Nacvičit jako hru na rychlost.',kid:'„Kdo zvedne ruku nejrychleji?“'},
{id:'r03',k:'routine',n:'Rozcvička zvířátka',c:'rutina',slot:'start',t:['warm'],min:4,kids:1,gear:['Kužely'],gn:'dráha 10–15 m',
 dev:'dynamické rozhýbání, koordinace',
 d:'Děti přecházejí po dráze 10–15 m a cestou mění zvířátka: čáp (vysoká kolena), žabka (skoky snožmo), medvěd (po čtyřech), krab (bokem), zajíc (poskoky), plameňák (stoj na jedné noze 3 vteřiny).',kid:'„A teď jsme… žabky!“'},
{id:'r04',k:'routine',n:'Pití a krátké zhodnocení',c:'rutina',slot:'drink',min:3,kids:1,gear:['Lahve s pitím'],
 dev:'odpočinek, pitný režim',
 d:'Všichni si dojdou pro lahev, posadí se a napijí. Trenér pochválí 2–3 konkrétní věci, které se povedly, a řekne, co následuje.',kid:'„Napít, nadechnout a jdeme dál!“'},
{id:'r05',k:'routine',n:'Rotace stanovišť',c:'rutina',slot:'info',min:1,kids:1,gear:['Píšťalka'],
 dev:'plynulý přesun skupin bez prostojů',
 d:'Na písknutí děti odloží pomůcky, skupina se seřadí do vláčku za trenérem a přejde na další stanoviště po směru hodinových ručiček. Trenér zůstává u svého stanoviště a novou skupinu přivítá.',kid:'„Vláček jede na další stanici!“'},
{id:'r06',k:'routine',n:'Závěrečný kruh a pokřik',c:'rutina',slot:'end',min:4,kids:1,gear:[],
 dev:'zpětná vazba, týmovost',
 d:'Děti v kruhu. Trenér se zeptá: „Co se ti dnes povedlo?“ a nechá odpovědět 3–4 děti. Ocení snahu, ne jen výsledek. Všichni dají ruce doprostřed a zakřičí týmový pokřik.',kid:'„Ruce doprostřed: Eagles!“'},
{id:'r07',k:'routine',n:'Protažení na závěr',c:'rutina',slot:'end',min:3,kids:1,gear:[],
 dev:'zklidnění po tréninku',
 d:'Pomalé protažení vsedě a ve stoje: „sahám na špičky“, „kočička a kráva“ (kulatá a prohnutá záda), kroužky rameny, „strom“ (stoj na jedné noze s rukama nahoře).',kid:'„Teď jsme líní lenochodi.“'},
{id:'r08',k:'routine',n:'Úklid jako závod',c:'rutina',slot:'end',min:3,kids:1,gear:['Tašky na pomůcky'],
 dev:'samostatnost, péče o vybavení',
 d:'Každá skupina dostane úkol (míčky, kužely, pálky do tašky, mety). Trenér odpočítává čas a všichni se snaží překonat rekord z minula.',kid:'„Kdo uklidí svoje dřív? Tři, dva, jedna, teď!“'},
{id:'r09',k:'routine',n:'Kontrola rukavic',c:'rutina',slot:'start',t:['chytani'],min:2,kids:1,gear:['Rukavice'],
 dev:'správná ruka, otevírání rukavice',
 d:'Každé dítě si nasadí rukavici, ukáže, že je na správné ruce (na ruce, kterou neházíme), a třikrát ji „otevře a zavře“ jako tlamu. Trenér zkontroluje zapnutí a velikost.',kid:'„Rukavice zívá: otevřít, zavřít!“'}
,
/* --- DOVEDNOSTNÍ RUTINY (progrese pro děti do U8) --- */
{id:'s01',k:'seq',n:'Házecí progrese',c:'hazeni',e:2,min:10,kids:2,st:1,gear:['Měkké míčky', 'Rukavice'],gn:'míček pro dvojici',
 dev:'celý pohyb hodu po částech: úchop, „ukaž psovi míček“, mířit rukavicí, krok, dotažení',
 d:'Dvojice stojí proti sobě 5–7 m (začátečníci blíž). Každý krok má zhruba 10–15 hodů, trenér chodí mezi dvojicemi a opravuje vždy jen jednu věc. Rutina se opakuje na každém tréninku, děti ji brzy zvládnou samy.',
 steps:[{n:'Úchop a „ukaž psovi míček“',min:1,d:'Bez hodu: rozdělit ruce, házecí ruka jde dozadu, míček kouká ven od těla („pejsek za tebou ho vidí“). Rukavice míří na kamaráda.'},
  {n:'Z kolena',min:2,d:'Koleno házecí strany na zemi, druhá noha vpředu. Hod jen z trupu a paže, ruka dotáhne ke kolenu.'},
  {n:'Čelem, z místa',min:2,d:'Stoj čelem, nohy na místě. Rozdělit ruce, kroužek paží, mířit, hod, ruka dotáhne až ke kapse na opačné straně.'},
  {n:'„Fotbalový kop“',min:2,d:'Krok nohou opačnou k házející ruce směrem k cíli a hod. Zadní noha se po hodu přetočí dopředu jako po kopu do míče.'},
  {n:'„Zhoupni a pal“',min:3,d:'Bokem k cíli, zhoupnout váhu na zadní nohu a zpět dopředu, z pohybu hod. Na konci obě dvojice o krok dál od sebe.'}],
 kid:'„Ukaž psovi míček, rukavicí miř, krok – a hoď!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s02',k:'seq',n:'Chytací progrese',c:'chytani',e:2,min:8,kids:2,st:1,gear:['Měkké míčky', 'Rukavice'],
 dev:'chytání do rukavice z různých směrů, pohyb k míči, komunikace',
 d:'Dvojice nebo trenér proti řadě dětí, 4–6 m. Hody jsou měkké a pomalé, s každým krokem trochu rychlejší. Vždy chytit, zavřít rukavici a přikrýt druhou rukou, míč přitáhnout ke středu těla.',
 steps:[{n:'Z místa na obě strany',min:2,d:'Hody na rukavicovou i druhou stranu těla, nad i pod pasem. Palečky nahoru u vysokých, malíčky dolů u nízkých.'},
  {n:'Pohyb do strany a dopředu',min:2,d:'Hod trochu vedle, dítě se k míči posune bokem nebo vyběhne dopředu, nečeká na místě.'},
  {n:'Pohyb i dozadu',min:2,d:'Míč nad hlavu: otočit se a běžet, necouvat pozpátku.'},
  {n:'Volání „Můj!“',min:2,d:'Dvě děti vedle sebe, míč mezi ně. Chytá jen ten, kdo nahlas zavolá „Můj!“, druhý uhne.'}],
 kid:'„Připrav se, koukej, běž k míči, chyť a přikryj!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s03',k:'seq',n:'Pět kroků polaře',c:'chytani',t:['hazeni'],e:2,min:8,kids:1,st:1,gear:['Měkké míčky', 'Rukavice', 'Mety'],gn:'meta jako cíl hodu',
 dev:'celý postup u přízemního míče od přípravy po hod',
 d:'Trenér kutálí míč dítěti, které projde všech pět kroků. Nejdřív pomalu na povely trenéra, pak plynule. Řada max. 3 dětí, ostatní mezitím dělají kroky „na sucho“.',
 steps:[{n:'Plížicí kroky',min:1,d:'Při nadhozu dva malé kroky k pálkaři: nejdřív noha házecí strany, pak rukavicová.'},
  {n:'Sednout na židli',min:1,d:'Pokrčit kolena jako při sedání na židli a zůstat těsně nad ní, rukavice se dotkne země.'},
  {n:'Rukavice vpředu',min:2,d:'Ruce před tělem, dlaň rukavice k pálkaři u země, druhá ruka nad ní: krokodýlí tlama.'},
  {n:'Přitáhnout do bříška',min:2,d:'Chytit vpředu, tlama zaklapne, míč přitáhnout do pupíku a vzít ho do házecí ruky.'},
  {n:'Krok a hod',min:2,d:'Krok házecí nohou, pak rukavicovou k cíli, rameno míří na metu, hod.'}],
 kid:'„Plíž, sedni, tlama, do bříška – a hoď!“',link:'https://www.littleleague.org/?p=11187',lt:'Little League – Five Steps of Fielding'},
{id:'s04',k:'seq',n:'Přízemní míče v řadě',c:'chytani',t:['hazeni'],e:2,min:7,kids:2,st:1,gear:['Měkké míčky', 'Rukavice', 'Mety'],
 dev:'chytání přízemních míčů, přesun bokem, hod na první metu',
 d:'Děti v řadě (max. 3), trenér kutálí nebo lehce odpaluje přízemní míče. Po chycení hod na trenéra nebo na metu a zařazení na konec řady.',
 steps:[{n:'Přímo na dítě',min:2,d:'Míč přímo na hráče, důraz na krokodýlí tlamu a míč před tělem.'},
  {n:'Vlevo a vpravo',min:2,d:'Míč 1–2 kroky do strany, dítě se posune bokem a postaví se před míč.'},
  {n:'Hod na první metu',min:3,d:'Po chycení krok a hod na trenéra stojícího na první metě. Trenér předvádí natažení na metě.'}],
 kid:'„Postav se míčku do cesty, chyť a hoď na první!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s05',k:'seq',n:'Vysoké míče od jednoduchých',c:'chytani',e:2,min:7,kids:1,st:1,gear:['Pytlíky s fazolemi', 'Měkké míčky', 'Rukavice'],gn:'pytlíky jen na první krok, stačí i měkké míčky',
 dev:'odhad letu míče, chytání nad hlavou, pohyb vpřed a vzad',
 d:'Trenér z krátké vzdálenosti vyhazuje měkké míčky nebo pytlíky. Postupně přidává výšku a pohyb.',
 steps:[{n:'Holé ruce',min:2,d:'Pytlík nebo měkký míček, chytání oběma rukama před obličejem, na rukavicové i druhé straně.'},
  {n:'S rukavicí',min:2,d:'Stejně, ale do rukavice. Palečky u sebe, míč chytat nad čelem.'},
  {n:'Dopředu a dozadu',min:2,d:'Míč před dítě i za něj. Dozadu otočit a běžet, ne couvat.'},
  {n:'Dva na jeden míč',min:1,d:'Dvě děti, jeden míč, kdo volá „Můj!“, ten chytá.'}],
 kid:'„Míček nad čelo, palečky k sobě, chyť a přikryj!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s06',k:'seq',n:'Pálkařská progrese',c:'odpal',e:1,min:10,kids:1,st:1,gear:['Pálky', 'Tee (stojánek)', 'Helmy', 'Měkké míčky', 'Síť nebo plachta'],
 dev:'postoj, nápřah, rovný švih, sledování míče, načasování',
 d:'Po krocích od švihu bez míče k pohyblivému míči. Pálkař vždy v helmě, ostatní stojí za vyznačenou čarou. Na tee lze dát na míček tečku, na kterou se dítě dívá až do kontaktu.',
 steps:[{n:'Švihy na sucho',min:2,d:'Nohy, ruce, nápřah (síla do zadní nohy), švih, dokončení. Trenér opravuje polohy.'},
  {n:'Z tee',min:3,d:'Rovný švih a vyvážené zakončení. Zadní noha „rozmáčkne brouka“, oči na tečce na míčku.'},
  {n:'Nahoz ze strany',min:3,d:'Trenér klečí bokem a pomalu nahazuje spodem měkké míčky. Stejná technika jako u tee.'},
  {n:'Nahoz zepředu',min:2,d:'Trenér na koleni 5–6 m před pálkařem za ochrannou sítí, pomalý nahoz spodem.'}],
 kid:'„Nápřah, oči na míček, rozmáčkni brouka!“',link:'https://www.littleleague.org/university/articles/hitting-drill-progression/',lt:'Little League – Hitting Drill Progression'},
{id:'s07',k:'seq',n:'Běh po metách krok za krokem',c:'mety',e:3,min:8,kids:2,st:1,gear:['Mety', 'Kužely'],
 dev:'probíhání první mety, oblouk, zastavení na metě, start po odpalu',
 d:'Děti startují po jednom z domácí mety, další vybíhá, když je předchozí v polovině. Trenér stojí u mety a ukazuje.',
 steps:[{n:'Přes první metu',min:2,d:'Proběhnout první metu až ke kuželu za ní, na metě nezastavovat.'},
  {n:'Banánek kolem první',min:2,d:'Oblouk před první metou, šlápnout na vnitřní roh a pokračovat na druhou.'},
  {n:'Zastavit na druhé a třetí',min:2,d:'Na druhé a třetí metě se zastavuje a zůstává na ní nohou.'},
  {n:'Start po odpalu',min:2,d:'Dítě stojí na první metě, trenér odpálí nebo hodí míč: start hned po kontaktu.'}],
 kid:'„První probíháme, druhou a třetí držíme!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s08',k:'seq',n:'Rozcvička hráče',c:'warm',e:2,min:6,kids:1,gear:['Kužely'],gn:'dráha 10–15 m',
 dev:'dynamické rozehřátí nohou, trupu a paží před házením',
 d:'Děti v řadě přecházejí dráhu tam a zpět, každý cvik jednou dráhou. Na konci kroužení pažemi a „objetí“.',
 steps:[{n:'Vysoká kolena',min:1,d:'Kolena co nejvýš, ruce pracují.'},
  {n:'Zakopávání',min:1,d:'Paty k zadku.'},
  {n:'Posunné kroky',min:1,d:'Bokem, nohy se nekříží, cestou zpět druhým bokem.'},
  {n:'Rotace trupu',min:1,d:'Ruce v bok, otáčení do stran při chůzi.'},
  {n:'Krátké sprinty',min:1,d:'Z polovičního dřepu sprint 10 m.'},
  {n:'Paže a „objetí“',min:1,d:'Kroužení pažemi dopředu a dozadu, pak objímání sebe sama.'}],
 kid:'„Kolena až k bradě!“',link:'https://www.baseball.bc.ca/uploads/files/8U%20Practice%20Plans%20FINAL%20DOC%202019(1).pdf',lt:'Baseball BC – 8U Practice Plans (PDF)'},
{id:'s09',k:'seq',n:'Atletická abeceda',c:'warm',t:['mety'],e:2,min:8,kids:1,gear:['Kužely'],gn:'dráha 10–15 m',
 dev:'technika běhu, odraz, koordinace nohou a paží, rytmus',
 d:'Děti stojí v zástupech na začátku dráhy (10–15 m, pro U7 spíš kratší). Každý cvik jednou dráhou, zpět se vrací chůzí po straně. Další dítě vybíhá, když je předchozí ve třetině. Trenér cvik vždy nejdřív předvede a hlídá hlavně vzpřímený trup a práci paží, ne rychlost.',
 steps:[{n:'Liftink',min:1,d:'Drobné rychlé krůčky přes špičky, kolena jen nízko, paže pracují v rytmu.'},
  {n:'Skipink',min:1,d:'Vysoká kolena do pravého úhlu, odraz ze špičky, trup vzpřímený.'},
  {n:'Zakopávání',min:1,d:'Paty k zadku, kolena míří dolů, malé krůčky dopředu.'},
  {n:'Předkopávání',min:1,d:'Napnutá noha vykopává dopředu, došlap na špičku. Pro nejmenší jako pochod „vojáčka“.'},
  {n:'Cval stranou',min:1,d:'Bokem, nohy se nepřekříží, paže do upažení. Tam jedním bokem, zpět druhým.'},
  {n:'Odpichy',min:1,d:'Dlouhé odrazy ze špičky, koleno švihové nohy jde vysoko dopředu. „Přeskakuj kaluže.“'},
  {n:'Poskoky se švihem paží',min:1,d:'Skipink s poskokem, paže se švihají vysoko nad hlavu.'},
  {n:'Rovinka',min:1,d:'Na závěr volný rychlý výběh dráhy, uvolněně, bez křečí.'}],
 kid:'„Hlava nahoře, ruce běží s námi!“'}

];

/* ===== Animace: hřiště shora (děti = tečky), technika = postava z boku ===== */
const TAU=Math.PI*2;
const ez=u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;
function kfAt(p,t,lin){if(!p||!p.length)return[0,0,0];if(t<=p[0][0])return p[0].slice(1);
 for(let i=1;i<p.length;i++){const b=p[i];if(t<=b[0]){const a=p[i-1],r=(t-a[0])/((b[0]-a[0])||1),u=lin?r:ez(r);return a.slice(1).map((v,j)=>v+(b[j+1]-v)*u)}}
 return p[p.length-1].slice(1)}
/* bloudění po ploše (uzavřená smyčka) */
const Wd=(cx,cy,rx,ry,a,b,ph)=>t=>[cx+rx*Math.sin(TAU*a*t+ph),cy+ry*Math.sin(TAU*b*t+ph*1.7+.6),0];
/* let míče: [t0,t1,x0,y0,x1,y1,výška] */
function fly(segs){const p=[];segs.forEach(([t0,t1,x0,y0,x1,y1,h])=>{for(let i=0;i<=8;i++){const u=i/8;p.push([t0+(t1-t0)*u,x0+(x1-x0)*u,y0+(y1-y0)*u,(h||0)*4*u*(1-u)])}});
 if(p[0][0]>0)p.unshift([0].concat(p[p.length-1].slice(1)));if(p[p.length-1][0]<1)p.push([1].concat(p[p.length-1].slice(1)));return p}
const pth=a=>a.map(q=>q.length===3?q.concat([0]):q);
const HM=[50,56],B1=[72,34],B2=[50,12],B3=[28,34];
function around(t0,t1,stop){const d=(t1-t0)/4,p=[[0,...HM],[t0,...HM],[t0+d,...B1],[t0+2*d,...B2]];if(stop!==2){p.push([t0+3*d,...B3],[t1,...HM])}p.push([1,...p[p.length-1].slice(1)]);return pth(p)}
const K_=(f,o)=>Object.assign({t:'k',f},o||{});
const KP=(p,o)=>Object.assign({t:'k',p:pth(p)},o||{});
const BALL=(segs,o)=>Object.assign({t:'b',p:fly(segs),lin:1},o||{});
const ring=(cx,cy,r,n,ph)=>Array.from({length:n},(_,i)=>[cx+r*Math.cos(TAU*i/n+(ph||0)),cy+r*Math.sin(TAU*i/n+(ph||0))]);

/* postava z boku, tvář doprava; úhly od svislice dolů, kladné = dopředu */
const FP={x:40,y:39,lean:0,ls:15,le:-15,rs:-10,re:-15,lh:5,lk:0,rh:-5,rk:0,bat:-999,glove:1,ball:0};
const pz=o=>Object.assign({},FP,o);
function fig(o){const r=d=>d*Math.PI/180,pt=(x,y,a,l)=>[x+l*Math.sin(r(a)),y+l*Math.cos(r(a))];
 const hip=[o.x,o.y],neck=[o.x+14*Math.sin(r(o.lean)),o.y-14*Math.cos(r(o.lean))],head=[neck[0]+4.6*Math.sin(r(o.lean)),neck[1]-4.6*Math.cos(r(o.lean))];
 const le=pt(neck[0],neck[1],o.ls,8),lh=pt(le[0],le[1],o.ls+o.le,8),re=pt(neck[0],neck[1],o.rs,8),rh=pt(re[0],re[1],o.rs+o.re,8);
 const lk=pt(hip[0],hip[1],o.lh,9.5),lf=pt(lk[0],lk[1],o.lh+o.lk,9.5),rk=pt(hip[0],hip[1],o.rh,9.5),rf=pt(rk[0],rk[1],o.rh+o.rk,9.5);
 const be=o.bat>-900?pt(rh[0],rh[1],o.bat,13):null;return{hip,neck,head,le,lh,re,rh,lk,lf,rk,rf,be}}
function poseAt(ps,t){if(t<=ps[0][0])return ps[0][1];for(let i=1;i<ps.length;i++){if(t<=ps[i][0]){const a=ps[i-1],b=ps[i],u=ez((t-a[0])/((b[0]-a[0])||1)),o={};
 Object.keys(b[1]).forEach(k=>{const x=a[1][k],y=b[1][k];o[k]=(x<=-900||y<=-900)?(u<.5?x:y):x+(y-x)*u});return o}}return ps[ps.length-1][1]}
const loopP=ps=>ps.concat([[1,ps[0][1]]]);

/* opakované pózy */
const STAND=pz({});
const THR={
 ready:pz({ls:60,le:80,rs:60,re:80,ball:1}),
 back:pz({lean:-5,ls:95,le:0,rs:-115,re:-35,lh:25,lk:-5,rh:-15,rk:5,ball:1}),
 up:pz({lean:5,ls:70,le:20,rs:-190,re:-15,lh:25,lk:-8,rh:-20,rk:10,ball:1}),
 rel:pz({lean:22,ls:25,le:40,rs:-262,re:0,lh:22,lk:-15,rh:-38,rk:30,ball:0}),
 fin:pz({lean:35,ls:-10,le:60,rs:-335,re:0,lh:20,lk:-20,rh:-52,rk:45,ball:0})};
const BAT={
 st:pz({y:41,lean:5,lh:22,lk:-16,rh:-22,rk:16,ls:-20,le:-150,rs:-30,re:-140,bat:-165,glove:0}),
 load:pz({y:41,lean:-2,lh:18,lk:-10,rh:-28,rk:20,ls:-35,le:-140,rs:-45,re:-130,bat:-150,glove:0}),
 hit:pz({y:41,lean:6,lh:26,lk:0,rh:-14,rk:32,ls:72,le:-12,rs:70,re:-10,bat:-270,glove:0}),
 fin:pz({y:41,lean:4,lh:24,lk:0,rh:-10,rk:40,ls:120,le:-40,rs:125,re:-45,bat:-330,glove:0})};
const READY=pz({y:43,lean:35,lh:50,lk:-60,rh:22,rk:-52,ls:32,le:10,rs:36,re:5});
const KNEEL={x:40,y:48.5,lh:90,lk:-90,rh:0,rk:-90};

/* scény: s = kulisy, a = aktéři (k dítě, k2 druhý tým, x honič, c trenér, b míč), cap = popisky, fig = postava */
const AN={
g01:{d:6,s:[['dash',50,3,50,59],['txt',22,7,'naše zahrádka'],['txt',78,7,'soupeř']],cap:[[0,'Seber míček a vrchním hodem přes čáru']],a:[
 K_(Wd(25,18,8,5,1,2,0)),K_(Wd(20,42,7,6,2,1,1)),K_(Wd(35,30,6,8,1,1,2)),
 K_(Wd(75,20,8,6,2,1,3),{t:'k2'}),K_(Wd(80,42,6,7,1,2,1),{t:'k2'}),K_(Wd(66,32,6,6,1,1,4),{t:'k2'}),
 BALL([[.05,.28,30,22,72,30,14],[.55,.78,72,30,30,22,14]]),BALL([[.3,.52,70,44,28,38,14],[.8,1,30,38,70,44,12]]),BALL([[.18,.4,22,40,78,18,14],[.68,.9,78,18,22,40,14]])]},
g02:{d:5,s:[['dash',16,4,16,58],['bucket',42,18],['txt',42,13,'1'],['hoop',62,40,5],['txt',62,31,'2'],['bucket',84,26],['txt',84,21,'3']],cap:[[0,'Hoď do truhly, vzdálenější = víc zlaťáků']],a:[
 KP([[0,12,31],[.33,12,31],[.36,6,40],[.66,6,40],[.7,12,31],[1,12,31]]),KP([[0,6,40],[.33,6,40],[.36,12,31],[.66,12,31],[.7,6,22],[1,6,22]]),KP([[0,6,22],[.66,6,22],[.7,12,31],[1,12,31]]),
 BALL([[.05,.28,13,30,42,18,10],[.38,.6,13,30,62,40,12],[.72,.95,13,30,84,26,16]])]},
g03:{d:6,s:[['bucket',84,20],['bucket',84,44]],cap:[[0,'Míček putuje řadou až do kbelíku']],a:[
 ...[14,30,46,62].map(x=>KP([[0,x,20]])),...[14,30,46,62].map(x=>KP([[0,x,44]],{t:'k2'})),
 BALL([[0,.2,14,20,30,20,6],[.22,.42,30,20,46,20,6],[.44,.64,46,20,62,20,6],[.66,.86,62,20,84,20,7]]),
 BALL([[.05,.27,14,44,30,44,6],[.3,.5,30,44,46,44,6],[.52,.72,46,44,62,44,6],[.75,.95,62,44,84,44,7]])]},
g04:{d:5,s:[['dash',12,4,12,58],['cone',52,18],['cone',66,32],['cone',80,46],['txt',30,58,'krok + dotažení = platný hod']],cap:[[0,'Hoď co nejdál a překonej svůj kužel']],a:[
 KP([[0,10,18]]),KP([[0,10,32]]),KP([[0,10,46]]),
 BALL([[.05,.3,11,18,56,18,16],[.35,.62,11,32,70,32,18],[.68,.95,11,46,84,46,20]])]},
g05:{d:6,s:[['ring',50,31,22]],cap:[[0,'Vybij trenéra a nahlas řekni svoje body']],a:[
 {t:'c',f:Wd(50,31,6,4,1,2,0)},...ring(50,31,22,7).map(([x,y])=>KP([[0,x,y]])),
 BALL([[.05,.25,72,31,52,32,6],[.35,.55,39,50,48,30,6],[.65,.85,32,18,50,30,6]]),BALL([[.2,.4,61,50,51,33,6],[.5,.7,58,10,49,30,6],[.8,1,30,36,51,32,6]])]},
g06:{d:6,s:[['ring',50,31,17],['txt',50,32,'hrnec']],cap:[[0,'Míček pálí – rychle dál!']],a:[
 ...ring(50,31,17,6,-Math.PI/2).map(([x,y])=>KP([[0,x,y]])),
 BALL(ring(50,31,17,6,-Math.PI/2).map((p,i,arr)=>{const q=arr[(i+1)%6];return[i/6,(i+1)/6-.02,p[0],p[1],q[0],q[1],4]}))]},
g07:{d:6,s:[['cone',30,24],['cone',30,38]],cap:[[0,'Krokodýlí tlama: rukavice dole, druhá ruka nahoře'],[.5,'Chycené vajíčko zpět trenérovi, na konec řady']],a:[
 {t:'c',p:pth([[0,82,31]])},KP([[0,30,31],[.55,30,31],[.65,10,31],[1,10,31]]),KP([[0,22,31],[.6,22,31],[.7,30,31],[1,30,31]]),KP([[0,15,31],[.6,15,31],[.7,22,31],[1,22,31]]),
 BALL([[.05,.38,80,31,31,31,0],[.45,.62,31,31,80,31,8]])]},
g08:{d:6,cap:[[0,'Balónek padá pomalu – postav se pod něj'],[.55,'Varianta Můj!: chytá ten, kdo zavolá']],a:[
 {t:'c',p:pth([[0,50,50]])},KP([[0,40,22],[.25,48,22],[.5,48,22],[.6,40,22],[1,40,22]]),KP([[0,60,22],[.55,60,22],[.8,53,22],[1,60,22]],{t:'k2'}),
 BALL([[0,.4,50,48,48,22,30],[.5,.92,48,22,53,22,26]])]},
g09:{d:3,cap:[[0,'Vyhoď, chyť do rukavice a přikryj']],a:[
 ...[[25,31,0],[50,31,.3],[75,31,.6]].flatMap(([x,y,o])=>[KP([[0,x,y]]),BALL([[o*.5,o*.5+.6,x+1,y,x+1,y,22]])])]},
g10:{d:6,s:[['zone',8,30,84,14,'1 bod'],['zone',8,14,84,16,'3 body'],['zone',38,2,24,12,'5']],cap:[[0,'Tři odpaly z tee, body za zónu']],a:[
 KP([[0,46,55]]),{t:'swing',x:47,y:55,at:[[.05,.12],[.38,.45],[.71,.78]]},
 BALL([[.1,.32,50,54,25,37,10],[.43,.65,50,54,70,22,14],[.76,.98,50,54,50,8,18]])]},
g11:{d:4,cap:[[0,'Nudle místo pálky, oči na balónku']],a:[
 {t:'c',p:pth([[0,72,30]])},KP([[0,46,32]]),{t:'swing',x:47,y:32,at:[[.48,.58]]},
 BALL([[0,.5,70,30,50,30,10],[.55,.95,50,30,20,10,16]])]},
g12:{d:6,s:[['diamond'],['hoop',42,58,3]],cap:[[0,'Odpal, pálku do obruče, běž na první']],a:[
 KP([[0,47,56],[.15,47,56],[.25,42,58],[.3,44,56],[.6,72,34],[1,72,34]]),{t:'swing',x:48,y:56,at:[[.04,.12]]},
 KP([[0,56,26],[.3,56,26],[.4,60,24],[1,60,24]],{t:'k2'}),KP([[0,74,30],[.5,73,32],[1,74,30]],{t:'k2'}),
 BALL([[.1,.32,50,55,60,24,8],[.42,.58,60,24,73,32,6]])]},
g13:{d:6,s:[['diamond']],cap:[[0,'Šlápni na každou metu! První, druhá, třetí, domů']],a:[KP(around(0,.9)),KP(around(.06,.96),{t:'k2'})]},
g14:{d:5,s:[['base',18,31],['base',82,31]],cap:[[0,'Polaři si přihrávají a tečují běžce']],a:[
 KP([[0,18,31],[.45,40,31],[.55,40,31],[1,18,31]],{t:'k2'}),KP([[0,82,31],[.3,62,31],[.6,72,31],[1,82,31]],{t:'k2'}),
 KP([[0,50,31],[.2,40,33],[.4,58,30],[.6,46,32],[.8,70,31],[1,50,31]]),
 BALL([[.05,.22,19,31,62,31,8],[.32,.5,62,31,40,31,8],[.6,.8,40,31,72,31,8]])]},
g15:{d:7,s:[['diamond']],cap:[[0,'Zelená! Auta jezdí'],[.4,'Parkovat u mety 1!'],[.75,'Garáž! Couvat domů']],a:[
 ...[0,1,2,3].map(i=>K_(t=>{const w=Wd(48,34,16,12,1+i%2,2-i%2,i*1.4)(t*2.5);if(t<.4)return w;if(t<.75){const u=Math.min(1,(t-.4)/.12);return[w[0]+(72-i*4-w[0])*u,w[1]+(34+i*3-w[1])*u,0]}const u=Math.min(1,(t-.75)/.18),s=[72-i*4,34+i*3];return[s[0]+(50+i*2-s[0])*u,s[1]+(56-s[1])*u,0]}))]},
g16:{d:6,cap:[[0,'Běhej volně…'],[.5,'SOCHA! Postoj polaře']],a:[
 ...[0,1,2,3,4].map(i=>K_(t=>Wd(50,31,30,18,1,2,i*1.3)(Math.min(t,.5)*2)))]},
g17:{d:6,s:[['txt',50,8,'Trenér říká…']],cap:[[0,'„Trenér říká: běž na místě!“ – všichni běží'],[.5,'„Švihni!“ – bez Trenér říká se nehýbáme']],a:[
 {t:'c',p:pth([[0,50,16]])},...[20,35,50,65,80].map((x,i)=>K_(t=>[x,40+(t<.5?Math.sin(t*TAU*8+i)*1.5:0),0]))]},
g18:{d:7,s:[['diamond']],cap:[[0,'Vláček obíhá mety, pak mini zápas']],a:[0,1,2,3,4].map(i=>KP(around(i*.04,.8+i*.04)))},
g19:{d:6,cap:[[0,'Dvojice nese poklad na nudlích z A do B']],s:[['txt',10,8,'A'],['txt',90,8,'B']],a:[
 KP([[0,12,20],[.5,86,20],[1,12,20]]),KP([[0,12,30],[.5,86,30],[1,12,30]]),{t:'link',a:0,b:1},BALL([[0,1,12,25,12,25,0]]),
 KP([[0,12,40],[.55,80,40],[1,12,40]],{t:'k2'}),KP([[0,12,50],[.55,80,50],[1,12,50]],{t:'k2'}),{t:'link',a:4,b:5}]},
g20:{d:7,s:[['grid',40,16,20]],cap:[[0,'Vyběhni, polož do mřížky, vrať se']],a:[
 KP([[0,10,24],[.12,44,20],[.24,10,24],[.5,10,24],[.62,50,26],[.74,10,24],[1,10,24]]),KP([[0,90,36],[.25,90,36],[.37,56,32],[.49,90,36],[.75,90,36],[.87,44,32],[1,90,36]],{t:'k2'}),
 {t:'dot',x:44,y:20,show:.12},{t:'dot',x:56,y:32,show:.37,c:'k2'},{t:'dot',x:50,y:26,show:.62},{t:'dot',x:44,y:32,show:.87,c:'k2'}]},
g21:{d:3,cap:[[0,'Vsedě přetáhni lano k sobě']],a:[K_(t=>[38+Math.sin(t*TAU)*4,31,0]),K_(t=>[62+Math.sin(t*TAU)*4,31,0],{t:'k2'}),{t:'link',a:0,b:1}]},
g22:{d:6,cap:[[0,'Stavitelé staví, bořitelé shazují – jen rukama']],a:[
 ...[[20,15],[40,45],[60,20],[80,40],[30,32],[70,10],[50,52]].map(([x,y],i)=>({t:'cone',x,y,down:i%2?[[.2+i*.05,.55+i*.03]]:[[0,.3+i*.04],[.7,1]]})),
 K_(Wd(40,30,20,14,1,2,0)),K_(Wd(60,30,20,14,2,1,1)),K_(Wd(50,30,25,18,1,1,2),{t:'k2'}),K_(Wd(45,25,18,16,2,1,3),{t:'k2'})]},
g23:{d:8,s:[['rect',10,6,80,50]],cap:[[0,'Medvěd chodí po čtyřech a loví'],[.5,'Chycený se mění v dalšího medvěda']],a:[
 {t:'x',f:Wd(50,31,22,14,1,1,0)},K_(Wd(50,31,34,20,2,1,1),{to:'x',at:.5}),K_(Wd(50,31,30,18,1,2,2)),K_(Wd(50,31,32,16,2,3,3)),K_(Wd(50,31,28,20,3,2,4))]},
g24:{d:6,s:[['line',4,20,96,20],['line',4,31,96,31],['line',4,42,96,42],['txt',50,59,'start'],['txt',50,4,'cíl']],cap:[[0,'Proběhni ranvejí, letadla jezdí jen po čarách']],a:[
 {t:'x',f:t=>[50+Math.sin(TAU*t)*35,20,0]},{t:'x',f:t=>[50+Math.sin(TAU*t*2+1)*30,31,0]},{t:'x',f:t=>[50+Math.sin(TAU*t+2)*35,42,0]},
 KP([[0,25,56],[.6,30,6],[1,25,56]]),KP([[0,50,56],[.1,50,56],[.7,46,6],[1,50,56]]),KP([[0,75,56],[.2,75,56],[.8,70,6],[1,75,56]])]},
g25:{d:6,s:[['cone',8,8],['cone',92,8],['cone',8,54],['cone',92,54]],cap:[[0,'Vyhni se chapadlu, odnes míček domů']],a:[
 {t:'c',p:pth([[0,50,31]])},{t:'spin',x:50,y:31,r:16,rev:2},
 KP([[0,10,10],[.3,45,27],[.35,45,27],[.6,10,10],[1,10,10]]),KP([[0,90,52],[.2,90,52],[.5,56,36],[.55,56,36],[.8,90,52],[1,90,52]],{t:'k2'}),
 BALL([[.32,.6,46,28,11,11,0]]),BALL([[.52,.8,55,35,89,51,0]])]},
g26:{d:6,s:[['rect',15,8,70,46]],cap:[[0,'Trenér s míčem v rukavici tečuje'],[.5,'Tečovaný si jde „dobít život“']],a:[
 {t:'c',p:pth([[0,35,25]])},{t:'c',p:pth([[0,65,38]])},{t:'c',p:pth([[0,94,31]])},
 BALL([[.05,.2,36,25,64,38,6],[.35,.5,64,38,36,25,6],[.65,.8,36,25,64,38,6]]),
 KP([[0,50,40],[.45,40,30],[.5,40,30],[.7,92,31],[.8,92,31],[1,50,40]]),K_(Wd(50,31,30,18,2,1,1)),K_(Wd(50,31,28,16,1,2,3))]},
g27:{d:6,s:[['rect',10,6,80,50]],cap:[[0,'Seber co nejvíc ocásků']],a:[0,1,2,3,4].map(i=>K_(Wd(50,31,34,20,1+i%2,2+i%3,i*1.2),{tail:1,t:i%2?'k2':'k'}))},
g28:{d:6,cap:[[0,'Mrazík zamrazí tečováním'],[.5,'Sluníčko rozmrazí podáním míče']],a:[
 {t:'x',f:Wd(50,31,30,18,1,2,0)},K_(t=>t<.3?Wd(50,31,34,20,2,1,1)(t):Wd(50,31,34,20,2,1,1)(.3)),
 K_(t=>{const f=Wd(50,31,34,20,2,1,1)(.3);const w=Wd(50,31,30,16,1,1,3)(t);if(t<.45)return w;if(t<.6){const u=(t-.45)/.15;return[w[0]+(f[0]+3-w[0])*u,w[1]+(f[1]-w[1])*u,0]}return w},{t:'k2'}),K_(Wd(50,31,28,20,3,1,2))]},
g29:{d:7,s:[['zone',80,44,16,14,'nemocnice']],cap:[[0,'Hlídej si míč u nohou a tečuj ostatní'],[.6,'Třetí teč = nemocnice: 3× nahoru a hlavička']],a:[
 K_(Wd(45,28,26,16,1,2,0)),{t:'b',f:t=>{const w=Wd(45,28,26,16,1,2,0)(t);return[w[0]+2.5,w[1]+1.5,0]}},
 K_(t=>t<.55?Wd(45,28,26,16,2,1,1)(t):[88,51,0]),{t:'b',f:t=>{if(t<.55){const w=Wd(45,28,26,16,2,1,1)(t);return[w[0]+2.5,w[1]+1.5,0]}return[88,51,Math.abs(Math.sin((t-.55)*TAU*3.3))*12]}}]},
g30:{d:8,s:[['diamond'],...[[72,34],[50,12],[28,34],[50,56]].flatMap(([x,y])=>[['cone',x-5,y-4],['cone',x+5,y+4]])],cap:[[0,'Obepluj ostrovy, piráti tečují']],a:[
 KP(around(0,.9)),{t:'b',f:t=>{const p=kfAt(around(0,.9),t);return[p[0]+2.5,p[1]+1.5,0]}},{t:'x',f:Wd(50,34,10,10,1,2,0)},{t:'x',f:Wd(50,34,12,8,2,1,2)}]},
g31:{d:6,cap:[[0,'Vyhazuj si míč a choď'],[.5,'Míče na zem, zadek na míč!']],a:[
 ...[0,1,2].flatMap(i=>{const w=Wd(50,31,30,18,1,1+i%2,i*2);return[K_(t=>w(Math.min(t,.5)*2)),{t:'b',f:t=>{const p=w(Math.min(t,.5)*2);return[p[0]+2,p[1],t<.5?Math.abs(Math.sin(t*TAU*4+i))*8:0]}}]})]},
/* cviky */
d01:{d:4,s:[['big',78,30,'C']],cap:[[0,'Dva prstíky nahoře, palec dole'],[.5,'Ukaž céčko!']],fig:loopP([[0,pz({ball:1,rs:30,re:60})],[.4,pz({ball:1,rs:30,re:60})],[.6,pz({ball:1,rs:120,re:40})],[.9,pz({ball:1,rs:120,re:40})]])},
d02:{d:3.5,cap:[[0,'Koleno dole, rukavice míří'],[.45,'Ruka letí nahoru jako letadlo'],[.7,'…a plácne do kolena']],
 fig:loopP([[0,pz(Object.assign({},KNEEL,{ls:95,le:0,rs:60,re:80,ball:1}))],[.3,pz(Object.assign({},KNEEL,{ls:95,le:0,rs:-115,re:-35,ball:1}))],[.45,pz(Object.assign({},KNEEL,{lean:5,ls:70,le:20,rs:-190,re:-15,ball:1}))],[.55,pz(Object.assign({},KNEEL,{lean:25,ls:30,le:40,rs:-262,re:0}))],[.75,pz(Object.assign({},KNEEL,{lean:35,ls:-10,le:60,rs:-345,re:0}))],[.9,pz(Object.assign({},KNEEL,{ls:95,le:0,rs:60,re:80}))]]),
 a:[BALL([[.55,.85,52,22,96,30,6]],{hide:[0,.55]})]},
d03:{d:4,cap:[[0,'Ukaž'],[.3,'Krok'],[.55,'Hoď!']],fig:loopP([[0,THR.ready],[.3,THR.back],[.45,THR.up],[.55,THR.rel],[.75,THR.fin],[.9,THR.ready]]),a:[BALL([[.55,.85,52,20,96,28,8]],{hide:[0,.55]})]},
d04:{d:5,s:[['net',86,6,86,56],['cone',18,18],['cone',18,44]],cap:[[0,'Vyházej svoje míčky na síť, seber a znovu']],a:[
 KP([[0,20,22]]),KP([[0,20,40]]),BALL([[0,.25,21,22,85,24,12],[.25,.45,85,24,70,26,0],[.5,.75,21,22,85,30,12]]),BALL([[.1,.35,21,40,85,38,12],[.35,.55,85,38,68,40,0],[.6,.85,21,40,85,42,12]])]},
d05:{d:4,cap:[[0,'Kutálej, krokodýl chytá: ham!']],a:[KP([[0,22,20]]),KP([[0,62,20]],{t:'k2'}),KP([[0,22,44]]),KP([[0,62,44]],{t:'k2'}),
 BALL([[0,.45,24,20,60,20,0],[.5,.95,60,20,24,20,0]]),BALL([[.25,.7,60,44,24,44,0],[.75,1,24,44,42,44,0]])]},
d06:{d:4,cap:[[0,'Vysoko? Palečky k sobě!'],[.5,'Nízko? Malíčky k sobě!']],
 fig:loopP([[0,STAND],[.25,pz({ls:150,le:10})],[.4,pz({ls:150,le:10})],[.5,STAND],[.72,pz({y:41,lean:15,ls:45,le:0,lh:12,lk:-12,rh:-8,rk:8})],[.88,pz({y:41,lean:15,ls:45,le:0,lh:12,lk:-12,rh:-8,rk:8})]]),
 a:[{t:'c',p:pth([[0,90,40]])},BALL([[.05,.25,88,32,55,13,6],[.55,.72,88,32,52,40,4]],{hide:[.4,.55]})]},
d07:{d:5,s:[['cone',36,42],['cone',64,42]],cap:[[0,'Krab: bokem, nohy se nekříží'],[.5,'Postav se míčku do cesty']],a:[
 {t:'c',p:pth([[0,50,8]])},KP([[0,50,42],[.3,38,42],[.5,50,42],[.8,62,42],[1,50,42]]),BALL([[.05,.3,50,10,38,40,0],[.3,.55,38,40,50,10,6],[.55,.8,50,10,62,40,0],[.8,1,62,40,50,10,6]])]},
d08:{d:3,cap:[[0,'Chyť, k bříšku, přendej, hoď!']],a:[KP([[0,30,31]]),KP([[0,70,31]],{t:'k2'}),BALL([[.05,.4,32,31,68,31,6],[.55,.9,68,31,32,31,6]])]},
d09:{d:4,cap:[[0,'Nohy na šířku ramen, kolena pokrčená'],[.5,'Ruce klepou na dveře, pálka na rameni']],fig:loopP([[0,BAT.st],[.5,pz(Object.assign({},BAT.st,{y:42}))]]),s:[['home',44,59]]},
d10:{d:4,cap:[[0,'Kouknout'],[.3,'Krok'],[.55,'Otočit pupík!']],fig:loopP([[0,BAT.st],[.3,BAT.load],[.55,BAT.hit],[.7,BAT.fin],[.9,BAT.st]])},
d11:{d:4,s:[['tee',58,52],['net',92,10,92,56]],cap:[[0,'Oči na míček až do kontaktu']],fig:loopP([[0,BAT.st],[.3,BAT.load],[.5,BAT.hit],[.65,BAT.fin],[.9,BAT.st]]),a:[BALL([[.5,.7,58,47,91,32,4]],{hide:[.78,1]})]},
d12:{d:5,s:[['diamond'],['hoop',42,58,3]],cap:[[0,'Pálka si jde lehnout do obruče'],[.35,'…pak teprve utíkáme']],a:[
 KP([[0,47,56],[.15,47,56],[.3,42,58],[.35,44,57],[.8,72,34],[1,72,34]]),{t:'swing',x:48,y:56,at:[[.05,.14]],to:[42,58,.3]}]},
d13:{d:4,s:[['diamond'],['cone',84,26]],cap:[[0,'Probíháme jako cílem, na metě nestavíme']],a:[KP([[0,50,56],[.6,72,34],[.75,84,26],[.85,84,26],[1,84,26]])]},
d14:{d:5,s:[['diamond'],['cone',70,48],['cone',78,40]],cap:[[0,'Banánek: oblouk, šlápni na vnitřní roh']],a:[KP([[0,50,56],[.25,68,52],[.4,78,42],[.55,72,34],[.95,50,12],[1,50,12]])]},
d15:{d:5,s:[['diamond']],cap:[[0,'Běž!'],[.35,'Zpátky!'],[.65,'Stůj (ruka nahoře)']],a:[KP([[0,72,34],[.3,62,23],[.35,62,23],[.6,72,34],[1,72,34]]),KP([[0,50,12],[.3,40,23],[.35,40,23],[.6,50,12],[1,50,12]],{t:'k2'})]},
d16:{d:5,s:[['diamond']],cap:[[0,'Běžec běží na první – kam hodím?']],a:[{t:'c',p:pth([[0,50,50]])},KP([[0,40,26]]),KP([[0,72,34]],{t:'k2'}),
 KP([[0,50,56],[.3,50,56],[.7,72,36],[1,72,36]],{t:'x'}),BALL([[.05,.3,50,48,41,27,0],[.38,.58,41,27,71,34,6]])]},
d17:{d:3,cap:[[0,'Pilka, kolena, rukavice dolů'],[.5,'Hop-hop!']],fig:loopP([[0,STAND],[.3,READY],[.55,pz(Object.assign({},READY,{y:40}))],[.65,READY],[.75,pz(Object.assign({},READY,{y:40,x:42}))],[.85,pz(Object.assign({},READY,{x:42}))]])},
/* organizace */
r01:{d:5,cap:[[0,'Všichni do kruhu k trenérovi']],a:[{t:'c',p:pth([[0,50,31]])},...ring(50,31,14,6).map(([x,y],i)=>KP([[0,10+i*15,i%2?10:54],[.5,x,y],[1,x,y]]))]},
r02:{d:5,cap:[[0,'Běháme…'],[.5,'Ruka nahoře = ticho, všichni ke mně']],a:[{t:'c',p:pth([[0,50,31]])},...[0,1,2,3,4].map(i=>K_(t=>{const w=Wd(50,31,34,20,1,2,i*1.3)(Math.min(t,.5)*2);if(t<.5)return w;const u=Math.min(1,(t-.5)/.25),q=ring(50,31,9,5)[i];return[w[0]+(q[0]-w[0])*u,w[1]+(q[1]-w[1])*u,0]}))]},
r03:{d:8,s:[['cone',10,10],['cone',90,10],['cone',10,52],['cone',90,52]],cap:[[0,'Čáp: vysoká kolena'],[.25,'Žabka: skoky snožmo'],[.5,'Medvěd: po čtyřech'],[.75,'Krab: bokem']],a:[
 ...[18,31,44].map((y,i)=>K_(t=>{const u=(t*4)%1,x=12+76*(Math.floor(t*4)%2?1-u:u);return[x,y,(t>.25&&t<.5)?Math.abs(Math.sin(u*TAU*3))*5:0]}))]},
r04:{d:5,s:[['bucket',30,10],['bucket',45,10],['bucket',60,10],['bucket',75,10]],cap:[[0,'Napít, posadit, krátká pochvala']],a:[{t:'c',p:pth([[0,52,52]])},...[30,45,60,75].map((x,i)=>KP([[0,x,40],[.4,x,14],[.6,x,14],[1,x-3+i,40]]))]},
r05:{d:9,s:[['ring',25,22,9],['ring',75,22,9],['ring',50,48,9],['txt',25,8,'1'],['txt',75,8,'2'],['txt',50,62,'3']],cap:[[0,'Na písknutí: vláček na další stanoviště'],[.33,'Trenér zůstává u svého stanoviště']],a:[
 {t:'c',p:pth([[0,25,22]])},{t:'c',p:pth([[0,75,22]])},{t:'c',p:pth([[0,50,48]])},
 ...[0,1,2].flatMap(g=>[0,1].map(j=>{const st=[[25,22],[75,22],[50,48]],p=[];for(let r=0;r<3;r++){const s=st[(g+r)%3];p.push([r/3+.02,s[0]+(j?4:-4),s[1]+5],[r/3+.28,s[0]+(j?4:-4),s[1]+5])}const s0=st[g];p.push([1,s0[0]+(j?4:-4),s0[1]+5]);return KP(p,{t:g===1?'k2':g===2?'x':'k'})}))]},
r06:{d:5,cap:[[0,'Co se ti dnes povedlo?'],[.6,'Ruce doprostřed: Eagles!']],a:[...ring(50,31,16,6).map(([x,y])=>KP([[0,x,y],[.6,x,y],[.8,50+(x-50)*.45,31+(y-31)*.45],[1,x,y]]))]},
r07:{d:6,cap:[[0,'Sahám na špičky'],[.5,'Ruce nahoru, protáhnout']],fig:loopP([[0,STAND],[.25,pz({lean:70,ls:0,le:0,rs:0,re:0,glove:0})],[.45,pz({lean:70,ls:0,le:0,rs:0,re:0,glove:0})],[.6,STAND],[.75,pz({ls:180,le:0,rs:-180,re:0,glove:0})],[.9,pz({ls:180,le:0,rs:-180,re:0,glove:0})]])},
r08:{d:6,s:[['bucket',50,52]],cap:[[0,'Kdo uklidí dřív? Tři, dva, jedna…']],a:[...[[20,15],[80,15],[30,35],[70,35]].flatMap(([x,y],i)=>[KP([[0,50,48],[.4,x,y],[.45,x,y],[.85,50,48],[1,50,48]],{t:i%2?'k2':'k'}),BALL([[.42,.85,x+1,y,51,49,0]])])]},
r09:{d:3,cap:[[0,'Rukavice zívá: otevřít…'],[.5,'…zavřít!']],fig:loopP([[0,pz({ls:90,le:-40})],[.5,pz({ls:90,le:20})]])},
/* dovednostní rutiny */
s01:{d:9,cap:[[0,'1 Ukaž psovi míček'],[.2,'2 Z kolena'],[.45,'3–4 Krok a hod („fotbalový kop“)'],[.75,'5 Zhoupni a pal']],
 fig:loopP([[0,THR.ready],[.1,THR.back],[.18,THR.ready],[.22,pz(Object.assign({},KNEEL,{ls:95,le:0,rs:-115,re:-35,ball:1}))],[.3,pz(Object.assign({},KNEEL,{lean:25,ls:30,le:40,rs:-262,re:0}))],[.38,pz(Object.assign({},KNEEL,{lean:35,ls:-10,le:60,rs:-345,re:0}))],
  [.45,THR.ready],[.53,THR.back],[.58,THR.up],[.62,THR.rel],[.7,THR.fin],[.75,pz({lean:-12,lh:15,rh:-25,rk:20,ls:60,le:80,rs:60,re:80,ball:1})],[.82,THR.back],[.86,THR.rel],[.92,THR.fin]]),
 a:[BALL([[.3,.42,50,26,96,30,6]],{hide:[0,.3]}),BALL([[.62,.72,52,20,96,28,8]],{hide:[0,.62]}),BALL([[.86,.97,52,20,96,28,8]],{hide:[0,.86]})]},
s02:{d:8,cap:[[0,'Z místa: na rukavicovou i druhou stranu'],[.3,'Pohyb do strany a dopředu'],[.6,'Dozadu: otočit a běžet'],[.85,'„Můj!“']],a:[
 {t:'c',p:pth([[0,50,52]])},KP([[0,50,24],[.15,50,24],[.3,50,24],[.38,40,24],[.46,50,30],[.6,50,24],[.72,48,10],[1,50,24]]),
 BALL([[0,.1,50,50,46,24,6],[.15,.25,50,50,54,24,6],[.32,.4,50,50,40,24,6],[.42,.47,50,50,50,30,4],[.62,.74,50,50,48,10,14]])]},
s03:{d:8,cap:[[0,'1 Plížicí kroky'],[.15,'2 Sednout na židli'],[.3,'3 Rukavice vpředu'],[.5,'4 Do bříška'],[.65,'5 Krok a hod']],
 fig:loopP([[0,pz({x:34})],[.08,pz({x:37,lh:20,rh:-15})],[.15,pz({x:40})],[.25,READY],[.35,pz(Object.assign({},READY,{ls:45,le:0,rs:50,re:0,lean:40}))],[.5,pz(Object.assign({},READY,{ls:45,le:0,rs:50,re:0,lean:40}))],[.58,pz(Object.assign({},READY,{y:40,lean:15,ls:60,le:80,rs:60,re:80,ball:1}))],[.66,THR.back],[.72,THR.up],[.76,THR.rel],[.85,THR.fin]]),
 a:[{t:'c',p:pth([[0,92,44]])},BALL([[.2,.45,90,57,50,57,0],[.76,.88,54,20,96,30,6]],{hide:[.5,.76]})]},
s04:{d:8,s:[['diamond']],cap:[[0,'Přímo na hráče'],[.35,'Vlevo a vpravo'],[.65,'Chyť a hoď na první metu']],a:[
 {t:'c',p:pth([[0,50,50]])},{t:'c',p:pth([[0,74,32]])},KP([[0,44,24],[.35,44,24],[.45,38,25],[.55,44,24],[.6,50,25],[1,44,24]]),KP([[0,40,18]]),KP([[0,36,13]]),
 BALL([[0,.15,50,48,44,25,0],[.18,.28,44,25,50,48,5],[.35,.45,50,48,38,26,0],[.5,.58,50,48,50,26,0],[.66,.78,50,48,44,25,0],[.82,.95,44,25,73,32,6]])]},
s05:{d:8,cap:[[0,'Holé ruce, pak rukavice'],[.4,'Míč před tebe – vyběhni'],[.7,'Míč za tebe – otoč se a běž']],a:[
 {t:'c',p:pth([[0,50,52]])},KP([[0,50,26],[.4,50,26],[.5,50,32],[.65,50,26],[.75,50,14],[1,50,26]]),
 BALL([[0,.25,50,50,50,26,22],[.4,.5,50,50,50,32,14],[.68,.8,50,50,50,14,26]])]},
s06:{d:9,s:[['tee',58,52]],cap:[[0,'1 Švih na sucho'],[.3,'2 Z tee'],[.6,'3 Nahoz ze strany'],[.82,'4 Nahoz zepředu']],
 fig:loopP([[0,BAT.st],[.08,BAT.load],[.14,BAT.hit],[.2,BAT.fin],[.28,BAT.st],[.36,BAT.load],[.42,BAT.hit],[.48,BAT.fin],[.56,BAT.st],[.62,BAT.load],[.7,BAT.hit],[.76,BAT.fin],[.82,BAT.st],[.88,BAT.load],[.93,BAT.hit],[.97,BAT.fin]]),
 a:[BALL([[.42,.55,58,47,96,30,6]],{hide:[.55,1]}),{t:'c',p:pth([[0,62,60]]),show:[.56,.8]},BALL([[.6,.7,62,57,56,32,4],[.7,.8,56,32,96,24,6]],{hide:[0,.6]}),{t:'c',p:pth([[0,92,52]]),show:[.8,1]},BALL([[.84,.93,90,48,56,32,3],[.93,1,56,32,96,24,4]],{hide:[0,.84]})]},
s07:{d:9,s:[['diamond'],['cone',84,26]],cap:[[0,'1 Přes první metu'],[.3,'2 Banánek'],[.62,'3 Zastavit na druhé'],[.8,'4 Start po odpalu']],a:[
 KP([[0,50,56],[.18,72,34],[.25,84,26],[.3,50,56],[.42,72,34],[.6,50,12],[.65,50,12],[.7,72,34],[.8,72,34],[.95,50,12],[1,50,56]])]},
s08:{d:9,s:[['cone',10,14],['cone',90,14],['cone',10,48],['cone',90,48]],cap:[[0,'Vysoká kolena'],[.17,'Zakopávání'],[.33,'Posunné kroky'],[.5,'Rotace trupu'],[.67,'Sprinty'],[.83,'Paže a objetí']],a:[
 ...[20,31,42].map(y=>K_(t=>{const k=Math.floor(t*6),u=(t*6)%1,x=12+76*(k%2?1-u:u);return[x,y+(k===2?Math.sin(u*TAU*5)*1.2:0),k<2?Math.abs(Math.sin(u*TAU*6))*2.5:0]}))]},
s09:{d:12,s:[['cone',10,14],['cone',90,14],['cone',10,48],['cone',90,48]],cap:[[0,'Liftink'],[.125,'Skipink'],[.25,'Zakopávání'],[.375,'Předkopávání'],[.5,'Cval stranou'],[.625,'Odpichy'],[.75,'Poskoky se švihem paží'],[.875,'Rovinka']],a:[
 ...[20,31,42].map((y,i)=>K_(t=>{const k=Math.min(7,Math.floor(t*8)),u=(t*8)%1,x=12+76*(k%2?1-u:u),amp=[1.2,3,2,1.5,2.2,6,4,0][k],fr=[14,9,9,8,8,4,7,0][k];return[x,y+(k===4?Math.sin(u*TAU*8+i)*1.2:0),amp*Math.abs(Math.sin(u*Math.PI*fr+i))]}))]},
};

/* kreslení */
const NS='http://www.w3.org/2000/svg';
function sv(tag,at,par){const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);if(par)par.appendChild(e);return e}
function drawStatic(g,s){
 const dia=()=>{sv('polygon',{points:[HM,B1,B2,B3].map(p=>p.join(',')).join(' '),fill:'none',stroke:'var(--line-strong)','stroke-width':.6},g);[B1,B2,B3].forEach(p=>sv('rect',{x:p[0]-1.8,y:p[1]-1.8,width:3.6,height:3.6,transform:`rotate(45 ${p[0]} ${p[1]})`,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.4},g));sv('polygon',{points:'48,55 52,55 52,57 50,58.5 48,57',fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.4},g)};
 (s||[]).forEach(q=>{const [k,a,b,c,d,e]=q;
  if(k==='diamond')dia();
  else if(k==='cone')sv('polygon',{points:`${a},${b-2.2} ${a-1.7},${b+1.4} ${a+1.7},${b+1.4}`,fill:'var(--ball)',stroke:'var(--ball-ink)','stroke-width':.3},g);
  else if(k==='base')sv('rect',{x:a-1.8,y:b-1.8,width:3.6,height:3.6,transform:`rotate(45 ${a} ${b})`,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.4},g);
  else if(k==='home')sv('polygon',{points:`${a-2.5},${b-2} ${a+2.5},${b-2} ${a+2.5},${b} ${a},${b+1.6} ${a-2.5},${b}`,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.4},g);
  else if(k==='line'||k==='dash'||k==='net')sv('line',{x1:a,y1:b,x2:c,y2:d,stroke:k==='net'?'var(--muted)':'var(--line-strong)','stroke-width':k==='net'?1.2:.6,'stroke-dasharray':k==='line'?'':k==='net'?'1.5 .8':'2 1.5'},g);
  else if(k==='zone'){sv('rect',{x:a,y:b,width:c,height:d,fill:'var(--field)','fill-opacity':.1,stroke:'var(--field)','stroke-opacity':.4,'stroke-width':.4},g);if(e){const t=sv('text',{x:a+c/2,y:b+d/2+1.2,'text-anchor':'middle','font-size':3.2,fill:'var(--field)','font-weight':700},g);t.textContent=e}}
  else if(k==='rect')sv('rect',{x:a,y:b,width:c,height:d,fill:'none',stroke:'var(--line-strong)','stroke-width':.5,'stroke-dasharray':'2 1.5'},g);
  else if(k==='bucket')sv('rect',{x:a-2.4,y:b-2,width:4.8,height:4,rx:.8,fill:'var(--muted)'},g);
  else if(k==='hoop'||k==='ring')sv('circle',{cx:a,cy:b,r:c,fill:'none',stroke:k==='hoop'?'var(--ball)':'var(--line-strong)','stroke-width':k==='hoop'?.9:.5,'stroke-dasharray':k==='ring'?'2 1.5':''},g);
  else if(k==='tee'){sv('rect',{x:a-.5,y:b-4,width:1,height:7,fill:'var(--muted)'},g);sv('rect',{x:a-2.5,y:b+3,width:5,height:1.2,fill:'var(--muted)'},g)}
  else if(k==='grid'){for(let i=0;i<=3;i++){sv('line',{x1:a+i*c/3,y1:b,x2:a+i*c/3,y2:b+c,stroke:'var(--line-strong)','stroke-width':.5},g);sv('line',{x1:a,y1:b+i*c/3,x2:a+c,y2:b+i*c/3,stroke:'var(--line-strong)','stroke-width':.5},g)}}
  else if(k==='txt'||k==='big'){const t=sv('text',{x:a,y:b,'text-anchor':'middle','font-size':k==='big'?16:3,fill:'var(--muted)','font-weight':700,'font-family':'var(--f-disp)'},g);t.textContent=c}
 })}
function animate(box,id){
 const sp=AN[id];if(!sp)return false;
 box.innerHTML='';const svg=sv('svg',{viewBox:'0 0 100 62',class:'anim',role:'img','aria-label':'Animace průběhu'});box.appendChild(svg);
 sv('rect',{x:0,y:0,width:100,height:62,rx:3,fill:'var(--sunk)'},svg);
 const gs=sv('g',{},svg);drawStatic(gs,sp.s);
 const acts=(sp.a||[]).map(a=>{const g=sv('g',{},svg);let el={g};
  if(a.t==='b'){el.sh=sv('ellipse',{rx:1.1,ry:.6,fill:'var(--ink)','fill-opacity':.25},g);el.c=sv('circle',{r:1.15,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.35},g)}
  else if(a.t==='c'){el.c=sv('rect',{width:4.6,height:4.6,x:-2.3,y:-2.3,rx:.8,fill:'var(--ink)'},g);const t=sv('text',{y:1.2,'text-anchor':'middle','font-size':3.2,fill:'var(--bg)','font-weight':700},g);t.textContent='T'}
  else if(a.t==='spin'||a.t==='link'||a.t==='swing')el.l=sv('line',{stroke:a.t==='spin'?'var(--ball)':a.t==='link'?'var(--ball)':'var(--muted)','stroke-width':a.t==='spin'?1.4:a.t==='link'?1.2:1.3,'stroke-linecap':'round'},g);
  else if(a.t==='cone'){el.up=sv('polygon',{points:'0,-2.2 -1.7,1.4 1.7,1.4',fill:'var(--ball)',stroke:'var(--ball-ink)','stroke-width':.3},g);el.dn=sv('rect',{x:-2,y:-.8,width:4,height:1.6,rx:.4,fill:'var(--ball)',stroke:'var(--ball-ink)','stroke-width':.3},g)}
  else if(a.t==='dot')el.c=sv('circle',{r:1.6,fill:a.c==='k2'?'var(--team2)':'var(--field)'},g);
  else{if(a.tail)el.tl=sv('rect',{width:1,height:2.4,x:-.5,y:2,fill:'var(--ball)'},g);el.c=sv('circle',{r:2.3,stroke:'var(--surface)','stroke-width':.5},g)}
  return el});
 let fg=null;if(sp.fig){fg={g:sv('g',{},svg)};fg.bones=['M','A','B','L1','L2'].map(()=>sv('path',{fill:'none',stroke:'var(--ink)','stroke-width':1.6,'stroke-linecap':'round','stroke-linejoin':'round'},fg.g));fg.bat=sv('line',{stroke:'var(--muted)','stroke-width':1.6,'stroke-linecap':'round'},fg.g);fg.head=sv('circle',{r:3.4,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':1.4},fg.g);fg.gl=sv('circle',{r:2.2,fill:'var(--muted)'},fg.g);fg.ball=sv('circle',{r:1.1,fill:'var(--surface)',stroke:'var(--ink)','stroke-width':.35},fg.g);sv('line',{x1:5,y1:58.3,x2:95,y2:58.3,stroke:'var(--line-strong)','stroke-width':.5},gs)}
 const cap=document.createElement('div');cap.className='acap';box.appendChild(cap);
 const ctl=document.createElement('button');ctl.className='btn ghost sm aplay';box.appendChild(ctl);
 let t0=performance.now(),paused=matchMedia('(prefers-reduced-motion: reduce)').matches,pt=.35,lastCap='';
 const pos=(a,t)=>a.f?a.f(t):kfAt(a.p,t,a.lin);
 function frame(t){
  (sp.a||[]).forEach((a,i)=>{const el=acts[i];
   const vis=(!a.show||(Array.isArray(a.show)?t>=a.show[0]&&t<=a.show[1]:t>=a.show))&&!(a.hide&&t>=a.hide[0]&&t<a.hide[1]);el.g.style.display=vis?'':'none';if(!vis)return;
   if(a.t==='spin'){const an=TAU*t*(a.rev||1);el.l.setAttribute('x1',a.x);el.l.setAttribute('y1',a.y);el.l.setAttribute('x2',a.x+Math.cos(an)*a.r);el.l.setAttribute('y2',a.y+Math.sin(an)*a.r);return}
   if(a.t==='link'){const p=pos(sp.a[a.a],t),q=pos(sp.a[a.b],t);el.l.setAttribute('x1',p[0]);el.l.setAttribute('y1',p[1]);el.l.setAttribute('x2',q[0]);el.l.setAttribute('y2',q[1]);return}
   if(a.t==='swing'){let an=-2.2;(a.at||[]).forEach(([s,e])=>{if(t>=s&&t<=e)an=-2.2+((t-s)/(e-s))*3.6;else if(t>e&&t<e+.05)an=1.4});let x=a.x,y=a.y;if(a.to&&t>=a.to[2]){el.l.setAttribute('x1',a.to[0]-3);el.l.setAttribute('y1',a.to[1]);el.l.setAttribute('x2',a.to[0]+3);el.l.setAttribute('y2',a.to[1]);return}
    el.l.setAttribute('x1',x);el.l.setAttribute('y1',y);el.l.setAttribute('x2',x+Math.cos(an)*6);el.l.setAttribute('y2',y+Math.sin(an)*6);return}
   if(a.t==='cone'){const d=(a.down||[]).some(([s,e])=>t>=s&&t<e);el.g.setAttribute('transform',`translate(${a.x} ${a.y})`);el.up.style.display=d?'none':'';el.dn.style.display=d?'':'none';return}
   if(a.t==='dot'){el.g.setAttribute('transform',`translate(${a.x} ${a.y})`);return}
   const [x,y,z]=pos(a,t);
   if(a.t==='b'){el.sh.setAttribute('cx',x);el.sh.setAttribute('cy',y+.6);el.c.setAttribute('cx',x);el.c.setAttribute('cy',y-(z||0)*.6);el.c.setAttribute('r',1.15+(z||0)*.03);return}
   el.g.setAttribute('transform',`translate(${x} ${y-(z||0)*.3})`);
   if(el.c&&a.t!=='c'){const ty=(a.to&&t>=a.at)?a.to:a.t;el.c.setAttribute('fill',ty==='k2'?'var(--team2)':ty==='x'?'var(--warn)':'var(--field)')}
  });
  if(fg){const o=fig(poseAt(sp.fig,t)),P=q=>q[0].toFixed(2)+' '+q[1].toFixed(2);
   fg.bones[0].setAttribute('d',`M${P(o.hip)}L${P(o.neck)}`);fg.bones[1].setAttribute('d',`M${P(o.neck)}L${P(o.le)}L${P(o.lh)}`);fg.bones[2].setAttribute('d',`M${P(o.neck)}L${P(o.re)}L${P(o.rh)}`);
   fg.bones[3].setAttribute('d',`M${P(o.hip)}L${P(o.lk)}L${P(o.lf)}`);fg.bones[4].setAttribute('d',`M${P(o.hip)}L${P(o.rk)}L${P(o.rf)}`);
   fg.head.setAttribute('cx',o.head[0]);fg.head.setAttribute('cy',o.head[1]);const po=poseAt(sp.fig,t);
   fg.gl.style.display=po.glove>.5?'':'none';fg.gl.setAttribute('cx',o.lh[0]);fg.gl.setAttribute('cy',o.lh[1]);
   fg.ball.style.display=po.ball>.5?'':'none';fg.ball.setAttribute('cx',o.rh[0]);fg.ball.setAttribute('cy',o.rh[1]);
   if(o.be){fg.bat.style.display='';fg.bat.setAttribute('x1',o.rh[0]);fg.bat.setAttribute('y1',o.rh[1]);fg.bat.setAttribute('x2',o.be[0]);fg.bat.setAttribute('y2',o.be[1])}else fg.bat.style.display='none'}
  let c='';(sp.cap||[]).forEach(([s,x])=>{if(t>=s)c=x});if(c!==lastCap){cap.textContent=c;lastCap=c}
 }
 const setBtn=()=>{ctl.textContent=paused?'▶ Přehrát':'❚❚ Pauza';ctl.setAttribute('aria-label',paused?'Přehrát animaci':'Pozastavit animaci')};
 ctl.addEventListener('click',e=>{e.stopPropagation();paused=!paused;if(!paused)t0=performance.now()-pt*sp.d*1000;setBtn()});setBtn();
 function loop(now){if(!svg.isConnected)return;if(!paused){pt=((now-t0)/1000/sp.d)%1}frame(pt);requestAnimationFrame(loop)}
 frame(pt);requestAnimationFrame(loop);return true}

/* ===== Šablony délky tréninku ===== */
const TPL={
 30:[['start',2],['warm',6],['skill',14],['game',5],['end',3]],
 45:[['start',3],['warm',6],['skillr',7],['skill',16],['game',8],['end',5]],
 60:[['start',3],['warm',7],['skillr',8],['skill',22],['game',8],['match',7],['end',5]],
 75:[['start',3],['warm',7],['skillr',9],['skill',24],['drink',3],['game',9],['match',14],['end',6]],
 90:[['start',3],['warm',8],['skillr',10],['skill',28],['drink',3],['game',10],['game',8],['match',14],['end',6]]
};
const BT={start:'Nástup',warm:'Rozehřátí',skillr:'Rutina dovedností',skill:'Dovednosti',drink:'Pauza',game:'Hra',match:'Mini zápas',end:'Závěr'};
const GL='ABCDEFGH';
/* úrovně dětí: Orlíci (začátečníci) → Orli → Orliska (nejzkušenější) */
const LVL={n:'Orlíci',m:'Orli',j:'Orliska'};const LVL_NEXT={'':'n',n:'m',m:'j',j:''};

/* ===== Pomocníci ===== */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const planTitle=p=>(p&&p.name&&p.name.trim())||('Trénink '+fmtDate(p&&p.date));
const fmtDate=s=>{if(!s)return'';const [y,m,d]=s.split('-');return (+d)+'. '+(+m)+'. '+y};
const clone=x=>JSON.parse(JSON.stringify(x));
const ls={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
let toastT;function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2600)}

/* ===== Stav ===== */
const S={
 tab:(t=>t==='team'?'set':t)(ls.get('u7-tab','plan')),teamId:ls.get('u7-team',null),
 teams:{},custom:{},plans:{},ready:false,mode:'local',
 draft:Object.assign({week:0,tpl:'',minutes:60,coachSel:{},guests:{},present:{},focus:['hazeni','chytani'],venue:'venku',date:today()},ls.get('u7-draft',{})),
 hist:{fav:false,focus:'all',q:''},
 tpls:{},tplForm:false,openRate:false,
 pref:Object.assign({theme:'',wake:true,voice:true},ls.get('u7-pref',{})),mv:null,
 plan:ls.get('u7-plan',null),sel:null,lib:{kind:'all',cat:'all',q:''},gear:{},
 run:Object.assign({i:0,left:null,endAt:null,running:false,auto:true},ls.get('u7-run',{})),
 confirm:null,imp:null
};
S.draft.date=today();if(!S.draft.coachSel)S.draft.coachSel={};if(!S.draft.guests)S.draft.guests={};
const savePref=()=>ls.set('u7-pref',S.pref);
function applyTheme(init){const r=document.documentElement;const t=S.pref.theme||'';if(t)r.dataset.theme=t;else if(!init)delete r.dataset.theme;const b=document.getElementById('sunBtn');if(b){b.classList.toggle('on',t==='sun');b.setAttribute('aria-pressed',String(t==='sun'))}}
const saveDraft=()=>ls.set('u7-draft',S.draft);
const savePlan=()=>ls.set('u7-plan',S.plan);
const saveRun=()=>ls.set('u7-run',S.run);

let ACT={};
function rebuildActs(){ACT={};A.forEach(a=>ACT[a.id]=a);Object.entries(S.custom).forEach(([id,c])=>{ACT['c_'+id]=Object.assign({},c,{id:'c_'+id,custom:id})})}
rebuildActs();
const acts=()=>Object.values(ACT);
const actName=id=>{const a=ACT[id];return a?a.n:'(smazaná položka)'};

/* ===== Úložiště: sdílená databáze, jinak prohlížeč ===== */
function syncLine(){const el=$('#sync');el.textContent=!W.role?'Přihlášení':S.mode==='err'?'Chybí oprávnění: '+Object.keys(W.denied).filter(k=>k!=='photos').map(k=>DEN_NAME[k]||k).join(', '):ROLE_NAME[W.role]+(W.online?' · online, sdílené se Scorekeeperem':' · offline, uloží se po připojení')}
function fixTeam(){const ids=Object.keys(S.teams);if(!ids.length)return;if(!S.teams[S.teamId]){S.teamId=ids.sort((a,b)=>(S.teams[a].name||'').localeCompare(S.teams[b].name||''))[0];ls.set('u7-team',S.teamId)}}
const team=()=>S.teams[S.teamId]||null;
/* hráči bez čísla dresu mají v zápisníku num začínající „~“ */
const noNum=n=>String(n)[0]==='~';
const numShort=n=>noNum(n)?'–':String(n);
const sortPl=list=>list.slice().sort((a,b)=>{const x=noNum(a.num),y=noNum(b.num);if(x!==y)return x?1:-1;if(x)return(a.name||'').localeCompare(b.name||'','cs');return(+a.num)-(+b.num)});
const players=()=>{const t=team();return t&&Array.isArray(t.players)?sortPl(t.players):[]};
/* trenéři týmu: [{id,name}], starší zápis jako pole jmen */
function coachesOf(t){return (t&&Array.isArray(t.coaches)?t.coaches:[]).map((c,i)=>typeof c==='string'?{id:'s'+i+'_'+c,name:c}:c).filter(c=>c&&c.name)}
/* ===== Společný trénink více týmů ===== */
function selTeams(){let s=(S.draft.teamsSel||[]).filter(id=>S.teams[id]);if(!s.length&&S.teams[S.teamId])s=[S.teamId];return s.slice().sort((a,b)=>(S.teams[a].name||'').localeCompare(S.teams[b].name||''))}
const selKey=()=>selTeams().join('+');
const tName=tid=>(S.teams[tid]&&S.teams[tid].name)||'Tým';
const tShort=tid=>{const w=tName(tid).trim().split(/\s+/);return w[w.length-1]};
const plOf=tid=>{const t=S.teams[tid];return t&&Array.isArray(t.players)?sortPl(t.players):[]};
function presentOf(tid){const all=plOf(tid).map(p=>p.num);const p=S.draft.present[tid];return p?all.filter(n=>p.includes(n)):all}
const K=(tid,num)=>tid+'|'+num;
const presentKeys=()=>selTeams().flatMap(tid=>presentOf(tid).map(n=>K(tid,n)));
const planTeams=p=>p&&Array.isArray(p.teams)&&p.teams.length?p.teams:[p&&p.team];
function kid(key,plan){key=String(key);const i=key.indexOf('|');const tid=i<0?((plan&&plan.team)||S.teamId):key.slice(0,i),num=i<0?key:key.slice(i+1);const p=plOf(tid).find(x=>x.num===num);return{tid,num,name:p?p.name:'',lvl:p&&p.lvl||''}}
const normKey=(k,plan)=>{const x=kid(k,plan);return K(x.tid,x.num)};
function coachPool(){const seen=new Set(),out=[];selTeams().forEach(tid=>coachesOf(S.teams[tid]).forEach(c=>{const n=c.name.toLowerCase();if(seen.has(n))return;seen.add(n);out.push({key:K(tid,c.id),name:c.name})}));return out}
function coachSelIds(){const all=coachPool().map(c=>c.key);const s=S.draft.coachSel[selKey()];return s?all.filter(k=>s.includes(k)):all}
const guests=()=>S.draft.guests[selKey()]||[];
function coachNames(){const sel=coachSelIds();const out=coachPool().filter(c=>sel.includes(c.key)).map(c=>c.name).concat(guests());return out.length?out:['Trenér']}
const coachCount=()=>coachNames().length;

/* ===== Generátor ===== */
function recentIds(){const s=new Set(),st=selTeams();Object.values(S.plans).filter(p=>planTeams(p).some(t=>st.includes(t))).sort((a,b)=>(b.date||'').localeCompare(a.date||'')).slice(0,2).forEach(p=>(p.blocks||[]).forEach(b=>(b.items||[]).forEach(i=>s.add(i))));return s}
function ctx(){const d=S.draft;return{kids:presentKeys().length,coaches:coachCount(),venue:d.venue,focus:d.focus.length?d.focus:FOCUS.slice(),recent:recentIds(),used:new Set()}}
function fits(a,c,kids){if((a.kids||1)>(kids==null?c.kids:kids))return false;if(a.out&&c.venue==='hala')return false;if((a.co||1)>c.coaches)return false;return true}
function score(a,c,cat){let s=Math.random()*1.5;const tags=[a.c].concat(a.t||[]);
 if(cat){if(a.c===cat)s+=4;else if(tags.includes(cat))s+=2}
 else if(c.focus.includes(a.c))s+=3;else if(tags.some(t=>c.focus.includes(t)))s+=1.5;
 const rt=RS[a.id];if(rt)s+=Math.max(-2,Math.min(2,rt.up-rt.down))*.8;
 if(c.recent.has(a.id))s-=2.5;if(c.used.has(a.id))s-=100;return s}
function best(list,c,cat){if(!list.length)return null;let b=null,bs=-1e9;list.forEach(a=>{const s=score(a,c,cat);if(s>bs){bs=s;b=a}});if(b)c.used.add(b.id);return b}
const isWarm=a=>(a.k==='game'||a.k==='seq')&&(a.c==='warm'||(a.t||[]).includes('warm'));
const pools={
 warm:c=>acts().filter(a=>isWarm(a)&&fits(a,c)),
 station:(c,size)=>acts().filter(a=>a.st&&a.k!=='routine'&&a.c!=='warm'&&fits(a,c,size)),
 seq:c=>acts().filter(a=>a.st&&a.k!=='routine'&&a.c!=='warm'&&fits(a,c)),
 skillr:c=>acts().filter(a=>a.k==='seq'&&a.c!=='warm'&&fits(a,c)),
 game:c=>acts().filter(a=>a.k==='game'&&a.c!=='warm'&&!a.match&&!a.st&&fits(a,c)),
 gameAny:c=>acts().filter(a=>a.k==='game'&&!a.match&&fits(a,c)),
 match:c=>acts().filter(a=>a.match&&fits(a,c)),
 start:c=>acts().filter(a=>a.k==='routine'&&a.slot==='start'),
 drink:c=>acts().filter(a=>a.k==='routine'&&a.slot==='drink'),
 end:c=>acts().filter(a=>a.k==='routine'&&a.slot==='end')
};
function groupSize(c){return Math.max(1,Math.floor(c.kids/Math.max(1,c.coaches)))}
function pickStations(c,n){const size=groupSize(c),out=[];for(let i=0;i<n;i++){const cat=c.focus[i%c.focus.length];const pool=pools.station(c,size).filter(a=>!c.used.has(a.id));const a=best(pool,c,cat)||best(pools.station(c,1).filter(a=>!c.used.has(a.id)),c,cat);if(a)out.push(a.id)}return out}
function generate(){
 const c=ctx();const blocks=[],G=c.coaches>=2?c.coaches:1;RS=rateStats();
 if(!c.kids){toast('Označ aspoň jedno přítomné dítě.');return}
 const tp=S.draft.tpl&&S.tpls[S.draft.tpl],struct=tp?tp.blocks.map(b=>[b.type,+b.min||5,b.mode]):TPL[S.draft.minutes];
 const wk=S.draft.week?SEASON[S.draft.week-1]:null,must=(wk?wk.must:[]).filter(id=>ACT[id]);must.forEach(id=>c.used.add(id));
 const hasR=struct.some(x=>x[0]==='skillr');
 const mSeq=must.filter(id=>ACT[id].k==='seq'&&hasR),mMatch=must.filter(id=>ACT[id].match),mGame=must.filter(id=>ACT[id].k==='game'&&!ACT[id].st&&!ACT[id].match),mSt=must.filter(id=>!mSeq.includes(id)&&!mMatch.includes(id)&&!mGame.includes(id));
 struct.forEach(([type,min])=>{
  let b={id:uid(),type,min,items:[],mode:'same'};
  if(type==='skillr'&&mSeq.length){b.items=[mSeq.shift()];blocks.push(b);return}
  if(type==='match'&&mMatch.length){b.items=[mMatch.shift()];blocks.push(b);return}
  if(type==='game'&&mGame.length){b.items=[mGame.shift()];blocks.push(b);return}
  if(type==='start'){const a=ACT.r01;c.used.add('r01');b.items=[a.id]}
  else if(type==='warm'){const a=best(pools.warm(c),c);if(a)b.items=[a.id]}
  else if(type==='skillr'){const a=best(pools.skillr(c),c);if(a)b.items=[a.id]}
  else if(type==='skill'){
   const pre=mSt.splice(0,G>=2?G:9);
   if(G>=2){b.mode='st';b.items=pre.concat(pickStations(c,G-pre.length))}
   else{b.items=pre.slice();const k=Math.max(1,Math.round(min/8))-pre.length;for(let i=0;i<k;i++){const a=best(pools.seq(c).filter(x=>!c.used.has(x.id)),c,c.focus[i%c.focus.length]);if(a)b.items.push(a.id)}}
  }
  else if(type==='game'){const a=best(pools.game(c).filter(x=>!c.used.has(x.id)),c)||best(pools.gameAny(c).filter(x=>!c.used.has(x.id)),c);if(a)b.items=[a.id]}
  else if(type==='match'){const m=best(pools.match(c),c)||best(acts().filter(a=>a.id==='g12'||a.id==='g10'),c);if(m)b.items=[m.id]}
  else if(type==='drink'){b.items=['r04']}
  else if(type==='end'){b.items=['r06']}
  if(b.items.length)blocks.push(b)
 });
 const names=coachNames();
 const ts=selTeams();S.plan={id:uid(),name:(S.draft.name||'').trim()||(wk?'Týden '+S.draft.week+': '+wk.n:''),week:S.draft.week||0,team:ts[0],teams:ts,date:S.draft.date,minutes:tp?tplMin(tp):S.draft.minutes,coaches:names,focus:S.draft.focus.slice(),venue:S.draft.venue,present:presentKeys(),blocks,groups:makeGroups(presentKeys(),G,S.draft.mix!==false)};
 if(tp)S.plan.blocks.forEach((b,i)=>{const want=(tp.blocks[i]||{}).mode;if(want&&MODEABLE.includes(b.type)&&want!==(b.mode==='st'?'st':'same')&&!(want==='st'&&nG(S.plan)<2))setMode(b,want)});
 S.gear={};S.openRate=false;S.run={i:0,left:null,endAt:null,running:false,auto:S.run.auto};saveRun();savePlan();actions.tab('train');toast('Trénink sestaven.')
}
function selectCoachesByNames(names){const cs=coachPool(),k=selKey();S.draft.coachSel[k]=cs.filter(c=>names.includes(c.name)).map(c=>c.key);S.draft.guests[k]=names.filter(n=>n!=='Trenér'&&!cs.some(c=>c.name===n))}
function makeGroups(keys,n,mix){
 n=Math.max(1,n);const lv=x=>kid(x).lvl;
 const lvOrd=a=>['j','m','','n'].flatMap(l=>shuffle(a.filter(x=>(LVL[lv(x)]?lv(x):'')===l)));
 const tids=[...new Set(keys.map(k=>kid(k).tid))];
 if(mix===false&&tids.length>1){/* týmy zvlášť: skupiny plněné po týmech, stejně velké */
  const ord=tids.flatMap(t=>lvOrd(keys.filter(k=>kid(k).tid===t))),b=Math.floor(ord.length/n),r=ord.length%n,out=[];let i=0;
  for(let gi=0;gi<n;gi++){const sz=b+(gi<r?1:0);out.push(ord.slice(i,i+sz));i+=sz}return out}
 const order=lvOrd(keys);
 const g=Array.from({length:n},()=>[]);let i=0,dir=1;
 order.forEach(x=>{g[i].push(x);if(n>1){i+=dir;if(i===n){i=n-1;dir=-1}else if(i<0){i=0;dir=1}}});
 return g}
const nG=p=>Math.max(1,(p&&p.groups||[]).length);
const MODEABLE=['warm','skill','skillr','game'];
/* režim bloku: 'same' = všichni stejné cvičení (ve skupinách se svým trenérem), 'st' = skupiny, každá jinak (rotace) */
function setMode(b,v){const p=S.plan,G=nG(p);
 if(v==='st'){if(G<2){toast('Stanoviště potřebují aspoň dva trenéry.');return}
  const c=ctx();p.blocks.forEach(x=>{if(x!==b)x.items.forEach(i=>c.used.add(i))});const keep=b.items.filter(id=>ACT[id]&&ACT[id].k!=='routine').slice(0,G);keep.forEach(i=>c.used.add(i));
  for(let i=keep.length;i<G;i++){const a=best(pools.station(c,1).filter(x=>!c.used.has(x.id)),c,c.focus[i%c.focus.length]);if(a)keep.push(a.id)}
  b.items=keep;b.mode='st'}
 else{b.mode='same';b.items=b.items.slice(0,Math.max(1,Math.floor(b.min/5)))}}
function fitBlocks(){const p=S.plan,G=nG(p);p.blocks.forEach(b=>{if(b.mode==='st'&&b.items.length!==G){if(G<2)setMode(b,'same');else setMode(b,'st')}})}
const stepsHtml=a=>`<ol class="steps-list">${a.steps.map(x=>`<li><b>${esc(x.n)}</b> · ${x.min} min<br><span class="small">${esc(x.d)}</span></li>`).join('')}</ol>`;
function mountAnims(root){if(!root)return;root.querySelectorAll('[data-anim]').forEach(el=>{try{animate(el,el.dataset.anim)}catch(e){el.remove()}})}
function rotInfo(b){const n=b.items.length||1;const rot=Math.min(n,Math.max(1,Math.floor(b.min/5)));const rotMin=Math.floor(b.min/rot);return{n,rot,rotMin,last:b.min-rotMin*(rot-1)}}
function swap(bi,si){
 const p=S.plan,b=p.blocks[bi],c=ctx();p.blocks.forEach(x=>x.items.forEach(i=>c.used.add(i)));
 const cur=b.items[si];let pool;
 if(b.mode==='st')pool=pools.station(c,groupSize(c));
 else if(b.type==='warm')pool=pools.warm(c);
 else if(b.type==='skillr')pool=pools.skillr(c);
 else if(b.type==='skill')pool=pools.seq(c);
 else if(b.type==='game')pool=pools.gameAny(c);
 else if(b.type==='match')pool=pools.match(c).concat(acts().filter(a=>a.id==='g12'||a.id==='g10'));
 else pool=pools[b.type]?pools[b.type](c):[];
 pool=pool.filter(a=>a.id!==cur&&!c.used.has(a.id));
 const cat=ACT[cur]&&(b.type==='skill'||b.type==='skillr'||b.mode==='st')?ACT[cur].c:null;
 const a=best(pool,c,cat);if(!a){toast('Jiná vhodná položka už není.');return}
 b.items[si]=a.id;savePlan();render()
}

/* ===== Hodnocení her a cviků (z uložených tréninků) ===== */
function rateStats(){const m={};Object.values(S.plans).forEach(p=>{const r=p.rate||{};Object.keys(r).forEach(id=>{const x=m[id]||(m[id]={up:0,down:0});if(r[id]>0)x.up++;else if(r[id]<0)x.down++})});return m}
let RS={};
const rateBadge=id=>{const x=RS[id];return x&&(x.up||x.down)?` · 👍 ${x.up}${x.down?' 👎 '+x.down:''}`:''};
function vRate(){
 const p=S.plan,r=p.rate||{},ids=[...new Set(p.blocks.flatMap(b=>b.items))].filter(id=>ACT[id]&&ACT[id].k!=='routine');
 const open=S.openRate||Object.keys(r).length||p.note;
 return `<section class="card" id="rateCard"><details ${open?'open':''}><summary>Jak trénink dopadl?</summary>
  <div class="dl" style="margin-top:12px"><p class="small muted">Označ, co fungovalo. Generátor pak osvědčené hry vybírá častěji a ty, které nefungovaly, méně.</p>
  ${ids.map(id=>`<div class="rate-row"><span>${esc(actName(id))}</span><span class="row" style="gap:6px;flex-wrap:nowrap"><button class="ib ${r[id]>0?'up':''}" data-a="rate" data-v="${id}" data-r="1" aria-pressed="${r[id]>0}" aria-label="Fungovalo: ${esc(actName(id))}">👍</button><button class="ib ${r[id]<0?'down':''}" data-a="rate" data-v="${id}" data-r="-1" aria-pressed="${r[id]<0}" aria-label="Nefungovalo: ${esc(actName(id))}">👎</button></span></div>`).join('')}
  <div class="field"><span class="label">Poznámka k tréninku</span><textarea id="plan_note" data-c="planote" placeholder="Co příště jinak, kdo se zlepšil…">${esc(p.note||'')}</textarea></div></div></details></section>`}
async function savePlanToHistory(quiet){const p=clone(S.plan);p.teams=planTeams(p);p.teamName=p.teams.map(tName).join(' + ');p.savedAt=new Date().toISOString();await Store.put('plans',p.id,p);if(!quiet)toast('Trénink uložen do historie.')}

/* ===== Dovednosti dětí ===== */
const SK=[
 {id:'h1',c:'hazeni',n:'Správně drží míč'},{id:'h2',c:'hazeni',n:'Při hodu kročí opačnou nohou'},{id:'h3',c:'hazeni',n:'Trefí kamaráda na 6 m'},
 {id:'c1',c:'chytani',n:'Chytí kutálený míč krokodýlí tlamou'},{id:'c2',c:'chytani',n:'Chytí měkký míček do rukavice'},{id:'c3',c:'chytani',n:'Postaví se pod vysoký míč'},
 {id:'o1',c:'odpal',n:'Správný postoj a úchop pálky'},{id:'o2',c:'odpal',n:'Trefí míček z tee'},{id:'o3',c:'odpal',n:'Po odpalu bezpečně odloží pálku'},
 {id:'m1',c:'mety',n:'Zná pořadí met'},{id:'m2',c:'mety',n:'Probíhá první metu'},{id:'m3',c:'mety',n:'Zastaví se na druhé a třetí metě'},
 {id:'a1',c:'hra',n:'Reaguje na povely trenéra'},{id:'a2',c:'hra',n:'Ví, kam hodit, když běžec běží na první'}];
const skOf=p=>Array.isArray(p&&p.sk)?p.sk.filter(x=>SK.some(s=>s.id===x)):[];
const lvlFor=n=>n<5?'n':n<10?'m':'j';
function catPct(tids){const ps=tids.flatMap(plOf),out={};FOCUS.forEach(f=>{const ids=SK.filter(s=>s.c===f).map(s=>s.id),tot=ps.length*ids.length;out[f]=tot?Math.round(100*ps.reduce((s,p)=>s+skOf(p).filter(x=>ids.includes(x)).length,0)/tot):0});return out}
function weakest(tids){if(!tids.flatMap(plOf).some(p=>skOf(p).length))return null;const pc=catPct(tids);return FOCUS.slice().sort((a,b)=>pc[a]-pc[b])[0]}
function vKids(){
 if(!team())return noTeam();
 const ps=players(),pc=catPct([S.teamId]),w=weakest([S.teamId]);
 return `<section class="card"><h2>Dovednosti · ${esc(team().name)}</h2>
  <p class="small muted">Klepni na dítě a odškrtni, co už zvládá. Podle počtu dovedností aplikace navrhne úroveň: do 4 Orlíci, 5–9 Orli, od 10 Orliska.</p>
  <div class="dl">${FOCUS.map(f=>`<div class="sumline"><span>${CATS[f]}</span><span class="small muted">${pc[f]} %</span></div><div class="pbar"><i style="width:${pc[f]}%"></i></div>`).join('')}</div>
  ${w?`<div class="row"><span class="small">Nejslabší oblast: <b>${CATS[w]}</b></span><button class="btn ghost sm" data-a="kidfocus" data-v="${w}">Zaměřit příští trénink</button></div>`:''}</section>
 <section class="card"><h2>Děti · ${ps.length}</h2>${ps.length?`<div class="lib-list">${ps.map(p=>{const n=skOf(p).length,sg=lvlFor(n);return `<button class="item" data-a="kid" data-v="${esc(p.num)}"><h3>${noNum(p.num)?'':esc(p.num)+' · '}${esc(p.name)}</h3><span class="kb ${p.lvl?'game':'routine'}">${LVL[p.lvl]||'bez úrovně'}</span><span class="meta"><span class="pbar"><i style="width:${Math.round(100*n/SK.length)}%"></i></span>${n} z ${SK.length} dovedností${n&&p.lvl!==sg?' · návrh: '+LVL[sg]:''}</span></button>`}).join('')}</div>`:'<p class="muted">Soupiska je prázdná. Děti přidáš v záložce Tým.</p>'}</section>`}
function openKid(num){const p=players().find(x=>x.num===num);if(!p)return;const has=skOf(p),sg=lvlFor(has.length),sh=$('#sheet');
 sh.innerHTML=`<div role="dialog" aria-modal="true" aria-label="${esc(p.name)}"><div class="sumline"><span class="kb ${p.lvl?'game':'routine'}">${LVL[p.lvl]||'bez úrovně'}</span><button class="ib" data-a="close" aria-label="Zavřít">✕</button></div>
  <h2>${esc(p.name)}${noNum(p.num)?'':' · '+esc(p.num)}</h2><p class="small muted">${has.length} z ${SK.length} dovedností · návrh úrovně: <b>${LVL[sg]}</b></p>
  ${p.lvl!==sg?`<div class="row"><button class="btn sm" data-a="kidlvl" data-v="${esc(p.num)}">Nastavit úroveň ${LVL[sg]}</button></div>`:''}
  ${FOCUS.map(f=>`<div class="field"><span class="label">${CATS[f]}</span><ul class="gear">${SK.filter(s=>s.c===f).map(s=>`<li><label><input type="checkbox" id="sk_${s.id}" data-c="skill" data-v="${s.id}" data-p="${esc(p.num)}" ${has.includes(s.id)?'checked':''}><span>${esc(s.n)}</span></label></li>`).join('')}</ul></div>`).join('')}</div>`;
 sh.hidden=false;sh.dataset.kid=num}

/* ===== Sezónní plán: 10 týdnů ===== */
const SEASON=[
 {n:'Hřiště a mety',f:['mety','hra'],must:['s07','g15'],tip:'Děti poznají mety a pravidla pohybu po hřišti. Hodně běhu a her na povely.'},
 {n:'Úchop a hod',f:['hazeni'],must:['s01','d01'],tip:'Držení míče a hod s krokem. Házecí progrese od teď na každém tréninku.'},
 {n:'Kutálené míče',f:['chytani'],must:['s03','g07'],tip:'Krokodýlí tlama a postavit se míči do cesty.'},
 {n:'Odpal z tee',f:['odpal'],must:['s06','g10'],tip:'Postoj, úchop a rovný švih. Pálka jen u trenéra, ostatní za čarou.'},
 {n:'Hod a chytání ve dvojici',f:['hazeni','chytani'],must:['s02','d08'],tip:'Spojit hod a chytání, rychlé přendání do házecí ruky.'},
 {n:'Vysoké míče',f:['chytani'],must:['s05','g08'],tip:'Od balónků k měkkým míčkům, palečky k sobě, volání „Můj!“.'},
 {n:'Odpal a běh',f:['odpal','mety'],must:['g12','d12'],tip:'Po odpalu pálku do obruče a hned běžet přes první metu.'},
 {n:'Polař a hod na první',f:['chytani','hazeni'],must:['s04','d16'],tip:'Chytit přízemní míč a hodit na první metu. Kam hodím?'},
 {n:'Běh po metách naplno',f:['mety'],must:['s07','g13'],tip:'Probíhat první, banánek, zastavit na druhé a třetí.'},
 {n:'Mini zápas',f:['hra','odpal'],must:['g18','s06'],tip:'Všechno dohromady v zápase, všichni se vystřídají na všech pozicích.'}];
const doneWeeks=tids=>new Set(Object.values(S.plans).filter(p=>p.week&&planTeams(p).some(t=>tids.includes(t))).map(p=>p.week));
function vSeason(){const d=S.draft,dw=doneWeeks(selTeams()),nx=SEASON.findIndex((_,i)=>!dw.has(i+1))+1,w=d.week?SEASON[d.week-1]:null;
 return `<div class="field"><div class="sumline"><span class="label">Sezónní plán · hotovo ${dw.size} z ${SEASON.length}</span>${nx&&d.week!==nx?`<button class="btn ghost sm" data-a="week" data-v="${nx}">Další: týden ${nx}</button>`:''}</div>
  <div class="row"><button class="chip ${!d.week?'on':''}" data-a="week" data-v="0">Bez plánu</button>${SEASON.map((x,i)=>`<button class="chip ${d.week===i+1?'on':''}" data-a="week" data-v="${i+1}" aria-pressed="${d.week===i+1}" title="${esc(x.n)}">${dw.has(i+1)?'✓ ':''}${i+1}</button>`).join('')}</div>
  ${w?`<div class="note"><b>Týden ${d.week}: ${esc(w.n)}</b><br>${esc(w.tip)}<br><span class="small">Zaměření: ${w.f.map(f=>CATS[f]).join(', ')} · v tréninku určitě: ${w.must.map(actName).join(', ')}</span></div>`:''}</div>`}

/* ===== Vlastní šablony struktury tréninku ===== */
const tplList=()=>Object.entries(S.tpls||{}).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||'','cs'));
const tplMin=t=>(t.blocks||[]).reduce((s,b)=>s+(+b.min||0),0);
function vTplPick(){const L=tplList();if(!L.length)return '';
 return `<div class="field"><span class="label">Šablona struktury</span><div class="row"><button class="chip ${!S.draft.tpl?'on':''}" data-a="tpl" data-v="">Podle délky</button>${L.map(([id,t])=>`<button class="chip ${S.draft.tpl===id?'on':''}" data-a="tpl" data-v="${esc(id)}">${esc(t.name)} · ${tplMin(t)} min</button>`).join('')}</div>
  ${S.draft.tpl&&S.tpls[S.draft.tpl]?`<span class="small muted">${S.tpls[S.draft.tpl].blocks.map(b=>(BT[b.type]||b.type)+' '+b.min+'′').join(' → ')}</span>`:''}</div>`}

/* ===== Hlášení nahlas ===== */
let warnedFor=-1;
const csVoices=()=>{try{return window.speechSynthesis?window.speechSynthesis.getVoices().filter(v=>/^cs/i.test(v.lang)):[]}catch(e){return[]}};
function voiceScore(v){const n=v.name;return(/premium|prémiov/i.test(n)?60:0)+(/natural|neural/i.test(n)?55:0)+(/enhanced|vylepšen/i.test(n)?45:0)+(/online/i.test(n)?20:0)+(/google/i.test(n)?30:0)+(/zuzana|vlasta|antonin|antonín/i.test(n)?8:0)+(/compact|eloquence/i.test(n)?-30:0)+(v.localService?2:0)}
function voiceTag(v){const n=v.name;return/premium|prémiov|natural|neural/i.test(n)?'přirozený':/enhanced|vylepšen|google|online/i.test(n)?'lepší':'základní'}
function bestVoice(){const vs=csVoices();if(S.pref.vname){const f=vs.find(v=>v.name===S.pref.vname);if(f)return f}return vs.slice().sort((a,b)=>voiceScore(b)-voiceScore(a))[0]||null}
function say(t,force){if(!force&&S.pref.voice===false)return;try{const sp=window.speechSynthesis;if(!sp)return;sp.cancel();const u=new SpeechSynthesisUtterance(t),v=bestVoice();if(v)u.voice=v;u.lang=v?v.lang:'cs-CZ';u.rate=+S.pref.vrate||0.95;u.pitch=1;sp.speak(u)}catch(e){}}
try{if(window.speechSynthesis){window.speechSynthesis.getVoices();window.speechSynthesis.addEventListener('voiceschanged',()=>{if(S.tab==='set')render(true)})}}catch(e){}
function voiceSet(){if(!window.speechSynthesis)return'<p class="small muted">Tento prohlížeč hlasová hlášení neumí.</p>';const vs=csVoices().sort((a,b)=>voiceScore(b)-voiceScore(a)),b=vs[0];
 return `<div class="field"><span class="label">Hlas hlášení</span><select id="pf_vname" data-c="vname"><option value="">automaticky${b?' – '+esc(b.name):''}</option>${vs.map(v=>`<option value="${esc(v.name)}" ${S.pref.vname===v.name?'selected':''}>${esc(v.name)} · ${voiceTag(v)}</option>`).join('')}</select></div>
  <div class="field"><span class="label">Tempo řeči</span><select id="pf_vrate" data-c="vrate">${[['0.85','pomalé'],['0.95','klidné'],['1.05','běžné'],['1.15','rychlé']].map(([v,l])=>`<option value="${v}" ${String(S.pref.vrate||'0.95')===v?'selected':''}>${l}</option>`).join('')}</select></div>
  <button class="btn ghost sm" data-a="vtest">▶ Přehrát ukázku</button>
  <p class="small muted">${vs.length?'':'V tomto zařízení není žádný český hlas. '}Přirozenější hlas si stáhneš do telefonu: iPhone → Nastavení → Zpřístupnění → Předčítaný obsah → Hlasy → Čeština → Zuzana (Prémiová nebo Vylepšená). Android → Nastavení → Převod textu na řeč → Google, stáhnout češtinu. Pak tu vyber hlas označený „přirozený“ nebo „lepší“.</p>`}
function announce(){const s=curStep();if(!s)return;const b=S.plan.blocks[s.bi];
 if(s.r!=null)say(s.r===0?'Stanoviště. Každá skupina ke svému trenérovi.':'Střídáme stanoviště! Rotace '+(s.r+1)+'.');
 else say((BT[b.type]||'')+'. '+actName(b.items[s.item])+'. '+s.min+(s.min===1?' minuta.':s.min<5?' minuty.':' minut.'))}

/* ===== Shrnutí pro rodiče ===== */
const HOME={hazeni:'Hoď ponožkový míček do koše nebo krabice ze 2–3 kroků, 10× s krokem opačnou nohou.',chytani:'Vyhoď si měkký míček nebo balónek a chyť ho oběma rukama. Kdo zvládne 10× za sebou?',
 odpal:'Švihy pěnovou nudlí nebo plastovou pálkou na nafukovací balónek, který hází rodič. Oči na balónku!',mety:'V parku poslouží jako mety tři značky (bunda, láhev…). Oběhni je a na každou šlápni.',
 hra:'Zahrajte si doma „Trenér říká“: rodič dává pokyny a dítě předvádí švih, hod nebo chytání.',warm:'Pět minut atletické abecedy na chodníku: liftink, skipink, zakopávání.'};
function parentsText(p){const items=[...new Set(p.blocks.flatMap(b=>b.items))].filter(id=>ACT[id]&&ACT[id].k!=='routine');const f=(p.focus||[])[0]||(ACT[items[0]]||{}).c||'hazeni';
 const seq=items.map(id=>ACT[id]).filter(a=>a&&a.k==='seq'&&a.c!=='warm');const w=p.week&&SEASON[p.week-1];
 return `⚾ ${p.name?p.name+' ('+fmtDate(p.date)+')':planTitle(p)}\n`+(w?`Sezónní plán, týden ${p.week}: ${w.n}.\n`:'')+`Dnes jsme trénovali: ${(p.focus||[]).map(x=>CATS[x].toLowerCase()).join(', ')||'všestrannost'}.\n`
  +`Hráli jsme a cvičili: ${items.map(actName).join(', ')}.\n`+(seq.length?`Nově se učíme: ${seq.map(a=>a.n+' ('+a.steps.map(x=>x.n.toLowerCase()).join(', ')+')').join('; ')}.\n`:'')
  +`\nNa doma (5 minut): ${HOME[f]||HOME.hazeni}\n\nDíky, že děti vozíte!`}
function vParents(){return `<section class="card"><div class="sumline"><h2>Pro rodiče</h2><button class="btn ghost sm" data-a="copypar">Kopírovat</button></div>
 <p class="small muted">Krátké shrnutí do skupiny rodičů, bez jmen dětí. Text můžeš před zkopírováním upravit.</p>
 <textarea id="parentsTxt" rows="9">${esc(parentsText(S.plan))}</textarea></section>`}

/* ===== Vykreslení ===== */
const MENU=[['Trénink',['plan','train','field']],['Tým',['team','who','kids','hist']],['Knihovna',['lib']],['Nastavení',['set']]];
const TABS=[['plan','Plánování'],['train','Trénink'],['field','Na hřišti'],['team','Tým'],['who','Kdo je kdo'],['kids','Děti'],['lib','Hry a cviky'],['hist','Historie'],['set','Nastavení']];
let pend=false;
function render(force){
 if(!W.role){renderLogin();return}
 const ae=document.activeElement;
 if(!force&&ae&&ae.closest&&ae.closest('#view')&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)&&!['checkbox','button','file'].includes(ae.type)){pend=true;return}
 pend=false;
 const TN=Object.fromEntries(TABS);
 $('#tabs').innerHTML=`<button class="menu-btn" data-a="menu" aria-haspopup="true" aria-expanded="${S.menu?'true':'false'}"><span class="burger" aria-hidden="true"></span><span class="cur">${TN[S.tab]||'Menu'}</span><span class="caret" aria-hidden="true">${S.menu?'▴':'▾'}</span></button>${S.menu?`<div class="menu-list" role="menu">${MENU.map(([h,ks])=>`<div class="menu-h">${h}</div>${ks.map(k=>`<button role="menuitem" class="${S.tab===k?'on':''}" data-a="tab" data-v="${k}" ${S.tab===k?'aria-current="page"':''}>${TN[k]}</button>`).join('')}`).join('')}</div>`:''}`;
 const ts=Object.entries(S.teams).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||''));
 $('#teamSel').innerHTML=ts.length?ts.map(([id,t])=>`<option value="${esc(id)}" ${id===S.teamId?'selected':''}>${esc(t.name||'Tým')}</option>`).join(''):'<option>Žádný tým</option>';
 $('#teamSel').disabled=!ts.length;$('#teamSel').hidden=ts.length<2;
 RS=rateStats();
 const v={plan:vPlan,train:vTrain,field:vField,team:vTeam,who:vWho,kids:vKids,lib:vLib,set:vSet,hist:vHist}[S.tab]||vPlan;
 $('#view').innerHTML=v();mountAnims($('#view'));
 if(S.tab==='lib')renderLibList();
 if(S.tab==='hist')renderHistList();
 if(S.tab==='field')tick(true);
}
document.addEventListener('focusout',()=>setTimeout(()=>{if(pend)render()},0));

function noTeam(){return `<section class="card empty"><h2>Zatím žádný tým</h2><p class="muted">${S.ready?'Týmy zakládá správce ve Scorekeeperu. Jakmile tam budou, objeví se tady.':'Načítám sestavu…'}</p></section>`}

function vPlan(){
 if(!team())return noTeam();
 const d=S.draft,st=selTeams(),mt=st.length>1,pr=presentKeys(),cs=coachPool(),sel=coachSelIds(),gs=guests();
 const all=Object.entries(S.teams).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||''));
 const nAll=st.reduce((s,t)=>s+plOf(t).length,0);
 const nC=sel.length+gs.length;
 const per=nC>1&&pr.length?splitText(pr.length,nC):'';
 let h=`<section class="card">
  <div class="sumline"><h2>Nový trénink</h2><span class="muted small">${st.map(t=>esc(tName(t))).join(' + ')}</span></div>
  ${all.length>1?`<div class="field"><span class="label">Týmy na tréninku</span><div class="row">${all.map(([id,x])=>{const on=st.includes(id);return `<button class="chip ${on?'on':''}" data-a="tsel" data-v="${esc(id)}" aria-pressed="${on}">${esc(x.name)} · ${(x.players||[]).length}</button>`}).join('')}</div>${mt?'<span class="small muted">Společný trénink: děti i trenéři ze všech vybraných týmů.</span>':''}</div>`:''}
  <div class="grid2">
   <div class="field"><span class="label">Název tréninku (nepovinný)</span><input type="text" id="tr_name" data-c="trname" value="${esc(d.name||'')}" placeholder="např. Házení a mety"></div>
   <div class="field"><span class="label">Datum</span><input type="date" id="pdate" data-c="date" value="${esc(d.date)}"></div>
   <div class="field"><span class="label">Prostor</span><div class="seg">${[['venku','Venku'],['hala','Hala']].map(([k,l])=>`<button data-a="venue" data-v="${k}" class="${d.venue===k?'on':''}">${l}</button>`).join('')}</div></div>
  </div>
  ${vSeason()}
  <div class="field"><span class="label">Délka tréninku</span><div class="seg">${Object.keys(TPL).map(m=>`<button data-a="min" data-v="${m}" class="${!d.tpl&&+m===d.minutes?'on':''}">${m} min</button>`).join('')}</div></div>
  ${vTplPick()}
  <div class="field"><span class="label">Zaměření dovedností</span><div class="row">${FOCUS.map(f=>`<button class="chip ${d.focus.includes(f)?'on':''}" data-a="focus" data-v="${f}" aria-pressed="${d.focus.includes(f)}">${CATS[f]}</button>`).join('')}</div>${(()=>{const w=weakest(st);return w&&!d.focus.includes(w)?`<span class="small muted">Podle dovedností dětí je nejslabší ${CATS[w].toLowerCase()}. <button class="btn ghost sm" data-a="focus" data-v="${w}">Přidat</button></span>`:''})()}</div>
  <div class="field"><div class="sumline"><span class="label">Trenéři · přijde ${nC}${cs.length?' z '+cs.length:''}</span>${cs.length?`<span class="row"><button class="btn ghost sm" data-a="call">Všichni</button><button class="btn ghost sm" data-a="cnone">Nikdo</button></span>`:''}</div>
   ${cs.length?`<div class="kids">${cs.map(c=>{const on=sel.includes(c.key);return `<button class="chip coach ${on?'on':'off'}" data-a="ctog" data-v="${esc(c.key)}" aria-pressed="${on}">${esc(c.name)}</button>`}).join('')}${gs.map((g,i)=>`<button class="chip coach on" data-a="gdel" data-v="${i}" aria-label="Odebrat hosta ${esc(g)}">${esc(g)} <span class="guest">host ✕</span></button>`).join('')}</div>`
    :`<p class="small muted">${mt?'Vybrané týmy':'Tým'} zatím nemají uložené trenéry. Přidej je v Nastavení, nebo sem zapiš hosta.</p>${gs.length?`<div class="kids">${gs.map((g,i)=>`<button class="chip coach on" data-a="gdel" data-v="${i}" aria-label="Odebrat hosta ${esc(g)}">${esc(g)} <span class="guest">host ✕</span></button>`).join('')}</div>`:''}`}
   <form id="addGuest" class="row"><input type="text" id="g_name" placeholder="Host na tento trénink" aria-label="Jméno hostujícího trenéra" style="flex:1 1 180px;width:auto"><button class="btn ghost sm" type="submit">Přidat</button></form>
   <span class="muted small">${nC>1?'Dovednosti ve skupinách: '+per:nC===1?'Jeden trenér: dovednosti dělají všechny děti spolu':'Bez trenéra se počítá s jedním trenérem a všemi dětmi spolu'}</span>
   ${mt&&nC>1?`<label class="row small"><input type="checkbox" id="mix" data-c="mix" ${d.mix!==false?'checked':''}> Promíchat týmy ve skupinách (jinak má každý tým své skupiny)</label>`:''}</div>
  <div class="field"><div class="sumline"><span class="label">Docházka · přítomno ${pr.length} z ${nAll}</span><span class="row"><button class="btn ghost sm" data-a="all">Všichni</button><button class="btn ghost sm" data-a="none">Nikdo</button></span></div>
   ${st.map(tid=>{const ps=plOf(tid),po=presentOf(tid);return `${mt?`<div class="sumline"><h3>${esc(tName(tid))} · ${po.length} z ${ps.length}</h3><span class="row"><button class="btn ghost sm" data-a="all" data-v="${esc(tid)}">Všichni</button><button class="btn ghost sm" data-a="none" data-v="${esc(tid)}">Nikdo</button></span></div>`:''}
   ${ps.length?`<div class="kids">${ps.map(p=>{const on=po.includes(p.num);return `<button class="chip kid ${on?'on':'off'}" data-a="att" data-v="${esc(K(tid,p.num))}" aria-pressed="${on}"><b>${esc(numShort(p.num))}</b>${esc(p.name)}${LVL[p.lvl]?`<span class="lvl">${LVL[p.lvl]}</span>`:''}</button>`}).join('')}</div>`:`<p class="muted small">Soupiska ${esc(tName(tid))} je prázdná. Děti přidáš v záložce Tým.</p>`}`}).join('')}
  </div>
  <div class="row"><button class="btn" data-a="gen">${S.plan?'Sestavit znovu':'Sestavit trénink'}</button></div>
 </section>`;
 if(S.plan)h+=`<section class="card"><div class="sumline"><div><span class="label">Rozpracovaný trénink</span><p><b>${esc(planTitle(S.plan))}</b> · ${fmtDate(S.plan.date)} · ${S.plan.minutes} min · ${planTeams(S.plan).map(t=>esc(tName(t))).join(' + ')}</p></div><button class="btn ghost sm" data-a="tab" data-v="train">Otevřít trénink</button></div><p class="small muted">Nové sestavení ho nahradí. Uložené tréninky najdeš v Historii.</p></section>`;
 return h
}
function splitText(k,n){const b=Math.floor(k/n),r=k%n,out=[];for(let i=0;i<n;i++)out.push(b+(i<r?1:0));return out.join(' / ')+' dětí'}

function vTrain(){
 if(!S.plan)return `<section class="card empty"><h2>Zatím žádný trénink</h2><p class="muted">Vyber v Plánování délku, týmy, trenéry a přítomné děti a klepni na Sestavit trénink. Nebo otevři uložený trénink z Historie.</p><div class="row" style="justify-content:center"><button class="btn" data-a="tab" data-v="plan">Naplánovat</button><button class="btn ghost" data-a="tab" data-v="hist">Historie</button></div></section>`;
 return vPlanOut()
}
function vPlanOut(){
 const p=S.plan;let t=0;const total=p.blocks.reduce((s,b)=>s+b.min,0);
 const blocks=p.blocks.map((b,bi)=>{
  const start=t;t+=b.min;
  const ctr=`<div class="ctrls"><span class="mins"><button class="ib" data-a="m-" data-b="${bi}" aria-label="Zkrátit">−</button>${b.min} min<button class="ib" data-a="m+" data-b="${bi}" aria-label="Prodloužit">+</button></span>
   <button class="ib" data-a="up" data-b="${bi}" aria-label="Posunout výš" ${bi===0?'disabled':''}>↑</button><button class="ib" data-a="down" data-b="${bi}" aria-label="Posunout níž" ${bi===p.blocks.length-1?'disabled':''}>↓</button>
   <button class="ib" data-a="rm" data-b="${bi}" aria-label="Odebrat blok">✕</button></div>`;
  let body='';const G=nG(p),cm=MODEABLE.includes(b.type);
  const seg=cm?`<div class="seg modeseg" role="group" aria-label="Jak blok proběhne"><button data-a="bmode" data-b="${bi}" data-v="same" class="${b.mode!=='st'?'on':''}" aria-pressed="${b.mode!=='st'}">Všichni</button><button data-a="bmode" data-b="${bi}" data-v="st" class="${b.mode==='st'?'on':''}" aria-pressed="${b.mode==='st'}" ${G<2?'disabled title="Stanoviště potřebují aspoň dva trenéry"':''}>Stanoviště</button></div>`:'';
  if(b.mode==='st'){const ri=rotInfo(b);
   body=`<p class="small muted">${ri.n} stanoviště · ${ri.rot}× rotace po ${ri.rotMin} min${ri.rot<ri.n?' · na všechna stanoviště nezbude čas, prodluž blok':''}</p>
    <div class="st-list">${b.items.map((id,si)=>`<div class="st"><span class="tag">${si+1} · ${esc(p.coaches[si]||'Trenér '+(si+1))}</span><button class="aname" data-a="open" data-v="${id}">${esc(actName(id))}</button><button class="ib" data-a="swap" data-b="${bi}" data-s="${si}" aria-label="Vyměnit stanoviště ${si+1}">⟳</button></div>`).join('')}</div>`}
  else{const multi=b.items.length>1,per=Math.floor(b.min/b.items.length);
   const note=cm?(G>1?'Všechny skupiny dělají totéž, každá se svým trenérem':'Celý tým spolu'):'';
   body=`${note||multi?`<p class="small muted">${note}${multi?(note?' · ':'')+'asi '+per+' min na každou položku':''}</p>`:''}<div class="st-list">${b.items.map((id,si)=>`<div class="st"><span class="tag">${multi?si+1:'▶'}</span><button class="aname" data-a="open" data-v="${id}">${esc(actName(id))}</button><span class="row" style="gap:4px;flex-wrap:nowrap"><button class="ib" data-a="swap" data-b="${bi}" data-s="${si}" aria-label="Vyměnit za jinou">⟳</button>${multi?`<button class="ib" data-a="rmitem" data-b="${bi}" data-s="${si}" aria-label="Odebrat z bloku">✕</button>`:''}</span></div>`).join('')}</div>${cm?`<div class="row"><button class="btn ghost sm" data-a="additem" data-b="${bi}">+ Další cvik do bloku</button></div>`:''}`}
  return `<div class="blk"><div class="clock">${start}′<small>${BT[b.type]||b.type}</small></div><div class="bbody">${seg}${body}${ctr}</div></div>`
 }).join('');
 let h=`<section class="card" id="planCard">
  <div class="sumline"><h2 style="flex:1 1 100%">${esc(planTitle(p))}</h2><span class="total ${total!==p.minutes?'bad':''}">${total} / ${p.minutes} min</span></div>
  <div class="field"><span class="label">Název</span><input type="text" id="plan_name" data-c="planname" value="${esc(p.name||'')}" placeholder="${esc('Trénink '+fmtDate(p.date))}"></div>
  <p class="small muted">${fmtDate(p.date)} · ${planTeams(p).length>1?planTeams(p).map(t=>esc(tName(t))).join(' + ')+' · ':''}${p.present.length} dětí · ${p.coaches.length} ${p.coaches.length===1?'trenér':p.coaches.length<5?'trenéři':'trenérů'} · ${p.venue==='hala'?'hala':'venku'} · ${p.focus.map(f=>CATS[f]).join(', ')}</p>
  <div class="tl">${blocks}</div>
  <div class="row"><button class="btn ghost sm" data-a="addblk">+ Přidat hru</button><button class="btn ghost sm" data-a="adddrink">+ Pauza na pití</button></div>
 </section>`;
 if(nG(p)>1)h+=vGroups();
 h+=vGear();
 h+=vRate()+vParents();
 h+=`<section class="card"><div class="row"><button class="btn" data-a="go">Spustit na hřišti</button><button class="btn ghost" data-a="tab" data-v="plan">Upravit nastavení</button><button class="btn ghost" data-a="save">${S.plans[p.id]?'Uložit změny':'Uložit do historie'}</button><button class="btn ghost" data-a="tplform">Uložit jako šablonu</button></div>
  ${S.tplForm?`<form id="tplForm" class="row"><input type="text" id="tpl_name" placeholder="Název šablony, např. Hala 60 min" aria-label="Název šablony" style="flex:1 1 200px;width:auto" value="${esc(p.name||'')}"><button class="btn sm" type="submit">Uložit šablonu</button><button class="btn ghost sm" type="button" data-a="tplno">Zrušit</button></form><p class="small muted">Šablona si zapamatuje bloky, jejich délku a volbu Všichni / Stanoviště. Hry se při sestavení vyberou znovu.</p>`:''}</section>`;
 return h
}
function vGroups(){
 const p=S.plan,cc=coachCount(),stb=p.blocks.filter(b=>b.mode==='st');
 const changed=JSON.stringify(p.present.map(k=>normKey(k,p)).sort())!==JSON.stringify(presentKeys().slice().sort())||nG(p)!==(cc>=2?cc:1);const mt=planTeams(p).length>1;
 const mx=stb.map(b=>{const ri=rotInfo(b);return `<span class="label">Rozpis · ${esc(BT[b.type]||'')}</span><div class="mx-wrap"><table class="mx"><thead><tr><th>Rotace</th>${p.groups.map((g,gi)=>`<th>Skupina ${GL[gi]}</th>`).join('')}</tr></thead><tbody>${Array.from({length:ri.rot},(_,r)=>`<tr><th>${r+1}.</th>${p.groups.map((g,gi)=>{const si=(gi+r)%ri.n;return `<td>${esc(actName(b.items[si]))}<br><span class="muted small">${esc(p.coaches[si]||'')}</span></td>`}).join('')}</tr>`).join('')}</tbody></table></div>`}).join('');
 return `<section class="card"><div class="sumline"><h2>Skupiny</h2><button class="btn ghost sm" data-a="regroup">Zamíchat a přepočítat</button></div>
  ${changed?'<p class="warnnote">Docházka nebo trenéři se od sestavení změnili. Klepni na Zamíchat a přepočítat.</p>':''}
  <p class="small muted">Každá skupina má svého trenéra. Klepni na dítě a pak na „Sem“ u jiné skupiny.${stb.length?' U bloků „Stanoviště“ začíná skupina u stanoviště se stejným číslem.':''}</p>
  <div class="groups">${p.groups.map((g,gi)=>`<div class="grp"><div class="grp-h"><h3>Skupina ${GL[gi]} · ${esc(p.coaches[gi]||'')} · ${g.length}</h3>${S.sel&&!g.includes(S.sel)?`<button class="btn ball sm" data-a="moveto" data-v="${gi}">Sem</button>`:''}</div>
   <div class="kids">${g.map(n=>{const x=kid(n,p);return `<button class="chip kid ${S.sel===n?'sel':''}" data-a="pick" data-v="${esc(n)}"><b>${esc(numShort(x.num))}</b>${esc(x.name||'?')}${mt?`<span class="lvl">${esc(tShort(x.tid))}</span>`:''}</button>`}).join('')||'<span class="muted small">prázdná</span>'}</div></div>`).join('')}</div>
  ${mx}</section>`
}
/* pomůcky: z volného textu jednotné položky bez duplicit */
const GEAR=[[/tašk/,'Tašky na pomůcky'],[/fotbal/,'Malé fotbalové míče'],[/velk\S* měkk|měkk\S* balón(?!k)/,'Velké měkké míče'],[/nafukovac|balónk/,'Nafukovací balónky'],[/pytlík/,'Pytlíky s fazolemi'],
 [/míč|míček|míčk/,'Měkké míčky'],[/rukavic/,'Rukavice'],[/pálk/,'Pálky'],[/\btee\b/,'Tee (stojánek)'],[/helm/,'Helmy'],[/kužel/,'Kužely'],[/\bmet[aouy]?\b/,'Mety'],
 [/obruč/,'Obruče'],[/kbelík|košík/,'Kbelíky'],[/nudl|žížal/,'Pěnové nudle'],[/\blan[oa]\b/,'Lano'],[/síť|placht|stěn/,'Síť nebo plachta'],[/píšťal/,'Píšťalka'],[/stopk/,'Stopky'],
 [/pásk|čepic/,'Látkové pásky na ocásky'],[/šátk/,'Barevné šátky'],[/lahv/,'Lahve s pitím']];
const GEAR_SKIP=/^(nic|případně|dostatečné|vymezený|čáry|vyznačené|na magnety)/;
function gearItems(txt){const out=[];String(txt||'').toLowerCase().replace(/\([^)]*\)/g,' ').split(/[,;]|\s+a\s+/).forEach(seg=>{
  seg=seg.trim();if(!seg||GEAR_SKIP.test(seg)||/^pro\s/.test(seg))return;const main=seg.split(/\s+nebo\s+/)[0];
  const hit=GEAR.find(([re])=>re.test(main))||GEAR.find(([re])=>re.test(seg));
  out.push(hit?hit[1]:seg.replace(/^[\d–-]+\s*/,'').replace(/^./,c=>c.toUpperCase()))});return[...new Set(out)]}
const GEAR_NAMES=[...new Set(GEAR.map(x=>x[1]))].sort((a,b)=>a.localeCompare(b,'cs'));
const gearOf=a=>Array.isArray(a&&a.gear)?a.gear:gearItems(a&&a.gear);
const gearText=a=>gearOf(a).join(', ')||'bez pomůcek';
function vGear(){
 const m=new Map();S.plan.blocks.forEach(b=>b.items.forEach(id=>{const a=ACT[id];if(!a)return;gearOf(a).forEach(g=>{if(!m.has(g))m.set(g,[]);if(!m.get(g).includes(a.n))m.get(g).push(a.n)})}));
 const items=[...m.entries()].sort((x,y)=>y[1].length-x[1].length||x[0].localeCompare(y[0],'cs'));
 return `<section class="card"><div class="sumline"><h2>Pomůcky do tašky</h2><span class="muted small">${items.length} položek</span></div>
  <ul class="gear">${items.map(([g,w],i)=>`<li><label><input type="checkbox" id="gear${i}" data-c="gear" data-v="${esc(g)}" ${S.gear[g]?'checked':''}><span><b>${esc(g)}</b><br><span class="small muted">${esc(w.join(', '))}</span></span></label></li>`).join('')}</ul></section>`
}

/* ===== Na hřišti ===== */
function steps(){const p=S.plan;if(!p)return[];const out=[];
 p.blocks.forEach((b,bi)=>{
  if(b.mode==='st'){const ri=rotInfo(b);for(let r=0;r<ri.rot;r++)out.push({bi,r,rot:ri.rot,min:r===ri.rot-1?ri.last:ri.rotMin})}
  else if(b.items.length>1){const per=Math.floor(b.min/b.items.length);b.items.forEach((id,i)=>out.push({bi,item:i,min:i===b.items.length-1?b.min-per*(b.items.length-1):per}))}
  else out.push({bi,item:0,min:b.min})});return out}
function stepTitle(s){const b=S.plan.blocks[s.bi];if(s.r!=null)return 'Stanoviště · rotace '+(s.r+1)+'/'+s.rot;return actName(b.items[s.item])}
function vField(){
 if(!S.plan)return `<section class="card empty"><h2>Žádný plán</h2><p class="muted">Sestav trénink v Plánování nebo otevři uložený z Historie.</p><button class="btn" data-a="tab" data-v="plan">Naplánovat</button></section>`;
 const st=steps();if(S.run.i>=st.length)S.run.i=Math.max(0,st.length-1);
 const s=st[S.run.i];if(!s)return `<section class="card empty"><h2>Plán je prázdný</h2></section>`;
 const b=S.plan.blocks[s.bi];let at=0;for(let i=0;i<S.run.i;i++)at+=st[i].min;
 let mid='';
 if(s.r!=null){mid=`<div class="mx-wrap" style="width:100%"><table class="mx"><thead><tr><th>Skupina</th><th>Stanoviště</th><th>Trenér</th></tr></thead><tbody>${S.plan.groups.map((g,gi)=>{const si=(gi+s.r)%b.items.length;return `<tr><th>${GL[gi]} · ${g.length}</th><td><button class="aname" style="font-size:17px" data-a="open" data-v="${b.items[si]}">${esc(actName(b.items[si]))}</button></td><td>${esc(S.plan.coaches[si]||'')}</td></tr>`}).join('')}</tbody></table></div>
  <p class="small muted">${s.r===0?'Skupiny začínají u stanoviště se svým číslem.':'Na písknutí vláček na další stanoviště, trenéři zůstávají.'}</p>`}
 else{const a=ACT[b.items[s.item]],G=nG(S.plan);mid=`${G>1&&MODEABLE.includes(b.type)?`<p class="small">Všechny skupiny dělají totéž: ${S.plan.groups.map((g,gi)=>GL[gi]+' – '+esc(S.plan.coaches[gi]||'')).join(', ')}</p>`:''}<button class="aname" data-a="open" data-v="${a?a.id:''}">${esc(a?a.n:'')}</button>${a&&AN[a.id]?`<div class="animbox" data-anim="${a.id}"></div>`:''}${a&&a.kid?`<div class="cue"><span class="label">Řekni dětem</span><br>${esc(a.kid)}</div>`:''}${a&&a.steps?`<div class="cue"><span class="label">Kroky</span>${stepsHtml(a)}</div>`:''}${a?`<div class="cue small">${esc(a.d)}</div>`:''}`}
 const nx=st[S.run.i+1];
 return `<section class="card now">
  <span class="label">${esc(planTitle(S.plan))} · ${BT[b.type]||''} · ${at}′–${at+s.min}′ z ${S.plan.minutes}′</span>
  <div class="timer" id="timer">${s.min}:00</div>
  <div class="prog"><i id="prog"></i></div>
  <div class="row" style="justify-content:center">
   <button class="ib" data-a="prev" aria-label="Předchozí" ${S.run.i===0?'disabled':''}>◀</button>
   <button class="btn ${S.run.running?'ghost':''}" data-a="startstop">${S.run.running?'Pauza':(S.run.left!=null?'Pokračovat':'Start')}</button>
   <button class="btn ghost sm" data-a="plus1">+1 min</button>
   <button class="ib" data-a="next" aria-label="Další" ${S.run.i>=st.length-1?'disabled':''}>▶</button>
  </div>
  <label class="row small"><input type="checkbox" id="auto" data-c="auto" ${S.run.auto?'checked':''}> Po skončení času automaticky na další blok</label>
  <label class="row small"><input type="checkbox" id="voice" data-c="voice" ${S.pref.voice!==false?'checked':''}> Hlásit střídání nahlas${window.speechSynthesis?'':' (tento prohlížeč neumí)'}</label>
  ${mid}
  ${nx?`<p class="small muted">Další: <b>${esc(stepTitle(nx))}</b> · ${nx.min} min</p>`:'<p class="small muted">Poslední blok tréninku</p><button class="btn ball" data-a="rateopen">Zhodnotit trénink</button>'}
 </section>
 <section class="card"><h2>Průběh</h2><div class="steps">${st.map((x,i)=>{let a2=0;for(let j=0;j<i;j++)a2+=st[j].min;return `<button class="stp ${i===S.run.i?'cur':i<S.run.i?'done':''}" data-a="goto" data-v="${i}"><span>${a2}′</span><span>${esc(stepTitle(x))}</span><span>${x.min}′</span></button>`}).join('')}</div></section>`
}
let actx=null,beeped=false,wl=null;
function beep(){try{if(!actx)return;[0,.35,.7].forEach(t=>{const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=880;o.connect(g);g.connect(actx.destination);g.gain.setValueAtTime(.001,actx.currentTime+t);g.gain.exponentialRampToValueAtTime(.4,actx.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.001,actx.currentTime+t+.25);o.start(actx.currentTime+t);o.stop(actx.currentTime+t+.3)})}catch(e){}if(navigator.vibrate)try{navigator.vibrate([200,100,200])}catch(e){}}
function curStep(){return steps()[S.run.i]}
function remaining(){const s=curStep();if(!s)return 0;if(S.run.running&&S.run.endAt)return S.run.endAt-Date.now();return S.run.left!=null?S.run.left:s.min*60000}
function tick(force){
 if(S.tab!=='field'||!S.plan)return;const s=curStep();if(!s)return;
 let ms=remaining();
 if(S.run.running&&ms<=0&&!beeped){beeped=true;beep();
  if(S.run.auto&&S.run.i<steps().length-1){S.run.i++;const n=curStep();S.run.endAt=Date.now()+n.min*60000;S.run.left=null;beeped=false;saveRun();render();announce();return}
  say(S.run.i<steps().length-1?'Čas! Pokračujte dalším blokem.':'Konec tréninku. Výborně!')}
 if(S.run.running&&ms<=60000&&ms>0&&warnedFor!==S.run.i&&s.min>=2){warnedFor=S.run.i;say('Ještě minuta.')}
 const el=$('#timer'),pr=$('#prog');if(!el)return;
 const neg=ms<0,a=Math.abs(ms),m=Math.floor(a/60000),sec=Math.floor(a%60000/1000);
 el.textContent=(neg?'+':'')+m+':'+String(sec).padStart(2,'0');el.classList.toggle('over',neg);
 if(pr)pr.style.width=Math.min(100,Math.max(0,100-ms/(s.min*600)))+'%'
}
setInterval(tick,250);
async function lock(on){if(on&&S.pref.wake===false)on=false;try{if(on&&navigator.wakeLock&&!wl)wl=await navigator.wakeLock.request('screen');else if(!on&&wl){await wl.release();wl=null}}catch(e){wl=null}}

/* ===== Hry a cviky ===== */
function vLib(){
 const L=S.lib;
 return `<section class="card">
  <div class="sumline"><h2>Hry a cviky</h2><button class="btn ghost sm" data-a="newact">+ Vlastní</button></div>
  <input type="search" id="libq" data-c="libq" placeholder="Hledat hru, cvik nebo pomůcku" value="${esc(L.q)}" aria-label="Hledat">
  <div class="row">${[['all','Vše'],['game','Hry'],['drill','Cviky'],['seq','Rutiny'],['routine','Organizace']].map(([k,l])=>`<button class="chip ${L.kind===k?'on':''}" data-a="lk" data-v="${k}">${l}</button>`).join('')}</div>
  <div class="row">${[['all','Všechny oblasti']].concat(Object.entries(CATS)).filter(([k])=>k!=='rutina').map(([k,l])=>`<button class="chip ${L.cat===k?'on':''}" data-a="lc" data-v="${k}">${l}</button>`).join('')}</div>
 </section><div class="lib-list" id="libList"></div>`
}
function renderLibList(){
 const L=S.lib,q=L.q.trim().toLowerCase();
 const list=acts().filter(a=>(L.kind==='all'||a.k===L.kind)&&(L.cat==='all'||a.c===L.cat||(a.t||[]).includes(L.cat))&&(!q||(a.n+' '+(a.v||'')+' '+gearText(a)+' '+(a.gn||'')+' '+(a.dev||'')).toLowerCase().includes(q)))
  .sort((a,b)=>a.k.localeCompare(b.k)||a.n.localeCompare(b.n,'cs'));
 const el=$('#libList');if(!el)return;
 el.innerHTML=list.length?`<p class="small muted">${list.length} položek</p>`+list.map(a=>`<button class="item" data-a="open" data-v="${a.id}"><h3>${esc(a.n)}${a.v?` <span class="muted" style="font-weight:500">/ ${esc(a.v)}</span>`:''}</h3><span class="kb ${a.k}">${KINDS[a.k]}</span><span class="meta">${CATS[a.c]||''} · ${a.min} min${a.kids>1?' · od '+a.kids+' dětí':''}${a.st?' · na stanoviště':''}${a.custom?' · vlastní':''}${rateBadge(a.id)}<br>${esc(gearText(a))}</span></button>`).join(''):'<p class="muted">Nic nenalezeno.</p>'
}
function openAct(id){const a=ACT[id];if(!a)return;
 const sh=$('#sheet');
 sh.innerHTML=`<div role="dialog" aria-modal="true" aria-label="${esc(a.n)}">
  <div class="sumline"><span class="kb ${a.k}">${KINDS[a.k]} · ${CATS[a.c]||''}</span><button class="ib" data-a="close" aria-label="Zavřít">✕</button></div>
  <h2>${esc(a.n)}</h2>
  ${AN[a.id]?`<div class="animbox" data-anim="${a.id}"></div>`:''}
  <div class="dl">
   <div><span class="label">${a.k==='game'?'Jak se hraje':'Jak na to'}</span><p>${esc(a.d)}</p></div>
   ${a.steps?`<div><span class="label">Kroky rutiny</span>${stepsHtml(a)}</div>`:''}
   ${a.va?`<div><span class="label">Varianta</span><p>${esc(a.va)}</p></div>`:''}
   ${a.kid?`<div><span class="label">Řekni dětem</span><p>${esc(a.kid)}</p></div>`:''}
   <div><span class="label">Rozvíjí</span><p>${esc(a.dev||'')}</p></div>
   <div><span class="label">Pomůcky</span>${gearOf(a).length?`<div class="row" style="gap:6px">${gearOf(a).map(g=>`<span class="chip">${esc(g)}</span>`).join('')}</div>`:'<p>bez pomůcek</p>'}${a.gn?`<p class="small muted">${esc(a.gn)}</p>`:''}</div>
   <div><span class="label">Parametry</span><p>${a.min} min · od ${a.kids||1} ${(a.kids||1)===1?'dítěte':'dětí'}${a.co>1?' · aspoň '+a.co+' trenéři':''}${a.st?' · hodí se na stanoviště':''}${a.out?' · jen venku':''}${rateBadge(a.id)}</p></div>
   ${a.link?`<div><span class="label">Video a návod</span><p><a href="${esc(a.link)}" target="_blank" rel="noopener">${esc(a.lt||'Odkaz')}</a></p></div>`:''}
  </div>
  ${a.custom?(S.confirm==='act'?`<div class="row"><span class="warnnote">Opravdu smazat?</span><button class="btn danger sm" data-a="delact" data-v="${esc(a.custom)}">Smazat</button><button class="btn ghost sm" data-a="noconf">Ne</button></div>`:`<div class="row"><button class="btn ghost sm" data-a="editact" data-v="${esc(a.custom)}">Upravit</button><button class="btn danger sm" data-a="askdel">Smazat</button></div>`):''}
 </div>`;sh.hidden=false;sh.dataset.id=id;mountAnims(sh)}
function closeSheet(){const sh=$('#sheet');sh.hidden=true;sh.innerHTML='';S.confirm=null}
function actForm(cid){const c=cid?S.custom[cid]:{k:'game',c:'hazeni',min:6,kids:2,e:2,st:0};
 const sh=$('#sheet');
 sh.innerHTML=`<div role="dialog" aria-modal="true" aria-label="Vlastní položka"><div class="sumline"><h2>${cid?'Upravit':'Nová'} položka</h2><button class="ib" data-a="close" aria-label="Zavřít">✕</button></div>
  <form id="actForm" class="dl" data-id="${esc(cid||'')}">
   <div class="field"><span class="label">Název</span><input type="text" id="f_n" name="n" required value="${esc(c.n||'')}"></div>
   <div class="grid2">
    <div class="field"><span class="label">Typ</span><select id="f_k" name="k">${Object.entries(KINDS).map(([k,l])=>`<option value="${k}" ${c.k===k?'selected':''}>${l}</option>`).join('')}</select></div>
    <div class="field"><span class="label">Oblast</span><select id="f_c" name="c">${Object.entries(CATS).map(([k,l])=>`<option value="${k}" ${c.c===k?'selected':''}>${l}</option>`).join('')}</select></div>
    <div class="field"><span class="label">Minuty</span><input type="number" id="f_min" name="min" min="1" max="30" value="${c.min||6}"></div>
    <div class="field"><span class="label">Nejméně dětí</span><input type="number" id="f_kids" name="kids" min="1" max="30" value="${c.kids||1}"></div>
   </div>
   <div class="field"><span class="label">Pomůcky</span><div class="row" style="gap:6px">${GEAR_NAMES.map((g,i)=>`<label class="chip" style="display:inline-flex;gap:6px;align-items:center"><input type="checkbox" id="f_g${i}" data-gear="${esc(g)}" ${gearOf(c).includes(g)?'checked':''}>${esc(g)}</label>`).join('')}</div>
    <input type="text" id="f_gear" name="gear" value="${esc(gearOf(c).filter(g=>!GEAR_NAMES.includes(g)).join(', '))}" placeholder="Další pomůcky, oddělené čárkou" aria-label="Další pomůcky">
    <input type="text" id="f_gn" name="gn" value="${esc(c.gn||'')}" placeholder="Poznámka k pomůckám (počty, varianty)" aria-label="Poznámka k pomůckám"></div>
   <div class="field"><span class="label">Popis</span><textarea id="f_d" name="d">${esc(c.d||'')}</textarea></div>
   <div class="field"><span class="label">Řekni dětem (nepovinné)</span><input type="text" id="f_kid" name="kid" value="${esc(c.kid||'')}"></div>
   <div class="field"><span class="label">Rozvíjí</span><input type="text" id="f_dev" name="dev" value="${esc(c.dev||'')}"></div>
   <label class="row"><input type="checkbox" id="f_st" name="st" ${c.st?'checked':''}> Hodí se na stanoviště s jedním trenérem</label>
   <label class="row"><input type="checkbox" id="f_warm" name="warm" ${(c.t||[]).includes('warm')?'checked':''}> Hodí se i na rozehřátí</label>
   <div class="row"><button class="btn" type="submit">Uložit</button></div>
  </form></div>`;sh.hidden=false}

/* ===== Nastavení: tým, soupiska, trenéři, aplikace ===== */
function saveTeam(t){return Store.put('teams',S.teamId,t)}
/* změna čísla dresu: přepsat i docházku a rozpracovaný plán */
function renumber(o,n){const pr=S.draft.present[S.teamId];if(pr){S.draft.present[S.teamId]=pr.map(x=>x===o?n:x);saveDraft()}
 if(S.plan&&planTeams(S.plan).includes(S.teamId)){const ok=K(S.teamId,o),nk=K(S.teamId,n),sw=a=>a.map(x=>normKey(x,S.plan)===ok?nk:x);S.plan.present=sw(S.plan.present||[]);S.plan.groups=(S.plan.groups||[]).map(sw);savePlan()}}

/* ===== Historie ===== */
function vHist(){
 if(!team())return noTeam();
 const list=histAll(),H=S.hist;
 const cnt={};list.slice(0,6).forEach(([,p])=>(p.focus||[]).forEach(f=>cnt[f]=(cnt[f]||0)+1));
 const miss=FOCUS.filter(f=>!cnt[f]),nFav=list.filter(([,p])=>p.fav).length;
 return `<section class="card"><h2>Historie · ${esc(team().name)}</h2>
  ${list.length?`<p class="small">Zaměření posledních ${Math.min(6,list.length)} tréninků: ${FOCUS.filter(f=>cnt[f]).map(f=>CATS[f]+' '+cnt[f]+'×').join(', ')||'–'}${miss.length?`<br><span class="muted">Dlouho se nedělalo: ${miss.map(f=>CATS[f]).join(', ')}</span>`:''}</p>
  <input type="search" id="histq" data-c="histq" placeholder="Hledat podle názvu, hry nebo trenéra" value="${esc(H.q)}" aria-label="Hledat v historii">
  <div class="row"><button class="chip ${!H.fav?'on':''}" data-a="hfav" data-v="0">Všechny · ${list.length}</button><button class="chip ${H.fav?'on':''}" data-a="hfav" data-v="1">★ Oblíbené · ${nFav}</button></div>
  <div class="row">${[['all','Všechna zaměření']].concat(FOCUS.map(f=>[f,CATS[f]])).map(([k,l])=>`<button class="chip ${H.focus===k?'on':''}" data-a="hfocus" data-v="${k}">${l}</button>`).join('')}</div>`
  :'<p class="muted">Uložené tréninky se objeví tady. Sestav trénink a klepni na Uložit do historie.</p>'}</section>
 <div id="histList" style="display:grid;gap:16px"></div>`
}
function histAll(){return Object.entries(S.plans).filter(([,p])=>planTeams(p).includes(S.teamId)).sort((a,b)=>(b[1].date||'').localeCompare(a[1].date||''))}
function renderHistList(){
 const el=$('#histList');if(!el)return;const H=S.hist,q=H.q.trim().toLowerCase();
 const all=histAll(),list=all.filter(([,p])=>(!H.fav||p.fav)&&(H.focus==='all'||(p.focus||[]).includes(H.focus)||(p.blocks||[]).some(b=>b.items.some(i=>ACT[i]&&ACT[i].c===H.focus)))&&(!q||(planTitle(p)+' '+(p.coaches||[]).join(' ')+' '+(p.blocks||[]).map(b=>b.items.map(actName).join(' ')).join(' ')).toLowerCase().includes(q)));
 if(!all.length){el.innerHTML='';return}
 el.innerHTML=(list.length?'':`<p class="muted" style="text-align:center">Žádný trénink neodpovídá filtru.${H.fav?' Hvězdičkou ☆ u tréninku ho přidáš do oblíbených.':''}</p>`)+list.map(([id,p])=>`<section class="card"><div class="sumline"><h3>${esc(planTitle(p))}${p.name?` <span class="muted" style="font-weight:500">· ${fmtDate(p.date)}</span>`:''} · ${p.minutes} min${p.week?` <span class="lvl">týden ${p.week}</span>`:''}${p.rate&&Object.keys(p.rate).length?' <span class="lvl">zhodnoceno</span>':''}</h3><button class="ib star ${p.fav?'on':''}" data-a="fav" data-v="${esc(id)}" aria-pressed="${!!p.fav}" aria-label="${p.fav?'Odebrat z oblíbených':'Přidat do oblíbených'}">${p.fav?'★':'☆'}</button></div>
  <p class="small muted">${planTeams(p).length>1?'společně s '+planTeams(p).filter(t=>t!==S.teamId).map(t=>esc(tName(t))).join(', ')+' · ':''}${(p.present||[]).length} dětí · ${(p.coaches||[]).map(esc).join(', ')}${(p.focus||[]).length?' · '+(p.focus||[]).map(f=>CATS[f]).join(', '):''}</p>
  <p class="small">${(p.blocks||[]).map(b=>b.items.map(actName).join(' + ')).join(' → ')}</p>
  ${S.confirm==='p_'+id?`<div class="row"><span class="warnnote">Smazat tento trénink?</span><button class="btn danger sm" data-a="delplan" data-v="${esc(id)}">Smazat</button><button class="btn ghost sm" data-a="noconf">Ne</button></div>`:`<div class="row"><button class="btn sm" data-a="load" data-v="${esc(id)}">Otevřít</button><button class="btn ghost sm" data-a="dup" data-v="${esc(id)}">Použít znovu</button><button class="btn ghost sm" data-a="askplan" data-v="${esc(id)}">Smazat</button></div>`}
 </section>`).join('')
}

/* ===== Události ===== */
const actions={
 vtest:()=>say('Stanoviště. Každá skupina ke svému trenérovi. Ještě minuta.',true),
 menu:()=>{S.menu=!S.menu;render(true)},
 tab:v=>{S.menu=false;S.tab=v;ls.set('u7-tab',v);S.sel=null;render(true);window.scrollTo(0,0)},
 venue:v=>{S.draft.venue=v;saveDraft();render(true)},
 min:v=>{S.draft.minutes=+v;S.draft.tpl='';saveDraft();render(true)},
 focus:v=>{const f=S.draft.focus;const i=f.indexOf(v);if(i>=0)f.splice(i,1);else f.push(v);saveDraft();render(true)},
 ctog:v=>{const s=coachSelIds();const i=s.indexOf(v);if(i>=0)s.splice(i,1);else s.push(v);S.draft.coachSel[selKey()]=s;saveDraft();render(true)},
 call:()=>{S.draft.coachSel[selKey()]=coachPool().map(c=>c.key);saveDraft();render(true)},
 cnone:()=>{S.draft.coachSel[selKey()]=[];saveDraft();render(true)},
 gdel:v=>{const g=guests().slice();g.splice(+v,1);S.draft.guests[selKey()]=g;saveDraft();render(true)},
 tsel:v=>{const s=selTeams();const i=s.indexOf(v);if(i>=0){if(s.length===1)return toast('Aspoň jeden tým musí zůstat vybraný.');s.splice(i,1)}else s.push(v);S.draft.teamsSel=s;saveDraft();render(true)},
 cdel:async v=>{const t=clone(team());t.coaches=coachesOf(t).filter(c=>c.id!==v);await saveTeam(t)},
 sun:()=>{S.pref.theme=S.pref.theme==='sun'?'':'sun';savePref();applyTheme();if(S.tab==='set')render(true)},
 mvopen:v=>{S.mv=S.mv===v?null:v;render(true)},
 mvno:()=>{S.mv=null;render(true)},
 mvgo:async v=>{const num=S.mv,sel=$('#mv_t'),tid=sel&&sel.value,src=clone(team()),dst=S.teams[tid]?clone(S.teams[tid]):null;const p=src.players.find(x=>x.num===num);if(!p||!dst)return;
  if(!Array.isArray(dst.players))dst.players=[];
  const clash=noNum(num)?dst.players.find(x=>noNum(x.num)&&(x.name||'').toLowerCase()===(p.name||'').toLowerCase()):dst.players.find(x=>x.num===num);
  if(clash){toast(noNum(num)?p.name+' už v týmu '+dst.name+' je.':'V týmu '+dst.name+' už má číslo '+num+' '+(clash.name||'jiné dítě')+'. Nejdřív jednomu změň číslo.');return}
  dst.players.push({num:p.num,name:p.name,lvl:p.lvl||''});S.mv=null;
  try{await Store.put('teams',tid,dst);if(v!=='1'){src.players=src.players.filter(x=>x.num!==num);await saveTeam(src)}toast((v==='1'?'Zkopírováno do ':'Přesunuto do ')+dst.name+'.');render(true)}catch(e){}},
 att:v=>{const x=kid(v),pr=presentOf(x.tid);const i=pr.indexOf(x.num);if(i>=0)pr.splice(i,1);else pr.push(x.num);S.draft.present[x.tid]=pr;saveDraft();render(true)},
 all:v=>{(v?[v]:selTeams()).forEach(t=>S.draft.present[t]=plOf(t).map(p=>p.num));saveDraft();render(true)},
 none:v=>{(v?[v]:selTeams()).forEach(t=>S.draft.present[t]=[]);saveDraft();render(true)},
 gen:()=>generate(),
 'm-':(v,el)=>{const b=S.plan.blocks[+el.dataset.b];b.min=Math.max(1,b.min-1);savePlan();render(true)},
 'm+':(v,el)=>{const b=S.plan.blocks[+el.dataset.b];b.min=Math.min(60,b.min+1);savePlan();render(true)},
 up:(v,el)=>{const i=+el.dataset.b,B=S.plan.blocks;if(i>0){[B[i-1],B[i]]=[B[i],B[i-1]];savePlan();render(true)}},
 down:(v,el)=>{const i=+el.dataset.b,B=S.plan.blocks;if(i<B.length-1){[B[i+1],B[i]]=[B[i],B[i+1]];savePlan();render(true)}},
 rm:(v,el)=>{S.plan.blocks.splice(+el.dataset.b,1);savePlan();render(true)},
 swap:(v,el)=>swap(+el.dataset.b,+el.dataset.s),
 bmode:(v,el)=>{const b=S.plan.blocks[+el.dataset.b];if(!b||b.mode===v||(v!=='st'&&b.mode!=='st'))return;setMode(b,v);savePlan();render(true)},
 additem:(v,el)=>{const p=S.plan,b=p.blocks[+el.dataset.b],c=ctx();p.blocks.forEach(x=>x.items.forEach(i=>c.used.add(i)));const pool=(b.type==='warm'?pools.warm(c):b.type==='game'?pools.gameAny(c):b.type==='skillr'?pools.skillr(c).concat(pools.seq(c)):pools.seq(c)).filter(a=>!c.used.has(a.id));const a=best(pool,c);if(!a)return toast('Další vhodná položka už není.');b.items.push(a.id);savePlan();render(true)},
 rmitem:(v,el)=>{const b=S.plan.blocks[+el.dataset.b];if(b&&b.items.length>1){b.items.splice(+el.dataset.s,1);savePlan();render(true)}},
 addblk:()=>{const c=ctx();S.plan.blocks.forEach(b=>b.items.forEach(i=>c.used.add(i)));const a=best(pools.gameAny(c).filter(x=>!c.used.has(x.id)),c);if(!a)return toast('Žádná další vhodná hra.');const endI=S.plan.blocks.findIndex(b=>b.type==='end');S.plan.blocks.splice(endI<0?S.plan.blocks.length:endI,0,{id:uid(),type:'game',min:a.min,items:[a.id]});savePlan();render(true)},
 adddrink:()=>{const B=S.plan.blocks;const i=Math.max(1,Math.floor(B.length/2));B.splice(i,0,{id:uid(),type:'drink',min:3,items:['r04']});savePlan();render(true)},
 regroup:()=>{const p=S.plan,ts=selTeams(),cc=coachCount();p.teams=ts;p.team=ts[0];p.present=presentKeys();p.coaches=coachNames();p.groups=makeGroups(p.present,cc>=2?cc:1,S.draft.mix!==false);fitBlocks();S.sel=null;savePlan();render(true)},
 pick:v=>{S.sel=S.sel===v?null:v;render(true)},
 moveto:v=>{const g=S.plan.groups;g.forEach(x=>{const i=x.indexOf(S.sel);if(i>=0)x.splice(i,1)});g[+v].push(S.sel);S.sel=null;savePlan();render(true)},
 save:async()=>{try{await savePlanToHistory();if(S.draft.name||S.draft.week){S.draft.name='';S.draft.week=0;saveDraft()}}catch(e){}},
 go:()=>{actions.tab('field')},
 rate:async(v,el)=>{const r=+el.dataset.r,p=S.plan;p.rate=Object.assign({},p.rate);if(p.rate[v]===r)delete p.rate[v];else p.rate[v]=r;savePlan();S.openRate=true;render(true);try{await savePlanToHistory(true)}catch(e){}},
 rateopen:()=>{S.openRate=true;actions.tab('train');setTimeout(()=>{const e=$('#rateCard');if(e&&e.scrollIntoView)e.scrollIntoView({behavior:'smooth'})},80)},
 copypar:async()=>{const t=$('#parentsTxt');if(!t)return;try{await navigator.clipboard.writeText(t.value);toast('Zkopírováno. Vlož do skupiny rodičů.')}catch(e){t.focus();t.select();toast('Text je označený, zkopíruj ho.')}},
 kid:v=>openKid(v),
 kidlvl:async v=>{const t=clone(team()),p=t.players.find(x=>x.num===v);if(!p)return;p.lvl=lvlFor(skOf(p).length);await saveTeam(t);openKid(v)},
 kidfocus:v=>{S.draft.focus=[v];saveDraft();actions.tab('plan');toast('Zaměření nastaveno: '+CATS[v])},
 week:v=>{const w=+v;S.draft.week=w;if(w){S.draft.focus=SEASON[w-1].f.slice()}saveDraft();render(true)},
 tpl:v=>{S.draft.tpl=v||'';saveDraft();render(true)},
 tplform:()=>{S.tplForm=!S.tplForm;render(true);setTimeout(()=>{const e=$('#tpl_name');if(e&&e.focus)e.focus()},50)},
 tplno:()=>{S.tplForm=false;render(true)},
 tplask:v=>{S.confirm='t_'+v;render(true)},
 tpldel:async v=>{S.confirm=null;if(S.draft.tpl===v){S.draft.tpl='';saveDraft()}await Store.del('tpls',v);render(true)},
 open:v=>openAct(v),close:()=>closeSheet(),
 startstop:()=>{if(!actx){try{const AC=window.AudioContext||window.webkitAudioContext;if(AC)actx=new AC()}catch(e){}}
  if(S.run.running){S.run.left=S.run.endAt-Date.now();S.run.running=false;S.run.endAt=null;lock(false)}
  else{const ms=remaining();S.run.endAt=Date.now()+ms;S.run.running=true;S.run.left=null;beeped=ms<=0;lock(true);if(ms>=curStep().min*60000-1000)announce()}saveRun();render(true)},
 plus1:()=>{if(S.run.running)S.run.endAt+=60000;else S.run.left=remaining()+60000;beeped=false;saveRun();tick()},
 next:()=>gotoStep(S.run.i+1),prev:()=>gotoStep(S.run.i-1),goto:v=>gotoStep(+v),
 lk:v=>{S.lib.kind=v;render(true)},lc:v=>{S.lib.cat=v;render(true)},
 newact:()=>actForm(null),editact:v=>actForm(v),askdel:()=>{S.confirm='act';openAct($('#sheet').dataset.id)},
 delact:async v=>{await Store.del('custom',v);closeSheet();toast('Smazáno.')},
 noconf:()=>{const was=S.confirm;S.confirm=null;if(was==='act')openAct($('#sheet').dataset.id);else render(true)},
 team:v=>{S.teamId=v;ls.set('u7-team',v);S.confirm=null;S.mv=null;S.imp=null;render(true)},
 newteam:async()=>{const id='t'+uid();const n=Object.keys(S.teams).length+1;S.teamId=id;ls.set('u7-team',id);await Store.put('teams',id,{name:'Nový tým '+n,players:[],coaches:[]});render(true);setTimeout(()=>{const e=$('#tname');if(e){e.focus();e.select()}},60)},
 askteam:()=>{S.confirm='team';render(true)},
 delteam:async()=>{const id=S.teamId;S.confirm=null;if(S.draft.teamsSel){S.draft.teamsSel=S.draft.teamsSel.filter(t=>t!==id);saveDraft()}await Store.del('teams',id);S.teamId=null;fixTeam();render(true)},
 lvl:async v=>{const t=clone(team());const p=t.players.find(p=>p.num===v);p.lvl=LVL_NEXT[p.lvl||'']??'';await saveTeam(t)},
 pdel:async v=>{const t=clone(team());t.players=t.players.filter(p=>p.num!==v);await saveTeam(t)},
 impinto:async()=>{const t=clone(team());const old=new Map((t.players||[]).map(p=>[p.num,p.lvl||'']));t.players=S.imp.R.players.map(p=>({num:String(p.num),name:p.name||'',lvl:old.get(String(p.num))||''}));S.imp=null;await saveTeam(t);toast('Soupiska převzata.')},
 impnew:async()=>{const id='t'+uid();const r=S.imp.R;S.imp=null;S.teamId=id;ls.set('u7-team',id);await Store.put('teams',id,{name:r.name||'Tým',players:r.players.map(p=>({num:String(p.num),name:p.name||'',lvl:''})),coaches:[]});toast('Tým přidán.')},
 impno:()=>{S.imp=null;render(true)},
 load:v=>{S.plan=clone(S.plans[v]);S.draft.name=S.plan.name||'';S.draft.week=S.plan.week||0;S.draft.teamsSel=planTeams(S.plan).filter(t=>S.teams[t]);S.draft.minutes=S.plan.minutes;selectCoachesByNames(S.plan.coaches||[]);S.draft.date=S.plan.date;saveDraft();savePlan();S.run={i:0,left:null,endAt:null,running:false,auto:S.run.auto};saveRun();actions.tab('train')},
 dup:v=>{const p=clone(S.plans[v]);S.draft.teamsSel=planTeams(p).filter(t=>S.teams[t]);p.teams=selTeams();p.team=p.teams[0];p.id=uid();p.date=today();p.present=presentKeys();p.coaches=coachNames();S.plan=p;S.draft.date=p.date;const cc=coachCount();p.groups=makeGroups(p.present,cc>=2?cc:1,S.draft.mix!==false);fitBlocks();saveDraft();savePlan();S.run={i:0,left:null,endAt:null,running:false,auto:S.run.auto};saveRun();actions.tab('train')},
 hfav:v=>{S.hist.fav=v==='1';render(true)},
 hfocus:v=>{S.hist.focus=v;render(true)},
 fav:async v=>{const p=clone(S.plans[v]);if(!p)return;p.fav=!p.fav;try{await Store.put('plans',v,p);if(S.plan&&S.plan.id===v){S.plan.fav=p.fav;savePlan()}toast(p.fav?'Přidáno do oblíbených.':'Odebráno z oblíbených.')}catch(e){}},
 askplan:v=>{S.confirm='p_'+v;render(true)},
 delplan:async v=>{S.confirm=null;await Store.del('plans',v);render(true)}
};
function gotoStep(i){const st=steps();if(i<0||i>=st.length)return;S.run.i=i;const s=st[i];beeped=false;if(S.run.running){S.run.endAt=Date.now()+s.min*60000;S.run.left=null;announce()}else S.run.left=null;saveRun();render(true)}
document.addEventListener('click',e=>{if(S.menu&&!e.target.closest('.menu')){S.menu=false;render(true)}const b=e.target.closest('[data-a]');if(!b){if(e.target.id==='sheet')closeSheet();return}if(b.disabled)return;const f=actions[b.dataset.a];if(f){e.preventDefault();f(b.dataset.v,b)}});
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(S.menu){S.menu=false;render(true)}else if(!$('#sheet').hidden)closeSheet()});
$('#teamSel').addEventListener('change',e=>actions.team(e.target.value));
document.addEventListener('input',e=>{const el=e.target,c=el.dataset.c;if(!c)return;
 if(c==='libq'){S.lib.q=el.value;renderLibList()}
 else if(c==='histq'){S.hist.q=el.value;renderHistList()}
});
document.addEventListener('change',async e=>{const el=e.target,c=el.dataset.c;if(!c)return;
 if(c==='date'){S.draft.date=el.value||today();saveDraft();if(S.plan){S.plan.date=S.draft.date;savePlan()}render()}
 else if(c==='trname'){S.draft.name=el.value;saveDraft()}
 else if(c==='planote'){S.plan.note=el.value;savePlan();if(S.plans[S.plan.id])savePlanToHistory(true).catch(()=>{})}
 else if(c==='voice'){S.pref.voice=el.checked;savePref();if(el.checked)say('Hlášení zapnuto.')}
 else if(c==='vname'){S.pref.vname=el.value;savePref();say('Ahoj děti, jdeme na to!',true)}
 else if(c==='vrate'){S.pref.vrate=el.value;savePref();say('Ještě minuta.',true)}
 else if(c==='skill'){const t=clone(team()),pl=t.players.find(x=>x.num===el.dataset.p);if(!pl)return;const sk=skOf(pl);pl.sk=el.checked?[...new Set(sk.concat([el.dataset.v]))]:sk.filter(x=>x!==el.dataset.v);await saveTeam(t);openKid(el.dataset.p)}
 else if(c==='planname'){S.plan.name=el.value.trim();savePlan();render(true)}
 else if(c==='gear'){S.gear[el.dataset.v]=el.checked}
 else if(c==='auto'){S.run.auto=el.checked;saveRun()}
 else if(c==='tname'){const t=clone(team());t.name=el.value.trim()||'Tým';await saveTeam(t)}
 else if(c==='cname'){const t=clone(team());const cs=coachesOf(t);const x=cs.find(c=>c.id===el.dataset.v);const nv=el.value.trim();if(x&&nv){x.name=nv;t.coaches=cs;await saveTeam(t)}else render(true)}
 else if(c==='theme'){S.pref.theme=el.value;savePref();applyTheme()}
 else if(c==='mix'){S.draft.mix=el.checked;saveDraft()}
 else if(c==='wake'){S.pref.wake=el.checked;savePref();if(!el.checked)lock(false)}
 else if(c==='pname'){const t=clone(team());const p=t.players.find(p=>p.num===el.dataset.v);if(p){p.name=el.value.trim();await saveTeam(t)}}
 else if(c==='pnum'){const t=clone(team()),old=el.dataset.v;let nv=el.value.trim().replace(/^0+(?=\d)/,'');
  if(nv&&!/^\d{1,3}$/.test(nv)){toast('Číslo dresu má 1–3 číslice.');render(true);return}
  if(!nv){if(noNum(old))return;nv='~'+uid().slice(-6)}
  if(t.players.some(p=>p.num===nv&&p.num!==old)){toast('Číslo '+nv+' už má někdo jiný.');render(true);return}
  const p=t.players.find(p=>p.num===old);if(!p)return;p.num=nv;renumber(old,nv);await saveTeam(t)}
 else if(c==='imp'){const f=el.files&&el.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const b=JSON.parse(r.result);const R=b&&(b.R||(b.kind==='team'&&b.R));if(!R||!Array.isArray(R.players))throw 0;S.imp={R:{name:R.name||'',players:R.players.filter(p=>p&&p.num!=null)}};render(true)}catch(x){toast('Tohle není soubor týmu ze zápisníku.')}};r.readAsText(f)}
});
document.addEventListener('submit',async e=>{e.preventDefault();const f=e.target;
 if(f.id==='addC'){const name=$('#nc_name').value.trim();if(!name)return toast('Napiš jméno trenéra.');const t=clone(team());const cs=coachesOf(t);if(cs.some(c=>c.name.toLowerCase()===name.toLowerCase()))return toast(name+' už v seznamu je.');const id='c'+uid();cs.push({id,name});t.coaches=cs;
  Object.keys(S.draft.coachSel).forEach(k=>{if(k.split('+').includes(S.teamId))S.draft.coachSel[k].push(K(S.teamId,id))});saveDraft();await saveTeam(t);render(true);const n=$('#nc_name');if(n)n.focus();return}
 if(f.id==='tplForm'){const name=$('#tpl_name').value.trim();if(!name)return toast('Napiš název šablony.');const id='p'+uid();await Store.put('tpls',id,{name,blocks:S.plan.blocks.map(b=>({type:b.type,min:b.min,mode:b.mode==='st'?'st':'same'}))});S.tplForm=false;toast('Šablona uložena. Najdeš ji v Plánování.');render(true);return}
 if(f.id==='addGuest'){const name=$('#g_name').value.trim();if(!name)return;S.draft.guests[selKey()]=guests().concat([name]);saveDraft();render(true);return}
 if(f.id==='addP'){const raw=$('#np_num').value.trim().replace(/^0+(?=\d)/,''),name=$('#np_name').value.trim();if(!name)return toast('Napiš jméno dítěte.');if(raw&&!/^\d{1,3}$/.test(raw))return toast('Číslo dresu má 1–3 číslice.');const num=raw||'~'+uid().slice(-6);const t=clone(team());if(t.players.some(p=>p.num===num))return toast('Číslo '+num+' už v soupisce je.');t.players.push({num,name,lvl:''});
  const pr=S.draft.present[S.teamId];if(pr){pr.push(num);saveDraft()}await saveTeam(t);render(true);const n=$('#np_num');if(n)n.focus()}
 if(f.id==='actForm'){const g=id=>$(id).value;const d={n:g('#f_n').trim(),k:g('#f_k'),c:g('#f_c'),min:Math.max(1,+g('#f_min')||5),kids:Math.max(1,+g('#f_kids')||1),gear:[...document.querySelectorAll('#actForm [data-gear]')].filter(x=>x.checked).map(x=>x.dataset.gear).concat(g('#f_gear').split(',').map(x=>x.trim()).filter(Boolean).map(x=>x.replace(/^./,ch=>ch.toUpperCase()))).filter((x,i,arr)=>arr.indexOf(x)===i),gn:g('#f_gn').trim(),d:g('#f_d').trim(),kid:g('#f_kid').trim(),dev:g('#f_dev').trim(),st:$('#f_st').checked?1:0,e:2,t:$('#f_warm').checked?['warm']:[]};
  if(d.k==='routine')d.slot='start';if(!d.n)return toast('Doplň název.');const id=f.dataset.id||uid();await Store.put('custom',id,d);closeSheet();toast('Uloženo.');if(S.tab==='lib')render(true)}
});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&S.run.running)lock(true)});

/* Verze aplikace: při každém vydání zvýšit APP_VERSION a datum (stejně jako ve Scorekeeperu). */
const APP_VERSION='1.1',APP_DATE='2026-10-16';
const verTxt=()=>'verze '+APP_VERSION;
const DEN_NAME={teamlist:'seznam týmů',teams:'soupisky',training:'tréninková data',photos:'fotky'};
const deniedKey=p=>p.split('/')[0];
try{const hv=document.getElementById('hver');if(hv)hv.textContent=verTxt()}catch(e){}
/* =================================================================================
   WEBOVÁ VERZE · Firebase Realtime Database sdílená se Scorekeeperem
   Role: správce (kód správce ze Scorekeeperu) · trenér (společný kód, zakládá správce)
   Čte:  teamlist/<tid> · teams/<tid>/roster  (spravuje Scorekeeper)
   Píše: training/staff (trenéři a jejich týmy) · training/kids/<tid> · training/{plans,custom,tpls}/<id>
   Obsah ukládáme jako JSON text {ts,json}, aby se zachovaly prázdné hodnoty a pole.
   ================================================================================= */
const FB_CONFIG={apiKey:"AIzaSyDqwd6A6eaeHlczoLhGvaxQlzdp9od-0Pg",authDomain:"eagles-scorekeeper.firebaseapp.com",databaseURL:"https://eagles-scorekeeper-default-rtdb.europe-west1.firebasedatabase.app",projectId:"eagles-scorekeeper",storageBucket:"eagles-scorekeeper.firebasestorage.app",messagingSenderId:"691498301504",appId:"1:691498301504:web:ec05dfb8a51095ec1e87a5"};
const WKEY='u7w-auth',CODE_ABC='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',COLS=['plans','custom','tpls'];
const W={sdel:null,phMsg:'',phDel:null,assign:null,rmove:null,rNoNum:false,rmsg:'',role:null,code:null,uid:null,online:false,msg:'',busy:false,pins:null,pinMsg:'',imp:null,impMsg:'',fb:null,subs:[],denied:{},seen:{},loaded:{},raw:{teamlist:{},roster:{},coaches:{},kids:{},photos:{},staff:null}};
const J=v=>JSON.stringify(v);
const PJ=v=>{try{return v&&typeof v.json==='string'?JSON.parse(v.json):null}catch(e){return null}};
const normCode=v=>String(v||'').toUpperCase().replace(/[^A-Z0-9]/g,'').replace(/^(.{4})(.+)$/,'$1-$2');
function genCode(){let c='';const r=crypto.getRandomValues(new Uint32Array(8));for(let i=0;i<8;i++)c+=CODE_ABC[r[i]%CODE_ABC.length];return c.slice(0,4)+'-'+c.slice(4)}
const baseUrl=()=>location.origin+location.pathname;
const isPerm=e=>/permission/i.test(String(e&&(e.code||e.message)));
const ROLE_NAME={admin:'Správce',coach:'Trenér'};

/* ---------- připojení ---------- */
function fbInit(){if(W.fb)return W.fb;if(typeof firebase==='undefined'){W.msg='Nepodařilo se načíst připojení. Zkontroluj internet a obnov stránku.';return null}
 try{/* vlastní pojmenovaná aplikace = vlastní anonymní přihlášení, nepřepíše přihlášení Scorekeeperu na stejné adrese */
  const app=firebase.apps.find(a=>a.name==='planovac')||firebase.initializeApp(FB_CONFIG,'planovac');
  W.fb={db:app.database(),auth:app.auth()};
  W.fb.db.ref('.info/connected').on('value',s=>{W.online=!!s.val();syncLine()})}
 catch(e){W.msg='Připojení se nepodařilo spustit.';W.fb=null}return W.fb}
async function signIn(){const f=fbInit();if(!f)throw{code:'offline'};if(f.auth.currentUser)return f.auth.currentUser.uid;
 const u=await new Promise(res=>{const off=f.auth.onAuthStateChanged(x=>{off();res(x)})});if(u)return u.uid;const c=await f.auth.signInAnonymously();return c.user.uid}
async function claim(code){const uid=await signIn();W.uid=uid;await W.fb.db.ref('claims/'+uid).set(code);
 const p=(await W.fb.db.ref('pinmap/'+code).once('value')).val();if(!p||!p.role)throw{code:'bad'};if(p.role==='scorer')throw{code:'scorer'};if(!ROLE_NAME[p.role])throw{code:'bad'};return p}

/* ---------- úložiště (stejné rozhraní jako verze v Claude) ---------- */
const Store={db:null,
 async start(){Web.boot()},
 async put(col,id,data){
  if(col==='teams')return Web.putTeam(id,data);
  S[col]=Object.assign({},S[col],{[id]:data});ls.set('u7w-'+col,S[col]);if(col==='custom')rebuildActs();render();
  Web.write('training/'+col+'/'+id,{ts:Date.now(),json:J(data)})},
 async del(col,id){
  if(col==='teams'){toast('Týmy spravuje Scorekeeper.');return}
  const m=Object.assign({},S[col]);delete m[id];S[col]=m;ls.set('u7w-'+col,m);if(col==='custom')rebuildActs();render();
  Web.write('training/'+col+'/'+id,null)}
};
const Web={
 boot(){
  W.raw.photos=ls.get('u7w-photos',{})||{};
  ['teams','plans','custom','tpls'].forEach(c=>S[c]=ls.get('u7w-'+c,{}));rebuildActs();fixTeam();
  const a=ls.get(WKEY,null);if(a&&a.role&&a.code){W.role=a.role;W.code=a.code}
  render();syncLine();
  const f=fbInit();if(!f){render();return}
  (async()=>{
   if(!W.code){try{await signIn()}catch(e){}render();return}
   try{const p=await claim(W.code);if(p.role!==W.role){W.role=p.role;ls.set(WKEY,{code:W.code,role:p.role})}Web.subscribe();render()}
   catch(e){if(e&&e.code==='offline')return;if(isPerm(e)||e.code==='bad'||e.code==='scorer')Web.logout('Kód už neplatí. Přihlas se znovu.')}
  })()},
 write(path,val){if(!W.fb){toast('Bez připojení se nic neuloží.');return}
  const r=W.fb.db.ref(path),p=val===null?r.remove():r.set(val);
  p.catch(e=>{toast(isPerm(e)?'Na tuhle změnu nemáš oprávnění.':'Uložení se nepovedlo. Zkus to znovu.')})},
 putTeam(tid,t){const kids={};(t.players||[]).forEach(p=>{if(p.lvl||(p.sk&&p.sk.length))kids[p.num]={lvl:p.lvl||'',sk:p.sk||[],name:p.name||''}});
  W.raw.kids[tid]=kids;Web.compose();render();Web.write('training/kids/'+tid,{ts:Date.now(),json:J(kids)})},
 compose(){const tl=W.raw.teamlist||{},out={};
  Object.keys(tl).forEach(tid=>{const R=W.raw.roster[tid]||{},kids=W.raw.kids[tid]||{},kv=Object.values(kids);
   out[tid]={name:R.name||(tl[tid]&&tl[tid].name)||'Tým',coaches:Array.isArray(W.raw.staff)?W.raw.staff.filter(c=>(c.teams||[]).includes(tid)).map(c=>({id:c.id,name:c.name})):(W.raw.coaches[tid]||[]),
    players:(Array.isArray(R.players)?R.players:[]).filter(p=>p&&p.num!=null).map(p=>{const num=String(p.num),k=kids[num]||kv.find(x=>x.name&&x.name===p.name)||{};return{num,name:p.name||'',lvl:k.lvl||'',sk:Array.isArray(k.sk)?k.sk:[]}})}});
  S.teams=out;ls.set('u7w-teams',out);fixTeam()},
 on(path,cb){const r=W.fb.db.ref(path);const h=r.on('value',cb,e=>{if(!isPerm(e))return;const k=deniedKey(path);W.denied[k]=1;console.warn('Firebase: chybí oprávnění ke čtení',path);if(k!=='photos')S.mode='err';syncLine();render()});W.subs.push(()=>r.off('value',h))},
 subscribe(){if(W.subs.length)return;S.mode='web';syncLine();
  Web.on('teamlist',s=>{W.raw.teamlist=s.val()||{};W.loaded.tl=1;Object.keys(W.raw.teamlist).forEach(tid=>{if(W.seen[tid])return;W.seen[tid]=1;
   Web.on('teams/'+tid+'/roster',x=>{W.raw.roster[tid]=PJ(x.val())||{};Web.compose();render()});
   Web.on('training/coaches/'+tid,x=>{W.raw.coaches[tid]=PJ(x.val())||[];W.loaded['c_'+tid]=1;staffMigrate();Web.compose();render()});
   Web.on('training/kids/'+tid,x=>{W.raw.kids[tid]=PJ(x.val())||{};Web.compose();render()});
   Web.on('photos/'+tid,x=>{W.raw.photos[tid]=x.val()||{};phCache();if(S.tab==='who'||!$('#sheet').hidden)render()})});
   Web.compose();Web.ready();render()});
  Web.on('training/staff',x=>{const v=PJ(x.val());W.raw.staff=Array.isArray(v)?v:null;W.loaded.staff=1;staffMigrate();Web.compose();render()});
  COLS.forEach(col=>Web.on('training/'+col,s=>{const v=s.val()||{},m={};Object.keys(v).forEach(id=>{const d=PJ(v[id]);if(d)m[id]=d});S[col]=m;ls.set('u7w-'+col,m);W.loaded[col]=1;if(col==='custom')rebuildActs();Web.ready();render()}))},
 ready(){if(W.loaded.tl&&COLS.every(c=>W.loaded[c]))S.ready=true},
 logout(msg){try{if(W.fb&&W.uid)W.fb.db.ref('claims/'+W.uid).remove()}catch(e){}
  W.subs.forEach(off=>{try{off()}catch(e){}});W.subs=[];W.denied={};W.seen={};W.loaded={};W.pins=null;
  try{localStorage.removeItem(WKEY)}catch(e){}W.role=null;W.code=null;W.msg=msg||'';S.ready=false;S.mode='local';render()}
};

/* ---------- přihlášení ---------- */
function renderLogin(){
 $('#tabs').innerHTML='';const ts=$('#teamSel');ts.innerHTML='';ts.disabled=true;ts.hidden=true;
 $('#view').innerHTML=`<section class="card login"><h2>Přihlášení</h2>
  <p class="small muted">Zadej kód, který ti dal správce. Trenéři mají jeden společný kód, správce se přihlašuje svým kódem ze Scorekeeperu.</p>
  <form id="wLogin" class="dl"><div class="field"><span class="label">Kód</span><input type="text" id="w_code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="např. K4PX-7QMR"></div>
  <div class="row"><button class="btn" type="submit" ${W.busy?'disabled':''}>${W.busy?'Přihlašuji…':'Přihlásit'}</button></div></form>
  ${W.msg?`<p class="warnnote">${esc(W.msg)}</p>`:''}</section>`}
async function doLogin(){const code=normCode($('#w_code').value);if(code.replace('-','').length<8){W.msg='Zadej celý kód.';return render(true)}
 W.busy=true;W.msg='';render(true);
 try{const p=await claim(code);W.busy=false;W.role=p.role;W.code=code;ls.set(WKEY,{code,role:p.role});Web.subscribe();
  S.tab=p.role==='admin'&&!Object.keys(S.teams).length?'set':S.tab;render(true);toast('Přihlášeno: '+ROLE_NAME[p.role]+'.')}
 catch(e){W.busy=false;try{if(W.uid)W.fb.db.ref('claims/'+W.uid).remove()}catch(x){}
  W.msg=e&&e.code==='offline'?'Bez internetu se nejde přihlásit. Připoj se a zkus to znovu.':e&&e.code==='scorer'?'Tohle je kód zapisovatele pro Scorekeeper. Kód pro trenéry ti dá správce.':'Neplatný kód. Zkontroluj ho a zkus to znovu.';render(true)}}
document.addEventListener('submit',e=>{if(e.target.id==='wLogin'){e.preventDefault();doLogin()}});

/* ---------- správce: kód pro trenéry ---------- */
async function loadPins(){if(!W.fb||W.role!=='admin')return;try{W.pins=(await W.fb.db.ref('pinmap').once('value')).val()||{}}catch(e){W.pins={}}if(S.tab==='set')render()}
const coachCodes=()=>Object.keys(W.pins||{}).filter(c=>W.pins[c]&&W.pins[c].role==='coach');
async function newCoachPin(){if(!W.fb||W.role!=='admin')return;const u={};coachCodes().forEach(c=>u[c]=null);const code=genCode();u[code]={role:'coach'};
 try{await W.fb.db.ref('pinmap').update(u);W.pinMsg='Nový kód pro trenéry: '+code+'. Starý kód přestal platit.'}catch(e){W.pinMsg=isPerm(e)?'Pravidla databáze zatím roli trenér neznají. Vlož do Firebase nová pravidla (README).':'Kód se nepodařilo vytvořit.'}loadPins()}
async function dropCoachPins(){if(!W.fb||W.role!=='admin')return;const u={};coachCodes().forEach(c=>u[c]=null);try{await W.fb.db.ref('pinmap').update(u);W.pinMsg='Kód pro trenéry je zrušený.'}catch(e){W.pinMsg='Kód se nepodařilo zrušit.'}loadPins()}

/* ---------- správce: převzetí dat z verze v Claude ---------- */
const nameKey=s=>String(s||'').trim().toLowerCase();
function planImport(b){const tl=W.raw.teamlist||{},byName={};Object.keys(tl).forEach(id=>{byName[nameKey(tl[id]&&tl[id].name)]=id});
 const map={},miss=[];Object.entries(b.teams||{}).forEach(([old,t])=>{const nid=byName[nameKey(t.name)];if(nid)map[old]=nid;else if((t.players||[]).length||(t.coaches||[]).length)miss.push(t.name)});return{map,miss}}
async function runImport(){const b=W.imp;if(!b)return;const {map,miss}=planImport(b),db=W.fb.db,ts=Date.now(),u={},st=clone(staffList());
 Object.entries(map).forEach(([old,nid])=>{const t=b.teams[old],R=W.raw.roster[nid]||{},ps=Array.isArray(R.players)?R.players:[],kids=Object.assign({},W.raw.kids[nid]||{});
  (t.players||[]).forEach(p=>{if(!p.lvl&&!(p.sk&&p.sk.length))return;const m=ps.find(x=>String(x.num)===String(p.num))||ps.find(x=>x.name===p.name);if(m)kids[String(m.num)]={lvl:p.lvl||'',sk:p.sk||[],name:m.name||p.name}});
  u['training/kids/'+nid]={ts,json:J(kids)};
  (t.coaches||[]).forEach(c=>{const nm=String(c.name||c).trim();if(!nm)return;let x=st.find(y=>nameKey(y.name)===nameKey(nm));if(!x){x={id:'c'+uid(),name:nm,teams:[]};st.push(x)}if(!x.teams.includes(nid))x.teams.push(nid)})});
 u['training/staff']={ts,json:J(st)};
 const remapKey=k=>{k=String(k);const i=k.indexOf('|');return i<0?k:(map[k.slice(0,i)]||k.slice(0,i))+k.slice(i)};
 Object.entries(b.plans||{}).forEach(([id,p])=>{p=clone(p);p.team=map[p.team]||p.team;if(Array.isArray(p.teams))p.teams=p.teams.map(t=>map[t]||t);
  if(Array.isArray(p.present))p.present=p.present.map(k=>String(k).includes('|')?remapKey(k):(map[p.team]?p.team+'|'+k:k));
  if(Array.isArray(p.groups))p.groups=p.groups.map(g=>g.map(k=>String(k).includes('|')?remapKey(k):k));u['training/plans/'+id]={ts,json:J(p)}});
 Object.entries(b.custom||{}).forEach(([id,c])=>{u['training/custom/'+id]={ts,json:J(c)}});
 Object.entries(b.tpls||{}).forEach(([id,t])=>{u['training/tpls/'+id]={ts,json:J(t)}});
 try{await db.ref().update(u);W.imp=null;W.impMsg='Převzato: '+Object.keys(map).length+' týmy, '+Object.keys(b.plans||{}).length+' tréninků, '+Object.keys(b.tpls||{}).length+' šablon, '+Object.keys(b.custom||{}).length+' vlastních položek.'+(miss.length?' Nenalezené týmy: '+miss.join(', ')+'.':'')}
 catch(e){W.impMsg=isPerm(e)?'Převzetí odmítla pravidla databáze. Vlož do Firebase nová pravidla (README) a zkus to znovu.':'Převzetí se nepovedlo.'}render(true)}
document.addEventListener('change',e=>{if(e.target.id!=='wimpfile')return;const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();
 r.onload=()=>{try{const b=JSON.parse(r.result);if(!b||b.app!=='u7-planovac')throw 0;W.imp=b;W.impMsg=''}catch(x){W.imp=null;W.impMsg='Tohle není záloha tréninkového plánovače.'}render(true)};r.readAsText(f)});


/* ---------- záložka Tým: stejné funkce jako karta Tým ve Scorekeeperu ---------- */
const jersey=raw=>{const v=String(raw||'').trim().replace(/^0+(?=\d)/,'');return /^\d{1,3}$/.test(v)?v:null};
const numTxt=n=>noNum(n)?'bez č.':'#'+n;
function rosterOf(tid){const R=clone(W.raw.roster[tid]||{name:tName(tid),players:[]});if(!Array.isArray(R.players))R.players=[];return R}
function rosterSave(tid,R){W.raw.roster[tid]=R;Web.compose();Web.write('teams/'+tid+'/roster',{ts:Date.now(),dev:'planovac',json:J(R)})}
function kidsSave(tid,k){W.raw.kids[tid]=k;Web.compose();Web.write('training/kids/'+tid,{ts:Date.now(),json:J(k)})}
function vTeam(){
 const t=team(),tid=S.teamId;if(!t)return noTeam();const ps=players(),adm=W.role==='admin',others=Object.keys(S.teams).filter(x=>x!==tid);
 return `<section class="card"><div class="field"><span class="label">Název našeho týmu</span><input type="text" id="wt_name" data-c="wtname" value="${esc(t.name)}"></div>
  <span class="label">Soupiska · ${ps.length} hráčů</span>
  ${ps.length?`<div class="dl">${ps.map(p=>`<div class="rrow">
   <b class="rnum">${noNum(p.num)?'–':'#'+esc(p.num)}</b>
   <span class="rname"><button class="aname" data-a="kid" data-v="${esc(p.num)}">${esc(p.name||'Hráč')}</button>${noNum(p.num)?' <span class="lvl">bez čísla</span>':''}</span>
   <button class="chip" data-a="lvl" data-v="${esc(p.num)}" title="Úroveň">${LVL[p.lvl]||'úroveň'}</button>
   <span class="row" style="gap:4px;flex-wrap:nowrap">${noNum(p.num)?`<button class="btn ghost sm" data-a="wrass" data-v="${esc(p.num)}">Přidělit číslo</button>`:''}${adm&&others.length?`<button class="ib" data-a="wrmv" data-v="${esc(p.num)}" aria-label="Přesunout do jiného týmu" title="Přesunout do jiného týmu">⇄</button>`:''}<button class="ib" data-a="wrdel" data-v="${esc(p.num)}" aria-label="Odebrat ze soupisky">✕</button></span>
   ${W.assign===p.num?`<form id="wAss" class="row" style="grid-column:1/-1"><input type="text" inputmode="numeric" maxlength="3" id="w_assnum" placeholder="Číslo pro ${esc(p.name)}" aria-label="Číslo dresu" style="flex:1 1 140px;width:auto"><button class="btn sm" type="submit">Uložit</button><button class="btn ghost sm" type="button" data-a="wrassno">Zrušit</button></form>`:''}
   ${W.rmove===p.num?`<div class="row" style="grid-column:1/-1"><select id="w_mvt" aria-label="Cílový tým" style="flex:1 1 160px;width:auto">${others.map(x=>`<option value="${esc(x)}">${esc(tName(x))}</option>`).join('')}</select><button class="btn sm" data-a="wrmvgo" data-v="0">Přesunout</button><button class="btn ghost sm" data-a="wrmvgo" data-v="1" title="Hráč zůstane i tady">Přidat i tam</button><button class="btn ghost sm" data-a="wrmvno">Zrušit</button></div>`:''}
  </div>`).join('')}</div>`:'<p class="muted">Soupiska je zatím prázdná. Přidej první hráče.</p>'}
  <form id="wAddP" class="row"><input type="text" inputmode="numeric" maxlength="3" id="wn_num" placeholder="Č." aria-label="Číslo dresu" style="flex:0 0 76px;width:76px" ${W.rNoNum?'disabled':''}><input type="text" id="wn_name" placeholder="Jméno" aria-label="Jméno hráče" style="flex:1 1 140px;width:auto"><button class="btn sm" type="submit">Přidat</button></form>
  <label class="row small"><input type="checkbox" id="wn_nonum" data-c="wnonum" ${W.rNoNum?'checked':''}> zatím bez čísla (číslo přidělíš později)</label>
  ${W.rmsg?`<p class="small"><b>${esc(W.rmsg)}</b></p>`:''}
  <p class="small muted">Zadáním stejného čísla změníš jméno. Soupiska je společná se Scorekeeperem. Klepnutím na jméno otevřeš dovednosti dítěte, tlačítkem vedle přepneš úroveň.</p></section>`}
function addRosterW(){const tid=S.teamId,name=($('#wn_name').value||'').trim(),R=rosterOf(tid);
 if(W.rNoNum){if(!name){W.rmsg='Hráče bez čísla zadej aspoň jménem.';return render(true)}if(R.players.some(p=>noNum(p.num)&&(p.name||'').toLowerCase()===name.toLowerCase())){W.rmsg=name+' už na soupisce je.';return render(true)}
  const num='~'+uid().slice(-6);R.players.push({num,name});rosterSave(tid,R);if(S.draft.present[tid]){S.draft.present[tid].push(num);saveDraft()}W.rmsg='';render(true);const f=$('#wn_name');if(f&&f.focus)f.focus();return}
 const num=jersey($('#wn_num').value);if(!num){W.rmsg='Zadej číslo dresu, nebo zaškrtni „zatím bez čísla“.';return render(true)}
 const ex=R.players.find(p=>String(p.num)===num);if(ex)ex.name=name;else{R.players.push({num,name});if(S.draft.present[tid]){S.draft.present[tid].push(num);saveDraft()}}
 rosterSave(tid,R);W.rmsg=ex?'Jméno u #'+num+' změněno.':'';render(true);const f=$('#wn_num');if(f&&f.focus)f.focus()}
function assignNumberW(old,raw){const tid=S.teamId,num=jersey(raw),R=rosterOf(tid),p=R.players.find(x=>String(x.num)===old);if(!p)return;
 if(!num){W.rmsg='Zadej číslo dresu.';return render(true)}if(R.players.some(x=>String(x.num)===num)){W.rmsg='Číslo #'+num+' už má někdo jiný.';return render(true)}
 p.num=num;p.was=old;rosterSave(tid,R); /* Scorekeeper podle „was“ přepíše číslo i v zápasech */
 const k=Object.assign({},W.raw.kids[tid]||{});if(k[old]){k[num]=k[old];delete k[old];kidsSave(tid,k)}
 const ph=(W.raw.photos[tid]||{})[phKey(old)];if(ph){photoSet(tid,num,ph);photoSet(tid,old,null)}
 const ok=K(tid,old),nk=K(tid,num),sw=a=>Array.isArray(a)?a.map(x=>normKey(x,{team:tid})===ok?nk:x):a;
 if(S.draft.present[tid]){S.draft.present[tid]=S.draft.present[tid].map(x=>x===old?num:x);saveDraft()}
 if(S.plan){S.plan.present=sw(S.plan.present);S.plan.groups=(S.plan.groups||[]).map(sw);savePlan()}
 Object.entries(S.plans).forEach(([id,pl])=>{if(!planTeams(pl).includes(tid))return;const before=J([pl.present,pl.groups]),q=clone(pl);q.present=sw(q.present);q.groups=(q.groups||[]).map(sw);if(J([q.present,q.groups])!==before)Store.put('plans',id,q)});
 W.assign=null;W.rmsg=p.name+' má teď číslo #'+num+'. Změna se propsala i do zápasů.';render(true)}
function movePlayerW(copy){const tid=S.teamId,num=W.rmove,R=rosterOf(tid),p=R.players.find(x=>String(x.num)===num),sel=$('#w_mvt'),to=sel&&sel.value;if(!p||!to||to===tid||!S.teams[to])return;
 const T=rosterOf(to),clash=noNum(num)?T.players.find(x=>noNum(x.num)&&(x.name||'').toLowerCase()===(p.name||'').toLowerCase()):T.players.find(x=>String(x.num)===num);
 if(clash){W.rmsg=noNum(num)?p.name+' už v týmu '+tName(to)+' je.':'V týmu '+tName(to)+' už má #'+num+' '+(clash.name||'jiný hráč')+'. Nejdřív jednomu z nich změň číslo.';return render(true)}
 T.players.push(Object.assign({},p));rosterSave(to,T);
 const kf=(W.raw.kids[tid]||{})[num];if(kf){const kt=Object.assign({},W.raw.kids[to]||{});kt[num]=kf;kidsSave(to,kt)}
 const pf=(W.raw.photos[tid]||{})[phKey(num)];if(pf){photoSet(to,num,pf);if(!copy)photoSet(tid,num,null)}
 if(!copy){R.players=R.players.filter(x=>String(x.num)!==num);rosterSave(tid,R)}
 W.rmove=null;W.rmsg=(p.name||numTxt(num))+(copy?' je teď i v týmu ':' přesunut do týmu ')+tName(to)+'.'+(copy?'':' Odehrané zápasy a statistiky zůstávají tady.');render(true)}
document.addEventListener('submit',e=>{const id=e.target.id;if(id==='wAddP'){e.preventDefault();addRosterW()}else if(id==='wAss'){e.preventDefault();assignNumberW(W.assign,$('#w_assnum').value)}});
document.addEventListener('change',e=>{const el=e.target,c=el.dataset&&el.dataset.c;
 if(c==='wnonum'){W.rNoNum=el.checked;render(true);const f=$(el.checked?'#wn_name':'#wn_num');if(f&&f.focus)f.focus()}
 else if(c==='wtname'){const v=el.value.trim(),tid=S.teamId,R=rosterOf(tid);R.name=v;rosterSave(tid,R);if(v&&W.role==='admin'){W.raw.teamlist[tid]=Object.assign({},W.raw.teamlist[tid],{name:v});Web.compose();Web.write('teamlist/'+tid+'/name',v)}render(true)}});


/* ---------- Kdo je kdo: fotky dětí (photos/<tid>/<číslo> = {img,name,ts}) ---------- */
let phT=null;const phCache=()=>{clearTimeout(phT);phT=setTimeout(()=>ls.set('u7w-photos',W.raw.photos),800)};
const phKey=n=>String(n).replace(/[.#$[\]/]/g,'_');
function photoOf(tid,p){const m=W.raw.photos[tid]||{},d=m[phKey(p.num)];if(d&&d.img)return d.img;const f=Object.values(m).find(x=>x&&x.name&&x.name===p.name&&x.img);return f?f.img:''}
const WHO=Object.assign({teams:[],size:'m'},ls.get('u7w-who',{}));const whoSave=()=>ls.set('u7w-who',WHO);
const initials=n=>String(n||'?').trim().split(/\s+/).map(w=>w[0]||'').join('').slice(0,2).toUpperCase();
function whoTeams(){let t=(WHO.teams||[]).filter(x=>S.teams[x]);if(!t.length&&S.teams[S.teamId])t=[S.teamId];return t}
function vWho(){
 if(!team())return noTeam();const den=W.denied.photos?'<p class="note">Fotky nejdou načíst: databáze zatím nemá pravidla pro fotky. Správce musí ve Firebase konzoli (Realtime Database → Rules) vložit aktuální database.rules.json a dát Publish.</p>':'';const sel=whoTeams(),all=Object.entries(S.teams).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||'','cs'));
 const n=sel.reduce((s,t)=>s+(S.teams[t].players||[]).length,0),nf=sel.reduce((s,t)=>s+(S.teams[t].players||[]).filter(p=>photoOf(t,p)).length,0);
 return den+`<section class="card who-f"><div class="sumline"><h2>Kdo je kdo</h2><span class="small muted">${n} dětí · ${nf} s fotkou</span></div>
  <div class="row" style="gap:6px">${all.length>1?all.map(([id,x])=>{const on=sel.includes(id);return `<button class="chip sm ${on?'on':''}" data-a="whot" data-v="${esc(id)}" aria-pressed="${on}">${esc(x.name)}</button>`}).join(''):''}
   <div class="seg sm" role="group" aria-label="Velikost fotek" style="margin-left:auto">${[['s','S','Malé'],['m','M','Střední'],['l','L','Velké']].map(([k,l,t])=>`<button data-a="whosz" data-v="${k}" class="${WHO.size===k?'on':''}" title="${t}" aria-label="${t}">${l}</button>`).join('')}</div></div></section>
 ${sel.map(tid=>{const ps=S.teams[tid].players||[];return `${sel.length>1?`<h3 class="who-h">${esc(tName(tid))} · ${ps.length}</h3>`:''}
  ${ps.length?`<div class="who-grid ${WHO.size}">${ps.map(p=>{const img=photoOf(tid,p);return `<button class="who" data-a="whoopen" data-v="${esc(K(tid,p.num))}" aria-label="${esc(p.name)}${noNum(p.num)?'':', číslo '+esc(p.num)}">
   <span class="ph">${img?`<img src="${img}" alt="" loading="lazy">`:`<span class="ini">${esc(initials(p.name))}</span>`}${noNum(p.num)?'':`<b class="wn">${esc(p.num)}</b>`}</span><span class="wname">${esc(p.name)}</span></button>`}).join('')}</div>`:'<p class="muted">Soupiska je prázdná.</p>'}`}).join('')}`}
function openWho(key){const x=kid(key),tid=x.tid,p=(S.teams[tid]&&S.teams[tid].players||[]).find(q=>q.num===x.num);if(!p)return;const img=photoOf(tid,p),sh=$('#sheet');
 sh.innerHTML=`<div role="dialog" aria-modal="true" aria-label="${esc(p.name)}"><div class="sumline"><span class="kb game">${esc(tName(tid))}</span><button class="ib" data-a="close" aria-label="Zavřít">✕</button></div>
  <div class="who-big">${img?`<img src="${img}" alt="Fotka: ${esc(p.name)}">`:`<span class="ini">${esc(initials(p.name))}</span>`}${noNum(p.num)?'':`<b class="wn">${esc(p.num)}</b>`}</div>
  <h2>${esc(p.name)}${noNum(p.num)?' <span class="lvl">bez čísla</span>':''}</h2>${LVL[p.lvl]?`<p class="small">Úroveň: <b>${LVL[p.lvl]}</b></p>`:''}
  <div class="row"><label class="btn sm" for="who_file">${img?'Vyměnit fotku':'Vyfotit nebo nahrát fotku'}</label><input type="file" id="who_file" accept="image/*" data-k="${esc(key)}" hidden>
   ${img?(W.phDel===key?`<button class="btn danger sm" data-a="whodelgo" data-v="${esc(key)}">Opravdu odebrat</button><button class="btn ghost sm" data-a="whodelno" data-v="${esc(key)}">Ne</button>`:`<button class="btn ghost sm" data-a="whodel" data-v="${esc(key)}">Odebrat fotku</button>`):''}
   <button class="btn ghost sm" data-a="whokid" data-v="${esc(key)}">Dovednosti</button></div>
  ${W.phMsg?`<p class="small"><b>${esc(W.phMsg)}</b></p>`:''}<p class="small muted">Fotka se zmenší na čtverec 256 × 256 px. Vidí ji jen přihlášení trenéři a správce.</p></div>`;
 sh.hidden=false;sh.dataset.id=''}
function shrinkPhoto(file){return new Promise((res,rej)=>{const url=URL.createObjectURL(file),im=new Image();
 im.onload=()=>{try{const S2=256,c=document.createElement('canvas');c.width=S2;c.height=S2;const g=c.getContext('2d'),w=im.naturalWidth,h=im.naturalHeight,m=Math.min(w,h);
  g.drawImage(im,(w-m)/2,(h-m)/2.6,m,m,0,0,S2,S2);URL.revokeObjectURL(url);res(c.toDataURL('image/jpeg',.78))}catch(e){rej(e)}};
 im.onerror=()=>{URL.revokeObjectURL(url);rej(new Error('img'))};im.src=url})}
function photoSet(tid,num,val){const m=Object.assign({},W.raw.photos[tid]||{});if(val)m[phKey(num)]=val;else delete m[phKey(num)];W.raw.photos[tid]=m;phCache();Web.write('photos/'+tid+'/'+phKey(num),val||null)}
document.addEventListener('change',async e=>{if(e.target.id!=='who_file')return;const f=e.target.files&&e.target.files[0],key=e.target.dataset.k;if(!f||!key)return;
 const x=kid(key),p=(S.teams[x.tid].players||[]).find(q=>q.num===x.num);W.phMsg='Ukládám fotku…';openWho(key);
 try{const img=await shrinkPhoto(f);photoSet(x.tid,x.num,{img,name:p?p.name:'',ts:Date.now()});W.phMsg='';toast('Fotka uložena.')}catch(err){W.phMsg='Tuhle fotku se nepodařilo načíst. Zkus jinou.'}
 openWho(key);if(S.tab==='who')render(true)});


/* ---------- trenéři: jeden seznam, u každého týmy, kde trénuje (training/staff) ---------- */
function staffList(){if(Array.isArray(W.raw.staff))return W.raw.staff;const m=[];Object.entries(W.raw.coaches||{}).forEach(([tid,cs])=>(cs||[]).forEach((c,i)=>{const nm=String(c&&c.name||c||'').trim();if(!nm)return;let x=m.find(y=>nameKey(y.name)===nameKey(nm));if(!x){x={id:c.id||('c'+tid+i),name:nm,teams:[]};m.push(x)}if(!x.teams.includes(tid))x.teams.push(tid)}));return m}
function staffSave(list){W.raw.staff=list;Web.compose();render(true);Web.write('training/staff',{ts:Date.now(),json:J(list)})}
let staffDone=false;
function staffMigrate(){/* jednorázově: staré seznamy trenérů po týmech -> společný seznam */
 if(staffDone||!W.loaded.staff||!W.loaded.tl||Array.isArray(W.raw.staff))return;if(!Object.keys(W.raw.teamlist).every(t=>W.loaded['c_'+t]))return;
 staffDone=true;const m=staffList();if(m.length)Web.write('training/staff',{ts:Date.now(),json:J(m)})}
function vStaff(){const list=staffList(),teams=Object.entries(S.teams).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||'','cs'));
 return `<section class="card"><div class="sumline"><h2>Trenéři · ${list.length}</h2></div>
  <p class="small muted">U každého trenéra zaškrtni týmy, kde trénuje. Na začátku tréninku se nabídnou trenéři vybraných týmů.</p>
  ${list.length?`<div class="stafflist">${list.map(c=>`<div class="staff">
   <div class="pl" style="grid-template-columns:1fr auto"><input type="text" id="st_${esc(c.id)}" data-c="stname" data-v="${esc(c.id)}" value="${esc(c.name)}" aria-label="Jméno trenéra">
   ${W.sdel===c.id?`<span class="row" style="gap:4px;flex-wrap:nowrap"><button class="btn danger sm" data-a="stdelgo" data-v="${esc(c.id)}">Odebrat</button><button class="btn ghost sm" data-a="stdelno">Ne</button></span>`:`<button class="ib" data-a="stdel" data-v="${esc(c.id)}" aria-label="Odebrat ${esc(c.name)}">✕</button>`}</div>
   <div class="row" style="gap:6px">${teams.map(([id,x])=>{const on=(c.teams||[]).includes(id);return `<button class="chip sm ${on?'on':''}" data-a="stteam" data-v="${esc(c.id)}" data-t="${esc(id)}" aria-pressed="${on}">${esc(x.name)}</button>`}).join('')}${(c.teams||[]).filter(id=>S.teams[id]).length?'':'<span class="small warnnote">Bez týmu, v tréninku se nenabídne.</span>'}</div>
  </div>`).join('')}</div>`:'<p class="muted">Zatím žádný trenér.</p>'}
  <form id="wAddC" class="pl" style="grid-template-columns:1fr auto"><input type="text" id="wc_name" placeholder="Jméno nového trenéra" aria-label="Jméno trenéra"><button class="btn sm" type="submit">Přidat</button></form>
  <p class="small muted">Nový trenér se přidá k týmu ${esc(team()?team().name:'')}, další týmy zaškrtneš.</p></section>`}
document.addEventListener('submit',e=>{if(e.target.id!=='wAddC')return;e.preventDefault();const nm=($('#wc_name').value||'').trim();if(!nm)return toast('Napiš jméno trenéra.');
 const list=clone(staffList());if(list.some(c=>nameKey(c.name)===nameKey(nm)))return toast(nm+' už v seznamu je.');
 const id='c'+uid();list.push({id,name:nm,teams:S.teamId?[S.teamId]:[]});staffSave(list);
 Object.keys(S.draft.coachSel).forEach(k=>{if(k.split('+').includes(S.teamId))S.draft.coachSel[k].push(K(S.teamId,id))});saveDraft();
 setTimeout(()=>{const f=$('#wc_name');if(f&&f.focus)f.focus()},30)});
document.addEventListener('change',e=>{const el=e.target;if(!el.dataset||el.dataset.c!=='stname')return;const v=el.value.trim();if(!v){render(true);return}
 const list=clone(staffList()),c=list.find(x=>x.id===el.dataset.v);if(!c||c.name===v)return;c.name=v;staffSave(list)});

/* ---------- Nastavení (web) ---------- */
function vSet(){
 const t=team(),adm=W.role==='admin';
 let h=`<section class="card"><div class="sumline"><h2>Účet</h2><button class="btn ghost sm" data-a="wlogout">Odhlásit</button></div>
  <p class="small">Přihlášen jako <b>${ROLE_NAME[W.role]||''}</b>${W.code?` · kód ${esc(W.code.slice(0,4))}-••••`:''} · ${W.online?'online':'offline, změny se uloží po připojení'}</p></section>`;
 if(adm){const cc=coachCodes();if(W.pins===null){W.pins=undefined;loadPins()}
  h+=`<section class="card"><h2>Kód pro trenéry</h2>
  <p class="small muted">Jeden společný kód pro všechny trenéry. Trenéři plánují tréninky, upravují soupisky v záložce Tým, úrovně, dovednosti a seznam trenérů. Nové týmy zakládáš ve Scorekeeperu.</p>
  ${W.pins===undefined?'<p class="small muted">Načítám…</p>':cc.length?`<div class="row">${cc.map(c=>`<code class="code">${esc(c)}</code>`).join(' ')}</div>`:'<p class="small">Zatím žádný kód.</p>'}
  <div class="row"><button class="btn sm" data-a="wpinnew">${cc.length?'Vyměnit kód':'Vytvořit kód'}</button>${cc.length?'<button class="btn ghost sm" data-a="wpindrop">Zrušit kód</button>':''}<button class="btn ghost sm" data-a="wcopy" data-v="${esc(baseUrl())}">Kopírovat odkaz na plánovač</button></div>
  ${W.pinMsg?`<p class="small"><b>${esc(W.pinMsg)}</b></p>`:''}<p class="small muted">„Vyměnit kód“ zruší starý kód a kdo s ním byl přihlášený, bude se muset přihlásit novým.</p></section>`}
 h+=`<section class="card"><div class="sumline"><h2>Týmy</h2></div>
  ${Object.keys(S.teams).length?`<div class="row">${Object.entries(S.teams).sort((a,b)=>(a[1].name||'').localeCompare(b[1].name||'')).map(([id,x])=>`<button class="chip ${id===S.teamId?'on':''}" data-a="team" data-v="${esc(id)}">${esc(x.name)} · ${(x.players||[]).length}</button>`).join('')}</div>`:`<p class="muted">${S.ready?'Ve Scorekeeperu zatím není žádný tým.':'Načítám týmy…'}</p>`}
  <p class="small muted">Týmy jsou společné se Scorekeeperem. Soupisku upravíš v záložce Tým, nový tým založíš ve Scorekeeperu.</p></section>`;
 if(t)h+=vStaff();
 if(adm)h+=`<section class="card"><h2>Převzít data z verze v Claude</h2>
  <p class="small muted">Jednorázově nahraj soubor zálohy (planovac-zaloha.json). Týmy se spárují podle názvu, převezmou se trenéři, úrovně, dovednosti, uložené tréninky, šablony a vlastní hry.</p>
  <input type="file" id="wimpfile" accept=".json,application/json" aria-label="Soubor zálohy">
  ${W.imp?(()=>{const {map,miss}=planImport(W.imp);return `<div class="note">Spárované týmy: ${Object.keys(map).map(k=>esc(W.imp.teams[k].name)).join(', ')||'žádný'}${miss.length?`<br>Bez protějšku ve Scorekeeperu: ${miss.map(esc).join(', ')}`:''}<br>Tréninky ${Object.keys(W.imp.plans||{}).length} · šablony ${Object.keys(W.imp.tpls||{}).length} · vlastní položky ${Object.keys(W.imp.custom||{}).length}
   <div class="row" style="margin-top:8px"><button class="btn sm" data-a="wimpgo">Převzít</button><button class="btn ghost sm" data-a="wimpno">Zrušit</button></div></div>`})():''}
  ${W.impMsg?`<p class="small"><b>${esc(W.impMsg)}</b></p>`:''}</section>`;
 h+=`${tplList().length?`<section class="card"><h2>Šablony tréninku</h2><div class="dl">${tplList().map(([id,tp])=>`<div class="sumline"><span><b>${esc(tp.name)}</b> · ${tplMin(tp)} min<br><span class="small muted">${tp.blocks.map(b=>BT[b.type]||b.type).join(' → ')}</span></span>${S.confirm==='t_'+id?`<span class="row"><button class="btn danger sm" data-a="tpldel" data-v="${esc(id)}">Smazat</button><button class="btn ghost sm" data-a="noconf">Ne</button></span>`:`<button class="ib" data-a="tplask" data-v="${esc(id)}" aria-label="Smazat šablonu ${esc(tp.name)}">✕</button>`}</div>`).join('')}</div></section>`:''}
 <section class="card"><h2>Aplikace v tomto telefonu</h2>
  <div class="field"><span class="label">Vzhled</span><select id="pf_theme" data-c="theme">${[['','podle telefonu'],['light','světlý'],['dark','tmavý'],['sun','na slunce (vysoký kontrast)']].map(([v,l])=>`<option value="${v}" ${(S.pref.theme||'')===v?'selected':''}>${l}</option>`).join('')}</select></div>
  <label class="row"><input type="checkbox" id="pf_wake" data-c="wake" ${S.pref.wake!==false?'checked':''}> Během tréninku na hřišti nenechat obrazovku zhasnout</label>
  ${voiceSet()}
  <p class="small muted">Aplikaci si můžeš přidat na plochu telefonu (v prohlížeči Sdílet → Přidat na plochu). Tlačítko ☀ nahoře zapne režim na slunce.</p></section>`;
 h+=`<p class="small muted ver">Tréninkový plánovač U7 · ${verTxt()} · ${new Date(APP_DATE).toLocaleDateString('cs-CZ')}</p>`;
 return h}
Object.assign(actions,{
 wlogout:()=>Web.logout(''),
 wpinnew:()=>newCoachPin(),wpindrop:()=>dropCoachPins(),
 wcopy:async v=>{try{await navigator.clipboard.writeText(v);toast('Odkaz zkopírován.')}catch(e){toast(v)}},
 wrdel:v=>{const tid=S.teamId,R=rosterOf(tid);R.players=R.players.filter(p=>String(p.num)!==v);rosterSave(tid,R);W.rmsg='';render(true)},
 wrass:v=>{W.assign=v;W.rmove=null;W.rmsg='';render(true);const f=$('#w_assnum');if(f&&f.focus)f.focus()},wrassno:()=>{W.assign=null;render(true)},
 wrmv:v=>{W.rmove=v;W.assign=null;W.rmsg='';render(true)},wrmvno:()=>{W.rmove=null;render(true)},wrmvgo:v=>movePlayerW(v==='1'),
 whot:v=>{let t=whoTeams().slice();const i=t.indexOf(v);if(i>=0){if(t.length>1)t.splice(i,1)}else t.push(v);WHO.teams=t;whoSave();render(true)},
 whosz:v=>{WHO.size=v;whoSave();render(true)},
 whoopen:v=>{W.phMsg='';W.phDel=null;openWho(v)},whodel:v=>{W.phDel=v;openWho(v)},whodelno:v=>{W.phDel=null;openWho(v)},
 whodelgo:v=>{const x=kid(v);W.phDel=null;photoSet(x.tid,x.num,null);openWho(v);if(S.tab==='who')render(true);toast('Fotka odebrána.')},
 whokid:v=>{const x=kid(v);if(S.teamId!==x.tid){S.teamId=x.tid;ls.set('u7-team',x.tid)}openKid(x.num)},
 stteam:(v,el)=>{const list=clone(staffList()),c=list.find(x=>x.id===v),t=el.dataset.t;if(!c)return;c.teams=c.teams||[];const i=c.teams.indexOf(t);if(i>=0)c.teams.splice(i,1);else c.teams.push(t);staffSave(list)},
 stdel:v=>{W.sdel=v;render(true)},stdelno:()=>{W.sdel=null;render(true)},stdelgo:v=>{W.sdel=null;staffSave(clone(staffList()).filter(c=>c.id!==v));toast('Trenér odebrán.')},
 wimpgo:()=>runImport(),wimpno:()=>{W.imp=null;W.impMsg='';render(true)}
});

applyTheme(true);syncLine();Store.start();
