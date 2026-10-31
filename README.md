# Personal Site & Blog

A fast, minimal personal profile and blog built with [Astro](https://astro.build).

## Features

- Profile home page: intro, about, skills, experience timeline, projects, recent posts
- Markdown blog with tags, reading time, drafts, and older/newer navigation
- Light/dark mode (follows the system setting and remembers your choice)
- RSS feed (`/rss.xml`), sitemap, SEO and Open Graph meta tags
- Syntax-highlighted code blocks; responsive and accessible

## Getting started

```sh
npm install      # first time only
npm run dev      # start a local server at http://localhost:4321
npm run build    # build the static site into dist/
npm run preview  # preview the production build
```

## Make it yours

| What                                    | Where                                    |
| --------------------------------------- | ---------------------------------------- |
| Name, bio, skills, experience, links    | `src/consts.ts`                          |
| Profile photo                           | add `public/avatar.jpg`, set `avatar` in `src/consts.ts` |
| Blog posts                              | `src/content/blog/*.md`                  |
| Colors and fonts                        | top of `src/styles/global.css`           |
| Your domain (for RSS/sitemap)           | `site` in `astro.config.mjs`             |
| Favicon                                 | `public/favicon.svg`                     |

### Writing a post

Create `src/content/blog/my-post.md`:

```md
---
title: 'My post'
description: 'A one-line summary.'
pubDate: 2026-11-01
tags: ['notes']
---

Your content here…
```

Set `draft: true` to keep a post off the live site while you work on it.

## Deploying

`npm run build` outputs plain static files in `dist/`, which any static host can serve:

- **Netlify / Vercel / Cloudflare Pages**: connect the Git repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages**: see <https://docs.astro.build/en/guides/deploy/github/>.
