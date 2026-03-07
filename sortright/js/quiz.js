let qIndex   = 0;
let score    = 0;
let answered = false;

function loadQuestion() {
  const q = quizQuestions[qIndex];

  const emojiEl = document.getElementById('quizEmoji');
  emojiEl.textContent = q.emoji;
  emojiEl.style.animation = 'none';
  void emojiEl.offsetWidth;
  emojiEl.style.animation = 'iconBounce 0.5s ease';

  document.getElementById('quizHint').textContent     = q.hint;
  document.getElementById('progressText').textContent = `${qIndex + 1} / ${quizQuestions.length}`;
  document.getElementById('progressFill').style.width = `${(qIndex / quizQuestions.length) * 100}%`;

  const fb = document.getElementById('quizFeedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('nextBtn').classList.remove('show');
  document.querySelectorAll('.quiz-opt').forEach((b) => { b.className = 'quiz-opt'; });
  answered = false;
}

function answerQuiz(chosen, btn) {
  if (answered) return;
  answered = true;

  const q    = quizQuestions[qIndex];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((b) => b.classList.add('disabled'));

  const catOrder   = ['bio', 'rec', 'haz'];
  const chosenIdx  = catOrder.indexOf(chosen);
  const correctIdx = catOrder.indexOf(q.answer);
  Array.from(opts)[correctIdx].classList.add('correct');

  const fb = document.getElementById('quizFeedback');
  if (chosen === q.answer) {
    score++;
    fb.textContent = '✅ Correct! ' + q.explain;
    fb.className   = 'quiz-feedback show right';
  } else {
    Array.from(opts)[chosenIdx].classList.add('wrong');
    fb.textContent = '❌ ' + q.explain;
    fb.className   = 'quiz-feedback show wrong';
  }
  document.getElementById('nextBtn').classList.add('show');
}

function nextQuestion() {
  qIndex++;
  if (qIndex >= quizQuestions.length) {
    showScore();
  } else {
    loadQuestion();
  }
}

function showScore() {
  document.getElementById('quizActive').style.display = 'none';
  const scoreDiv = document.getElementById('quizScore');
  scoreDiv.style.display = 'flex';

  const pct   = score / quizQuestions.length;
  const emoji = pct >= 0.875 ? '🏆' : pct >= 0.625 ? '🌟' : pct >= 0.375 ? '🌱' : '💪';
  const msg   = pct >= 0.875 ? 'Waste Segregation Expert!'
              : pct >= 0.625 ? 'Great job! Keep learning.'
              : pct >= 0.375 ? 'Good start — keep exploring.'
              : 'Every expert starts somewhere!';

  document.getElementById('scoreEmoji').textContent = emoji;
  document.getElementById('scoreNum').textContent   = `${score}/${quizQuestions.length}`;
  document.getElementById('scoreMsg').textContent   = msg;
}

function restartQuiz() {
  qIndex = 0; score = 0;
  document.getElementById('quizActive').style.display = 'block';
  document.getElementById('quizScore').style.display  = 'none';
  loadQuestion();
}