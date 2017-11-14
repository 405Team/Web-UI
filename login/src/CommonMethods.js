const webInfo = {
  contact: {
    tel: '188-8888-8888',
    qq: '888888888',
    email: '888888888@qq.com',
    support: '24小时在线客服',
  },
  url: {

  }
}

const CommonMethods = {}
CommonMethods.install = (Vue, options = {}) => {
  Vue.prototype.$WebInfo = webInfo
}

export default CommonMethods
