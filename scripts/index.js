global.onload = onLoad()

async function onLoad() {
  global.LwdOneSession = createSession()

  if (!(await global.LwdOneSession.login())) return false;

  renderLwdOne()
}

async function renderLwdOne() {
  document.body.outerHTML = "<body></body>";
}