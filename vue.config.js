module.exports = {
  lintOnSave: undefined,
  chainWebpack: config => config.resolve.symlinks(false)
}