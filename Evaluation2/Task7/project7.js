let posts = [];

const forum = document.getElementById("forum");

// Create a new post
function createPost() {
  const user = document.getElementById("username").value.trim();
  const text = document.getElementById("newPostText").value.trim();
  if (!user || !text) return alert("Please provide a name and content.");

  const newPost = {
    id: Date.now(),
    user,
    text,
    replies: [],
  };

  posts.push(newPost);
  document.getElementById("newPostText").value = "";
  renderForum();
}

// Render all posts
function renderForum() {
  forum.innerHTML = "";
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <strong>${post.user}</strong>: ${post.text}
      <button onclick="deletePost(${post.id})">Delete</button>
      <div>
        <textarea id="reply-${post.id}" rows="2" placeholder="Reply..."></textarea>
        <button onclick="addReply(${post.id})">Reply</button>
      </div>
      <div>${renderReplies(post.replies, post.id)}</div>
    `;
    forum.appendChild(div);
  });
}

// Render replies as HTML string
function renderReplies(replies, postId) {
  return replies.map((r, index) => `
    <div class="reply">
      <strong>${r.user}</strong>: ${r.text}
      <span class="upvote" onclick="upvoteReply(${postId}, ${index})">👍 ${r.upvotes}</span>
      <button onclick="deleteReply(${postId}, ${index})">Delete</button>
    </div>
  `).join("");
}

// Add reply
function addReply(postId) {
  const user = document.getElementById("username").value.trim();
  const text = document.getElementById(`reply-${postId}`).value.trim();
  if (!user || !text) return alert("Please provide a name and reply.");

  const reply = { user, text, upvotes: 0 };
  const post = posts.find(p => p.id === postId);
  post.replies.push(reply);
  renderForum();
}

// Upvote reply
function upvoteReply(postId, replyIndex) {
  const post = posts.find(p => p.id === postId);
  post.replies[replyIndex].upvotes++;
  renderForum();
}

// Delete post
function deletePost(postId) {
  posts = posts.filter(p => p.id !== postId);
  renderForum();
}

// Delete reply
function deleteReply(postId, replyIndex) {
  const post = posts.find(p => p.id === postId);
  post.replies.splice(replyIndex, 1);
  renderForum();
}

// Initial render
renderForum();