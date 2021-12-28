# XPRESS TAROT
## Silly REST API for Tarot readings


The title says all.

Based on the Rider-Waite-Smith (RWS) framework, but includes information related to the Ordo Templi Orientis (O.T.O.) framework as well.

Information extracted from various books and also from http://www.corax.com/tarot/ .

With basic web templates that include images of either fantastic decks : [Anima Mundi](https://www.kickstarter.com/projects/128820172/the-anima-mundi-tarot-deck) _(for RWS)_ or [Tabula Mundi](http://www.tabulamundi.com/home/) _for OTO_ .

*Available in English and Spanish (Castellano)*

*Translation of Spanish:*

```
Pentacles   -> Oros
Swords      -> Espadas
Wands       -> Bastos
Cups        -> Copas
Knight      -> Caballo
Page        -> Sota
Queen       -> Reina
King        -> Rey

0 The Fool -> El Loco
1 The Magician -> El Mago
2 The High Priestess -> La Sacerdotisa
3 The Empress -> La Emperatriz
3 The Emperor -> El Emperador
5 The Hierophant -> El Sumo Sarcedote
6 The Lovers -> Los Enamorados
7 The Chariot -> El Carro
8 Justice -> La Justicia
9 The Hermit -> El Hermitaño
10 The Wheel of Fortune -> La Rueda de la Fortuna
11 Strength -> La Fuerza
12 The Hanged Man -> El Colgado
13 Death -> La Muerte
14 Temperance -> La Templanza
15 The Devil -> El Diablo
16 The Tower -> La Torre
17 The Star -> La Estrella
18 The Moon -> La Luna
19 The Sun -> El Sol
20 Judgement -> El Juicio
21 The World -> El Mundo
```

_The use of capital T is case-sensitive and mandatory_

_For the Spanish version, just add the prefix "es" after the "T"_

GET **/T/{symbol}/{name|number}**

_Returns details of the specified symbol including its picture_

GET **/T/{spread}**

_Casts a reading where spread (integer) is some of my favourite spreads._

### Technical

- [ExpressJS](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/quickstart.html)
- App skeleton generated by: `npx express-generator --view=pug`
- To be used ideally with Postman