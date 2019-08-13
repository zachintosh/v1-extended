# v1-extended
A small chrome extension that makes a variety of small adjustments to VersionOne's taskboard page.

# Development


### Staying up-to-date

A MutationObserver is used to watch for changes on the taskboard. Each time something changes in the taskboard's subtree, such as to-do hours or task titles, it will dispatch an event on the document titled 'taskboard-change'. Scripts listen for this event so they can run again to keep things up-to-date.