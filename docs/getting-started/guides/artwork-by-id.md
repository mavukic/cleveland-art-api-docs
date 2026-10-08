---

 sidebar_position: 5
---
# Get an Artwork by ID

Once you have an artwork ID, you can retrieve the complete record for that individual artwork.

## Endpoint

```text
GET /artworks/{id}
```

Replace `{id}` with the ID of the artwork you want to retrieve.

For example:

```text
GET /artworks/12345
```

## Example request

Using `curl`:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/12345"
```

The API returns information about the requested artwork as JSON.

## Response

A response for an individual artwork contains the artwork record directly.

A simplified example looks like this:

```json
{
  "id": 12345,
  "title": "Example Artwork",
  "creation_date": "1890",
  "type": "Painting"
}
```

The actual response contains additional information about the artwork, including details about the artist, images, department, dimensions, and other collection data.

## Using an ID from search results

You can get an artwork ID from a search request.

For example:

```text
GET /artworks/?q=monet
```

The response contains artwork records with their IDs:

```json
{
  "data": [
    {
      "id": 12345,
      "title": "Example Artwork"
    }
  ]
}
```

You can then use that ID to request the individual artwork:

```text
GET /artworks/12345
```

This creates a simple workflow:

```text
Search for artworks
        ↓
Get artwork ID
        ↓
GET /artworks/{id}
```
