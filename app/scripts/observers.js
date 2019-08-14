// Observe mutations on the taskboard so we can rebuild priorities, since they get removed
const config = { childList: true, subtree: true }
const observer = new MutationObserver((mutationsList, observer) => {
  if (Array.from(mutationsList).some(mutation => mutation.type === 'childList')) {
    document.dispatchEvent(new CustomEvent('taskboard-change'))
  }
});
const taskboard = document.querySelector('.main-content-wrapper')
observer.observe(taskboard, config)