# Project Setup Instructions

## Dependencies

You need to install the following:

- [Caddy](https://caddyserver.com/)
- [Ngrok](https://ngrok.com/)
- [Express.js](https://expressjs.com/)

## Changes Made

### Web Server

- **Changed:** `apache2` to `caddy`

### Application Server

- **Added:** `express` (configured in `server.js`)

## Configuration Instructions

### Update the Caddyfile

Ensure you modify the `Caddyfile` after running the TrackUrl.sh file to reflect the new configuration settings required for `caddy`.

---

### Example Caddyfile Configuration

```Caddyfile
URL_FROM_TERMINAL_AFTER_RUNNING_TrackUrl.sh {
    reverse_proxy localhost:8080
}
```
