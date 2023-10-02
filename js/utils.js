function renderTaskTemplate(task) {
  return `
    <li data-task-id="${task.id}">
      <div class="card-container">
        <div class="bg-card">
          <img 
            src="${task.image_url}"
            class="bg-img"
          />
          <p>
            <span class="gray-text">BY</span> ${task.author}
            <span class="gray-text">IN</span> ${task.category}
          </p>
          <a href='./news.html?post_id=${task.id}' > <!-- Add the link here -->
            <p class="title-bg">
              ${task.title}
            </p>
          </a>
        </div>
      </div>
    </li>
  `;
}
