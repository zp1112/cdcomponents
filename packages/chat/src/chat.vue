<template>
  <div class="cd-chat" :style="{height: heights.total}">
    <div class="cd-chat__title" :style="{height: heights.titleHeight,lineHeight: heights.titleHeight}">
      <span>{{dialogTitle}}</span>
    </div>
    <div class="cd-chat__content" :style="{height: inputMode === 1 ? heights.contentBlur : heights.contentFocus}">
      <slot name="list"></slot>
    </div>
    <div class="cd-chat__bottom"
         v-if="inputMode==2"
         :style="{height:heights.inputFocus}"
         :class="{'cd-chat__bottom--focus':inputMode==2}">
      <div class="cd-chat__bottom__inputs">
          <textarea :placeholder="placeholder"
                    v-focus
                    v-model.trim="userInputText"
                    @keydown.enter="userSend">
          </textarea>
        <button @click="userSend"></button>
      </div>
    </div>
    <!--键盘模式-->
    <div class="cd-chat__bottom" v-show="inputMode==1 && !mode" :style="{height:heights.inputBlur}">
      <div class="cd-chat__bottom__inputs">
        <textarea @click="inputMode=2" placeholder="继续输入"
                    v-model.trim="userInputText"></textarea>
        <button @click="userSend"></button>
      </div>
    </div>
    <!--带加号的输入框-->
    <div class="cd-chat__bottom cd-chat__bottom--new" v-show="inputMode==1 && mode == 1" :style="{height:heights.inputBlur}">
      <div class="cd-chat__bottom__inputs">
        <textarea @click="inputMode=2" placeholder="继续输入"
                    v-model.trim="userInputText"></textarea>
        <button @click="$emit('init')" title="开始新的问答"></button>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: 'CdChat',
  props: {
    mode: {
      type: Number,
      default: 0
    },
    heights: {
      type: Object,
      default: () => ({
        total: '640px',
        contentFocus: '344px',
        contentBlur: '475px',
        inputFocus: '254px',
        inputBlur: '123px',
        titleHeight: '42px'
      })
    },
    dialogTitle: {
      type: String,
      default: '聊天框'
    },
    placeholder: {
      type: String,
      default: '请输入您想咨询的问题'
    }
  },
  data () {
    return {
      userInputText: '',
      inputMode: 1
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    userSend (e) {
      e.preventDefault()
      this.$emit('userSend', this.userInputText)
      this.inputMode = 1
      this.userInputText = ''
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
.cd-chat{
  position: relative;
  background: white;
  float: left;
  width: 300px;
  .cd-chat__title{
    font-size: 16px;
    position: relative;
    box-shadow: 0 0 3px;
    color: #fff;
    background: #3A88B5;
    span{
      font-size: 18px;
      display: inline;
      padding: 0 20px;
    }
  }
  .cd-chat__content{
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .cd-chat__bottom{
    border: 1px solid #c0c0c0;
    width: 300px;
    position: absolute;
    bottom: 0;
    .cd-chat__bottom__inputs{
      margin: 10px;
      overflow: hidden;
      height: 100%;
      button {
        float: left;
        border: none;
        background: #3A88B5 url('./imgs/button_send.png') no-repeat center;
        width: 100%;
        height: 31px;
        cursor: pointer;
        &:hover {
          outline: none;
        }
      }
      textarea {
        float: left;
        width: 100%;
        border: 1px solid #D2D2D2;
        background: #F7F9FA;
        font-family: '微软雅黑';
        font-size: 18px;
        color: #333333;
        padding: 1px;
        height: 60%;
        &::placeholder{
          font-size: 16px;
        }
      }
    }
    &.cd-chat__bottom--focus{
      .cd-chat__bottom__inputs{
        textarea{
          height: 75%;
        }
      }
    }
    &.cd-chat__bottom--new{
      button{
        background: #3A88B5 url('./imgs/icon_plus.png') no-repeat center;
      }
    }
  }
}
</style>
