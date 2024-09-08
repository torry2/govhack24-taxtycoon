<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="progress-bar">
    <div
      v-for="n in 5"
      :key="n"
      class="progress-rect"
      :class="{'active': n <= progress}">
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.progress-rect {
  flex-grow: 1;
  margin: 0 3px;
  height: 5px;
  background-color: #ccc;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.progress-rect.active {
  background-color: #4caf50;
}
</style>
