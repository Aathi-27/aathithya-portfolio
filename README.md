# Aathithya Arasu S - portfolio draft

Personalised adaptation of [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) by Ashutosh Hathidara, under the included MIT LICENSE.

## Run locally

1. Install Node.js 22 and npm.
2. Run `npm ci`.
3. Run `npm start` to open the development server.
4. Run `npm run build` for the production build.

A static production build needs SPA fallback to `index.html` for `/home`, `/education`, `/experience`, `/projects`, `/opensource`, `/contact`, and `/resume`.

No public deployment, repository push or domain setup has been performed.

## Edit

- `src/portfolio.js`: biography, links, skills, education and internships.
- `src/shared/opensource/projects.json`: three selected project cards.
- `src/pages/education/EducationComponent.js`: certifications and achievements.
- `src/assets/images/aathithya.jpg`: the user-approved LinkedIn profile picture.
- `src/theme.js`: chosen original blue theme. A light/dark toggle is not part of this draft.

## Review notes

The resume page is a newly composed text summary, NOT the original PDF. The original resume file is still needed before adding a download button. The public site should remain unpublished until the owner reviews the content and audience. City is kept to India because old resume and current public records differ.

Nokia role and start date were provided by the owner: DevOps Intern, 28 August 2026. No internal work details are included. Prior internships, education, certificates and achievements are based on the owner's resume, with selected certificates/projects checked against the supplied LinkedIn profile and GitHub. No publication acceptance, employment qualification beyond the sources, or merged PR claim is made.

The photo is the 200x200 profile image supplied by LinkedIn and may look soft at larger sizes. A higher-resolution original can replace it without changing layout.

## Checks

Production compilation passed. All seven routes were rendered at 320, 390 and 1280px, and home at 844x390 landscape. Splash, mobile menu, history navigation, internship accordion and project new-tab navigation were exercised in Chrome. This is browser-based responsive testing, not physical iPhone/Safari testing. Legacy dependencies come from the selected source template and should be reviewed before public deployment.
