<script setup>
import ProgressBar from './components/ProgressBar.vue'
import Question from './components/question.vue';
import Answers from './components/answers.vue';
import Result from './components/result.vue';

export const App = {
  question: 'This is a Tax Related Question',
  answerOptions: ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E']
}
</script>

<template>
  <header>
    <ProgressBar :progress="3"/>
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
