 # Count 数字渐变
----

<script>

export default {
  name: 'App',
  components: { },
  data() {
    return {
      timer: null,
      total: 3000.55,
      total1: 3000.55,
      startVal: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        decimals: 2
      },
      countStyle: {
        fontSize: '20px',
        verticalAlign: 'bottom',
        color: '#ea7878',
        fontWeight: 'bold'
      }
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.total1 = Math.floor((Math.random()) * 5000) + 1000;
    }, 6000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
  }
};
</script>

### 基础用法

使用endVal最终值和options参数属性。
 
 <div class="demo-block">
  <CdCount :endVal="total" :startVal="startVal">
  </CdCount>
</div>
 
 :::demo
 ```html
<CdCount :endVal="total" :startVal="startVal">
</CdCount>

<script>

export default {
  data() {
    return {
      total: 3000,
      startVal: 100
    };
  }
};
</script>
 ```
 :::

 ### 自定义初始值

插入slot前后缀，同时自定义计数开始的初始值startVal。
 
<div class="demo-block">
  <CdCount :endVal="total" :startVal="startVal">
    <span slot="prefix">总计:&nbsp;</span>
    <span slot="suffix">&nbsp;个</span>
  </CdCount>
</div>
 
 :::demo
 ```html
 <CdCount :endVal="total" :startVal="startVal">
  <span slot="prefix">总计:&nbsp;</span>
  <span slot="suffix">&nbsp;个</span>
</CdCount>

<script>

export default {
  data() {
    return {
      total: 3000,
      startVal: 10
    };
  }
};
</script>
 ```
 :::

 ### 自定义数字样式和自定义渐变效果

countStyle属性定义了数字部分的样式，options为countjs规定的一些参数，包括decimals（保留几位小数），separator（分隔符）等参数。
 
 <div class="demo-block">
  <CdCount :endVal="total" :options="options" :countStyle="countStyle" :startVal="startVal">
    <span slot="prefix">Total:&nbsp;</span>
    <span slot="suffix">&nbsp;times</span>
  </CdCount>
</div>
 
 :::demo
 ```html
<CdCount :endVal="total" :options="options" :countStyle="countStyle" :startVal="startVal">
  <span slot="prefix">Total:&nbsp;</span>
  <span slot="suffix">&nbsp;times</span>
</CdCount>

<script>

export default {
  data() {
    return {
      total: 3000.55,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        decimals: 2
      },
      countStyle: {
        fontSize: '20px',
        verticalAlign: 'bottom',
        color: '#ea7878',
        fontWeight: 'bold'
      },
      startVal: 0
    };
  }
};
</script>
 ```
 :::

 ### 实时变化的数字

countStyle属性定义了数字部分的样式，options为countjs规定的一些参数，包括decimals（保留几位小数），separator（分隔符）等参数。
 
 <div class="demo-block">
  <CdCount :endVal="total1" :options="options" :countStyle="countStyle" :startVal="startVal">
    <span slot="prefix">Total:&nbsp;</span>
    <span slot="suffix">&nbsp;times</span>
  </CdCount>
</div>
 
 :::demo
 ```html
<CdCount :endVal="total1" :options="options" :countStyle="countStyle" :startVal="startVal">
  <span slot="prefix">Total:&nbsp;</span>
  <span slot="suffix">&nbsp;times</span>
</CdCount>

<script>

export default {
  name: 'App',
  components: { },
  data() {
    return {
      timer: null,
      total1: 3000.55,
      startVal: 0,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        decimals: 2
      },
      countStyle: {
        fontSize: '20px',
        verticalAlign: 'bottom',
        color: '#ea7878',
        fontWeight: 'bold'
      }
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.total1 = Math.floor((Math.random()) * 5000) + 1000;
    }, 6000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
  }
};
</script>
 ```
 :::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| prefix     | 前缀描述   | String  |   -            |    —     |
| suffix     | 后缀描述   | String    |   - |     —    |
| endVal     | 最终数值   | Number    | — |   - |
| options     | countup参数   | Object    | — | {useEasing: true,useGrouping: true,separator: ',',decimal: '.',prefix: '',suffix: ''}   |
| countStyle     | 数值样式   | Object    | — | -   |
| startVal     | 初始数值   | Number    | — | 0   |