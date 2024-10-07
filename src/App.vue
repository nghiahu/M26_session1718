<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
</div>
</template>

<style scoped>

</style>
