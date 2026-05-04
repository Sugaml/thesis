# Questionnaire tooling — design notes

**Item–construct–source traceability:** See `questionnare-database.md` (master table for supervisor defence and thesis appendix).

## Google Apps Script form (`index.js`)

- **Source of truth:** Item wording matches `Nepal-Cybersecurity-Questionnaire-Research-Instrument.html`.
- **Cover text:** MBA IT, SOMTU/TU, GRP, confidentiality; time estimate **10–12 minutes** for the current length.
- **Section 3 scale:** HTML uses Never → Always with five verbal anchors; Google Forms uses endpoint labels **Never** / **Always**.
- **Length:** **33 prompts** — 5 demographics (A1–A5) plus **7 Likert items per construct** (B1–B7 awareness, C1–C7 digital behaviour, D1–D7 risk mitigation, E1–E7 attitudes / influencing factors).
- **A5 devices:** Multiple selection (Google Form **checkbox** item; HTML preview uses multi-toggle buttons). Exports are often comma-separated—recoding into separate dummy variables (e.g. uses_smartphone) is typical for analysis.
- **Section B order:** Viruses and phishing first, then https/http, Nepal law, then Wi‑Fi concern, personal-data risk, and mobile security priority.
- **Citations:** Omitted in the Google Form; retained in HTML/Markdown for traceability.
