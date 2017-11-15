import Vue from 'vue'
import directives from './directives'

export default {
  install () {
    Vue.use(directives)
  }
}
