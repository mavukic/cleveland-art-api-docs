---

 sidebar_position: 3
---
# Exhibitions API

The Exhibitions API provides access to exhibition records from the Cleveland Museum of Art.

## Endpoint

```text
GET /exhibitions/
```

### Base URL

```text
https://openaccess-api.clevelandart.org/api/
```

The complete endpoint is:

```text
https://openaccess-api.clevelandart.org/api/exhibitions/
```

## Request

Make a basic request using:

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/"
```

The API returns exhibition data in JSON format.

## Search exhibitions

You can use the `q` parameter to search for a term.

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/?q=modern"
```

## Limit results

Use the `limit` parameter to control the number of returned records.

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/?limit=5"
```

## Combine parameters

You can combine search and limit parameters.

```bash
curl.exe "https://openaccess-api.clevelandart.org/api/exhibitions/?q=modern&limit=5"
```

## Query parameters

| Parameter | Type    | Description               |
| --------- | ------- | ------------------------- |
| `q`       | string  | Search term               |
| `limit`   | integer | Maximum number of results |

## Response

The API returns JSON containing exhibition records.

A simplified response might look like this:

```json
{
  "data": [
    {
      "id": 123,
      "title": "Example Exhibition"
    }
  ]
}
```

The `data` property contains the exhibition records returned by the API.

## Next step

You can use the exhibition ID to retrieve information about a specific exhibition.
