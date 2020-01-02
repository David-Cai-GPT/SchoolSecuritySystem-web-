import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    versionShow () {
      util.log.capsule('D2Admin', `v${process.env.VUE_APP_VERSION}`)
    }
  }
}
