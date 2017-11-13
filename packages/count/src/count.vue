<template>
  <div class="cd__count">
    <div>
      <slot name="prefix"></slot>
      <span ref="target" :style="countStyle"></span>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script type="text/babel">
import CountUp from 'countup'

export default {
  name: 'CdCount',
  props: {
    duration: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 0
    },
    startVal: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: () => ({
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      })
    },
    countStyle: {
      type: Object
    }
  },
  data () {
    return {
      myStartVal: 0
    }
  },
  watch: {
    'endVal' (val) {
      this.startCount()
      this.myStartVal = val
    }
  },
  mounted () {
    this.myStartVal = this.startVal
    this.startCount()
  },
  computed: {

  },
  methods: {
    startCount () {
      const { decimals } = this.options
      const demo = new CountUp(this.$refs.target, this.myStartVal, this.endVal, decimals, this.duration, this.options)
      if (!demo.error) {
        demo.start()
      } else {
        this.$message({
          message: demo.error,
          type: 'error'
        })
      }
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
</style>
