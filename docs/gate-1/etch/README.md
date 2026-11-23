Renders the As-Built drawings as pencil etchings.

Needs `npm i three@0.170.0` in this folder and Playwright with Chromium.

    node run.js hero.html "w=2816&h=1072&fr=18.5&tx=27&ty=7.5&tz=9&sp=4.2&state=asbuilt" hero.png
    node run.js vign.html "k=r1&w=1000&h=1000&fr=5.2" r1.png

`state=redrafted` draws the verdigris integration layer; `k=r1..r4` are the problem still lifes.
