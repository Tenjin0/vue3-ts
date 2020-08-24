<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Counter />
    <div>
      <router-link to="/">Go to Home</router-link>
    </div>
    <div div>
      <router-link to="/about">Go to About</router-link>
    </div>
    <div div>
      <router-link to="/users">Go to Users</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import "./assets/styles/app.less";

export default defineComponent({
  components: {
    HelloWorld,
    Counter
  },
  data() {
    return {
      msg: "Hello wolrd"
    };
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
});
</script>
