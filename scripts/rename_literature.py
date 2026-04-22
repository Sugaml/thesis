#!/usr/bin/env python3
"""Rename literature files to AuthorYear-ShortTitle.pdf and write literature-register.xlsx."""
from __future__ import annotations

import shutil
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Font

ROOT = Path(__file__).resolve().parent


def resolve_src(pattern: str) -> Path:
    """pattern is exact relative path, or UNIQUE glob under ROOT (use only when needed)."""
    p = ROOT / pattern
    if p.exists():
        return p
    matches = sorted(ROOT.glob(pattern))
    if len(matches) == 1:
        return matches[0]
    raise FileNotFoundError(f"pattern={pattern!r} matches={matches!r}")


# (source path or glob relative to ROOT, new_basename)
RENAMES: list[tuple[str, str]] = [
    ("(14..)Final+cyber+security.pdf", "Adhikari2025-Understanding-Key-Factors-Cybersecurity-Practices-Nepalese-Organizations.pdf"),
    ("1-s2.0-S0167404823005011-main_cyber security risk management.pdf", "Durst2024-Environmental-Turbulence-Cyber-Security-Risk-Management-Resilience.pdf"),
    ("10.pdf", "Bhandari2025-Cybersecurity-Awareness-University-Students-Legal-Remedies-Mitigate-Risks.pdf"),
    ("122-127+Lokesh+Gupta+ok.pdf", "Gupta2024-Issues-Cyber-Security-Solutions-Nepalese-Context.pdf"),
    ("29.Cybersecurity-Awareness.pdf", "Bandhe2025-Cybersecurity-Awareness-Digital-Age-National-Security.pdf"),
    ("34593-71374-1-PB.pdf", "Hnaif2024-Cybersecurity-Integration-Distance-Learning-Student-Awareness-Attitudes.pdf"),
    ("6-5-3.pdf", "Khatiwada2025-Cybersecurity-Awareness-Practices-Students-Makawanpur-Campus-Nepal.pdf"),
    ("682+Cybersecurity.docx.pdf", "Hasan2025-Understanding-Cybersecurity-Awareness-Students-Bangladesh-Data-Driven.pdf"),
    ("AWARENESS_THREATS_AND_PERCEPTION_OF_CYBE.pdf", "Nair2025-Awareness-Threats-Perception-Cyber-Security.pdf"),
    ("Ar 92 Determing Sample Size.pdf", "Israel1992-Determining-Sample-Size-Agricultural-Extension-Fact-Sheet.pdf"),
    ("CYBER_SECURITY_BEHAVIOUR_AMONG_THE_COLLE.pdf", "Nithyasri2022-Cyber-Security-Behaviour-College-Students-Coimbatore.pdf"),
    ("Cyber_Crime_and_Security_A_Study_on_Awar.pdf", "Chanuvai2016-Cyber-Crime-Security-Awareness-Young-Netizens-Anand.pdf"),
    ("Cybersecurity in Education.pdf", "Dhungana2023-Cybersecurity-Challenges-Multi-Generational-Learners-Nepal.pdf"),
    ("CybersecurityinEducation.pdf", "Dhungana2023-Cybersecurity-Challenges-Multi-Generational-Learners-Nepal-Alt.pdf"),
    ("Factors_Related_to_Cyber_Security_Behavior.pdf", "Kovacevic2020-Factors-Related-Cyber-Security-Behavior.pdf"),
    ("**/Hengki Tamando Sihotang-2023-*IJECE.pdf", "Anwar2023-Enhancing-Cybersecurity-Awareness-University-Students-Knowledge-Attitude-Behavior.pdf"),
    ("**/Home-2023-*literature6.pdf", "Elrayah2023-Digital-Literacy-Privacy-Cybersecurity-Behaviour-Moderating-Awareness.pdf"),
    ("IET Information Security - 2026 - Bwiino - A Systematic Literature Review of Information Security Practices in Higher.pdf", "Bwiino2026-Systematic-Literature-Review-Information-Security-Practices-Higher-Education.pdf"),
    ("IJRPR46572.pdf", "Balasirisha2025-Cybersecurity-Awareness-Online-Education-Case-Study-Analysis.pdf"),
    ("Impact of ISA Training on KAB_ A K-12 Case Study.pdf", "Robbins2025-Impact-Information-Security-Awareness-Training-Knowledge-Attitude-Behavior-K12.pdf"),
    ("**/Kausal-2025-*Literature12.pdf", "Gupta2025-Impact-Data-Driven-Approaches-Cyber-Security-Awareness-Nepal-Digital-Landscape.pdf"),
    ("**/L*Bogn*2024*Aware*_2.pdf", "Bognar2024-Evaluating-Online-Security-Behavior-Personal-Cybersecurity-Awareness-Scale.pdf"),
    ("Mai_Tick_115.pdf", "Mai2021-Cyber-Security-Awareness-Behavior-Youth-Smartphone-Hungary-Vietnam.pdf"),
    ("Mohammed A. Alqahtani-2022-LaTeX with hyperref-Factors Affecting Cybersecurity Awareness among University Students.pdf", "Alqahtani2022-Factors-Affecting-Cybersecurity-Awareness-University-Students.pdf"),
    ("ResearchPaper.pdf", "Jangid2025-Cybersecurity-Awareness-College-Students-Knowledge-Behavior-Risk.pdf"),
    ("**/Ronnie B. Santelices-2025-*Cybersecurity Awareness and Education.pdf", "Santelices2025-Students-Perspective-Cybersecurity-Awareness-Education.pdf"),
    ("**/TechnoScience Academy;http___technoscienceacademy.com-2025-*Science and Technology.pdf", "Ering2025-Cybercrime-Awareness-Undergraduate-Students-Descriptive-Study.pdf"),
    ("Unknown-2026-Adobe InDesign 17.0 (Windows)-literature11.pdf", "Adhikari2026-Assessing-Cybersecurity-Literacy-Proficiency-Bachelors-Students-Nepal.pdf"),
    ("**/User-2025-*Baltic Journal of Modern Computing, 2013, Vol.1, No.1.pdf", "Kont2025-Cyber-Threat-Risks-Higher-Education-Estonian-Academy-Security.pdf"),
    ("WRP+-+IJARBM+-+Netshiunda,+Madzvamuse+-+Cybersecurity+Rural+Based+Universities.pdf", "Netshiunda2025-Systematic-Literature-Review-Cybersecurity-Awareness-Strategy-Rural-Universities.pdf"),
    ("ahamed-et-al-2024-empowering-students-for-cybersecurity-awareness-management-in-the-emerging-digital-era-the-role-of.pdf", "Ahamed2024-Empowering-Students-Cybersecurity-Awareness-Management-Emerging-Digital-Era.pdf"),
    ("base/Gwenhure Anderson Kevin-2025-OUP-University students' security behavior against email phishing attacks_ insights from the health b....pdf", "Kevin2025-University-Students-Security-Behavior-Email-Phishing-Health-Belief-Model.pdf"),
    ("base/High_Risk_of_Cybercrime_Threat_Attack_an.pdf", "Giri2020-High-Risk-Cybercrime-Threat-Attack-Future-Challenges-Nepal.pdf"),
    ("**/base/SaaB NAKSIT-2024-*literature3.pdf", "Ngamcharoen2024-Development-Evaluation-Cybersecurity-Behaviour-Measurement-Undergraduate-Students.pdf"),
    ("base/Talal Alharbi and Asifa Tassaddiq-2021-LaTeX with hyperref-Assessment of Cybersecurity Awareness among Students of Majmaah University.pdf", "Alharbi2021-Assessment-Cybersecurity-Awareness-Students-Majmaah-University.pdf"),
    ("base/base_article1.pdf", "Ahamed2024-Empowering-Students-Cybersecurity-Awareness-Management-Emerging-Digital-Era.pdf"),
    ("base/the-influence-of-social-education-level-on-cybersecurity-1xgntris.pdf", "Hong2023-Influence-Social-Education-Cybersecurity-Awareness-Behaviour-Comparative-Study.pdf"),
    ("futureinternet-13-00039-v3.pdf", "Ulven2021-Systematic-Review-Cybersecurity-Risks-Higher-Education.pdf"),
    ("information-13-00192-v2.pdf", "Cheng2022-Institutional-Strategies-Cybersecurity-Higher-Education-Institutions.pdf"),
    ("s40163-024-00230-w.pdf", "Ahmead2024-Risky-Online-Behaviors-Cybercrime-Awareness-Al-Quds-Students.pdf"),
    ("s41599-025-06122-x.pdf", "Alqarni2025-Cybersecurity-Awareness-Data-Protection-Behaviors-Saudi-Secondary-School.pdf"),
    ("s44217-025-01084-3.pdf", "Ahamed2026-Cybersecurity-Knowledge-Social-Networking-Awareness-Gen-Z-University-Students.pdf"),
    ("salam-et-al-2026-cybersecurity-in-higher-education-institutions-digitalisation-addressing-threats-and-vulnerabilities.pdf", "Salam2026-Cybersecurity-Higher-Education-Institutions-Digitalisation-Threats-Vulnerabilities.pdf"),
    ("tyaf029.pdf", "McGregor2025-Consumer-Perceptions-Personal-Cyber-Awareness-Knowledge-Risk.pdf"),
    ("cybersecurity_questionnaire_nepal.html", "Nepal-Cybersecurity-Questionnaire-Research-Instrument.html"),
]


