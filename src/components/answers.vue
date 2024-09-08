<template>
  <div class="answers-box">
    <button v-for="(option, index) in options" :key="index" class="answer-button" :class="score" @click="selectAnswer(option)">
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
    },
    progress: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      resultCode: 0
    };
  },
  computed: {
    score() {
      return {
        '': this.resultCode === 0,
        'correct': this.resultCode === 1,
        'wrong': this.resultCode === 2
      };
    }
  },
  methods: {
    async selectAnswer(option) {
      if (option == "Answer " + ["A","C","B","E","D"][this.progress-1]) {
        this.resultCode = 1;
      } else {
        this.resultCode = 2;
      }
      await this.sleep(1000);
      this.resultCode = 0;
      this.$emit('increment');
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));      
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

.correct {
  border-color: #8cc53f !important;
}

.wrong {
  border-color: #ff4b4b !important;
}
</style>
