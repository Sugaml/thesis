# Questionnaire item & source database

**Purpose:** Single traceability document for constructs, item wording, response formats, and literature sources—use when defending the instrument to your supervisor or in the thesis (e.g. Chapter III / Appendix).

**Synced with (same item text & tags):**

- `Nepal-Cybersecurity-Questionnaire-Research-Instrument.md` — respondent-facing instrument  
- `Nepal-Cybersecurity-Questionnaire-Research-Instrument.html` — interactive / PDF export  
- `index.js` — Google Forms script (Likert items omit in-text citations in the form UI; sources remain here)

**Thesis alignment:** Chapter 1 objectives 1–5 (awareness, digital behaviour, risk mitigation, relationships / influencing factors, IT vs non-IT comparisons supported by A3 and demographics).

---

## 1. Construct map (latent variables)

| Construct (working label) | Section | Item IDs | Scale | N items |
|---------------------------|---------|----------|-------|---------|
| Cybersecurity awareness & knowledge | 1 | B1–B7 | 1 Strongly disagree … 5 Strongly agree | 7 |
| Digital behaviour (risky / exposure-oriented habits) | 2 | C1–C7 | 1 Strongly disagree … 5 Strongly agree | 7 |
| Risk mitigation practices | 3 | D1–D7 | 1 Never … 5 Always | 7 |
| Influencing factors & attitudes (mixed PMT-related cues) | 4 | E1–E7 | 1 Strongly disagree … 5 Strongly agree | 7 |
| Demographics / context | 0 | A1–A5 | Nominal / multi-select | 5 |

**Analysis note (supervisor defence):** Section C items describe **riskier** behaviour when agreed with strongly. For hypotheses that expect **higher awareness → safer behaviour**, either (a) **reverse-code** all C items before forming a “safe digital behaviour” composite, or (b) define the latent construct explicitly as **risky digital behaviour** and state the expected sign of paths accordingly. Document the choice in Chapter III.

---

## 2. Demographics (Section 0)

| ID | Topic | Response format | Source / note |
|----|--------|-----------------|---------------|
| A1 | Gender | Single choice: Male, Female, Other, Prefer not to say | Standard survey practice; inclusive option for ethics. |
| A2 | Age | Single choice: Under 20; 20–25; 26 and above | Standard; comparable to prior student surveys in thesis literature. |
| A3 | Academic major | Single: IT/Computer Science vs Non-IT | **Core** for Objective 5 / H3–H5 group comparisons. |
| A4 | Academic year | Single: 1st … Post-graduate | Context / cohort control. |
| A5 | Devices used to go online | **Multiple** (checkbox): Smartphone, Laptop, Tablet, Desktop | Researcher-developed checklist; analyse as separate dummies or “primary device” if you collapse categories. |

---

## 3. Section 1 — Awareness & knowledge (B1–B7)

| ID | Sub-theme (for discussion) | Item text (verbatim) | Source tag(s) |
|----|----------------------------|----------------------|---------------|
| B1 | Malware / device risk | I know my phone or computer can get viruses or harmful software. | Nithyasri, 2022 |
| B2 | Phishing | I know phishing is dangerous. | Nithyasri, 2022 |
| B3 | Transport security (HTTPS) | I am aware that 'https' is safer than 'http' in a website address. | Nithyasri, 2022 |
| B4 | Nepal legal context | I know Nepal has an online safety law (Electronic Transactions Act). | Bhandari, 2025 |
| B5 | Public Wi‑Fi risk | I am concerned about using open public Wi-Fi. | Nithyasri, 2022; Adhikari et al., 2026 |
| B6 | Data exposure / careless use | I know that careless use of the internet can put my personal information at risk. | Ahamed et al., 2024 |
| B7 | Personal priority on device security | I give high priority to using my phone or computer securely. | Nithyasri, 2022 |

---

## 4. Section 2 — Digital behaviour (C1–C7)

| ID | Sub-theme | Item text (verbatim) | Source tag(s) |
|----|-----------|----------------------|---------------|
| C1 | Password reuse | I use one password for many accounts. | Bognar, 2024 |
| C2 | Email link risk | I open links in emails from people I do not know. | Bognar, 2024 |
| C3 | Sensitive use on public Wi‑Fi | I use public Wi-Fi for banking or private work without extra protection. | Adhikari et al., 2026 |
| C4 | Untrusted downloads | I download from websites I do not trust. | Dhungana et al., 2023 |
| C5 | Social media exposure | I post my location or personal photos openly on social media. | Dhungana et al., 2023 |
| C6 | Pop-up / ad engagement | I click pop-up ads while browsing. | Dhungana et al., 2023; Nair, 2025 |
| C7 | Stranger contact online | I accept friend or chat requests from strangers online. | Bognar, 2024 |

---

