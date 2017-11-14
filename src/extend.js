import Vue from 'vue'
import directives from './directives'

module.exports = {
  install () {
    Vue.use(directives)
  }
}
