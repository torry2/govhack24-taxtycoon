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
  width: 40%;
  flex-direction: column;
  gap: 10px;
}

.answer-button {
  padding: 10px;
  background-color: #ffffff;
  color: black;
  border: 2px solid #e5e5e5;
  border-bottom: 3px solid #e5e5e5;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Varela Round';
  font-size: 15px;
  color: #202020;
}

.answer-button:hover {
  border: 2px solid #d6d6d6;
  border-bottom: 3px solid #d6d6d6;
  background-color: #efefef;
}
</style>
