---

sidebar_position: 3
---
# Understanding Responses

The Cleveland Museum of Art API returns data in JSON format.

When you request a collection endpoint such as `/artworks/`, the response contains metadata about the request and an array of matching records.

## Example request

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=3"
```

This request searches the collection for artworks matching `monet` and asks the API to return up to 3 results.

## Response structure

The response is a JSON object with two main parts:

* `info` — contains information about the results and pagination
* `data` — contains the artwork records returned by the request

A simplified response looks like this:

```json
{
  "info": {
    "total": 123,
    "limit": 3,
    "offset": 0
  },
  "data": [
    {
      "id": 12345,
      "title": "Example Artwork"
    }
  ]
}
```

The actual response contains many more fields.

## The `info` object

The `info` object provides information about the result set.

For example:

```json
{
  "total": 123,
  "limit": 3,
  "offset": 0
}
```

### `total`

The total number of records matching the request.

### `limit`

The maximum number of records returned in this response.

In our example, `limit` is `3`, so the API returns up to three artworks.

### `offset`

The position from which the API starts returning records.

An offset of `0` means the response starts with the first matching record.

## The `data` array

The `data` field contains the actual artwork records returned by the API.

Because `data` is an array, it can contain multiple artwork objects:

```json
{
  "data": [
    {
      "id": 12345,
      "title": "Artwork One"
    },
    {
      "id": 67890,
      "title": "Artwork Two"
    }
  ]
}
```

Each object in the array represents one artwork.

## Artwork records

Each artwork record contains information about a specific object in the museum's collection.

For example:

```json
{
  "id": 12345,
  "title": "Example Artwork",
  "creation_date": "1890",
  "type": "Painting"
}
```

The API provides many additional fields, including information about artists, dates, images, departments, and the artwork's physical characteristics.

## Reading the response

When working with the API, you will usually start with the `data` array to access the records you requested.

The `info` object is useful when working with larger result sets, especially when using pagination.

In the next section, we'll look at how to use **query parameters** to control which results the API returns.
