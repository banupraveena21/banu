const courses = [
    { id: 1, title: "Intro to Programming", description: "Learn the basics of programming." },
    { id: 2, title: "Data Structures", description: "Explore arrays, stacks, queues, and more." },
    { id: 3, title: "Web Development", description: "Build modern websites using HTML, CSS, and JavaScript." }
  ];
  
  // Keep track of enrolled course IDs
  let enrolledCourseIds = [];
  
  const availableCoursesDiv = document.getElementById("availableCourses");
  const enrolledCoursesDiv = document.getElementById("enrolledCourses");
  const confirmationDiv = document.getElementById("confirmation");
  
  // Render available courses
  function renderAvailableCourses() {
    availableCoursesDiv.innerHTML = "";
    courses.forEach(course => {
      if (!enrolledCourseIds.includes(course.id)) {
        const div = document.createElement("div");
        div.className = "course";
        div.innerHTML = `
          <strong>${course.title}</strong><br>
          <p>${course.description}</p>
          <button onclick="enrollCourse(${course.id})">Enroll</button>
        `;
        availableCoursesDiv.appendChild(div);
      }
    });
  }
  
  // Render enrolled courses
  function renderEnrolledCourses() {
    enrolledCoursesDiv.innerHTML = "";
    const enrolled = courses.filter(c => enrolledCourseIds.includes(c.id));
    enrolled.forEach(course => {
      const div = document.createElement("div");
      div.className = "enrolled-course";
      div.innerHTML = `<strong>${course.title}</strong><br><p>${course.description}</p>`;
      enrolledCoursesDiv.appendChild(div);
    });
  }
  
  // Enroll in a course
  function enrollCourse(courseId) {
    if (!enrolledCourseIds.includes(courseId)) {
      enrolledCourseIds.push(courseId);
      showConfirmation("Enrolled successfully in course ID " + courseId);
      renderAvailableCourses();
      renderEnrolledCourses();
    }
  }
  
  // Show confirmation message
  function showConfirmation(message) {
    confirmationDiv.textContent = message;
    setTimeout(() => confirmationDiv.textContent = "", 3000);
  }
  
  // Initial render
  renderAvailableCourses();
  renderEnrolledCourses();