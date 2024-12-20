const mainContainerEl = document.querySelector('#mainContainer');
const resetBtn = document.querySelector('#resetBtn');

// Initial rendering
renderArtBoard(16, 16);

resetBtn.addEventListener('click', () => {
  const rows = prompt('Enter number of rows:');
  const cols = prompt('Enter number of columns:');

  if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
    alert('Invalid input! Rows and columns must be numbers greater than 0.');
    return;
  }

  renderArtBoard(Number(rows), Number(cols));
});

function renderArtBoard(rows, cols) {
  // Generate grid structure
  let gridHTML = '';
  for (let i = 0; i < rows; i++) {
    gridHTML += '<div class="row">';
    for (let j = 0; j < cols; j++) {
      gridHTML += '<div class="square"></div>';
    }
    gridHTML += '</div>';
  }

  // Update the container with new grid
  mainContainerEl.innerHTML = gridHTML;
}

// Add hover effect using event delegation
mainContainerEl.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.style.backgroundColor = 'red';
  }
});
