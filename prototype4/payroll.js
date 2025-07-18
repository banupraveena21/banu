
document.getElementById("payrollform").addEventListener("submit",function(e) {
    e.preventDefault();

    const formData={
    name: document.getElementById("name").value,
    date: document.getElementById("date").value,
    workingDays: document.getElementById("workingDays").value,
    additions: document.getElementById("additions").value,
    role: document.getElementById("role").value,
    basicSalary: document.getElementById("basicSalary").value,
    presentDays: document.getElementById("presentDays").value,
    deductions: document.getElementById("deductions").value,
    employeeId: document.getElementById("employeeId").value,
    totalSalary: document.getElementById("totalSalary").value,
    leaveDays: document.getElementById("leaveDays").value
  };

  localStorage.setItem("payrollData", JSON.stringify(formData))
  window.location.href = "slip.html"
});
