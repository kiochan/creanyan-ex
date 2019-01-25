import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve';
import sourceMaps from 'rollup-plugin-sourcemaps';

const development = {
    input: './src/Main.ts',
    output: {
        file: './dist/js/main.js',
        dest: './dist/js/main.js',
        format: 'umd',
        freeze: false,
        sourcemap: true,
    },

    plugins: [
        commonjs({
            namedExports: {
                'resource-loader': ['Resource'],
            },
        }),
        typescript(),
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        sourceMaps(),
		serve({
			contentBase: ['dist'],
			host: 'localhost',
			port: 1085
        }),
        livereload({
            watch: 'dist'
        })
    ]
};

export default development;