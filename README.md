# Project Setup Instructions

## Dependencies

You need to install the following:

- [Caddy](https://caddyserver.com/)
- [Ngrok](https://ngrok.com/)
- [Express.js](https://expressjs.com/)

### Install Dependencies

After installing the above tools, navigate to your project directory and run the following command to install project-specific dependencies:

- Using Yarn:

  ```bash
  yarn install
  ```

- Using npm:
  ```bash
  npm install
  ```

## Changes Made

### Web Server

- **Changed:** `apache2` to `caddy`

### Application Server

- **Added:** `express` (configured in `server.js`)

## Configuration Instructions

### Update the Caddyfile

Ensure you modify the `Caddyfile` to reflect the new configuration settings required for `caddy`.

---

### Example Caddyfile Configuration

```Caddyfile
URL_FROM_TERMINAL_AFTER_RUNNING_TrackUrl.sh {
    reverse_proxy localhost:8080
}
```
