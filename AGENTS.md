# Repository Guidelines

## Project Structure & Module Organization

This repository contains standalone Bootstrap 3 learning examples. The root `index.html` links to each lesson. Lesson directories follow the `lesson-<ordinal>-<topic>/` pattern, such as `lesson-third-login/`, and normally contain:

- `index.html`: the finished example.
- `sample.html`: supporting or comparison markup, when applicable.
- `css/style.css`: lesson-specific presentation rules; `css/sample.css` supports samples.
- `js/`: behavior needed by interactive lessons.
- `img/`: lesson-local images.

Shared assets live in `images/`. Explanatory material belongs in the root `README.md` or the relevant lesson `README.md`. Keep each lesson self-contained and use relative paths for repository assets.

## Build, Test, and Development Commands

Install the dependency-free npm project and validate the custom JavaScript:

```sh
pnpm install --frozen-lockfile
npm run build
```

The checked-in HTML, CSS, JavaScript, and images are the deployable static-site artifact; the build command validates the custom JavaScript rather than generating a separate output directory. Serve the repository over HTTP so relative links and browser behavior match deployment:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/` to browse all lessons, or visit a lesson directly, for example `http://localhost:8000/lesson-third-login/`. Use `git diff --check` before submitting to catch whitespace errors. Some examples load jQuery, Bootstrap, or images from external hosts, so an internet connection may be required.

## Coding Style & Naming Conventions

Match the surrounding files: four-space indentation in HTML and JavaScript, lowercase kebab-case directory names, and descriptive lowercase CSS classes. Keep custom styles in the lesson's `css/style.css` and scripts in `js/`; do not edit vendored `bootstrap.min.css` or `bootstrap.min.js`. Preserve Bootstrap 3 markup conventions and accessibility attributes such as `role`, `aria-*`, and meaningful `alt` text. Prefer `const`/`let` for new JavaScript and terminate statements with semicolons.

## Testing Guidelines

No automated test framework or coverage target is configured. Manually verify every changed page at desktop and narrow mobile widths. Check navigation, forms, dropdowns, tabs, image loading, and the browser console for errors. When changing shared navigation or assets, open the root page and every affected lesson.

## Commit & Pull Request Guidelines

Recent commits use short Conventional Commit-style subjects, for example `docs: migrate images`, `fix: remove unsafe assets`, and `chore: update license`. Use an imperative, scoped summary and keep each commit focused. Pull requests should explain the affected lesson and user-visible result, link any issue, list manual checks, and include before/after screenshots for layout or styling changes.
