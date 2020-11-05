import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import filesize from 'rollup-plugin-filesize';
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import sass from 'node-sass'
import postCss from "rollup-plugin-postcss"
import autoprefixer from 'autoprefixer'
import url from "@rollup/plugin-url"
import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2'

const projectRoot = path.resolve(__dirname, ".")

const validPkgName = 'vue3Transitions'

const libBuildFolder = 'dist/lib'

let postVueConfig = [
  // Process only `<style module>` blocks.
  postCss({
    modules: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
    include: /&module=.*\.css$/,
    preprocessor: (content, id) => new Promise((resolve, reject) => {
      const result = sass.renderSync({ file: id })
      resolve({ code: result.css.toString() })
    }),
    plugins: [
      autoprefixer
    ],
    sourceMap: true,
    extract: true,
    extensions: ['.scss','.css', '.sass']
  }),
  // Process all `<style>` blocks except `<style module>`.
  postCss({
    include: /(?<!&module=.*)\.css$/,
    preprocessor: (content, id) => new Promise((resolve, reject) => {
      const result = sass.renderSync({ file: id })
      resolve({ code: result.css.toString() })
    }),
    plugins: [
      autoprefixer
    ],
    sourceMap: true,
    extract: true,
    extensions: ['.scss','.css', '.sass']
  }),
  url({
      include: [
        '**/*.svg',
        '**/*.png',
        '**/*.gif',
        '**/*.jpg',
        '**/*.jpeg'
      ]
    }),
]

const baseConfig = {
  plugins: {
    preVue: [
      alias({
        entries: [
          {
            find: '@',
            replacement: `${path.resolve(projectRoot, 'src')}`
          }
        ],
        customResolver: resolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
        })
      })
    ],
    replace: {
      "process.env.NODE_ENV": JSON.stringify('production'),
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    },
    vue: {
      target: 'browser',
      preprocessStyles: true
    },
    postVue: [
      ...postVueConfig
    ],
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
      babelHelpers: 'runtime'
    }
  }
}

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'Vue'
]

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue'
}

const baseFolder = './src/'
const componentsFolder = 'components/'

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter(f =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  )

const entriespath = {
  index: './src/index.ts',
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + name + '/index.ts'
    return obj
  }, {})
}

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Customize configs for individual targets
let buildFormats = []

const mapComponent = name => {
  return [
    {
      input: baseFolder + componentsFolder + `${name}/index.ts`,
      external: external,
      output: {
        format: 'umd',
        name: capitalize(name),
        file: `${libBuildFolder}/components/${name}/index.ts`,
        exports: 'named',
        globals
      },
      plugins: [
        resolve(),
        typescript(),
        ...baseConfig.plugins.preVue,
        vue(baseConfig.plugins.vue),
        ...baseConfig.plugins.postVue,
        babel({
          ...baseConfig.plugins.babel,
          presets: [['@babel/preset-env', { modules: false }]]
        }),
        commonjs(),
        filesize()
      ]
    }
  ];
}

const esConfig = {
  input: entriespath,
  external: external,
  output: {
    format: 'esm',
    dir: `${libBuildFolder}/esm`
  },
  plugins: [
    resolve(),
    typescript(),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel({
      ...baseConfig.plugins.babel,
      presets: [['@babel/preset-env', { modules: false }]]
    }),
    commonjs(),
    filesize()
  ]
}

const merged = {
  input: 'src/index.ts',
  external: external,
  output: {
    format: 'esm',
    file: `${libBuildFolder}/${pkg.name}.esm.js`
  },
  plugins: [
    resolve(),
    typescript(),
    replace({
      ...baseConfig.plugins.replace,
      'process.env.ES_BUILD': JSON.stringify('true'),
    }),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel({
      ...baseConfig.plugins.babel,
      presets: [['@babel/preset-env', { modules: false }]]
    }),
    commonjs(),
    filesize()
  ]
}

const ind = [
  ...components.map(f => mapComponent(f)).reduce((r, a) => r.concat(a), [])
]
buildFormats.push(esConfig)
buildFormats.push(merged)
buildFormats = [...buildFormats, ...ind]

const unpkgConfig = {
  ...baseConfig,
  input: 'src/index.ts',
  external: external,
  output: {
    compact: true,
    file: `${libBuildFolder}/${pkg.name}-browser.min.js`,
    format: 'iife',
    name: validPkgName,
    exports: 'named',
    globals
  },
  plugins: [
    resolve(),
    typescript(),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    ...baseConfig.plugins.postVue,
    babel(baseConfig.plugins.babel),
    terser({
      output: {
        ecma: 3
      }
    }),
    commonjs(),
    filesize()
  ]
}
buildFormats.push(unpkgConfig)

const cjsConfig = {
  ...baseConfig,
  input: entriespath,
  external: external,
  output: {
    compact: true,
    format: 'cjs',
    dir: `${libBuildFolder}/cjs`,
    exports: 'named',
    globals
  },
  plugins: [
    resolve(),
    typescript(),
    replace(baseConfig.plugins.replace),
    ...baseConfig.plugins.preVue,
    vue({
      ...baseConfig.plugins.vue,
      template: {
        ...baseConfig.plugins.vue.template,
        optimizeSSR: true
      }
    }),
    ...baseConfig.plugins.postVue,
    babel(baseConfig.plugins.babel),
    commonjs(),
    filesize({
      showBrotliSize: true
    })
  ]
}
buildFormats.push(cjsConfig)

// Export config
export default buildFormats;
