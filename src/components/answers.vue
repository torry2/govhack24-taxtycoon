<template>
  <div class="answers-box">
    <button v-for="(option, index) in options" :key="index" class="answer-button" @click="selectAnswer(option)">
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectAnswer(option) {
      alert(option);
    }
  }
};
</script>

<style scoped>
.answers-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.answer-button {
  padding: 10px;
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.answer-button:hover {
  background-color: ##ababab;
}
</style>