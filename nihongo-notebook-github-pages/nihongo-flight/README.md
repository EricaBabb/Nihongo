# Nihongo Notebook

A tiny, dependency-free Japanese grammar and practice web app that works offline after installation.

## Publish on GitHub Pages

1. Create a **public** repository on GitHub (for example, `nihongo-notebook`).
2. Upload **all files in this folder** to the repository root, including `.nojekyll`.
3. Open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, and save.
4. Visit the GitHub Pages URL on your iPhone in Safari while online.
5. Allow the page to finish loading and show **Offline pack ready ✓**; then use Safari's **Share → Add to Home Screen**.
6. Launch from the Home Screen and **test in Airplane Mode before your trip**.

The app requires no hosting backend, third-party resources, or build step. Progress is stored in localStorage on that device. Use **Export progress** as a backup. iOS may clear website storage in some circumstances, and clearing Safari/site data can erase progress.

## Local development

Run `python -m http.server 8000` in this folder and visit `http://localhost:8000`. Service workers do not register from `file://` URLs. The app is built to work under a GitHub Pages project subpath by using relative URLs.

## Updating

Edit `data.js` to add lessons/questions/phrases. When changing code/data, change the CACHE string in `sw.js` (e.g. `nihongo-flight-v2`) so existing offline installations refresh their cached version. Revisit the website while online to fetch the update.

## Note

This starter version intentionally has a small curated set of lessons and example questions, not a complete Japanese course. Japanese keyboards use kana readings; romaji input is not supported.
