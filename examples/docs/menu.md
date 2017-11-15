 # Menu 展开菜单特效
----

<script>

export default {
  data() {
    return {
      showItem: false,
      open: false,
      showItem1: false,
      open1: false,
      startAngle: 0,
      endAngle: 360,
      delay: 50,
      duration: 300,
      icons: [
        { background: 'red', icon: 'cd-icon-remind' },
        { background: '#bcd670', icon: 'cd-icon-cart' },
        { background: '#d69270', icon: 'cd-icon-refresh' },
        { background: '#707cd6', icon: 'cd-icon-tag' },
        { background: '#d070d6', icon: 'cd-icon-wow' }
      ]
    };
  },
  computed: {
    angleStep () {
      return (this.endAngle - this.startAngle) / (7)
    },
    angleStep1 () {
      return (this.endAngle - this.startAngle) / (5)
    }
  },
  methods: {
    toggleOpen() {
      this.showItem = !this.showItem;
      this.open = !this.open;
    },
    toggleOpen1() {
      this.showItem1 = !this.showItem1;
      this.open1 = !this.open1;
    },
    itemClicked(i) {
      console.log(i)
    },
    itemClicked1(i) {
      console.log(i)
    }
  }
};
</script>
<style lang="less" type="text/less" >
.wrapper{
  width: 200px;
  height: 100px;
  margin: 80px;
  .myspan{
    font-size: 16px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: red;
    line-height: 40px;
    color: #fff;
  }
}
</style>

 ### 基础用法

angleCur当前item所在角度，需要通过计算得到，由起始角度+间隔角度*当前下标，间隔角度=(终止角度-起始角度)/(item个数-1),视情况而定。

<div class="demo-block">
  <div class="wrapper">
    <CdMenu @click.native="toggleOpen" :open="open">
      <CdMenuItem v-for="i in 7" :index="i"
      :duration="duration"
      :delay="delay"
      :key="i"
      @itemClicked="itemClicked"
      :showItem="showItem"
      :angleCur="startAngle+angleStep*(i-1)"/>
    </CdMenu>
  </div>
</div>

 :::demo
 ```html
<CdMenu @click.native="toggleOpen" :open="open">
  <CdMenuItem v-for="i in 7" :index="i"
  :key="i"
  :duration="duration"
  :delay="delay"
  @itemClicked="itemClicked"
  :showItem="showItem"
  :angleCur="startAngle+angleStep*(i-1)"/>
</CdMenu>

<script>

export default {
  data() {
    return {
      showItem: false,
      open: false,
      startAngle: 0,
      endAngle: 360,
      delay: 50,
      duration: 300
    };
  },
  computed: {
    angleStep () {
      return (this.endAngle - this.startAngle) / (7)
    }
  },
  methods: {
    toggleOpen() {
      this.showItem = !this.showItem;
      this.open = !this.open;
    },
    itemClicked(i) {
      console.log(i)
    }
  }
};
</script>
 ```
 :::

### 自定义slot

属性background为每个item的背景颜色，slot可以插入i标签，如果插入其他元素，需要自己调整样式

<div class="demo-block">
  <div class="wrapper">
    <CdMenu @click.native="toggleOpen1" :open="open1">
      <CdMenuItem v-for="(item, i) in icons" :index="i"
      :background="item.background"
      width="40px"
      :duration="duration"
      :delay="delay"
      :key="i"
      @itemClicked="itemClicked1"
      :showItem="showItem1"
      :angleCur="startAngle+angleStep*(i-1)"/>
      <i :class="item.icon"></i>
    </CdMenu>
  </div>
</div>

 :::demo
 ```html
<CdMenu @click.native="toggleOpen1" :open="open1">
  <CdMenuItem v-for="(item, i) in icons" :index="i"
  :background="item.background"
  width="40px"
  :key="i"
  :duration="duration"
  :delay="delay"
  @itemClicked="itemClicked1"
  :showItem="showItem1"
  :angleCur="startAngle+angleStep*(i-1)"/>
  <i :class="item.icon"></i>
</CdMenu>

<script>

export default {
  data() {
    return {
      showItem1: false,
      open1: false,
      startAngle: 0,
      endAngle: 360,
      delay: 50,
      duration: 300,,
      icons: [
        { background: 'red', icon: 'cd-icon-remind' },
        { background: '#bcd670', icon: 'cd-icon-cart' },
        { background: '#d69270', icon: 'cd-icon-refresh' },
        { background: '#707cd6', icon: 'cd-icon-tag' },
        { background: '#d070d6', icon: 'cd-icon-wow' }
      ]
    };
  },
  computed: {
    angleStep1 () {
      return (this.endAngle - this.startAngle) / (this.icons.length)
    }
  },
  methods: {
    toggleOpen1() {
      this.showItem1 = !this.showItem1;
      this.open1 = !this.open1;
    },
    itemClicked1(i) {
      console.log(i)
    }
  }
};
</script>
<style lang="less" type="text/less" >
  .myspan{
    font-size: 16px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: red;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
</style>
 ```
 :::

### Menu Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| open     | 开关   | Boolean  |   -            |    false     |

### MenuItem Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| background     | 背景色   | String  |   颜色值            |    #74A982    |
| width     | item的宽度，宽高相同   | String    |    |     40px    |
| duration     | 展开动画时间   | Number    | ms单位 |   300 |
| delay     | 每个item之间的延迟时间   | Number    | ms单位 | 0   |
| index     | item的下标   | Number    | — | -   |
| showItem     | item显示   | Boolean    | — | false   |
| radius     | item离中心的距离   | Number    | px | 40  |
| showItem     | item显示   | Boolean    | — | false   |
| angleCur     | 当前item的角度   | Number    | deg | false   |
