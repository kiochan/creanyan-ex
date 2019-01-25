/**
 * Provide browser related utils.
 * 提供浏览器相关的工具方法。
 */
export default class BrowserUtil {

    /**
     * Get current timestamp (ms) from browser.
     * 获取浏览器当前时间戳（单位 ms）。
     */
    public static now(): number {
        return Date.now();
    }

    /**
     * Get viewport width of browser.
     * 获取浏览器窗口可视宽度。
     */
    public static get clientWidth(): number {
        return window.innerWidth || document.body.clientWidth;
    }

    /**
     * Get viewport height of browser.
     * 获取浏览器窗口可视高度。
     */
    public static get clientHeight(): number {
        return window.innerHeight || document.body.clientHeight ||
            (document.documentElement && document.documentElement.clientHeight) || 0;
    }

}