## 5. Section 3 — Risk mitigation practices (D1–D7)

| ID | Sub-theme | Item text (verbatim) | Source tag(s) |
|----|-----------|----------------------|---------------|
| D1 | Updates / AV | I update security or antivirus on my devices. | Nair, 2025 |
| D2 | TLS / “lock” cue | I check for a lock sign before I enter passwords or card details. | Nithyasri, 2022 |
| D3 | Password rotation | I change my passwords from time to time. | Nithyasri, 2022 |
| D4 | Session end on shared device | I log out when I finish on a shared or public device. | Bognar, 2024 |
| D5 | 2FA | I turn on two-factor authentication for important accounts when it is offered. | Nair, 2025; Adhikari et al., 2026 |
| D6 | Backup | I back up important files to another drive or cloud storage. | Adhikari et al., 2026 |
| D7 | Email verification | I check who sent an email before I open links or attachments. | Ngamcharoen et al., 2024 |

---

## 6. Section 4 — Influencing factors & attitudes (E1–E7)

| ID | Suggested construct label (theory) | Item text (verbatim) | Source tag(s) |
|----|------------------------------------|----------------------|---------------|
| E1 | Perceived severity (PMT) | If hackers took my data, it would be a big problem for me. | Gwenhure, 2025 |
| E2 | Self-efficacy / coping | I can deal with common online dangers. | Gwenhure, 2025 |
| E3 | Attitude / importance | Safe internet habits are important in my daily life. | Ahamed et al., 2024 |
| E4 | Reporting / response efficacy | I would know where to report an online crime. | Ahamed et al., 2024 |
| E5 | Barrier (password difficulty) | Strong passwords are hard for me to make and remember. | Gwenhure, 2025 |
| E6 | Institutional trust | My university has prepared me enough for cyber risks. | Adhikari et al., 2026 |
| E7 | Cues to action (peer) | If another student told me about a breach, I would be more careful. | Gwenhure, 2025 |

---

## 7. Repository file crosswalk (short tag → evidence note)

Use this with your **full APA list in the thesis**; filenames point to drafts under `Literature_paper/literature/`.

| Short tag | Repository / thesis anchor (verify full APA in Chapter 2) |
|-----------|-------------------------------------------------------------|
| Nithyasri, 2022 | `Nithyasri2022-Cyber-Security-Behaviour-College-Students-Coimbatore.md` — awareness / behaviour / HTTPS, malware, Wi‑Fi–style themes among college students (India). |
| Bhandari, 2025 | `Bhandari2025-Cybersecurity-Awareness-University-Students-Legal-Remedies-Mitigate-Risks.md` — Nepal ETA / legal awareness among university students. |
| Bognar, 2024 | `Bognar2024-Evaluating-Online-Security-Behavior-Personal-Cybersecurity-Awareness-Scale.md` — student security behaviour / awareness scale lineage (use **Bognar & Bottyán** in prose if that is the published form). |
| Dhungana et al., 2023 | `Dhungana2023-Cybersecurity-Challenges-Multi-Generational-Learners-Nepal.md` — Nepal K–12 / learner online risk context; adapted for higher-ed behaviour wording. |
| Adhikari et al., 2026 | `Adhikari2026-Assessing-Cybersecurity-Literacy-Proficiency-Bachelors-Students-Nepal.md` — Nepal bachelor students, Wi‑Fi / literacy / institutional angles. |
| Ahamed et al., 2024 | `Ahamed2024-Empowering-Students-Cybersecurity-Awareness-Management-Emerging-Digital-Era.md` — student awareness / digital-era framing. |
| Nair, 2025 | `Nair2025-Awareness-Threats-Perception-Cyber-Security.md` — threats, updates, 2FA-related student survey literature. |
| Ngamcharoen et al., 2024 | `Ngamcharoen2024-Development-Evaluation-Cybersecurity-Behaviour-Measurement-Undergraduate-Students.md` — cybersecurity **behaviour measurement** / undergraduate items (e.g. email verification). |
| Gwenhure, 2025 | **PMT-related** severity, efficacy, barriers, cues — confirm exact author spelling and full reference in your bibliography (Chapter 2 citation register). |

**Items adapted or synthesised** (still defensible): wording is shortened for readability; where a single paper is cited, the stem is **conceptually aligned** with that stream of literature—quote the **exact scale item** from the original paper in the thesis only after you verify it in the PDF.

---

## 8. Versioning

| Field | Value |
|-------|--------|
| Instrument version | B1–E7 (7 items per scale) + A1–A5 |
| A5 format | Multiple selection (checkbox) |
| Last aligned with repo | May 2026 |

When you change any item in `Nepal-Cybersecurity-Questionnaire-Research-Instrument.md` / `.html` / `index.js`, update **this file** in the same commit so traceability stays intact.
