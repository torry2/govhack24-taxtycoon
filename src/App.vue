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
        <Answers :options="answerOptions" />
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
