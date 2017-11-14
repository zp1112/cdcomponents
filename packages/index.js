/**
 * @author candyZheng
 * Date: 17/11/12
 */
import Vue from 'vue'
import Row from './row/index'
import Col from './col/index'
import Billboard from './billboard'
import Count from './count'
import Chat from './chat'
import extend from '../src/extend'

Vue.use(extend)

const components = [
  Row,
  Col,
  Billboard,
  Count,
  Chat
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Row,
  Col,
  Billboard,
  Count,
  Chat
}
