const { resolve } = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/renderer/main.ts'
    }
  },
  configureWebpack: config => {
    config.resolve.extensions = [
      '.ts',
      '.tsx',
      '.vue',
      '.mjs',
      '.js',
      '.jsx',
      '.json',
      '.wasm'
    ]
    config.resolve.modules.push(resolve(__dirname, 'src'))
    config.resolve.modules.push(resolve(__dirname, 'src/renderer'))
    config.resolve.alias['@'] = resolve(__dirname, 'src/renderer')

    config.resolve.alias['base'] = resolve(
      __dirname,
      'src/renderer/styles/base'
    )

    config.module.rules.push({
      test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
      resolve: {
        aliasFields: ['main']
      }
    })
  },
  pluginOptions: {
    // vue-cli-plugin-electron-builder Doc, check ou: https://nklayman.github.io/vue-cli-plugin-electron-builder/
    electronBuilder: {
      // To see available options, check out https://www.electron.build/configuration/configuration
      builderOptions: {
        appId: 'vip.jarden.mool'
      },
      mainProcessFile: 'src/main/background.ts'
    }
  }
}
