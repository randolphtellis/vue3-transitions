<script lang="ts">
import { ref } from 'vue';
import FadeInOut from './components/fade-in-out/fade-in-out.vue';

export default {
  name: 'App',

  components: {
    FadeInOut,
  },

  setup () {

    const fade = ref(false)
    return {
      fade,
    }
  }
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div style="height:300px;">
    <button @click="fade = !fade">Trigger</button>
    <FadeInOut>
      <div v-if="fade" class="box" style="height:250px;width:100px;background:red;">
        FadeInOut
      </div>
    </FadeInOut>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
