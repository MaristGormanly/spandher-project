document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postTitle = document.getElementById("postTitle");
    const postBody = document.getElementById("postBody");
    const eventList = document.getElementById("eventList");
  
    postForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const newPost = {
        title: postTitle.value,
        body: postBody.value
      };
  
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
  
      if (res.ok) {
        postTitle.value = '';
        postBody.value = '';
        loadPosts(); // refresh
      } else {
        console.error('Post failed');
      }
    });
  
    async function loadPosts() {
      const res = await fetch('/api/posts');
      const posts = await res.json();
      eventList.innerHTML = '';
      posts.forEach(post => {
        const el = document.createElement("li");
        el.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p><small>${new Date(post.created_at).toLocaleString()}</small>`;
        eventList.appendChild(el);
      });
    }
  
    loadPosts();
  });
  