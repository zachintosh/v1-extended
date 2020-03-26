const selectors = [
  '.top-bar-nav',
  '.top-bar-actions',
  '.sidebar',
  '.titlebar .popover-container',
  '.actions.config-btn',
  '.filters-and-reports',
  '.titlebar',
  '.filters.filter-by-anything',
  '#top-bar',
]

const selectorDisplayValues = selectors.reduce((acc, selector) => {
  acc[selector] = getComputedStyle(document.querySelector(selector)).display
  return acc
}, {})

function setSimpleMode(enabled) {
  selectors.forEach(selector => {
    try {
      document.querySelector(selector).style.display = enabled ? 'none' : selectorDisplayValues[selector]
      document.querySelectorAll('td.summary').forEach(td => td.style.display = enabled ? 'none' : 'table-cell')
    } catch (e) {
      console.error(e)
    }
  })

  document.querySelector('#page-container.has-sidebar .main-content-wrapper').style.width = enabled ? '100%' : 'calc(100% - 42px)'
}

let isEnabled = false
const enableButton = document.createElement('div')
enableButton.classList.add('enabledButton')

enableButton.addEventListener('click', () => {
  setSimpleMode(!isEnabled)
  isEnabled = !isEnabled
})

document.body.appendChild(enableButton)