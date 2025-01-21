// localStorage function
document.addEventListener('DOMContentLoaded', function () {
  loadScoresFromLocalStorage(); 
});

// Event listener for form submission
document.getElementById('scoreForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const studentName = document.getElementById('studentName').value.trim();
  const studentId = document.getElementById('studentId').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const score = document.getElementById('score').value.trim();
  const grade = document.getElementById('grade').value;

  // Validation
  if (!studentName || !studentId || !subject || !score || !grade) {
    alert('Please fill all fields.');
    return;
  }

  // Add a new row to the table
  addRow(studentName, studentId, subject, score, grade);

  // Save scores to localStorage
  saveScoresToLocalStorage();

  // Reset form fields
  document.getElementById('scoreForm').reset();

  // Sort the table automatically (A-Z)
  sortStudentList('asc');
});

// Function to add a new row
function addRow(studentName, studentId, subject, score, grade) {
  const tableBody = document.getElementById('scoresList');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${studentName}</td>
    <td>${studentId}</td>
    <td>${subject}</td>
    <td>${score}</td>
    <td>${grade}</td>
    <td>
      <button class="btn-edit me-2">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn-trash">
        <i class="bi bi-trash"></i>
      </button>
    </td>
  `;

  tableBody.appendChild(row);
}

// Edit and delete buttons
document.getElementById('scoresList').addEventListener('click', function (e) {
  const button = e.target.closest('button');

  if (!button) return;

  const row = button.closest('tr');

  if (button.classList.contains('btn-edit')) {
    editRow(row);
  } else if (button.classList.contains('btn-trash')) {
    const confirmation = confirm('Are you sure you want to delete this record?');
    if (confirmation) {
      deleteRow(row);
      saveScoresToLocalStorage(); // Save updated list to localStorage
    }
  }
});

// Edit row function
function editRow(row) {
  const cells = row.querySelectorAll('td');

  // Populate the form fields with the current row data
  document.getElementById('studentName').value = cells[0].textContent.trim();
  document.getElementById('studentId').value = cells[1].textContent.trim();
  document.getElementById('subject').value = cells[2].textContent.trim();
  document.getElementById('score').value = cells[3].textContent.trim();
  document.getElementById('grade').value = cells[4].textContent.trim();

  // Remove the row after populating the form
  row.remove();

  // Save updated list to localStorage
  saveScoresToLocalStorage();
}

// Delete row function
function deleteRow(row) {
  row.remove();
}

// Sort the student list
function sortStudentList(order) {
  const rows = Array.from(document.querySelectorAll('#scoresList tr'));

  rows.sort((rowA, rowB) => {
    const nameA = rowA.cells[0].textContent.trim().toLowerCase();
    const nameB = rowB.cells[0].textContent.trim().toLowerCase();

    return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  const tableBody = document.getElementById('scoresList');
  rows.forEach(row => tableBody.appendChild(row));
}

// Sorting event listeners
document.getElementById('sortAZ').addEventListener('click', function () {
  sortStudentList('asc');
});

document.getElementById('sortZA').addEventListener('click', function () {
  sortStudentList('desc');
});

// Save scores to localStorage
function saveScoresToLocalStorage() {
  const rows = Array.from(document.querySelectorAll('#scoresList tr'));
  const scores = rows.map(row => {
    const cells = row.querySelectorAll('td');
    return {
      studentName: cells[0].textContent.trim(),
      studentId: cells[1].textContent.trim(),
      subject: cells[2].textContent.trim(),
      score: cells[3].textContent.trim(),
      grade: cells[4].textContent.trim(),
    };
  });
  localStorage.setItem('scoresList', JSON.stringify(scores));
}

// Load scores from localStorage
function loadScoresFromLocalStorage() {
  const storedScores = localStorage.getItem('scoresList');
  if (storedScores) {
    const scores = JSON.parse(storedScores);
    scores.forEach(score => addRow(score.studentName, score.studentId, score.subject, score.score, score.grade));
  }
}

// Search function
document.getElementById('searchBar').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const rows = document.querySelectorAll('#scoresList tr');

  rows.forEach(row => {
    const studentName = row.cells[0].textContent.trim().toLowerCase();
    const studentId = row.cells[1].textContent.trim().toLowerCase();
    if (studentName.includes(searchTerm) || studentId.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
