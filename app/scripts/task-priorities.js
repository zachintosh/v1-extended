function buildTaskPriorities() {
  const taskCards = document.querySelectorAll('.status.row-cell .task-card');
  const withJira = Array.from(taskCards).filter(taskCard => /(TW|OFT)-\d{4,}/.test(taskCard.querySelector('.title').textContent))

  withJira.forEach(taskCard => {
    const title = taskCard.querySelector('.title')
    const owners = taskCard.querySelector('div.owners')
    const jiraID = /(TW|OFT)-\d{4,}/g.exec(title.textContent)[0]
    const textContent = title.textContent.trim()
    const jiraLink = document.createElement('a')
    let priority = ''

    if (!owners) return

    // If it has a priority, get the priority
    if (/P[123]/.test(textContent)) {
      priority = `P${textContent[1]}`
    }

    const priorityColorMap = {
      'P1': '#d50000',
      'P2': '#F57F17',
      'P3': '#00695C',
    }
    
    jiraLink.innerHTML = priority ? `<span class="${priority}">${priority}</span>  •  ${jiraID}` : jiraID
    jiraLink.style.marginRight = '5px'
    jiraLink.style.color = '#0052cc !important'
    jiraLink.style.padding = '3px 0'
    jiraLink.setAttribute('href', 'https://almtools.ldschurch.org/fhjira/browse/' + jiraID)
    jiraLink.setAttribute('target', '_blank')
    
    // Replace the JIRA ID and priority in the text content, since we don't need them anymore
    title.firstElementChild.textContent = textContent.replace(/(TW|OFT)-\d{4,}\s?(-|:)?/, '').replace(/P[123]\s?-?/, '')
    // Insert the new badge
    owners.insertBefore(jiraLink, owners.firstChild)

    if (jiraLink && jiraLink.parentElement && jiraLink.parentElement.parentElement) {
      jiraLink.parentElement.parentElement.style.borderLeft = `solid 4px ${priorityColorMap[priority]}`
    }
  })

}

// Fire on initial load
buildTaskPriorities()

function update() {
  setTimeout(() => {
    var checkExist = setInterval(function() {
      if (!document.querySelector('.refreshing')) {
          buildTaskPriorities()
          clearInterval(checkExist);
      }
    }, 100)
    setTimeout(() => clearInterval(checkExist), 5000)
  }, 300)
}

// Listens for changes to the team
document.querySelector('[_focuskey="Planning/TeamCommon/Filter/Team"]').addEventListener('change', update)
document.querySelector('[_focuskey="Planning/IterationCommon/Filter/Iteration"]').addEventListener('change', update)

document.addEventListener('taskboard-change', buildTaskPriorities)