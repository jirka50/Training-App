# Tréninkový plánovač U7 – webová verze

Plánování tréninků baseballu pro děti do 7 let: hry, cviky a rutiny s animacemi, skupiny a stanoviště, časovač na hřiště, dovednosti dětí, sezónní plán a shrnutí pro rodiče.

Plánovač používá **stejnou databázi Firebase jako Baseball Scorekeeper**. Týmy a soupisky (jména a čísla dresů) se berou ze Scorekeeperu, tréninková data se ukládají do samostatné části `training/`.

## Soubory
- `index.html`, `app.js`, `app.css` – aplikace
- `manifest.json`, `sw.js`, `icon*.png`, `apple-touch-icon.png`, `favicon-32x32.png` – instalace na plochu telefonu a práce bez signálu
- `database.rules.json` – společná pravidla zabezpečení pro Firebase (pro Scorekeeper i plánovač). Vkládají se do konzole Firebase, na web se nahrávat nemusí.

## Role
- **Správce** – přihlásí se svým kódem správce ze Scorekeeperu. Vytváří a mění společný kód pro trenéry.
- **Trenér s osobním kódem** – každý trenér má vlastní kód, který mu vytvoří správce v Nastavení → Trenéři (Vytvořit kód / Poslat / Nový kód / Zrušit). Vidí jen týmy, u kterých ho správce zaškrtl, v hlavičce má své jméno, uložené tréninky nesou autora (filtr „Moje tréninky“ v Historii) a vzhled a hlasová hlášení se mu ukládají k profilu. Seznam trenérů vidí jen pro čtení.
- **Trenér se společným kódem** – přechodná možnost, dokud správce společný kód nezruší. Vidí všechny týmy a může upravovat seznam trenérů jako dřív.
- Kód zapisovatele ze Scorekeeperu do plánovače nepustí a kód trenéra nepustí do Scorekeeperu.

## Data ve Firebase
- čte: `teamlist/<tid>`, `teams/<tid>/roster` (spravuje Scorekeeper)
- píše: `training/season` (aktuální sezóna), `training/ages/<id>` (věkové kategorie), `training/staff`, `training/coaches/<tid>`, `training/kids/<tid>` (úrovně a dovednosti podle čísla dresu), `training/plans/<id>`, `training/tpls/<id>`, `training/custom/<id>`
- kódy: společný `pinmap/<kód> = {role:'coach'}`, osobní `pinmap/<kód> = {role:'coach', coach:'<id trenéra z training/staff>'}`
- profil trenéra: `training/prefs/<id trenéra>` (vzhled, hlas, počasí), autor tréninku v `by` uvnitř `training/plans/<id>`
- historie přihlášení: `logins/<pushId> = {t, uid, role, coach, code (první 4 znaky), dev, kind: login|open}` – zapisuje každý přihlášený jen nový záznam za sebe, čte a maže jen správce (Nastavení → Historie přihlášení, záznamy starší než rok se mažou)
- omezení na vlastní týmy je jen v zobrazení aplikace; pravidla databáze ho nevynucují, protože seznam trenérů je uložený jako text JSON
- zápasy: výchozí zápasy (T-ball, Coach pitch, Mini zápas 3 na 3, Všichni odpálí) se jednou zapíšou do `training/custom` i s animací: `zap01–zap04` od verze 1.1 (značka `training/seeds/zapasy`), `zap05–zap12` jako druhá dávka (značka `training/seeds/zapasy2`); značky hlídají, aby se smazané znovu nevracely; T-ball zápas (`zap01`) je sloučený do `zap04` Všichni odpálí, pak střídání – jednorázová úprava se značkou `training/seeds/slouceni-zap01` ho smaže a odkazy v trénincích a šablonách přepíše na `zap04`

## Zprovoznění
1. Ve Firebase konzoli (projekt eagles-scorekeeper) → Realtime Database → Rules vlož obsah `database.rules.json` a dej Publish.
2. Nahraj soubory do tohoto repozitáře a zapni GitHub Pages (Settings → Pages → Deploy from branch → main / root).
3. Otevři plánovač, přihlas se kódem správce, v Nastavení vytvoř kód pro trenéry.

## Verze
Číslo verze je v `app.js` (`APP_VERSION`, `APP_DATE`, stejně jako ve Scorekeeperu). Zobrazuje se pod názvem v hlavičce a dole v Nastavení. Číslo verze se mění jen po odsouhlasení správcem – před změnou se zeptat. Při každém vydání se ale zvyšuje název mezipaměti v `sw.js` (`u7-vN`), aby telefony načetly novou verzi.

## Zdrojové soubory
`app.js`, `app.css` a `index.html` se generují ze složky `src/`:
`python3 src/build_web.py src/planovac-u7.src.html src/web.js .`
Úpravy dělej v `src/` a pak spusť build, jinak je příští build přepíše.
