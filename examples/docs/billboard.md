# Billboard 效果
----
### 基础用法

使用imgs、strings和width属性。

<div class="demo-block">
  <div id="app">
    <CdBillboard :imgs="imgs" :strings="strings" :width="30" :lastOne="this.lastOne"/>
  </div>
</div>

::: demo
```html

<div id="app">
  <CdBillboard :imgs="imgs" :strings="strings" :width="30" :lastOne="this.lastOne"/>
</div>

<script>

  export default {
    name: 'App',
    components: { },
    data() {
      return {
        lastOne: '',
        imgs: [],
        strings: []
      };
    },
    created() {
      // imgs为需要渲染的图片，for循环的数量必须为strings总字符数
      for (let i = 1; i <= 42; i += 1) {
        if (i === 42) {
          this.lastOne = require(`./imgs/you.png`);
        } else {
          const index = (i % 12) || 1;
          this.imgs.push(require(`./imgs/face${index}.jpg`));
        }
      }
      // strings格式为拼接出来的字母字样，如下为  EIOD
      this.strings = [
        '**** ****  *  * *',
        '*    *   * *  * *',
        '*    *   * *  * *',
        '*    *   * *  * *',
        '**** ****  **** *'
      ];
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
| imgs     | 照片数组   | Array  |   -            |    —     |
| strings     | 组成字母的数组*的集合   | Array    |   - |     —    |
| width     | 每个照片的width   | Number    | — | 50   |
| lastOne     | 最后显示的图片元素   | String    | — | －   |
