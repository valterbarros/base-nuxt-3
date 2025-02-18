import unicorn from "eslint-plugin-unicorn";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import pluginVue from 'eslint-plugin-vue';
import sonarjs from 'eslint-plugin-sonarjs';
import withNuxt from './.nuxt/eslint.config.mjs';
import vitest from "eslint-plugin-vitest";
import tseslint from 'typescript-eslint';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
		typescript: tseslint.configs.recommended,
});

export default withNuxt(
	...pluginVue.configs['flat/recommended'],
	...compat.extends().map(config => ({
    ...config,
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}"],
	})),
	{
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}"],

    plugins: {
			unicorn,
			sonarjs,
			vitest
    },

    languageOptions: {
			parser: parser,
			ecmaVersion: 2024,
			sourceType: "module",
			globals: {
        ...vitest.environments.env.globals,
      },

			parserOptions: {
				project: "./tsconfig.json",
				extraFileExtensions: [".vue"],
				parser: "@typescript-eslint/parser",
			},
    },

    rules: {}
	},
);
