function saveSearches(searches) {
  localStorage.setItem('searches', JSON.stringify(searches));
}
function loadSearches() {
  return JSON.parse(localStorage.getItem('searches'));
}

export { saveSearches, loadSearches };
