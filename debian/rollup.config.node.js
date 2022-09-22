'use strict'

const path    = require('path')
import node from "@rollup/plugin-node-resolve"
const common  = require('rollup-plugin-commonjs')

let fileDest  = 'less.cjs.js'
const plugins = [
  node({
    customResolveOptions: {
      moduleDirectory: ['/usr/share/nodejs']
    }
  }),
  common(),
]
module.exports = {
  input: 'lib/less-node/index.js',
  output: {
    file: path.resolve(__dirname, `../dist/${fileDest}`),
    format: 'cjs',
  },
  plugins
}
