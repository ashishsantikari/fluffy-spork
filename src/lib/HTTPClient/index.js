export class HTTPClientError extends Error {
  constructor(status, message, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPClientError);
    }

    this.name = "HTTPClientError";
    this.status = status;
    this.message = message;
  }

  toString() {
    return `${this.status}: ${this.message}`;
  }
}

export class HTTPClient {
  constructor() {
    this._headers = new Map();
    this._defaultHeaders();
  }

  _defaultHeaders() {
    this._headers.set("Content-Type", "application/json");
    this._headers.set("Accept", "application/vnd.github.v3+json");
  }

  _errorHandler(response) {
    const { status, statusText: message } = response;
    let error;
    switch (status) {
      case 403:
        error = new HTTPClientError(status, message);
        break;
      default:
        error = new HTTPClientError(
          status,
          "Something's broken on our end. Please contact a human for help"
        );
    }
    throw error;
  }

  checkForError = (response) => {
    if (response.ok) {
      return response;
    }
    this._errorHandler(response);
  };

  async _call(url, options) {
    return await fetch(url, options)
      .then(this.checkForError)
      .then((r) => r.json())
      .catch((err) => {
        return err;
      });
  }

  get(url, headers = {}) {
    const reqHeaders = new Headers();

    this._headers.forEach((value, key) => {
      reqHeaders.set(key, value);
    });

    if (headers && typeof headers === "object") {
      Object.entries(headers).forEach(([key, value]) => {
        reqHeaders.set(key, value);
      });
    }
    const options = {
      method: "GET",
      headers: reqHeaders,
    };
    return this._call(url, options);
  }
}
