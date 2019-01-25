import { ScreenFitPolicy } from './ScreenFitPolicy';
import { Container, Point, Graphics } from 'pixi.js';
import BrowserUtil from '../../utils/BrowserUtil';

/**
 * The Stage contains all the display objects.
 * 承载所有显示对象的舞台。
 */
export class Stage extends Container {

    private _designResolution: Point = new Point(1280, 720);
    private _screenFitPolicy: ScreenFitPolicy = ScreenFitPolicy.SHOW_ALL;

    private _size: Point = new Point(0, 0);

    // public onUpdateScreenFit: Signal = new Signal();

    private _isDebug: boolean = true;
    private _debugGraphics: Graphics | undefined;

    /**
     * @constructor
     */
    constructor() {
        super();

        if (this._isDebug) {
            const debugGraphics = new Graphics();
            this._debugGraphics = debugGraphics;
            this.addChild(debugGraphics);
        }

        this.updateScreenFit();
    }

    /**
     * 设计分辨率
     */
    public get designResolution(): Point {
        return this.designResolution;
    }

    public set designResolution(resolution: Point) {
        this.designResolution = resolution;
        this.updateScreenFit();
    }

    /**
     * 屏幕适配策略
     */
    public get screenFitPolicy(): ScreenFitPolicy {
        return this._screenFitPolicy;
    }

    public set screenFitPolicy(policy: ScreenFitPolicy) {
        if (this._screenFitPolicy === policy) return;

        this._screenFitPolicy = policy;
        this.updateScreenFit();
    }

    /**
     * 更新屏幕适配状态
     */
    public updateScreenFit() {

        const screenWidth = BrowserUtil.clientWidth;
        const screenHeight = BrowserUtil.clientHeight;
        const designWidth = this._designResolution.x;
        const designHeight = this._designResolution.y;

        this.x = 0;
        this.y = 0;

        const size = this._size;
        let scale = 0;
        switch (this._screenFitPolicy) {
        case ScreenFitPolicy.SHOW_ALL:
            {
                const screenRatio = screenWidth / screenHeight;
                const designRatio = designWidth / designHeight;
                const actualRatio = designRatio / screenRatio;
                if (actualRatio > 1) { // 比设计更窄，宽收紧
                    scale = screenWidth / designWidth;
                    this.y = (screenHeight - designHeight * scale) / 2;
                } else { // 比设计更矮，高收紧
                    scale = screenHeight / designHeight;
                    this.scale = new Point(scale, scale);
                    this.x = (screenWidth - designWidth * scale) / 2;
                }

                size.x = designWidth;
                size.y = designHeight;
            }
            break;
        case ScreenFitPolicy.FIXED_HEIGHT:
            {
                scale = screenHeight / designHeight;
                size.x = screenWidth / scale;
                size.y = designHeight;
            }
            break;
        case ScreenFitPolicy.FIXED_WIDTH:
            {
                scale = screenWidth / designWidth;
                size.x = designWidth;
                size.y = screenHeight / scale;
            }
            break;
        case ScreenFitPolicy.FIXED_AUTO:
            {
                if (screenWidth >= screenHeight) {
                    scale = screenHeight / designHeight;
                    size.x = screenWidth / scale;
                    size.y = designHeight;
                } else {
                    scale = screenWidth / designWidth;
                    size.x = designWidth;
                    size.y = screenHeight / scale;
                }
            }
            break;
        }

        this.scale = new Point(scale, scale);

        // this.onUpdateScreenFit.emit();

        if (this._isDebug) {
            const graphics = this._debugGraphics;
            if (graphics) {
                graphics.clear();
                graphics.beginFill(0x333333);
                graphics.drawRect(0, 0, this._size.x, this._size.y);
                graphics.endFill();
            }
        }

    }

}
