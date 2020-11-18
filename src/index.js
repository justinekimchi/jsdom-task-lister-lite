document.addEventListener("DOMContentLoaded", () => {
    const handleForm = () => {
        //Get the form
        const taskForm = document.querySelector("#create-task-form");
        //Listen for an event => Submission

        taskForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const taskInput = event.target.querySelector(
                "#new-task-description"
            );
            console.log(taskInput.value);
            //List task
            //create list
            const taskLi = document.createElement("li");
            //set the content for that li
            taskLi.innerText = taskInput.value;

            const taskUL = document.querySelector("#tasks");
            //push li tag into the ul tag with append
            taskUL.append(taskLi);

            event.target.reset();
        });
    };
    handleForm();
});

// document.addEventListener("DOMContentLoaded", () => {
//     // your code here
//     const todoList = document.querySelector("#tasks");
//     const submitButton = document.querySelector("[type='submit']");
//     submitButton.addEventListener("click", function (event) {
//         const newTask = document.createElement("li");
//         newTask.innerHTML = document.querySelector(
//             "#new-task-description"
//         ).value;
//         todoList.append(newTask);
//         event.preventDefault();
//     });
// });
