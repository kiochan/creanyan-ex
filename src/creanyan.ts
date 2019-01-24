import * as PIXI from 'pixi.js';

PIXI.utils.skipHello();

const app = new PIXI.Application({
    autoResize: true
});
document.body.appendChild(app.view);


const CreaNyan = {
    PIXI: PIXI,
    app: app,
    run: function() {
        const bunnyImgURL = 'https://pixijs.io/examples/required/assets/basics/bunny.png';
        const bunny = PIXI.Sprite.from(bunnyImgURL);
        bunny.anchor.set(0.5);
        bunny.x = 640;
        bunny.y = 360;
        
        app.stage.addChild(bunny);
        
        app.ticker.add((delta: number) => {
            bunny.rotation += 0.1 * delta;
        });
    }
};

export default CreaNyan;