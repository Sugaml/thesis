# CHAPTER III: RESEARCH METHODOLOGY

## 3.1 Research Design

This study used a **quantitative, cross-sectional survey design** to assess cybersecurity awareness, digital behavior, and risk mitigation practices among university students in Nepal. The design supported both:

- **Descriptive analysis** (profile and level measurement), and
- **Inferential analysis** (association, prediction, and group comparison).

## 3.2 Data Source and Study Context

The analysis in this thesis is based on the collected dataset stored at:

- `/home/runner/work/thesis/thesis/data/collect.csv`

The file contains primary survey responses collected through a structured questionnaire.

## 3.3 Population and Sample

The target population was university students (IT and non-IT backgrounds). The usable dataset in `collect.csv` contains:

- **N = 80 respondents**
- **34 variables (columns)**

### 3.3.1 Group Composition

- IT/Computer Science: **48 (60.0%)**
- Non-IT: **32 (40.0%)**

## 3.4 Instrument Structure and Measurement

The questionnaire in `collect.csv` is organized as follows:

- **Section A (Profile):** A1–A5
- **Section B (Cybersecurity Awareness):** B1–B7
- **Section C (Digital Behavior / risky online behavior items):** C1–C7
- **Section D (Risk Mitigation Practices):** D1–D7
- **Section E (Perception/attitude items):** E1–E7

For Chapters IV and V analyses, the main construct scores were computed as:

- **CA (Cybersecurity Awareness):** mean of B1–B7
- **DB (Digital Behavior – risk-oriented items):** mean of C1–C7
- **RMP (Risk Mitigation Practices):** mean of D1–D7

All B/C/D items used a 5-point scale. For DB, higher scores indicate **more risky behavior**.

Section E (E1–E7) was collected as perception/attitude context data, but it was not included in the primary hypothesis-testing model of this thesis. It is retained for possible follow-up or extended analysis.

## 3.5 Data Preparation

Data preparation steps were:

1. Import CSV and validate column completeness.
2. Convert B1–B7, C1–C7, D1–D7 to numeric values.
3. Check missing values and usable records.
4. Compute respondent-level composite scores for CA, DB, and RMP.

The final dataset retained all 80 responses for the reported analyses.

## 3.6 Statistical Techniques

The following analyses were used:

1. **Descriptive statistics**: frequencies, percentages, means, and standard deviations.
2. **Reliability analysis**: Cronbach's alpha for CA, DB, and RMP.
3. **Correlation analysis**: Pearson correlation among CA, DB, and RMP.
4. **Simple linear regression**:
   - CA → DB (H1)
   - CA → RMP (H2)
5. **Independent-samples t-test** (IT vs Non-IT):
   - CA (H3)
   - DB (H4)
   - RMP (H5)

Significance threshold was set at **α = 0.05**.

## 3.7 Ethical Considerations

The dataset is analyzed in aggregated form for academic purposes. No personally identifying information is used in the statistical reporting. Findings are presented at group level (means, proportions, and test statistics).

## 3.8 Chapter Summary

This chapter described the quantitative methodology used to analyze the collected dataset in `data/collect.csv`. The next chapter presents the empirical results derived directly from these 80 responses.
