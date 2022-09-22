'use strict'

const path    = require('path')
import node from "@rollup/plugin-node-resolve"
const common  = require('@rollup/plugin-commonjs')
const babel   = require('rollup-plugin-babel')

const BUNDLE  = process.env.BUNDLE === 'true'

let fileDest  = 'less.js'
const plugins = [
  node({
    customResolveOptions: {
      moduleDirectory: ['/usr/share/nodejs']
    }
  }),
  common(),
  babel(),
]
module.exports = {
  input: 'lib/less-browser/bootstrap.js',
  output: {
    file: path.resolve(__dirname, `../dist/${fileDest}`),
    format: 'umd',
    name: 'less'
  },
  plugins
}
