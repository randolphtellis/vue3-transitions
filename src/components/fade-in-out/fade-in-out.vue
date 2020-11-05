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

<style lang="scss" scoped>
@import './src/common/css/animate-base.scss';

  .v3t-animate__fadeIn {
    animation-name: fadeIn;
  }

  .v3t-animate__fadeOut {
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
