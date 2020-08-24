<template>
  <Suspense>
    <template #default>
      <UsersComponent />
    </template>
    <template #fallback>
      loading ...
    </template>
  </Suspense>
</template>

<script lang="ts">
import UsersComponent from "../components/Users.vue";
export default {
  name: "Users",
  components: {
    UsersComponent
  }
};
</script>
