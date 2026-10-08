---

sidebar_position: 1
---
# Error Handling

API requests can fail for several reasons, such as an invalid URL, an incorrect resource ID, or invalid query parameters.

Applications should check the HTTP status code before processing the response.

## HTTP status codes

| Status | Meaning               | Description                                |
| ------ | --------------------- | ------------------------------------------ |
| `200`  | OK                    | The request was successful                 |
| `400`  | Bad Request           | The request contains invalid parameters    |
| `404`  | Not Found             | The requested resource could not be found  |
| `500`  | Internal Server Error | The server encountered an unexpected error |

## Successful request

A successful request returns HTTP `200`.

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?limit=3"
```

If the request succeeds, the API returns the requested data as JSON.

## Resource not found

If you request an artwork that does not exist, the API may return a `404` response.

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/999999999"
```

Applications should handle this response instead of assuming that the requested artwork exists.

## Invalid requests

A request can fail if it contains invalid parameters or an incorrectly formatted URL.

When handling API errors, check the HTTP status code and provide an appropriate message to the user.

## Recommended approach

A client application should:

1. Send the API request.
2. Check the HTTP status code.
3. Process the response if the request succeeds.
4. Handle errors when the request fails.
5. Display a useful message to the user.

Example logic:

```text
Request
   ↓
Check status code
   ↓
200? ── Yes → Process response
   │
   No
   ↓
Handle error
```

Good error handling makes applications more reliable and helps users understand what went wrong.
