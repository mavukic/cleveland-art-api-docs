---
 sidebar_position: 1
---
# API Reference

This reference documents the main REST endpoints covered in this guide.

## Base URL

```text
https://openaccess-api.clevelandart.org/api/
```

All endpoints in this reference use the `GET` HTTP method unless otherwise noted.

## Endpoints

| Method | Endpoint            | Description                    |
| ------ | ------------------- | ------------------------------ |
| `GET`  | `/artworks/`        | Search the artwork collection  |
| `GET`  | `/artworks/{id}`    | Retrieve a specific artwork    |
| `GET`  | `/exhibitions/`     | Search exhibitions             |
| `GET`  | `/exhibitions/{id}` | Retrieve a specific exhibition |

---

## Artworks

### Search artworks

```text
GET /artworks/
```

Search the Cleveland Museum of Art collection using a keyword or phrase.

Example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/?q=monet&limit=3"
```

Common parameters include:

| Parameter   | Type    | Description                                            |
| ----------- | ------- | ------------------------------------------------------ |
| `q`         | string  | Keyword or phrase used to search the collection        |
| `skip`      | integer | Offset used for pagination                             |
| `limit`     | integer | Maximum number of records to return                    |
| `fields`    | string  | Comma-separated list of fields to return               |
| `has_image` | integer | Filter artworks based on whether an image is available |

For the complete list of artwork search parameters, see [Search Artworks](../api/artworks).

---

### Get an artwork

```text
GET /artworks/{id}
```

Retrieve a specific artwork using its ID or accession number.

Example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/artworks/135382"
```

The response contains detailed information about the artwork, including metadata, creators, images, and the museum's collection URL.

For more information, see [Get an Artwork by ID](../api/artwork-by-id).

---

## Exhibitions

### Search exhibitions

```text
GET /exhibitions/
```

Search the museum's exhibition records.

Example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/?limit=5"
```

The endpoint supports parameters for filtering and pagination, including:

* `title`
* `venue`
* `organizer`
* `opened_after`
* `opened_before`
* `closed_after`
* `closed_before`
* `skip`
* `limit`

For more information, see [Exhibitions API](../api/exhibitions).

---

### Get an exhibition

```text
GET /exhibitions/{id}
```

Retrieve a specific exhibition using its ID.

Example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/453138"
```

For more information, see [Get an Exhibition by ID](../api/exhibition-by-id).

---

## Response format

The API returns JSON responses.

Collection endpoints generally return an object containing:

```json
{
  "info": {
    "total": 0,
    "parameters": {}
  },
  "data": []
}
```

The `info` object provides information about the request and result set.

The `data` property contains the returned records.

For a specific resource, the response contains the requested artwork or exhibition record.

---

## Pagination

Collection endpoints support pagination through `skip` and `limit`.

Example:

```text
GET /artworks/?q=monet&skip=10&limit=10
```

This requests a group of results beginning at offset 10.

See [Pagination](../getting-started/guides/pagination) for a detailed explanation.

---

## Authentication

The documented endpoints do not require an API key or authentication token.

Requests can be made directly from a command-line client or application.
