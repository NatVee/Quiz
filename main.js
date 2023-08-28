const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];


// Elements 
const headerContainer = document.querySelector('.quiz-header')
const listContainer = document.querySelector('.quiz-list')
const submitBtn = document.querySelector('.quiz-submit')


// Variables
let score = 0
let questionIndex = 0


// Main 
clearPage()
showQuestion()
submitBtn.onclick = checkAnswer








// Functions
function clearPage(){
	headerContainer.innerHTML = ''
	listContainer.innerHTML = ''
}

function showQuestion(){
	headerContainer.innerHTML = `<h2 class="title">${questions[questionIndex].question}</h2>`
	for (item of questions[questionIndex].answers.entries()){
		listContainer.insertAdjacentHTML('beforeend', `
			<li>
				<label>
					<input type="radio" value="${item[0] + 1}" class="answer" name="answer" />
					<span>${item[1]}</span>
				</label>
			</li>`)
	}


}

function checkAnswer(){
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
	if (!checkedRadio){
		submitBtn.blur()
		return
	}
	if (checkedRadio.value == questions[questionIndex].correct){
		score++
	}
	if (questionIndex != questions.length - 1){
		questionIndex++
		clearPage()
		showQuestion()
	}else{
		clearPage()
		questionIndex = 0
		showResult()
	}
}

function showResult(){
	let message, title
	if (score == questions.length){
		title = 'Поздравляем!'
		message = 'Вы ответили правильно на все вопросы!'
	} else if (score / questions.length >= 0.5){
		title = 'Неплохой результат'
		message = 'Вы ответили более чем на половину вопросов'
	} else {
		title = 'Стоит постараться!'
		message = 'Вы ответили менее чем на половину вопросов'
	}
	headerContainer.innerHTML = `
		<h2 class="title">${title}</h2>
		<h3 class="summary">${message}</h3>
		<p class="result">${score} из ${questions.length}</p>`
		submitBtn.blur()
	submitBtn.innerText = 'Начать заново'
	submitBtn.onclick = () => history.go()
	
}