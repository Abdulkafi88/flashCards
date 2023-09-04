const addCard = document.getElementById("show_card_box")
const saveCard = document.getElementById("save_card")
const closeCard = document.getElementById("close_card_box")
const deleteCard = document.getElementById("delete_cards")
const createCard = document.getElementById("create_card")
const question = document.getElementById("question")
const answer = document.getElementById("answer")
const FlahCard = document.getElementById("flashcards")

addCard.addEventListener("click", () => {
  createCard.style.display = "block"
})
closeCard.addEventListener("click", () => {
    createCard.style.display = "none"
})

saveCard.addEventListener("click", () => {
    deleteCard.addEventListener("click", () => {
        FlahCard.remove(newDiv)
    })
    const questionVale = question.value
  const answerValue = answer.value
 if (questionVale === "" && answerValue === "") {
   alert("please enter a question and answer")
   return ;
 }
  const newDiv = document.createElement("div")
  const iElement = document.createElement("i")
  const h2 = document.createElement("h2")
  const h3 = document.createElement("h3")
  h2.setAttribute(
    "style",
    "border-top:1px solid red; padding: 15px; margin-top:30px"
  )
  h3.setAttribute("style", "text-align: center; display: none; color: red;")
  h2.textContent = questionVale
  h3.textContent = answerValue
  iElement.classList.add("fa", "fa-minus")
  newDiv.classList.add("flashcard")
  newDiv.appendChild(iElement)
  newDiv.appendChild(h2)
  newDiv.appendChild(h3)
  FlahCard.appendChild(newDiv)
  newDiv.addEventListener("click", () => {
    h3.style.display = "block"
  })
  iElement.addEventListener("click", (e) => {
    e.stopPropagation()
    FlahCard.removeChild(newDiv)
    
  })
   
question.value = ''
answer.value = ''
 
 
})
