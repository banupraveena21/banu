const assignments = [];

const dashboard = document.getElementById("assignmentsDashboard");

function submitAssignment() {
  const text = document.getElementById("assignmentText").value.trim();
  const file = document.getElementById("fileName").value.trim();

  if (text === "" && file === "") {
    alert("Please enter text or attach a file.");
    return;
  }

  const assignment = {
    id: Date.now(),
    content: text,
    file: file || null,
    grade: null,
    feedback: "",
  };

  assignments.push(assignment);
  document.getElementById("assignmentText").value = "";
  document.getElementById("fileName").value = "";
  renderDashboard();
}

function renderDashboard() {
  dashboard.innerHTML = "";
  assignments.forEach(a => {
    const div = document.createElement("div");
    div.className = "assignment";

    div.innerHTML = `
      <strong>Submission ID: ${a.id}</strong><br>
      ${a.content ? `<p>Text: ${a.content}</p>` : ""}
      ${a.file ? `<p>Attached File: ${a.file}</p>` : ""}
      ${a.grade !== null ? `<p>Grade: <strong>${a.grade}</strong></p>
                            <p class="feedback">Feedback: ${a.feedback}</p>` 
                          : gradingFormHTML(a.id)}
    `;

    dashboard.appendChild(div);
  });
}

function gradingFormHTML(id) {
  return `
    <div class="teacher-section">
      <label>Grade:</label>
      <input type="text" id="grade-${id}" placeholder="A, B, 95%" />
      <br>
      <label>Feedback:</label>
      <input type="text" id="feedback-${id}" placeholder="Good job, needs work, etc." />
      <br>
      <button onclick="gradeAssignment(${id})">Submit Grade</button>
    </div>
  `;
}

function gradeAssignment(id) {
  const gradeInput = document.getElementById(`grade-${id}`);
  const feedbackInput = document.getElementById(`feedback-${id}`);
  const grade = gradeInput.value.trim();
  const feedback = feedbackInput.value.trim();

  const assignment = assignments.find(a => a.id === id);
  if (assignment) {
    assignment.grade = grade;
    assignment.feedback = feedback;
    renderDashboard();
  }
}

// Initial render
renderDashboard();