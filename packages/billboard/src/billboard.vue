<template>
  <div class="cd__billboard" :style="{width: `${totalWidth}px`}">
    <span v-for="(item, index) in myStrings"
          :key="index"
          :class="{'cd__billboard__span--trans': trans[index] && item === '*'}"
          :style="{width: `${width}px`,height: `${width}px`}">
      <img :src="myImgs[index]"/>
      <i :class="{'cd__billboard__i--trans': trans[index]}"></i>
    </span>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'CdBillboard',
    props: {
      imgs: {
        type: Array,
        default: () => []
      },
      lastOne: {
        type: String
      },
      strings: {
        type: Array,
        default: () => []
      },
      width: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        myImgs: [],
        myStrings: [],
        trans: [],
        totalWidth: '50'
      }
    },
    created () {
      // 总的宽度
      this.totalWidth = `${(this.strings[0].length * this.width)}`
    // 总的字符,通过该字符渲染img
      this.myStrings = this.strings.join('')
    // 决定镜片的动画
      this.trans = new Array(this.myStrings.length).fill(false)
    },
    mounted () {
      const length = this.myStrings.length
      const startLen = this.myStrings.split(' ').join('').length
    // startLen1为最后一个突破渲染时，将该图片改为lastOne
      let startLen1 = 0
      const tempArr = new Array(length).fill(0).map((v, i) => v = i)
      for (let i = 0; i < length; i += 1) {
        const random = tempArr.splice(Math.random() * tempArr.length, 1)[0]
        setTimeout(() => {
          this.$set(this.trans, random, true)
          if (this.myStrings[i] === '*') {
            startLen1 += 1
            this.myImgs[i] = this.imgs.splice(Math.random() * this.imgs.length, 1)[0]
            if (startLen1 === startLen) {
              this.myImgs[i] = this.lastOne
            }
            this.$set(this.trans, i, false)
          }
        }, Math.random() * 800)
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

