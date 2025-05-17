//Task3:Use Fetch API to submit a form to an API. //
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('https://api.example.com/submit', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Handle success - update UI, show message, etc.
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error - show error message, retry, etc.
  });
});

//Task4:Fetch real-time weather data using an API.//
const apiKey = ' 5e13c94899313ebf6e40fd160ad65b61'; // Replace with your actual API key
const city = 'india'; // Replace with the desired city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
 .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process and display the weather data
    console.log(data);
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
  
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Description: ${description}`);
    console.log(`Humidity: ${humidity}%`);
  })
  .catch(error => {
    console.error('There was a problem fetching the weather data:', error);
  });

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

