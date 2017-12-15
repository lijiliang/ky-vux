/**
 * @fileOverview 定义api访问域名
 */
const profiles = {
  local: {
    preffix: '',
    // host: 'e7my9i.natappfree.cc',
    // host : '10.206.41.102:8012',
    host: 'dev.kyani.cn:8100',
    sercureEnable: false
  },
  prod: {
    preffix: '',
    // host: 'dev.kyani.cn:8100',
    host: '127.0.0.1:8012',
    sercureEnable: false
  }
}

const currentProKey = process.env.environment

const profile = profiles[currentProKey]

profile.server = 'http://' + profile.host + profile.preffix

if (profile.sercureEnable) {
  profile.server = 'https://' + profile.host + profile.preffix
} else {
  profile.server = 'http://' + profile.host + profile.preffix
}

export default profile
