 //Task5:Fetch and display GitHub user profiles.//
 async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${banupraveena21}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
  }
  
  //Task6: Create an image gallery using the Fetch API. //
  const imageGallery = document.getElementById('imageGallery');
  const imageURLs = [
    'https://www.pexels.com/photo/smiling-girl-holding-gray-rabbit-1462636/',
    'https://www.pexels.com/photo/gold-frame-black-lens-eyeglasses-700728/',
    'https://www.pexels.com/photo/flat-lay-of-letter-shaped-cookies-5898233/',
  ];

  async function fetchAndDisplayImages() {
    for (const url of imageURLs) {
      try {
        const response = await fetch('https://www.pexels.com/photo');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob(url);
        const imgUrl = URL.createObjectURL(blob);
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = 'Image';
        imageGallery.appendChild(imgElement);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  }

  fetchAndDisplayImages();

  //Task7:Implement pagination using Fetch API.//
  async function fetchData(page = 1, limit = 10) {
    const apiUrl = `https://api.example.com/items?_page=${page}&_limit=${limit}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const totalCount = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / limit);
      return { data, totalPages };
    } catch (error) {
      console.error("Fetching error:", error);
      return { data: [], totalPages: 0 };
    }
  }
  
  async function displayData(page) {
    const { data, totalPages } = await fetchData(page);
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.name;
      dataContainer.appendChild(itemElement);
    });
    displayPaginationControls(page, totalPages);
  }
  
  function displayPaginationControls(currentPage, totalPages) {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';
  
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
        displayData(i);
      });
      if (i === currentPage) {
        pageButton.disabled = true;
      }
      paginationContainer.appendChild(pageButton);
    }
  }
  
  let currentPage = 1;
  displayData(currentPage);

  //Task8: Use AJAX to fetch and display comments dynamically. //
  function loadComments() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'comments.json', true);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const comments = JSON.parse(xhr.responseText);
        displayComments(comments);
      } else {
        console.error('Request failed with status:', xhr.status);
      }
    };

    xhr.onerror = function() {
       console.error('Network error occurred');
    };

    xhr.send();
  }

  function displayComments(comments) {
    const container = document.getElementById('comments-container');
    container.innerHTML = ''; // Clear previous comments

    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.textContent = comment.text; // Assuming each comment object has a 'text' property
      container.appendChild(commentElement);
    });
  }
  
  // Load comments when the page loads
  loadComments();

  //Task9: Fetch and display currency exchange rates.//
  //Task10: Load data from an API when a button is clicked.//
  const button = document.getElementById('myButton');
const dataContainer = document.getElementById('dataContainer');

button.addEventListener('click', () => {
  fetch('YOUR_API_ENDPOINT_HERE')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      dataContainer.textContent = 'Failed to load data.';
    });
});

function displayData(data) {
  dataContainer.textContent = JSON.stringify(data, null, 2);
}

//Task11:Handle API errors gracefully//
//Task12: Implement search functionality using Fetch API.//
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');
const apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your API endpoint

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        resultsContainer.innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`${apiUrl}?q=${searchTerm}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.textContent = 'Failed to fetch results.';
    }
});

function displayResults(results) {
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.textContent = 'No results found.';
        return;
    }
    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.name; // Adjust based on your data structure
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}