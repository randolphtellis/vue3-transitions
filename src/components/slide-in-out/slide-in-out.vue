<script lang="ts">
import { defineComponent, computed } from 'vue'
import { EntryExitPropsType } from '../../common/props/entry-exit-props-type'
import { props } from '../../common/props/entry-exit-props'

export default defineComponent({
  name: 'slide-in-out',

  props,

  setup(props: EntryExitPropsType) {

    const transitionDuration = computed(() => `transition-duration:${props.duration}ms;`)

    return {
      transitionDuration
    }
  },
})
</script>

<template>
	<transition
    :name="`vtt_slide-in-${entry}-out-${exit}`"
    :style="transitionDuration"
    :mode="mode"
    >
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">

// Slide in left slide out right
.vtt_slide-in-left-out-right-enter-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-left-out-right-leave-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-left-out-right-enter-to,
.vtt_slide-in-left-out-right-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in left slide out left
.vtt_slide-in-left-out-left-enter-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-left-out-left-leave-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-left-out-left-enter-to,
.vtt_slide-in-left-out-left-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in left slide out top
.vtt_slide-in-left-out-top-enter-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-left-out-top-leave-active {
  transition: all ease-in;
  transform: translate3d(0, -100%, 0);
}
.vtt_slide-in-left-out-top-enter-to,
.vtt_slide-in-left-out-top-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in left slide out bottom
.vtt_slide-in-left-out-bottom-enter-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-left-out-bottom-leave-active {
  transition: all ease-in;
  transform: translate3d(0, 100%, 0);
}
.vtt_slide-in-left-out-bottom-enter-to,
.vtt_slide-in-left-out-bottom-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in right slide out right
.vtt_slide-in-right-out-right-enter-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-right-out-right-leave-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-right-out-right-enter-to,
.vtt_slide-in-right-out-right-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in right slide out left
.vtt_slide-in-right-out-left-enter-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-right-out-left-leave-active {
  transition: all ease-in;
  transform: translate3d(-100%, 0, 0);
}
.vtt_slide-in-right-out-left-enter-to,
.vtt_slide-in-right-out-left-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in right slide out top
.vtt_slide-in-right-out-top-enter-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-right-out-top-leave-active {
  transition: all ease-in;
  transform: translate3d(0, -100%, 0);
}
.vtt_slide-in-right-out-top-enter-to,
.vtt_slide-in-right-out-top-leave-from {
  transform: translate3d(0, 0, 0);
}

// Slide in right slide out bottom
.vtt_slide-in-right-out-bottom-enter-active {
  transition: all ease-in;
  transform: translate3d(100%, 0, 0);
}
.vtt_slide-in-right-out-bottom-leave-active {
  transition: all ease-in;
  transform: translate3d(0, 100%, 0);
}
.vtt_slide-in-right-out-bottom-enter-to,
.vtt_slide-in-right-out-bottom-leave-from {
  transform: translate3d(0, 0, 0);
}

</style>
