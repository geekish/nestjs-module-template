import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  extends: compat.extends(
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ),

  plugins: {
    "@typescript-eslint": typescriptEslintEslintPlugin,
  },

  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.jest,
    },

    parser: tsParser,
    ecmaVersion: 5,
    sourceType: "module",

    parserOptions: {
      project: "tsconfig.json",
    },
  },

  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
}]);
