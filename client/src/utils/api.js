class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }
}

export default Api;
