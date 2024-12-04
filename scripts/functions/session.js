async function login() {
  const baseApiUrl = document.querySelector("[name=baseApiUrl]").value
  const apiKey = document.querySelector("[name=apiKey]").value

  window.LwdOneApi = new SupabaseApi(baseApiUrl, apiKey)
}
async function logout() {
  localStorage.clear();
  location.reload();
}
