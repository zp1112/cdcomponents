import Vue from 'vue'

const directives = {
  focus: {
    inserted (el) {
      // 聚焦元素
      el.focus()
    }
  },
  scroll: {
    update (el, binding, vnode) {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight
      }, 0)
    }
  }
}
export default {
  install () {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
