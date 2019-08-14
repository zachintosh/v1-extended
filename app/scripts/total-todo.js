
function calculateTotalTodo() {
  const todoElements = document.querySelectorAll('td.summary dd.value')
  const total = Array.from(todoElements).reduce((acc, el) => acc + +el.textContent || 0, 0)
  document.querySelector('.taskboard:not(.sticky-header) .header .summary').textContent = `Summary (${total})`
}

calculateTotalTodo() // initial run

document.addEventListener('taskboard-change', calculateTotalTodo)