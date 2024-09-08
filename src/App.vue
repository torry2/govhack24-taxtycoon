<script setup>
import ProgressBar from './components/ProgressBar.vue'
</script>

<template>
  <header>
    <ProgressBar :progress="3"/>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
}
</style>
