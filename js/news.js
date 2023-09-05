const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("post_id");

console.log(id);

async function fetchAndDisplayPostDetails(postId) {
  const task = await fetchTask(postId);

  const titleElement = document.getElementById("title");
  titleElement.textContent = task.title;

  const contentElement = document.getElementById("content");
  contentElement.innerHTML = task.content;

  const imgUrlElement = document.getElementById("image_url");
  imgUrlElement.src = task.image_url;
}

fetchAndDisplayPostDetails(id);
