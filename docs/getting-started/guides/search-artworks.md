---

sidebar_position: 1
---
# Search Artworks

Use the Artworks endpoint to search the Cleveland Museum of Art collection.

## Endpoint

```text
GET /artworks/
```

The endpoint returns artwork records that match your search criteria.

## Basic search

Use the `q` query parameter to search the collection.

For example, search for artworks related to Monet:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet"
```

The API returns matching artworks as a JSON response.

## Limit the results

Use `limit` to control the maximum number of records returned in a request.

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=3"
```

This request searches for `monet` and requests up to three results.

## Query parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| `q`       | string  | Search term                         |
| `limit`   | integer | Maximum number of records to return |
| `skip`    | integer | Number of records to skip           |

### `q`

The `q` parameter specifies the term to search for.

```text
q=monet
```

You can replace `monet` with another search term:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=painting"
```

### `limit`

The `limit` parameter controls the number of records returned.

```text
limit=10
```

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=10"
```

### `skip`

Use `skip` to move through a result set.

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=10&limit=10"
```

This skips the first 10 matching records and requests the next 10.

See [Pagination](./pagination) for a complete pagination example.

## Understanding the response

A collection request returns an object containing information about the request and an array of artwork records.

A simplified response looks like this:

```json
{
  "info": {
    "total": 28,
    "parameters": {
      "skip": 0,
      "limit": 3,
      "q": "monet"
    }
  },
  "data": [
    {
      "id": 135382,
      "title": "The Red Kerchief"
    }
  ]
}
```

### `info`

The `info` object contains metadata about the request and result set.

The `total` property indicates how many records match the search.

The `parameters` object shows the parameters used for the request.

### `data`

The `data` property contains the artwork records returned by the API.

Each item in the array represents an artwork.

For example:

```json
{
  "id": 135382,
  "title": "The Red Kerchief"
}
```

The artwork ID can then be used to retrieve the complete record.

## Search workflow

A typical application can use the endpoint like this:

```text
User enters a search term
        ↓
GET /artworks/?q=monet
        ↓
API returns matching artworks
        ↓
Application displays search results
        ↓
User selects an artwork
        ↓
GET /artworks/{id}
```

This separates **collection search** from **individual artwork retrieval**.

## Next step

Once you have an artwork ID, use [Get an Artwork by ID](../../api/artwork-by-id) to retrieve the individual artwork record.
