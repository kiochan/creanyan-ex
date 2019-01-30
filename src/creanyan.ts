import * as PIXI from 'pixi.js';
import { Stage } from './core/stage/Stage';

PIXI.utils.skipHello();
const CreaNyan = {
    PIXI: PIXI,
    app: null,
    stage: null,

    run: function(target?: HTMLElement) {
        const app: PIXI.Application = this.initApp(target);
        this.app = app;

        const stage = this.initStage(app.stage, new PIXI.Point(1280, 720));
        this.stage = stage;

        this.initResize(stage);


        const bunnyImgURL = 'http://116.211.22.21/artdemodebug/res/activity/ui_huodong_weekend.png';
        const bunny = PIXI.Sprite.from(bunnyImgURL);
        bunny.anchor.set(0.5);
        bunny.x = 640;
        bunny.y = 360;
        
        stage.addChild(bunny);
        
        app.ticker.add((delta: number) => {
            bunny.rotation += 0.01 * delta;
        });
    },

    initApp: function(target?: HTMLElement): PIXI.Application {
        //@ts-ignore
        const app = new PIXI.Application({
            autoDensity: true,
            resizeTo: target ? target : window
        });
        (target ? target : document.body).appendChild(app.view);
        return app;
    },

    initStage: function(parent: PIXI.Container, designResolution: PIXI.Point): Stage {
        const stage = new Stage(designResolution, undefined, true);
        parent.addChild(stage);
        return stage;
    },

    initResize: function(stage: Stage) {
        window.addEventListener('resize', () => {
            stage && stage.updateScreenFit();
        });
    },
};

export default CreaNyan;