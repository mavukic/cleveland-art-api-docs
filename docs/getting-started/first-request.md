---

sidebar_position: 2
---
# Your First Request

Let's make a simple request to the Cleveland Museum of Art API.

## 1. Choose an endpoint

We will use the artworks endpoint:

```text
GET /artworks/
```

This endpoint returns artworks from the Cleveland Museum of Art collection.

## 2. Make the request

You can make a request using `curl`:

```bash
curl "https://openaccess-api.clevelandart.org/api/artworks/"
```

The API returns the results as JSON.

## 3. Add the API URL

The complete URL for the artworks endpoint is:

```text
https://openaccess-api.clevelandart.org/api/artworks/
```

You can open this URL directly in your browser to see the response.

## 4. Try it yourself

Copy the URL below and open it in your browser:

```text
https://openaccess-api.clevelandart.org/api/artworks/
```

You should see a JSON response containing information about artworks in the collection.

## 5. What's next?

Now that you've made your first request, let's look at what the API sends back.

