<template>
  <div class="quiz">
    <Question :questionText="question" />
    <Answers :options="answerOptions" />    
  </div>  
</template>

<script>
import Question from './components/question.vue';
import Answers from './components/answers.vue';
import Result from './components/result.vue';

export default {
  components: {
    Question,
    Answers,
    Result
  },
  data() {
    return {
      question: 'This is a Tax Related Question',
      answerOptions: ['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E']
    };
  }
};

</script>

<style>


</style>