<script lang="ts">
import { defineComponent, computed } from 'vue';
import { FadeInOutProps } from './fade-in-out'

export default defineComponent({
  name: 'fade-in-out',

  props: {
    /**
     * Duration of the entry/exit animations in milliseconds
     */
    duration: {
      type: Number,
      default: 500,
    },
    entry: {
      type: String,
      default: 'center',
      validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
    },
    exit: {
      type: String,
      default: 'center',
      validator: (value: string) => ['center', 'left', 'right', 'top', 'bottom'].includes(value),
    },
    mode: {
      type: String,
      required: false,
      validator: (value: string) => ['out-in', 'in-out'].includes(value),
    },
  },

  setup(props: FadeInOutProps) {

    const transitionDuration = computed(() => `transition-duration:${props.duration}ms;`)

    return {
      transitionDuration
    }
  },
})
</script>

<template>
	<transition
    :name="`vtt_fade-in-${entry}-out-${exit}`"
    :style="transitionDuration"
    :mode="mode"
    >
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">

// Classic Fade in center and fade out center
.vtt_fade-in-center-out-center-enter-active,
.vtt_fade-in-center-out-center-leave-active {
  transition: opacity ease-in;
}

.vtt_fade-in-center-out-center-enter-from,
.vtt_fade-in-center-out-center-leave-to {
  opacity: 0;
}
.vtt_fade-in-center-out-center-enter-to,
.vtt_fade-in-center-out-center-leave-from {
  opacity: 1;
}

// Fade in center fade out left
.vtt_fade-in-center-out-left-enter-active {
  transition: opacity ease-in;
}
.vtt_fade-in-center-out-left-enter-from,
.vtt_fade-in-center-out-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vtt_fade-in-center-out-left-enter-to,
.vtt_fade-in-center-out-left-leave-from {
  opacity: 1;
}

// Fade in center fade out right
.vtt_fade-in-center-out-right-enter-active {
  transition: opacity ease-in;
}
.vtt_fade-in-center-out-right-enter-from,
.vtt_fade-in-center-out-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vtt_fade-in-center-out-right-enter-to,
.vtt_fade-in-center-out-right-leave-from {
  opacity: 1;
}

// Fade in center fade out top
.vtt_fade-in-center-out-top-enter-active {
  transition: opacity ease-in;
}
.vtt_fade-in-center-out-top-enter-from,
.vtt_fade-in-center-out-top-leave-to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.vtt_fade-in-center-out-top-enter-to,
.vtt_fade-in-center-out-top-leave-from {
  opacity: 1;
}

// Fade in center fade out bottom
.vtt_fade-in-center-out-bottom-enter-active {
  transition: opacity ease-in;
}
.vtt_fade-in-center-out-bottom-enter-from,
.vtt_fade-in-center-out-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.vtt_fade-in-center-out-bottom-enter-to,
.vtt_fade-in-center-out-bottom-leave-from {
  opacity: 1;
}

// Fade in left fade out center
.vtt_fade-in-left-out-center-enter-active {
  transition: opacity ease-in;
}
.vtt_fade-in-left-out-center-leave-active {
  transition: opacity ease-out;
}
.vtt_fade-in-left-out-center-enter-from,
.vtt_fade-in-left-out-center-leave-to {
  opacity: 0;
}
.vtt_fade-in-left-out-center-enter-to,
.vtt_fade-in-left-out-center-leave-from {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

// Fade in left fade out left
.vtt_fade-in-left-out-left-enter-from,
.vtt_fade-in-left-out-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vtt_fade-in-left-out-left-enter-to,
.vtt_fade-in-left-out-left-leave-from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

</style>
