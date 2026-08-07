# Nikesh Portfolio

Personal portfolio built with Next.js and exported as a static site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run generate:resume
npm run build
```

The static output is generated in `out/`.

The resume PDF is generated from the portfolio data and written to `public/resume/nikesh-kumar-resume.pdf`.

## Deploy to GitHub Pages

This repository already includes a workflow at `.github/workflows/deploy.yml` that builds and deploys automatically.

1. Push your code to the `main` branch.
2. In GitHub, open `Settings > Pages`.
3. Set `Build and deployment` source to `GitHub Actions`.
4. Wait for the `Deploy to GitHub Pages` workflow to finish.

## Repository naming for URL

- If your repository name is `<username>.github.io`, your site URL is:
	`https://<username>.github.io/`
- If your repository name is anything else (for example `portfolio`), your site URL is:
	`https://<username>.github.io/portfolio/`

The Next.js config automatically handles both cases during GitHub Actions deploy.
