/**
 * @author candyZheng
 * Date: 17/11/12
 */
export default {
  name: 'CdCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },

  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'CdRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    let classList = []
    let style = {}

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span'
            ? `cd-col-${prop}-${this[prop]}`
            : `cd-col-${this[prop]}`
        )
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`cd-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `cd-col-${size}-${prop}-${props[prop]}`
              : `cd-col-${size}-${props[prop]}`
          )
        })
      }
    })

    return h(this.tag, {
      class: ['cd-col', classList],
      style
    }, this.$slots.default)
  }
}
