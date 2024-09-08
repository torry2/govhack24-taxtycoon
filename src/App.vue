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
    <ProgressBar :progress="progress"/>
  </header>
  <div class="quiz">
    <Question :questionText="question" />
    <Answers :options="answers" />    
  </div>
</template>

<style scoped>
.header {
  width: 100%;
}
</style>
