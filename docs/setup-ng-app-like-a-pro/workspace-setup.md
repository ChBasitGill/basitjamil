---
sidebar_position: 2
---

# Workspace Setup

## Introduction

Welcome to the first step of setting up your enterprise-level Angular application! 🎉 Before diving into the development process, it's crucial to ensure your environment is properly configured. This guide will walk you through the essential tools, dependencies, and extensions you'll need to kick-start your workspace.

---

## Environment Setup

### Dependency Checklist

- **Node.js v8+**
- **Git**
- **Angular CLI**
- **Nrwl Schematics**
- **Visual Studio Code**
- **VSCode Extensions**
- **Chrome Extension for Redux Dev Tools**

The main requirement for building an Angular application is **Node.js v8+** or the latest stable version. Let’s ensure you have all the tools needed.

---

## Check Node.js and Git

### Check Node.js Version

Run the following command in your terminal to verify Node.js:

```bash
node -v
```

### Check Git Version

To verify Git, use the following command:

```bash
git --version
```

### Install Node.js and Git

If you need to install Node.js or Git:

- Download Node.js: [Node.js Official Site](https://nodejs.org/en)
- Download Git: [Git Official Site](https://git-scm.com/downloads)

---

## CLI Setup

To build and manage your Angular application, install the required CLI tools globally:

### Install Angular CLI and Nx

Run the following commands to install Angular CLI and Nx globally:

```bash
npm install -g @angular/cli
```

```bash
npm install -g @nrwl/schematics
```

### Install NgRx Schematics (Optional)

For additional functionality with NgRx, run the following command:

```bash
npm i @ngrx/schematics -g
```

---

## Visual Studio Code

### Download VSCode

Get the latest version of Visual Studio Code: [VSCode Official Site](https://code.visualstudio.com)

---

### Recommended Extensions

1. **[Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)**: A comprehensive pack for Angular development.
2. **[Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)**: Helps manage nested brackets effectively.
3. **[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)**: Ensures code quality with linting rules.
4. **[Nrwl Angular Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)**: Simplifies working with Nx workspaces.
5. **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: For consistent code formatting.
6. **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Linting for JavaScript and TypeScript.
7. **[Vitest Explorer](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)**: A visual test runner for Vitest.

---

### Optional Settings

Enable **Auto Save** in VSCode for a smoother coding experience:

1. Open VSCode settings.
2. Search for "Auto Save."
3. Set it to `afterDelay` or your preferred option.

---

### Profile Configuration

Below is my `settings.json` configuration file for Visual Studio Code. It ensures consistency, improved readability, and developer productivity.

#### `settings.json`

```json
{
    "editor.codeActionsOnSave": {
        "source.addMissingImports.ts": "always",
        "source.organizeImports": "always",
        "source.fixAll.tslint": "always",
        "source.fixAll.ts": "always"
    },
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.acceptSuggestionOnEnter": "smart",
    "editor.bracketPairColorization.enabled": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": true,
    "editor.renderWhitespace": "all",
    "files.autoSave": "onFocusChange",
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/dist": true
    },
    "typescript.updateImportsOnFileMove.enabled": "always",
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "workbench.colorTheme": "Default Light+",
    "workbench.iconTheme": "vscode-icons",
    "terminal.integrated.fontSize": 14,
    "terminal.integrated.cursorBlinking": true,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "all",
    "prettier.arrowParens": "always",
    "eslint.format.enable": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ]
}
```

---

#### Personal Profile Configuration (Optional)

For those who want to explore or replicate my personal VSCode configuration, you can check out my public profile:  
**[VSCode Profile on GitHub](https://gist.github.com/ChBasitGill/ac2adb5d8c3140dee4d41a44755983d2)**

---

With this setup, you're ready to begin building a scalable and maintainable Angular application. Happy coding! 🚀
