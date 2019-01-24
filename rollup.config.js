import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
import cleanup from 'rollup-plugin-cleanup';
import uglify from 'rollup-plugin-uglify';

const configBabel = {
    exclude: 'node_modules/**'
};

const config = {
    input: './src/creanyan.ts',
    output: {
        name: 'CreaNyan',
        file: './dist/creanyan.js',
        format: 'umd',
        freeze: false,
    },

    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        }),
        commonjs({
            namedExports: {
                'resource-loader': ['Resource'],
            },
        }),
        resolve({
            browser: true,
        })
    ]
};

const BUILD_ENV = process.env.BUILD;
switch(BUILD_ENV) {
    case 'normal':
        config.output.file = './dist/creanyan.js';
        config.output.sourcemap = true;
        config.plugins.push(cleanup({
            comments: "none"
        }));
        config.plugins.push(sourceMaps());
        break;
    case 'min':
        config.output.file = './dist/creanyan.min.js';
        config.plugins.push(babel(configBabel));
        config.plugins.push(uglify.uglify());
        break;
    default:
        const retryMsg = 'Check your arguments or use "rollup -c --environment BUILD:prod" instead.';
        if (BUILD_ENV === undefined || BUILD_ENV === null) {
            throw new Error(`Build name not found. ` + retryMsg);
        } else {
            throw new Error(`No build named "${BUILD_ENV}". ` + retryMsg);
        }
}

export default config;