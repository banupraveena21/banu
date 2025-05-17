//Task2: Fetch posts from an API and display them in a list//
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postList = document.createElement('ul');

    data.forEach(post => {
      const postItem = document.createElement('li');
      postItem.textContent = post.title;
      postList.appendChild(postItem);
    });

    document.body.appendChild(postList);
  })
  .catch(error => console.error('Error fetching posts:', error));

//Task3:Use Fetch API to submit a form to an API. //

