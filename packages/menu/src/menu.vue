<template>
  <div class="cd__menu">
    <span class="cd__menu__center">
      <slot name="center">
        <span class="cd__menu__center__icon" :class="{'cd__menu__center__icon--active': open}">+</span>
       <slot></slot>
      </slot>
    </span>
    </slot>
  </div>
</template>
<script type="text/babel">

export default {
  name: 'CdMenu',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {

  },
  methods: {
  }
}
</script>
