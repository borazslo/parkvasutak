# Parkvasutak

## Fő cél
Ez a projekt a parkvasutak és kertivasutak gyűjteményét tartalmazza, elsősorban Magyarországon. A cél, hogy egy helyen összegyűjtsük a legfontosabb információkat a parkvasutakról, beleértve a nyomtávokat, üzemeltetőket, állapotokat és egyéb részleteket. Az oldal célja, hogy könnyen elérhető és bővíthető legyen a közösség számára.

## GitHub Pages
A projekt elérhető a következő linken:  
[Parkvasutak GitHub Pages](https://borazslo.github.io/parkvasutak/)

## Adatok kezelése
A parkvasutak adatai a `parkvasutak.json` fájlban találhatók. Ez a fájl tartalmazza az összes információt, például a vasutak nevét, GPS koordinátáit, nyomtávját, állapotát és egyéb részleteket. Ha módosítani szeretnéd az adatokat, ezt a fájlt kell szerkesztened.

## Adatszerkezet szabályai
Az adatok szerkezetét a `schema.json` fájl határozza meg. Ez a fájl tartalmazza azokat a szabályokat, amelyek meghatározzák, hogy milyen mezők és értékek engedélyezettek a `parkvasutak.json` fájlban. Például:
- Kötelező mezők: `nev`, `gps`, `latogathatosag`, `allapot`
- Opcionális mezők: `gps_pontossag`, `videok` (YouTube linkek listája), stb.

A `schema.json` fájl biztosítja, hogy a `parkvasutak.json` fájl mindig érvényes legyen, és megfeleljen a projekt követelményeinek.

## Hozzájárulás
Ha bármilyen javítást vagy javaslatot szeretnél tenni, kérlek, látogass el a [GitHub Issues oldalra](https://github.com/borazslo/parkvasutak/issues), és nyiss egy új hibajegyet vagy javaslatot.


## Fejlesztőknek: CORS policy megkerülése Windows alatt
A fejlesztés során előfordulhat, hogy a böngésző blokkolja a helyi fájlokhoz való hozzáférést a CORS policy miatt. Ennek megkerüléséhez a Chrome böngészőt a következő módon indíthatod el Windows alatt:

1. Nyisd meg a parancssort (CMD) vagy a PowerShellt.
2. Futtasd az alábbi parancsot:
   ```bash
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\chrome_dev"
3. Vagy `Windows` + `R` gombok megnyomása után:
    ```chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security   ```

## Licenc
Ez a projekt nyílt forráskódú, és a [MIT licenc](https://opensource.org/licenses/MIT) alatt érhető el.