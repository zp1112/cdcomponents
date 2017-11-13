/**
 * @author candyZheng
 * Date: 17/11/12
 */
import Col from './src/col'

/* istanbul ignore next */
Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}

export default Col
