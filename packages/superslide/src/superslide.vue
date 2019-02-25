<template>
  <div class="superslide-container">
    <slot name="titCell"></slot>
    <slot></slot>
    <slot name="prev"></slot>
    <slot name="next"></slot>
    <slot name="pageStateCell"></slot>
  </div>
</template>

<script>
import $ from './jquery-vendor.js';
import './jquery.SuperSlide.2.1.3.source.js';

// pollfill
if (typeof Object.assign != 'function') {
  Object.defineProperty(Object, 'assign', {
    // value (target, varArgs) {
    value (target) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
      }
      const to = Object(target)
      for (let index = 1; index < arguments.length; index++) {
        const nextSource = arguments[index]
        if (nextSource != null) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}

export default {
  name: "superslide",
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted: function () {
    this.create();
  },
  destroyed: function () {
  },
  methods: {
    create: function () {
      const superSlideOptions = Object.assign({}, this.options)
      $(this.$el).slide(superSlideOptions)
    }
  }
}
</script>