def main() -> None:
    tmp = ROOT / ".renaming-tmp"
    tmp.mkdir(exist_ok=True)
    staged: list[tuple[Path, Path]] = []
    log_rows: list[tuple[str, str, str, str]] = []

    for i, (pat, new_base) in enumerate(RENAMES):
        src = resolve_src(pat)
        rel_log = str(src.relative_to(ROOT)).replace("\\", "/")
        prev_name = src.name
        folder = str(Path(rel_log).parent) if "/" in rel_log else "."
        notes = ""
        if prev_name == "ResearchPaper.pdf":
            notes = "Year from PDF creation metadata; not a journal publication date."
        elif prev_name == "CybersecurityinEducation.pdf":
            notes = "Same article as Dhungana2023 Nepal PDF; different export (bytes differ)."
        elif rel_log == "base/base_article1.pdf":
            notes = "Same SAGE Open article as root Ahamed2024 PDF; duplicate copy under base/."
        log_rows.append((folder, prev_name, new_base, notes))

        interim = tmp / f"{i:03d}__{new_base}"
        if interim.exists():
            raise FileExistsError(f"staging exists: {interim}")
        shutil.move(str(src), str(interim))
        staged.append((interim, src.parent / new_base))

    for interim, final in staged:
        if final.exists():
            raise FileExistsError(f"target exists: {final}")
        shutil.move(str(interim), str(final))

    tmp.rmdir()

    wb = Workbook()
    ws = wb.active
    ws.title = "Literature"
    headers = ("Folder", "Previous filename", "Standard filename", "Notes")
    ws.append(headers)
    for c in ws[1]:
        c.font = Font(bold=True)
    for row in log_rows:
        ws.append(list(row))

    out_xlsx = ROOT / "literature-register.xlsx"
    wb.save(out_xlsx)
    print(f"Renamed {len(RENAMES)} files. Register: {out_xlsx}")


if __name__ == "__main__":
    main()
