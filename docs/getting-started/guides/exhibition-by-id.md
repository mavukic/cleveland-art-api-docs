---
 sidebar_position: 4
---
# Get an Exhibition by ID

Use an exhibition ID to retrieve a specific exhibition record.

## Endpoint

```text
GET /exhibitions/{id}
```

The `{id}` is the unique identifier of the exhibition.

## Request

For example:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/123"
```

The API returns information about the requested exhibition.

## URL parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| `id`      | integer | Unique identifier of the exhibition |

## Example workflow

First, search the exhibitions collection:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/?q=modern&limit=5"
```

Find the ID of an exhibition in the response.

Then use that ID to retrieve the individual exhibition:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/123"
```

## Response

The response is returned as JSON.

A simplified response looks like this:

```json
{
  "id": 123,
  "title": "Example Exhibition"
}
```

## When to use this endpoint

Use this endpoint when you already know the ID of an exhibition and need information about that specific record.

This is useful for applications that:

* display exhibition details
* link search results to a detail page
* retrieve a specific exhibition record
