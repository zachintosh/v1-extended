let intervalLength = 1000 * 60 * 5;
let timeout = setTimeout(reloadPage, intervalLength)
document.addEventListener('click', resetTimeout)
document.addEventListener('mouseover', resetTimeout)
document.addEventListener('keydown', resetTimeout)

/**
 * Resets the timeout.
 */
function resetTimeout() {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(reloadPage, intervalLength)
}

/**
 * Reloads the page if the task modal is not open and
 * the currently focused item is not an input.
 */
function reloadPage() {
  if (!document.querySelector('.inline-asset-detail') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.nodeName)) {
    window.location.reload()
  }
}