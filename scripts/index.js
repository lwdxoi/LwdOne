global.onload = onLoad()

async function onLoad() {
  global.LwdOneSession = createSession()

  if (!(await global.LwdOneSession.isValid())) return false;

  renderLwdOne()
}

async function renderLwdOne() {
  document.body.outerHTML = "<body></body>";
}