<script lang="ts">
import { ref } from 'vue';
import ExampleButton from './components/example-button/example-button.vue';

export default {
  name: 'App',

  components: {
    ExampleButton,
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <example-button href="#">
      Button component
    </example-button>
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
