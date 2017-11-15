<template>
  <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
      <div class="cd__menu-item" v-show="showItem"
        @click="$emit('itemClicked', index)">
        <span class="cd__menu-item__icon"  @mouseenter="mouseEnter" @mouseleave="mouseLeave" :style="itemStyle"><slot>{{index}}</slot></span>
      </div>
    </transition>
</template>
<script type="text/babel">
import Velocity from 'velocity-animate'

export default {
  name: 'CdMenuItem',
  props: {
    width: {
      type: String,
      default: '40px'
    },
    background: {
      type: String,
      default: '#74A982'
    },
    duration: {
      type: Number,
      default: 300
    },
    delay: Number,
    index: Number,
    showItem: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 40
    },
    angleCur: {
      type: Number
    }
  },
  data () {
    return {
      itemStyle: {
        fontSize: '16px',
        display: 'inline-block',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#74A982',
        lineHeight: '40px',
        textAlign: 'center',
        color: '#fff'
      }
    }
  },
  mounted () {
    this.itemStyle = Object.assign(this.itemStyle, { width: this.width, background: this.background })
  },
  computed: {
    x () {
      return Math.round(this.radius * Math.cos(this.toRadians(this.angleCur)))
    },
    y () {
      return Math.round(this.radius * Math.sin(this.toRadians(this.angleCur)))
    },
    x0 () {
      return 0
    },
    y0 () {
      return 0
    },
    x1 () {
      return this.x * 2
    },
    y1 () {
      return this.y * 2
    }
  },
  methods: {
    toRadians (angle) {
      return angle * (Math.PI / 180)
    },
    beforeEnter: function (el) {
      el.children[0].style.opacity = 0
    },
    mouseLeave (e, done) {
      Velocity(e.target, { opacity: 1, rotateZ: '0deg' },
      { duration: this.duration, easing: 'ease-in-out', complete: done }
      )
    },
    mouseEnter: (e, done) => {
      Velocity(e.target, { opacity: 1, rotateZ: '360deg' },
      { duration: this.duration, easing: 'ease-in-out', complete: done }
      )
    },
    enter: function (el, done) {
      const top = -this.y1
      const left = this.x1
      Velocity(el.children[0], { opacity: 1, translateX: (`${left}px`), translateY: (`${top}px`) },
      { duration: this.duration, easing: 'ease-in-out', delay: this.index * this.delay, complete: done }
      )
    },
    leave: function (el, done) {
      const top = -this.y0
      const left = this.x0
      Velocity(el.children[0], { opacity: 0, translateX: (`${left}px`), translateY: (`${top}px`) },
      { duration: this.duration, delay: this.index * this.delay, easing: 'ease-in-out', complete: done })
    }
  }
}
</script>
