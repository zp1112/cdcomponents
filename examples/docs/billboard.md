# Billboard 效果
----
### 基础用法

使用imgs、strings和width属性。

<div class="demo-block">
  <div id="app">
    <CdBillboard :imgs="imgs" :strings="strings" :width="30"/>
  </div>
</div>

::: demo
```html

<div id="app">
  <CdBillboard :imgs="imgs" :strings="strings" :width="30"/>
</div>

<script>
  // imgs为需要渲染的图片，数量必须为strings总字符数
  const imgs = [];
  for (let i = 1; i <= 58; i += 1) {
    const index = (i % 11) || 1;
    imgs.push(require(`./imgs/face${index}.jpg`));
  }

  export default {
    name: 'App',
    components: { },
    data() {
      return {
        imgs,
        strings: []
      };
    },
    created() {
      // strings格式为拼接出来的字母字样，如下为  EIOD
      this.strings = [
        '*** * *** *** ',
        '*   * * * *  *',
        '*** * * * *  *',
        '*   * * * *  *',
        '*** * *** *** '
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
