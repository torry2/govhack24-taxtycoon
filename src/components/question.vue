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
    color: black;
}
.question-box {
  padding: 20px;
  border: 1px solid #000000;
  background-color: #ffffff;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}
</style>