workflow "Post On Discord" {
  on = "push"
  resolves = ["Actions for Discord"]
}

action "Actions for Discord" {
  uses = "Ilshidur/action-discord@master"
  args = "\"v1-extended: New changes have been pushed to master.\""
  secrets = ["DISCORD_WEBHOOK"]
}
