import * as values from '@/utils/correct.js';
let score = 0;
let progress = 1

export function next(answer) {
    let { question, answers, correct } = values.quiz[progress - 1]
    if (answer === correct) {
        score++;
    } else {
        return
    }
        progress++;
}