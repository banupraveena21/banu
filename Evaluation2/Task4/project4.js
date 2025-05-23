// Sample resource data
const resources = [
    {
      title: "Intro to Algebra",
      description: "A beginner's guide to basic algebra concepts.",
      type: "Article",
      category: "Math"
    },
    {
      title: "JavaScript Functions Explained",
      description: "A video tutorial on how functions work in JS.",
      type: "Video",
      category: "Programming"
    },
    {
      title: "Periodic Table Quiz",
      description: "Test your knowledge of elements.",
      type: "Quiz",
      category: "Science"
    },
    {
      title: "Newton's Laws of Motion",
      description: "Understand the 3 basic laws of motion.",
      type: "Article",
      category: "Science"
    },
  ];
  
  // DOM Elements
  const searchBar = document.getElementById("searchBar");
  const filterType = document.getElementById("filterType");
  const filterCategory = document.getElementById("filterCategory");
  const resultsDiv = document.getElementById("results");
  
  // Render filtered results
  function renderResults(filteredResources) {
    resultsDiv.innerHTML = "";
    if (filteredResources.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    filteredResources.forEach(resource => {
      const div = document.createElement("div");
      div.classList.add("result");
      div.innerHTML = `
        <div class="title">${resource.title}</div>
        <div class="description">${resource.description}</div>
        <small>Type: ${resource.type}, Category: ${resource.category}</small>
      `;
      resultsDiv.appendChild(div);
    });
  }
  
  // Filter logic
  function filterResources() {
    const keyword = searchBar.value.toLowerCase();
    const type = filterType.value;
    const category = filterCategory.value;
  
    const filtered = resources.filter(res => {
      const matchesKeyword =
        res.title.toLowerCase().includes(keyword) ||
        res.description.toLowerCase().includes(keyword);
  
      const matchesType = type ? res.type === type : true;
      const matchesCategory = category ? res.category === category : true;
  
      return matchesKeyword && matchesType && matchesCategory;
    });
  
    renderResults(filtered);
  }
  
  // Event listeners
  searchBar.addEventListener("input", filterResources);
  filterType.addEventListener("change", filterResources);
  filterCategory.addEventListener("change", filterResources);
  
  // Initial display
  renderResults(resources);