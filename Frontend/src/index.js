let s = function(selector) {
  return document.querySelector(selector);
};
let c = function(tagName) {
  return document.createElement(tagName);
};

let workoutListContainer = s("#workout_collection");
let workout_input = s("#workout_input");
let workout_submit = s("#workout_submit");
let delete_workout = s("#workout_delete");
let workouts = [];

function fetchWorkouts() {
  fetch("http://localhost:3000/api/v1/workouts")
    .then(res => res.json())
    .then(res => (workouts = res))
    .then(render);
}

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

// function renderWorkout() {
//   workoutList.innerText = "";

//     workouts.forEach(
//       workout => {
//         workoutList.innerText = workout_input.value;
//       }
//       // workout_input.value = "";
//       // workouts.forEach(workout => {
//       // let workout = c("li");
//       // });
//     );
//   });
// }
// render();
// renderWorkout();
fetchWorkouts();

// let s = function(selector) {
//     return document.querySelector(selector);
//   };
//   let c = function(tagName) {
//     return document.createElement(tagName);
//   };

//   let workoutListContainer = s("#workout_collection");
//   let workout_input = s("#workout_input");
//   let workout_submit = s("#workout_submit");
//   let delete_workout = s("#workout_delete");
//   let workouts = [];

//   function fetchWorkouts() {
//     fetch("http://localhost:3000/api/v1/workouts")
//       .then(res => res.json())
//       .then(res => (workouts = res))
//       .then(render);
//   }

//   function render() {
//     workouts.forEach(workout => {
//       let workoutItem = c("ol");
//       let delete_workout = c("button");
//       workoutItem.innerText = workout.name;
//       workoutItem.setAttribute("class", "card");
//       workoutItem.setAttribute("id", workoutItem.innerText);
//       workoutItem.setAttribute("style", "font-size: 25px");
//       workoutListContainer.append(workoutItem);
//       workoutItem.append(delete_workout);
//       delete_workout.innerText = "delete";
//       delete_workout.setAttribute("id", "delete_workout");
//     });

//     const renderWorkout = () => {
//       workout_submit.addEventListener("click", e => {
//         e.preventDefault();

//         let workoutItem = c("ol");
//         workoutItem.innerText = workout_input.value;
//         workoutListContainer.append(workoutItem);
//       });
//       //     fetch(`http://localhost:3000/workouts/${workouts.id}`, {
//       //       method: "POST",
//       //       headers: { "Content-Type": "application/json" },
//       //       body: JSON.stringify(workouts)
//       //     }).then(render);
//       //   }
//     };
//   }
//   // function renderWorkout() {
//   //   workoutList.innerText = "";

//   //     workouts.forEach(
//   //       workout => {
//   //         workoutList.innerText = workout_input.value;
//   //       }
//   //       // workout_input.value = "";
//   //       // workouts.forEach(workout => {
//   //       // let workout = c("li");
//   //       // });
//   //     );
//   //   });
//   // }
//   render();
//   renderWorkout();
//   fetchWorkouts();
