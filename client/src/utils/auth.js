import Api from "./api";

export default class Auth extends Api {
  register({ firstName, lastInitial, email, password }) {
    return fetch(`${this._baseUrl}/api/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ firstName, lastInitial, email, password }),
    })
      .then(this._checkResponse)
      .then((data) => {
        return this.signIn({ email: data.email, password: password });
      });
  }

  signIn({ email, password }) {
    return fetch(`${this._baseUrl}/api/signIn`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .then((data) => {
        this._saveToken(data.token);
        return this.getCurrentUser(data.token).then((user) => {
          return user;
        });
      });
  }

  getCurrentUser() {
    const token = localStorage.getItem("jwt");

    return fetch(`${this._baseUrl}/api/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((user) => {
        return user;
      });
  }

  _saveToken(token) {
    if (token) {
      localStorage.setItem("jwt", token);
    }
  }
  getToken() {
    return localStorage.getItem("jwt");
  }
  clearToken() {
    return localStorage.removeItem("jwt");
  }
}
