const enrolledCourses = [
  {
    id: 1,
    title: "JavaScript Basics",
    progress: 60,
    lastLessonId: "lesson-3"
  },
  {
    id: 2,
    title: "HTML & CSS",
    progress: 30,
    lastLessonId: "lesson-1"
  },
];

// Render the dashboard
function renderDashboard() {
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = "";

  enrolledCourses.forEach(course => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course");

    courseElement.innerHTML = `
      <h3>${course.title}</h3>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${course.progress}%"></div>
      </div>
      <p>${course.progress}% complete</p>
      <button onclick="continueCourse(${course.id})">Continue Learning</button>
    `;

    dashboard.appendChild(courseElement);
  });
}

// Simulate lesson completion
function completeLesson(courseId) {
  const course = enrolledCourses.find(c => c.id === courseId);
  if (course.progress < 100) {
    course.progress += 10; // simulate lesson progress
    course.progress = Math.min(course.progress, 100);
    course.lastLessonId = `lesson-${parseInt(course.progress / 10)}`;
    renderDashboard();
  }
}

// Continue from last lesson
function continueCourse(courseId) {
  const course = enrolledCourses.find(c => c.id === courseId);
  alert(`Continuing ${course.title} from ${course.lastLessonId}`);
  completeLesson(courseId);
}

// Initial render
renderDashboard();