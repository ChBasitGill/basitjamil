---
slug: my-first-docusaurus-app
title: My First Docusaurus App
authors: [basit]
tags: [docusaurus, react, github-pages, nodejs]

---

# My First Docusaurus App

Hello everyone! 👋 Today, I’m thrilled to share my experience creating my first app using **Docusaurus**, a static site generator that simplifies building, deploying, and maintaining websites.

## 🎉 Getting Started

To start, I ran the following script to create my app:

```bash
npx create-docusaurus@latest basitjamil classic
```

This command initialized a project in a directory called basitjamil using the classic preset. It comes with pre-configured templates and settings, making it beginner-friendly and perfect for building feature-rich websites.

## 🚀 Hosting on GitHub Pages

I also wanted to deploy my app on GitHub Pages. Here’s the workflow I used to automate deployment:

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  push:
    branches: ["master"]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

env:
  NODE_OPTIONS: --max-old-space-size=6144

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "build"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

This workflow ensures that every time I push changes to the master branch, my site gets built and deployed automatically to GitHub Pages. Isn’t that awesome? 🎉

## 💡 My Learnings

Here are some of the key things I learned during this process:

Docusaurus is a great tool for creating developer-friendly documentation or static sites.
Automating deployments using GitHub Actions saves a lot of time and effort.
Hosting on GitHub Pages is seamless and perfect for open-source projects.

## 🌐 Check It Out!

You can check out my live site here: [Basit Jamil](https://chbasitgill.github.io/basitjamil/).