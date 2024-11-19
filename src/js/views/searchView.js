class SearchView {
  _parentEl = document.querySelector('.search');

  getQuary() {
    const quary = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return quary;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addhandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
