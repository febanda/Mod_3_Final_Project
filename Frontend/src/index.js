<<<<<<< HEAD
// Utilities
=======
// HTML Elements
>>>>>>> d49e7195deff5f288539d6dfa2d2108f02dd09cb
let s = function(selector) {
  return document.querySelector(selector);
};
let c = function(tagName) {
  return document.createElement(tagName);
};

//HTML Variables
let workoutListContainer = s("#workout_collection");
let workout_input = s("#workout_input");
let workout_submit = s("#workout_submit");
let workouts = [];
let exercises = [];

<<<<<<< HEAD
=======
// Render
>>>>>>> d49e7195deff5f288539d6dfa2d2108f02dd09cb
function render() {
  workoutListContainer.innerText = "";

  workouts.forEach(workout => {
    let workoutItem = c("div");
    let delete_button = c("button");
    delete_button.innerText = "delete";
    delete_button.setAttribute("id", workout.id);

    let details_button = c("button");
    details_button.innerText = "details";
    details_button.setAttribute("id", workout.id);

    workoutItem.innerText = workout.name;
    workoutItem.setAttribute("class", "card");
    workoutItem.append(delete_button, details_button);

    workoutListContainer.append(workoutItem);

    details_button.addEventListener("click", () => {
      workoutDetails(workout);
    });

    delete_button.addEventListener("click", () => {
      deleteWorkout(workout);
    });
  });
}

// create workout
workout_submit.addEventListener("click", e => {
  e.preventDefault();
  workoutListContainer.innerText = "";

  fetch(`http://localhost:3000/api/v1/workouts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: workout_input.value })
  })
    .then(fetchWorkouts)
    .then((workout_input.value = ""));
});

// delete workout function
function deleteWorkout(workout) {
  fetch(`http://localhost:3000/api/v1/workouts/${workout.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }).then(fetchWorkouts);
}

function workoutDetails(workout) {
  let data = exercises.filter(exercise => exercise.workout_id == workout.id);

  // let results = Object.entries(data).map(([key, value]) => ({ [key]: value })); WHAT IS THIS????
  let workout_div = c("div");

  data.forEach(function(object) {
    workout_div.append(object.name);
  });

  // results.forEach((element, index, array));

  // let nameresults = c("ol");
  // nameresults.innerText = results.map(element => element.category);

  // workout_div.append(nameresults);
  workoutListContainer.append(workout_div);
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
    .then(
      fetch("http://localhost:3000/api/v1/exercises")
        .then(res => res.json())
        .then(res => (exercises = res))
    )
    .then(render);
}
fetchWorkouts();
