 # Chat 聊天框
----

### 基础用法

<script>
import Vue from 'vue';
Vue.directive('scroll', {
  inserted (el) {
      setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  },
  update (el, binding, vnode) {
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  }
});
export default {
  name: 'App',
  data() {
    return {
      list1: [],
      list2: []
    };
  },
  mounted() {
    this.list1 = new Array(30).fill('你好，你叫什么名字？').map((_, i) => (_));
    this.list2 = new Array(30).fill('你好，你叫什么名字？').map((_, i) => (_));
  },
  methods: {
    userPreSend1(val) {
      this.list1.push(val);
    },
    userPreSend2(val) {
      this.list2.push(val);
    },
    init() {
      this.list2 = [];
    }
  }
};
</script>
<style>
  .chat-content{
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>

 <div class="demo-block">
  <CdChat dialogTitle="智能问答机器人"
    @userSend="userPreSend1"
    ref="dialog1">
    <div class="chat-content" slot="list" v-scroll="list1">
      <div v-for="item in list1">{{item}}</div>
    </div>
  </CdChat>
</div>

 :::demo
 ```html
<CdChat dialogTitle="智能问答机器人"
  @userSend="userPreSend1"
  ref="dialog1">
  <div class="chat-content" slot="list" v-scroll="list1">
    <div v-for="item in list1">{{item}}</div>
  </div>
</CdChat>

<script>
import Vue from 'vue';
Vue.directive('scroll', {
  inserted (el) {
      setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  },
  update (el, binding, vnode) {
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  }
});
export default {
  data() {
    return {
      list1: []
    };
  },
  mounted() {
    this.list1 = new Array(30).fill('你好，你叫什么名字？').map((_, i) => (_));
  },
  methods: {
    userPreSend1(val) {
      this.list1.push(val);
    }
  }
};
</script>
 ```
 :::

## 另一种底部


 <div class="demo-block">
  <CdChat dialogTitle="智能问答机器人"
    @init="init"
    @userSend="userPreSend2"
    ref="dialog2"
    :mode="1">
    <div class="chat-content" slot="list" v-scroll="list2">
      <div v-for="item in list2">{{item}}</div>
    </div>
  </CdChat>
</div>

 :::demo
 ```html
<CdChat dialogTitle="智能问答机器人"
  @init="init"
  @userSend="userPreSend2"
  ref="dialog2"
    :mode="1">
  <div class="chat-content" slot="list" v-scroll="list2">
    <div v-for="item in list2">{{item}}</div>
  </div>
</CdChat>

<script>
import Vue from 'vue';
Vue.directive('scroll', {
  inserted (el) {
      setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  },
  update (el, binding, vnode) {
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  }
});
export default {
  name: 'App',
  data() {
    return {
      list2: []
    };
  },
  mounted() {
    this.list2 = new Array(30).fill('你好，你叫什么名字？').map((_, i) => (_));
  },
  methods: {
    userPreSend2(val) {
      this.list2.push(val);
    },
    init() {
      this.list2 = [];
    }
  }
};
</script>
 ```
 :::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| dialogTitle     | 对话框左上角标题   | String  |   -            |    —     |
| init     | 初始化列表   | function    |   - |     —    |
| userSend     | 发送回调   | function    | — |   - |
| mode     | 底部模式是否带init,非必须   | Number    | — | - |
