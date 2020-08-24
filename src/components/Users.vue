<template>
  Users
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Users",
  components: {},
  async setup() {
    const users = ref([]);
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    users.value = data.data || [];
    return {
      users
    };
  }
};
</script>
