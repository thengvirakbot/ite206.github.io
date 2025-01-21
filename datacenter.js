// localStorage function
function loadNamesFromLocalStorage() {
  const storedData = localStorage.getItem('namesList');
  if (storedData) {
    const names = JSON.parse(storedData);
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = ''; 

    names.forEach((student) => {
      const formattedDob = formatDateToDDMMYYYY(student.dob);
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${student.lastName}</td>
        <td>${student.firstName}</td>
        <td>${student.gender}</td>
        <td>${formattedDob}</td>
        <td>${student.year}</td>
        <td>${student.term}</td>
        <td>${student.major}</td>
        <td>${student.scholarship}</td>
        <td>${student.studentID}</td>
        <td>
          <i class="bi bi-pencil-square edit-icon"></i>
          <i class="bi bi-trash trash-icon"></i>
        </td>
      `;
      namesList.appendChild(newRow);
    });
  }
}

// Save data to localStorage
function saveNamesToLocalStorage() {
  const rows = Array.from(document.querySelectorAll('#namesList tr'));
  const students = rows.map((row) => {
    const studentCells = row.querySelectorAll('td');
    const isoDob = new Date(studentCells[3].textContent.split('/').reverse().join('-')).toISOString().split('T')[0]; // Convert dd/mm/yyyy to iso date format
    return {
      lastName: studentCells[0].textContent.trim(),
      firstName: studentCells[1].textContent.trim(),
      gender: studentCells[2].textContent,
      dob: isoDob, // Store in ISO format for consistency
      year: studentCells[4].textContent,
      term: studentCells[5].textContent,
      major: studentCells[6].textContent.trim(),
      scholarship: studentCells[7].textContent,
      studentID: studentCells[8].textContent.trim(),
    };
  });
  localStorage.setItem('namesList', JSON.stringify(students));
}

// Add new student to the list
document.getElementById('addNameForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Input data
  const lastName = document.getElementById('lastName').value.trim();
  const firstName = document.getElementById('firstName').value.trim();
  const gender = document.getElementById('gender').value;
  const dob = document.getElementById('dob').value; 
  const formattedDob = formatDateToDDMMYYYY(dob); 
  const year = document.getElementById('year').value;
  const term = document.getElementById('term').value;
  const major = document.getElementById('major').value;
  const scholarship = document.getElementById('scholarship').value;
  const studentID = document.getElementById('studentID').value.trim();

  // Add new row
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${lastName}</td>
    <td>${firstName}</td>
    <td>${gender}</td>
    <td>${formattedDob}</td>
    <td>${year}</td>
    <td>${term}</td>
    <td>${major}</td>
    <td>${scholarship}</td>
    <td>${studentID}</td>
    <td>
      <i class="bi bi-pencil-square edit-icon"></i>
      <i class="bi bi-trash trash-icon"></i>
    </td>
  `;
  document.getElementById('namesList').appendChild(newRow);

  // Save to localStorage
  saveNamesToLocalStorage();

  // Reset form
  this.reset();
});

// Search function
document.getElementById('searchBar').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const rows = document.querySelectorAll('#namesList tr');

  rows.forEach(row => {
    const lastName = row.querySelector('td:nth-child(1)').textContent.trim().toLowerCase();
    const firstName = row.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();
    if (lastName.includes(searchTerm) || firstName.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

// Sort button function
document.getElementById('sortAZ').addEventListener('click', function () {
  const rows = Array.from(document.querySelectorAll('#namesList tr'));
  rows.sort((rowA, rowB) => {
    const lastNameA = rowA.querySelector('td').textContent.trim();
    const lastNameB = rowB.querySelector('td').textContent.trim();
    return lastNameA.localeCompare(lastNameB); // Sort A-Z
  });
  rows.forEach(row => document.getElementById('namesList').appendChild(row));

  // Save sorted list to localStorage
  saveNamesToLocalStorage();
});

document.getElementById('sortZA').addEventListener('click', function () {
  const rows = Array.from(document.querySelectorAll('#namesList tr'));
  rows.sort((rowA, rowB) => {
    const lastNameA = rowA.querySelector('td').textContent.trim();
    const lastNameB = rowB.querySelector('td').textContent.trim();
    return lastNameB.localeCompare(lastNameA); // Sort Z-A
  });
  rows.forEach(row => document.getElementById('namesList').appendChild(row));

  // Save sorted list to localStorage
  saveNamesToLocalStorage();
});

// Delete function
document.getElementById('namesList').addEventListener('click', function (event) {
  if (event.target.classList.contains('trash-icon')) {
    event.target.closest('tr').remove();
    saveNamesToLocalStorage(); // Save changes to localStorage
  }
});

// Edit function
document.getElementById('namesList').addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-icon')) {
    const row = event.target.closest('tr');
    const studentCells = row.querySelectorAll('td');

    // Fill the form with the row's data
    document.getElementById('lastName').value = studentCells[0].textContent.trim();
    document.getElementById('firstName').value = studentCells[1].textContent.trim();
    document.getElementById('gender').value = studentCells[2].textContent;
    document.getElementById('dob').value = studentCells[3].textContent.split('/').reverse().join('-'); // Convert dd/mm/yyyy to yyyy-mm-dd format for the date input
    document.getElementById('year').value = studentCells[4].textContent;
    document.getElementById('term').value = studentCells[5].textContent;
    document.getElementById('major').value = studentCells[6].textContent.trim();
    document.getElementById('scholarship').value = studentCells[7].textContent;
    document.getElementById('studentID').value = studentCells[8].textContent.trim();

    // Remove the row
    row.remove();

    // Save changes to localStorage
    saveNamesToLocalStorage();
  }
});

// Load names from localStorage 
document.addEventListener('DOMContentLoaded', loadNamesFromLocalStorage);

// Date function
function formatDateToDDMMYYYY(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}