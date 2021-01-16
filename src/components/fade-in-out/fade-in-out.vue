<script lang="ts">
import { defineComponent, computed } from 'vue';


interface Props {
  delay: number
  enterActiveClass: string
  leaveActiveClass: string
}

export default defineComponent({
  name: 'fade-transition',

  props: {
    enterActiveClass: {
      type: String,
      default: 'v3t-animate v3t-animate__fadeIn'
    },
    leaveActiveClass: {
      type: String,
      default: 'v3t-animate v3t-animate__fadeOut'
    },
    delay: {
      type: Number,
      default: 0.5,
    },
  },

  setup(props: Props) {

    const delayinSecs = computed(() => props.delay)

    return {
      delayinSecs
    }
  },
})
</script>

<template>
	<transition
    name="v3t-fade"
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
    >
    <slot></slot>
  </transition>
</template>

