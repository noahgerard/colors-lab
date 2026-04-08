// eslint.config.js
import js from "@eslint/js";
import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. JavaScript Config (Standard)
  {
    ...js.configs.recommended,
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },

  // 2. CSS Config (Native Plugin)
  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    rules: {
      "css/no-duplicate-imports": "error",
      "css/no-empty-blocks": "warn",
    },
  },

  // 3. HTML Config
  {
    files: ["**/*.html"],
    plugins: { html },
    language: "html/html",
    rules: {
      "html/require-lang": "error",
      "html/no-duplicate-attrs": "error",
    },
  },
]);
