---
slug: my-first-docusaurus-app
title: My First Docusaurus App
authors: [basit]
tags: [docusaurus, react, github-pages, nodejs]
---

# Docusaurus App

## Hello everyone! 👋 Today, I want to share my experience creating my first app using **Docusaurus**, a static site generator that simplifies building, deploying, and maintaining websites.

<!-- truncate -->

## 🎉 Getting Started

To start, I ran the following script to create my app:

```bash
npx create-docusaurus@latest basitjamil classic
```

This command initialized a project in a directory called `basitjamil` using the classic preset. It comes with pre-configured templates and settings, making it beginner-friendly and perfect for building feature-rich websites.

## 🚀 Hosting on GitHub Pages

I also wanted to deploy my app on GitHub Pages. For this, I created a `.github/workflows/static.yaml` file. Below is the workflow I used to automate the deployment:

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
    push:
        branches: ['master']

    workflow_dispatch:

permissions:
    contents: read
    pages: write
    id-token: write

concurrency:
    group: 'pages'
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
                  path: 'build'

            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4
```

This workflow ensures that every time I push changes to the `master` branch, my site gets built and deployed automatically to **GitHub Pages.** Isn’t that awesome? 🎉

## 🛠️ Setting Up Prettier, EditorConfig, and ESLint

To maintain code quality, I set up Prettier, EditorConfig, and ESLint.

### Install Prettier

First, I installed Prettier as a dev dependency and created the necessary configuration files:

```bash
npm install --save-dev --save-exact prettier

node --eval "fs.writeFileSync('.prettierrc', '{}\n')"

node --eval "fs.writeFileSync('.prettierignore', '# Ignore artifacts:\nbuild\ncoverage\n')"
```

### Configure ESLint

Next, I installed `eslint-config-prettier` to integrate ESLint with Prettier:

```bash
npm install --save-dev eslint-config-prettier

```

I will write about eslint-config-prettier in upcoming blog

Here’s the `.eslintrc` configuration file I used:

```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "rules": {
        "brace-style": "error",
        "camelcase": ["error", { "properties": "never" }],
        "comma-dangle": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "eqeqeq": "warn",
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "key-spacing": ["error", { "beforeColon": false }],
        "no-console": "off",
        "no-fallthrough": "warn",
        "prefer-const": "error",
        "quotes": ["error", "single"],
        "semi": ["error", "never"]
    }
}
```

### Create an EditorConfig File

To ensure consistent formatting across editors, I created the `.editorconfig` file:

```text
# Stop the editor from looking for .editorconfig files in the parent directories
root = true

[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80

```

## 💡 Key Learnings

Here are some of the key things I learned during this process:

- **Docusaurus** is a great tool for creating developer-friendly documentation or static sites.
- Automating deployments using **GitHub Actions** saves a lot of time and effort.
- Hosting on **GitHub Pages** is seamless and perfect for open-source projects.

## 🌐 Check It Out!

You can check out my live site here: **[Basit Jamil](https://chbasitgill.github.io/basitjamil/)**.
