// Utilities
let s = function(selector) {
  return document.querySelector(selector)}

let c = function(tagName) {
  return document.createElement(tagName)}


  // HTML Elements
let workoutListContainer = s("#workout_collection");
let workout_input = s("#workout_input");
let workout_submit = s("#workout_submit");
let delete_workout = s("#workout_delete");
let workouts = []
let stats = []
let exercises = []

// Render
function render() {
  workouts.forEach(workout => {
    let workoutItem = c("ol");
    let delete_workout = c("button");
    workoutItem.innerText = workout.name;
    workoutItem.setAttribute("class", "card");
    workoutItem.setAttribute("id", workoutItem.innerText);
    workoutItem.setAttribute("style", "font-size: 25px");
    workoutListContainer.append(workoutItem);
    workoutItem.append(delete_workout);
    delete_workout.innerText = "delete";
  });

  workout_submit.addEventListener("click", e => {
    e.preventDefault();
    let workoutItem = c("ol");
    workoutItem.innerText = workout_input.value;
    workoutListContainer.append(workoutItem);
  });
}



// Fetch
function fetchWorkouts() {
  fetch("http://localhost:3000/api/v1/workouts")
      .then(res => res.json())
      .then(res => (workouts = res))
      .then(
        fetch("http://localhost:3000/api/v1/stats")
          .then(res => res.json())
          .then(res => (stats = res))
    )
    .then(fetch("http://localhost:3000/api/v1/exercises")
      .then(res => res.json())
      .then(res => (exercises = res))
        .then(render))
}
