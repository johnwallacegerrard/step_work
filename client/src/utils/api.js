class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  submitStepAnswers(stepNumber, answers) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/api/steps/${stepNumber}`, {
      method: "POST",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify(answers),
    }).then(this._checkResponse);
  }
}

export default Api;
