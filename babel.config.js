module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // vant-ui 自动按需引入
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
