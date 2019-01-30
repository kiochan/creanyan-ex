
/**
 * Provide Class related utils.
 * 提供类相关的工具方法。
 */
export default class ClassUtil {

    /**
     * Mixins two or more Classes with single one 
     * 将两个以上的类合并为一个
     * 
     * @param derivedCtor 目标子类
     * @param baseCtors 基类构造器数组
     */
    public static mixin(derivedCtor: any, baseCtors: any[]) {
        for (let i = 0, len = baseCtors.length; i < len; ++i) {
            const baseCtor = baseCtors[i];
            const props = Object.getOwnPropertyNames(baseCtor.prototype);
            for (var j = 0, jLen = props.length; j < jLen; ++j) {
                const prop = props[i];
                derivedCtor.prototype[prop] = baseCtor[prop];
            }
        }
    }

}