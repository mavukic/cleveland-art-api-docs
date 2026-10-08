---

 sidebar_position: 2
---
# Pagination

The API uses `skip` and `limit` parameters to paginate collection results.

Pagination is useful when a search returns a large number of records.

## `limit`

The `limit` parameter controls how many records the API returns.

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=10"
```

This requests up to 10 artworks.

## `skip`

The `skip` parameter specifies the offset from the beginning of the result set.

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=10&limit=10"
```

This skips the first 10 results and requests the next 10.

## Pagination example

You can retrieve results in batches.

### First request

```text
skip=0
limit=10
```

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=0&limit=10"
```

### Second request

```text
skip=10
limit=10
```

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=10&limit=10"
```

### Third request

```text
skip=20
limit=10
```

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&skip=20&limit=10"
```

The pattern is:

```text
skip = previous skip + limit
```

## Understanding the response

The API includes pagination information in the `info` object.

For example:

```json
{
  "info": {
    "total": 28,
    "parameters": {
      "skip": 0,
      "limit": 1,
      "q": "monet"
    }
  }
}
```

The `total` value indicates the total number of matching records.

The `parameters` object shows the parameters used for the request.

## Choosing a page size

For artworks, the API documentation states that the maximum `limit` is 1000 records per request.

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=1000"
```

For most applications, a smaller page size may be more practical because it reduces the amount of data returned in a single response.

## Client-side pagination

An application can use `skip` and `limit` to implement pages.

For example:

```text
Page 1 → skip=0   & limit=10
Page 2 → skip=10  & limit=10
Page 3 → skip=20  & limit=10
Page 4 → skip=30  & limit=10
```

This allows the application to retrieve only the records needed for the current page.
