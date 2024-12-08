global.onload = onLoad()

async function onLoad() {
  if (!(await global.LwdOneSession.isValid())) return false;

  renderLwdOne()
}

async function renderLwdOne() {
  document.body.outerHTML = "<body></body>";
}