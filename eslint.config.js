import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
  "rules": {
    "complexity": ["warn", { "max": 10 }],
    "max-depth": ["warn", { "max": 4 }],
    "max-lines-per-function": ["warn", { "max": 50 }],
    "max-params": ["warn", { "max": 3 }],
    "no-unused-vars": "warn",
    "no-shadow": "warn"
  }
}

]);
