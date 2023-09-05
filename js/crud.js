const BASE_URL = "http://127.0.0.1:8000/api/posts/";
const tasklist = document.getElementById("tasksList");

// Fetch and populate categories
async function fetchCategories() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/category/", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    const categories = await response.json();

    const categorySelect = document.getElementById("category");
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id; // Use category ID as the option value
      option.textContent = category.name; // Use category name as the option text
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function createTask(task) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchTasks() {
  const response = await fetch(BASE_URL, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });

  const tasks = await response.json();
  let tasksListRenderString = "";
  for (let task of tasks) {
    tasksListRenderString = tasksListRenderString + renderTaskTemplate(task);
  }

  tasklist.innerHTML = tasksListRenderString;
}

async function fetchTask(task_id) {
  const response = await fetch(`${BASE_URL}${task_id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });

  const task = await response.json();
  return task;
}
