<script lang="ts">
import { defineComponent } from 'vue';

interface Props {
  href: string
}

export default defineComponent({
  name: 'example-button',

  props: {
    /**
     * A URL to link the button to
     */
    href: {
      type: String,
      default: '#'
    },
  },

  setup(props: Props, ctx) {

    return {
      ctx,
    }
  },
})
</script>

<template>
	<a :href="href" @click="ctx.emit('click', $event)">
    <!--
      @slot - Default slot for the button content
     -->
    <slot/>
  </a>
</template>

<style lang="scss" scoped>
  .button {
    padding: 20px;
  }
</style>
