import * as PIXI from 'pixi.js';
import { Stage } from './core/stage/Stage';

PIXI.utils.skipHello();

//@ts-ignore
const app = new PIXI.Application({
    autoDensity: true,
    resizeTo: window
});
document.body.appendChild(app.view);



const CreaNyan = {
    PIXI: PIXI,
    app: app,
    run: function() {
        const bunnyImgURL = 'http://116.211.22.21/artdemodebug/res/activity/ui_huodong_weekend.png';
        const bunny = PIXI.Sprite.from(bunnyImgURL);
        bunny.anchor.set(0.5);
        bunny.x = 640;
        bunny.y = 360;

        const stage = new Stage();
        app.stage.addChild(stage);
        
        stage.addChild(bunny);
        
        app.ticker.add((delta: number) => {
            bunny.rotation += 0.01 * delta;
        });

        window.onresize = () => {
            stage.updateScreenFit();
        };
    }
};

export default CreaNyan;