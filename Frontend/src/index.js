let s = function(selector) {
  return document.querySelector(selector)}

let c = function(tagName) {
  return document.createElement(tagName)}


// HTML Elements
let workouts = []
let exercises = []
let stats = []

current_workout = null

// HTML Elements
let workoutContainer = s("#workout_collection")
let workout_input = s("#workout_input")
let workout_submit = s("#workout_submit")
let delete_workout = s("#workout_delete")


// Render
function render(){
  workoutContainer.innerHTML = ''
  workouts.forEach(workout => {
    let workoutCard = c('div')
    let addButton = c('button')
    let workoutName = c('h2')
    workoutCard.setAttribute("class", "card")
    addButton.setAttribute("class", "add")
    addButton.innerText = "add exercise!"
    workoutName.innerText = workout.name 
    workoutCard.append(addButton, workoutName)
  })
}


// Fetch
function fetchData() {
  fetch(`http://localhost:3000/api/v1/workouts`)
    .then(res => res.json())
    .then(res => (workouts = res))
    // .then(render);

  fetch(`http://localhost:3000/api/v1/exercises`)
  .then(res => res.json())
  .then(res => exercises = res)

  fetch(`http://localhost:3000/api/v1/stats`)
  .then(res => res.json())
  .then(res => stats = res)

}



fetchData()



