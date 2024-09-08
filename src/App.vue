<script setup>
import ProgressBar from './components/ProgressBar.vue'
import Question from './components/question.vue';
import Answers from './components/answers.vue';
//import Result from './components/result.vue';

import * as values from '@/utils/correct.js';
import * as p from '@/utils/functions.js';

import {ref, watch} from 'vue';
let progress = ref(1);
let { question, answers, correct } = values.quiz[progress.value - 1]

watch(progress, (newVal, oldVal, cleanup) => {
  progress.value = p.progress;
});

</script>

<template>
  <header>
    <div class="title-bar">
      <img id="logo" src="/logo.png"/>
    </div>
    <ProgressBar :progress="progress"/>
  </header>
  <main>
    <div class="quiz">
      <div class="question">
        <Question :questionText="question" />
      </div>
      <div class="answers">
        <Answers :options="answers" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  width: 100%;
}

.title-bar {
  border-bottom: 2px solid #e5e5e5;
  display: flex;
  justify-content: center;
}

#logo {
  height: 70px;
  margin: 10px 0 5px 0;
}

.quiz {
  margin: 10px 20px;
}

.question {
  padding: 0 0 15px 0;
}

.answers {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
