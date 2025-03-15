# Changelog

### Skapade en changelog för att beskriva förändringarna istället för versionhantering i Github.

Torsdag 2025-03-13 och tidigare
- Jag skapade hemsidan genom layouten från .figma filen, försökte att hålla mig till en så liknande hemsida som möjligt, med lite annorlunda färger. 
- Använde mig av klippverktyget på Windows för att ta ut bilder från layouten och sedan magic brush genom "https://www.remove.bg/upload" för att få bort bakgrunden från bilderna, gick däremot inte med alla.
- Fick sidan till att bli en scrollbar sida istället för olika flikor på samma hemsida.

Fredag 2025-03-14
- Lade till en rullgardinsmeny för mobilanvändare. Med alternativ "Features", "Contact" och "Dark Mode + Toggle".
- Lade till animering på element i hemsidan, samtliga sektioner på framsidan har animering genom "AOS - Animate on scroll library"
- Förbättrade mörkt / ljust läge så att man ska se samtlig text på sidan.

Lördag 2025-03-15
- Har lagt till en FAQ komponent med prenumerationsfunktion, använt mig av API från "https://kyhn24.azurewebsites.net/index.html"
- Har justerat så att CSS tar över färghantering och placering för element på hemsidan. Tidigare var det javascript hanterat, med CSS på sidan.
- Flyttade på element på hemsidan så att det ska se mer centrerat ut, nästan som en "wrapper"
- Har ändrat bildstorlekar och positioner och låtit input.css / output.css ta hand om storlek samt position. 
- Fick bort gråa mellanrum mellan sektioner genom att ändra padding och margin mellan sektioner.
- Fick hjälp av Github Copilot att justera platsering och färger på layouten
- Tog även hjälp från CHATGPT för att få förslag på förbättringar i koden dessutom större ändringar, som att förflytta stor del av färghantering/placering till input.css istället för att ha allting i varje sektionsfil, alltså Auth.jsx, FAQ.jsx etc...
- Slutligen lade jag till kommentarer för att visa att jag förstår vad koden gör, jag förklarade även hur jag tänkte när jag gjorde projektet eller om jag inte förstår något. 
