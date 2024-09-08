<script setup>
import ProgressBar from './components/ProgressBar.vue';
import Question from './components/question.vue';
import Answers from './components/answers.vue';

import * as values from '@/utils/correct.js';
import * as p from '@/utils/functions.js';

import {ref, watch} from 'vue';
let progress = ref(1);
let { question, answers, correct } = values.quiz[progress.value - 1]

watch(progress, (newVal, oldVal, cleanup) => {
  progress.value = p.progress;
});

function languageClick() {
  alert("AI Translation: Coming Soon!");
}
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
  <footer>
    <img class="clickable-image" src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/18-1024.png" @click="languageClick"/>
  </footer>
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

footer {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

.clickable-image {
  height: 70px; 
  cursor: pointer;
}
</style>
