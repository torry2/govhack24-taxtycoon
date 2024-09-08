<template>
  <div class="question-box">
    <p class="question-text">{{ questionText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    questionText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

.question-text {
    color: #202020;
    font-size: 20px;
}
.question-box {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  text-align: center;
}
</style>
