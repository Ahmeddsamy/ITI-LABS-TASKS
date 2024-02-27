if (!window.indexedDB) {
  alert("your browser not support indexedDB");
} else {
  alert("your browser support indexedDB");
}

const openRequest = indexedDB.open("todoDB", 1);

openRequest.onupgradeneeded = function (e) {
  let db = e.target.result;
  let store = db.createObjectStore("tasks", {
    keyPath: "id",
    autoIncrement: true,
  });
  store.createIndex("task", "task", { unique: false });
};

openRequest.onerror = function (e) {
  console.error("Error", e.target.error.name);
};

openRequest.onsuccess = function (e) {
  console.log("DB opened");
  db = e.target.result;
  readTasks();
};

let db;
document.getElementById("add-task").addEventListener("click", function () {
  let taskInput = document.getElementById("task-input");
  let task = taskInput.value;
  let transaction = db.transaction(["tasks"], "readwrite");
  let store = transaction.objectStore("tasks");
  let item = {
    task: task,
    created: new Date(),
  };
  store.add(item);

  transaction.oncomplete = function () {
    console.log("Task added");
    taskInput.value = "";
    readTasks();
  };
});
function readTasks() {
  let objectStore = db.transaction("tasks").objectStore("tasks");
  document.getElementById("task-list").innerHTML = "";

  objectStore.openCursor().onsuccess = function (event) {
    let cursor = event.target.result;
    if (cursor) {
      let tr = document.createElement("tr");
      tr.innerHTML = `<th scope="row">${cursor.key}</th>
                          <td>${cursor.value.task}</td>
                          <td>
                              <button class="btn btn-primary edit-task" data-id="${cursor.key}">Edit</button>
                              <button class="btn btn-danger delete-task" data-id="${cursor.key}">Delete</button>
                          </td>`;
      document.getElementById("task-list").appendChild(tr);
      document.querySelectorAll(".edit-task").forEach((button) => {
        button.onclick = function () {
          editTask(this.getAttribute("data-id"));
        };
      });

      document.querySelectorAll(".delete-task").forEach((button) => {
        button.onclick = function () {
          deleteTask(this.getAttribute("data-id"));
        };
      });

      cursor.continue();
    }
  };
}
function deleteTask(id) {
  id = parseInt(id);
  let transaction = db.transaction(["tasks"], "readwrite");
  let store = transaction.objectStore("tasks");
  store.delete(id);

  transaction.oncomplete = function () {
    console.log("Task deleted");
    readTasks();
  };
}
function editTask(id) {
  let transaction = db.transaction(["tasks"], "readonly");
  let store = transaction.objectStore("tasks");
  let request = store.get(parseInt(id));

  request.onsuccess = function () {
    let task = request.result.task;
    let newTask = prompt("Edit Task", task);
    if (newTask) {
      task = newTask;
      updateTask(id, task);
    }
  };
}
function updateTask(id, task) {
  let transaction = db.transaction(["tasks"], "readwrite");
  let store = transaction.objectStore("tasks");
  let request = store.get(parseInt(id));

  request.onsuccess = function () {
    let data = request.result;
    data.task = task;
    let updateRequest = store.put(data);

    updateRequest.onsuccess = function () {
      readTasks();
    };
  };
}
