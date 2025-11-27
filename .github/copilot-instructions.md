<!-- Auto-generated guidance for AI coding agents. Update only with concrete repo knowledge. -->
# Copilot / AI agent playbook for this repo

Short, actionable rules to help an AI agent be productive in this Playwright test repo.

1. Project purpose & layout
- Tests live under `tests/` (configured in `playwright.config.js` via `testDir: './tests'`). There is a secondary `tests-examples/` directory with reference examples (see `tests-examples/demo-todo-app.spec.js`).
- Key files: `playwright.config.js`, `package.json`, and the test files in `tests/`.

2. How tests run (developer commands)
- Install deps: `npm install`.
- Install Playwright browsers (if missing): `npx playwright install`.
- Run tests: `npx playwright test` (no npm `test` script is defined in `package.json`).
- Open HTML report after a run: `npx playwright show-report`.

Examples (PowerShell):
```
$env:CI='0'; npm install
npx playwright install
npx playwright test
npx playwright show-report
```

3. Important config notes (do not change without confirmation)
- `playwright.config.js` sets `testDir: './tests'`, `reporter: 'html'`, `trace: 'on-first-retry'`, and conditional `retries` / `workers` when `process.env.CI` is set. Respect these defaults when modifying test behavior.
- Many test files use ESM `import` syntax (e.g., `import { test, expect } from '@playwright/test';`). However, `package.json` currently contains `"type": "commonjs"`. Do NOT flip `package.json` to `module` without confirming CI/runtime expectations — changing module type affects how Node loads files.

4. Coding & test patterns to follow (concrete examples)
- Use Playwright Test idioms: `test`, `test.describe`, `test.beforeEach`, `expect`, and `page` fixtures — see `tests-examples/demo-todo-app.spec.js` for canonical patterns (use of `getByRole`, `getByTestId`, `getByPlaceholder`).
- Prefer high-level locators as used in examples: `page.getByRole(...)`, `page.getByTestId(...)`, and `page.getByPlaceholder(...)`.
- Many tests include `// @ts-check` at the top — maintain JSDoc/type patterns consistent with the repo.

5. Repo conventions and gotchas
- `playwright.config.js` is authored using `import`/`export default` (ESM). Test files also use `import`. Be cautious when adding Node scripts or tooling that assume `commonjs` modules.
- `package.json` contains no `scripts` entries; automated runs expect use of `npx playwright ...` or adding scripts is acceptable but must be coordinated.
- There are some empty or placeholder test files (e.g., `tests/novitest.spec.js` is empty). If an agent modifies or deletes these, call out the change in the commit message.

6. When editing tests or config, follow these rules
- Minimal changes: update only files relevant to the requested task.
- Preserve Playwright runner behaviour: do not remove `trace: 'on-first-retry'`, `reporter: 'html'`, or CI-conditional `retries`/`workers` unless explicitly asked.
- If proposing changes to `package.json` (scripts or `type`), include a short rationale and how to test the change locally (commands above).

7. Integration points & external deps
- Dev dependency: `@playwright/test` (see `package.json`). Tests navigate external sites (e.g., `https://playwright.dev/` and `https://demo.playwright.dev/todomvc`) so network access is required when running.
- `playwright.config.js` includes an optional `webServer` block (commented). If a feature requires a local server, enable/edit that block and document the `npm run start` command used.

8. Commit & PR guidance for AI agents
- Keep commits small and focused. If adding test code, include which tests run and a sample command to reproduce locally.
- If changing CI-related config, include the expected CI variable behavior (e.g., `CI=true` sets retries/workers in `playwright.config.js`).

If anything above is unclear or you want the instructions tailored (e.g., add recommended `npm` scripts or switch repo to ESM), tell me which area to expand and I'll update this file.
