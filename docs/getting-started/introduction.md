---
sidebar_position: 1
---

# Getting Started

The Cleveland Museum of Art Open Access API lets you access artwork and exhibition data from the museum's collection.

## Base URL

All API requests use this base URL:

https://openaccess-api.clevelandart.org/api/

## Authentication

You do not need an API key or authentication token to use the API.

## Available resources

The API provides access to:

- Artworks
- Exhibitions

## Make your first request

The easiest way to start is by requesting the artwork collection.

```bash
curl "https://openaccess-api.clevelandart.org/api/artworks/"    
```


The API returns the results as JSON.
