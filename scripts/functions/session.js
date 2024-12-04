async function login() {
  const baseApiUrl = document.querySelector("[name=baseApiUrl]").value
  const apiKey = document.querySelector("[name=apiKey]").value

  window.LwdOneAPI = new SupabaseAPI(baseApiUrl, apiKey)
}
async function logout() {
  localStorage.clear();
  location.reload();
}
