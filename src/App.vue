<template>
    <Layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./views/Layout.vue";
import "./assets/styles/app.less";

export default defineComponent({
  components: {
    Layout
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
