<script setup>
import ProgressBar from './components/ProgressBar.vue'
import Question from './components/question.vue';
import Answers from './components/answers.vue';
//import Result from './components/result.vue';

const question = 'This is a Tax Related Question';
const answerOptions = ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E'];
let progress = 1;
</script>

<template>
  <header>
    <ProgressBar :progress="progress"/>
  </header>
  <div class="quiz">
    <Question :questionText="question" />
    <Answers :options="answerOptions" />    
  </div>
</template>

<style scoped>
.header {
  width: 100%;
}
</style>
