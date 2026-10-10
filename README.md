# Toyota Manufacturing Copilot — Pillar 2 (Prototype)

A Next.js + TypeScript application shell that preserves the current interactive manufacturing-copilot demo. The existing workflow remains a browser-only simulation while its UI is migrated incrementally into typed React components.

## Run locally
1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Open `http://localhost:3000`

The current demo is intentionally served from `public/prototype/index.html` inside the Next.js shell. This preserves its complete, validated behaviour during the component migration.

`lib/domain.ts` contains the initial TypeScript domain vocabulary for the future API and Neon database migration. It does not establish a database connection yet.

## Open in Codex
1. Open the project folder in Codex.
2. Run `npm install`, then `npm run dev`.
3. Run `npm run build` before deploying to Vercel.

## Deploy to Vercel
1. Import this repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Use the default build command: `npm run build`.
4. No environment variables are required for this browser-only simulation.

## Demo flow
- Command Center → Incident Queue → select `INC-2048`
- Diagnosis → approve recommendation (or switch to Senior Engineer for second approval)
- Action Tasks → complete all four tasks
- Verification → run simulated verification
- Knowledge Base → switch role to Senior Engineer and validate article
- Audit Trail → review activity or export JSON

## Important limitations
- All data and outcomes are simulated.
- No live MES/PLC/CMMS, database, authentication, authorization server, or AI model is connected.
- Role restrictions are front-end demo logic only and are not security controls.
- Audit events exist only in the current browser session.
- Do not use this prototype to operate real equipment or make real production decisions.
