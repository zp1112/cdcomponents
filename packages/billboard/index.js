import Billboard from './src/billboard.vue';

/* istanbul ignore next */
Billboard.install = function(Vue) {
  Vue.component(Billboard.name, Billboard);
};

export default Billboard;
