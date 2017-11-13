/**
 * @author candyZheng
 * Date: 17/11/12
 */
import Row from './row/index'
import Col from './col/index'
import Billboard from './billboard'
import Count from './count'

const components = [
  Row,
  Col,
  Billboard,
  Count
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
  Count
}
