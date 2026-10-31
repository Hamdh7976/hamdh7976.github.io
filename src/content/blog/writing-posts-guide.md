---
title: 'How to write a post on this site'
description: 'A quick reference for the Markdown features this blog supports. Delete this post whenever you like.'
pubDate: 2026-10-29
tags: ['guide', 'markdown']
---

Every post is a Markdown file in `src/content/blog/`. The file name becomes the URL, so `my-first-trip.md` is served at `/blog/my-first-trip/`.

## Front matter

Each file starts with a small header:

```yaml
---
title: 'My post title'
description: 'One sentence shown in post lists and search results.'
pubDate: 2026-11-01
updatedDate: 2026-11-05 # optional
tags: ['travel', 'notes'] # optional
draft: true # optional: hidden from the live site, visible in dev
---
```

## Formatting

You get **bold**, *italics*, [links](https://astro.build), `inline code`, lists, quotes and tables:

| Feature        | Supported |
| -------------- | --------- |
| Code highlight | Yes       |
| Images         | Yes       |
| Tags & RSS     | Yes       |

Code blocks are syntax highlighted:

```js
function greet(name) {
	return `Hello, ${name}!`;
}
```

### Images

Put images in `public/images/` and reference them like this:

```md
![Alt text describing the image](/images/photo.jpg)
```

That's all there is to it. Write, save, and the page updates instantly while `npm run dev` is running.
