<template>
  <div>
    <span>{{ count }}</span>
    <a-button type="primary" shape="circle" @click="increase">+</a-button>
    <a-button type="primary" shape="circle" @click="decrease">-</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
      }
    }
  }
});
</script>
