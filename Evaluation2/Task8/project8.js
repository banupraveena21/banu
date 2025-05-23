const resources = [
    { id: 1, title: "JavaScript Basics", type: "Course", description: "Learn core JS concepts." },
    { id: 2, title: "CSS Grid Tutorial", type: "Article", description: "Master layout with CSS Grid." },
    { id: 3, title: "React Intro Video", type: "Video", description: "Watch a quick start guide to React." }
  ];
  
  let bookmarks = [];
  
  const resourceList = document.getElementById("resourceList");
  const bookmarksList = document.getElementById("bookmarksList");
  
  // Render available resources
  function renderResources() {
    resourceList.innerHTML = "";
    resources.forEach(resource => {
      const div = document.createElement("div");
      div.className = "resource";
      div.innerHTML = `
        <strong>${resource.title}</strong> (${resource.type})<br>
        <p>${resource.description}</p>
        <button onclick="bookmarkResource(${resource.id})">Bookmark</button>
      `;
      resourceList.appendChild(div);
    });
  }
  
  // Render bookmarked resources
  function renderBookmarks() {
    bookmarksList.innerHTML = "";
    if (bookmarks.length === 0) {
      bookmarksList.innerHTML = "<p>No bookmarks yet.</p>";
      return;
    }
  
    bookmarks.forEach(resource => {
      const div = document.createElement("div");
      div.className = "bookmark";
      div.innerHTML = `
        <strong>${resource.title}</strong> (${resource.type})<br>
        <p>${resource.description}</p>
        <button onclick="removeBookmark(${resource.id})">Remove Bookmark</button>
      `;
      bookmarksList.appendChild(div);
    });
  }
  
  // Bookmark a resource
  function bookmarkResource(resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    if (!bookmarks.find(b => b.id === resourceId)) {
      bookmarks.push(resource);
      renderBookmarks();
    }
  }
  
  // Remove a bookmark
  function removeBookmark(resourceId) {
    bookmarks = bookmarks.filter(b => b.id !== resourceId);
    renderBookmarks();
  }
  
  // Initial render
  renderResources();
  renderBookmarks();