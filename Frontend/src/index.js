<<<<<<< HEAD
// Utilities
=======
// HTML Elements
>>>>>>> a5fbb15bbc34f0610c4a181ddbd630974e6a888e
let s = function(selector) {
  return document.querySelector(selector)}

let c = function(tagName) {
  return document.createElement(tagName)}


<<<<<<< HEAD
  // HTML Elements
let workoutListContainer = s("#workout_collection");
let workout_input = s("#workout_input");
let workout_submit = s("#workout_submit");
let delete_workout = s("#workout_delete");
let workouts = []
let stats = []
let exercises = []

// Render
=======
//HTML Variables
let workoutListContainer = s("#workout_collection");
let workout_input = s("#workout_input");
let workout_submit = s("#workout_submit");
let workouts = [];

>>>>>>> a5fbb15bbc34f0610c4a181ddbd630974e6a888e
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

    delete_workout.addEventListener("click", () => {
      deleteWorkout(workout);
    });
  });
}

<<<<<<< HEAD


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
=======
// create workout
workout_submit.addEventListener("click", e => {
  e.preventDefault();
  workoutListContainer.innerText = "";

  fetch(`http://localhost:3000/api/v1/workouts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: workout_input.value })
  }).then(fetchWorkouts);
});

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
    .then(
      fetch("http://localhost:3000/api/v1/exercises")
        .then(res => res.json())
        .then(res => (exercises = res))
    )
    .then(render);
}

fetchWorkouts();
>>>>>>> a5fbb15bbc34f0610c4a181ddbd630974e6a888e
