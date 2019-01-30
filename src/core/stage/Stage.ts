import { StageScalePolicy } from './StageScalePolicy';
import { Container, Point, Graphics, Bounds } from 'pixi.js';
import BrowserUtil from '../../utils/BrowserUtil';

/**
 * The Stage contains all the display objects.
 * 承载所有显示对象的舞台。
 */
export class Stage extends Container {

    private _designResolution: Point;
    private _policy: StageScalePolicy;

    private _size?: Point;

    /**
     * @constructor
     * @param scalePolicy 缩放适配策略
     * @param debug 是否开启调试
     */
    constructor(designResolution: PIXI.Point, scalePolicy?: StageScalePolicy, debug?: boolean) {
        super();

        this._designResolution = designResolution;
        this._policy = scalePolicy ? scalePolicy : StageScalePolicy.SHOW_ALL;
        this._isDebug = !!debug;

        this.updateScreenFit();
    }

    /**
     * Design resolution of the stage.
     * 设计分辨率。
     */
    public get designResolution(): Point {
        return this.designResolution;
    }

    public set designResolution(resolution: Point) {
        this.designResolution = resolution;
        this.updateScreenFit();
    }

    /**
     * Stage scale policy of the stage.
     * 屏幕适配策略。
     */
    public get stageScalePolicy(): StageScalePolicy {
        return this._policy;
    }

    public set stageScalePolicy(policy: StageScalePolicy) {
        if (this._policy === policy) return;

        this._policy = policy;
        this.updateScreenFit();
    }

    /**
     * Update the bounds of the stage with determined stage scale policy.
     * 更新屏幕适配状态。
     */
    public updateScreenFit() {

        const screenWidth = BrowserUtil.clientWidth;
        const screenHeight = BrowserUtil.clientHeight;
        const designWidth = this._designResolution.x;
        const designHeight = this._designResolution.y;

        this.x = 0;
        this.y = 0;

        const size = this._size || new Point(0, 0);
        let scale = 0;
        switch (this._policy) {
            case StageScalePolicy.SHOW_ALL:
                {
                    const screenRatio = screenWidth / screenHeight;
                    const designRatio = designWidth / designHeight;
                    const actualRatio = designRatio / screenRatio;
                    if (actualRatio > 1) { // 比设计更窄，宽收紧
                        scale = screenWidth / designWidth;
                        this.y = (screenHeight - designHeight * scale) / 2;
                    } else { // 比设计更矮，高收紧
                        scale = screenHeight / designHeight;
                        this.x = (screenWidth - designWidth * scale) / 2;
                    }

                    size.x = designWidth;
                    size.y = designHeight;
                }
                break;
            case StageScalePolicy.FIXED_HEIGHT:
                {
                    scale = screenHeight / designHeight;
                    size.x = screenWidth / scale;
                    size.y = designHeight;
                }
                break;
            case StageScalePolicy.FIXED_WIDTH:
                {
                    scale = screenWidth / designWidth;
                    size.x = designWidth;
                    size.y = screenHeight / scale;
                }
                break;
        }

        this.scale = new Point(scale, scale);
        this._isDebug && this.updateDebug();

    }

    // #region debug

    private _isDebug: boolean;
    private _debugGraphics?: Graphics;

    private updateDebug() {
        let graphics = this._debugGraphics;
        if (!graphics) {
            graphics = new Graphics();
            this._debugGraphics = graphics;
            this.addChild(graphics);
        }
        
        graphics.clear();
        graphics.beginFill(0x333333);
        graphics.drawRect(0, 0, this._size!.x, this._size!.y);
        graphics.endFill();
    }

    // #endregion

}
