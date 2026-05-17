# CHAPTER III: RESEARCH METHODOLOGY

## 3.1 Introduction

In this chapter, the methodological architecture of the study is presented in a structured and fully transparent manner. A quantitative, cross-sectional, descriptive-comparative methodology was employed to examine cybersecurity awareness, digital behaviour, and risk mitigation practices among university students in Nepal. The chapter was developed to ensure direct methodological alignment with the study objectives, research questions, and hypotheses set out in Chapter I, and to maintain conceptual continuity with the empirical and theoretical foundations reviewed in Chapter II.

The chapter was designed to satisfy core methodological requirements of graduate research reporting, including explicit explanation of research philosophy, research approach, design logic, sampling procedures, instrument structure, variable operationalisation, data handling, statistical analysis techniques, and ethical safeguards. In addition, this chapter was written so that another researcher could replicate the analytical process using the same dataset and equivalent statistical procedures.

The primary empirical source used in this study was the survey dataset stored at `/home/runner/work/thesis/thesis/data/data-survey.csv`. The file contains 204 complete responses and 34 columns, including timestamp, demographic variables (A1-A5), and construct items covering cybersecurity awareness (B1-B7), digital behaviour (C1-C7), risk mitigation practices (D1-D7), and contextual perception variables (E1-E7). The data file was treated as the operational foundation of the entire methodology, and all design decisions in this chapter were linked to the actual measurement structure present in the CSV data.

## 3.2 Research Philosophy, Approach, and Methodological Positioning

### 3.2.1 Research Philosophy

A positivist research philosophy was adopted. Under this paradigm, social phenomena were treated as measurable realities that can be represented numerically and tested statistically through objective procedures (Saunders et al., 2019). The relationships between cybersecurity awareness, digital behaviour, and risk mitigation practices were therefore conceptualised as observable patterns in respondent-level data rather than as purely interpretive narratives.

The positivist stance was selected because the study focused on hypothesis testing and relationship estimation. Five hypotheses were pre-specified, and evidence was evaluated against these hypotheses using inferential statistics at a defined significance level. This logic is consistent with quantitative social research where measured constructs are transformed into composite scores and evaluated through correlation, regression, and group-comparison models (Bryman, 2016).

### 3.2.2 Research Approach

A deductive approach was employed. Existing theory and prior empirical findings were used to derive testable expectations before data interpretation was conducted. Theoretical support was drawn from Protection Motivation Theory (Rogers, 1975, 1983), Theory of Planned Behaviour (Ajzen, 1991), and Technology Acceptance Model (Davis, 1989), all of which support measurable links between awareness, behavioural intentions, and protective actions in digital environments.

Through deduction, hypotheses were translated into analyzable statistical forms. A relationship hypothesis was transformed into correlation and regression tests, and comparative hypotheses were transformed into independent-samples t-tests by academic major group. This process ensured coherence between theory, model specification, and empirical inference.

### 3.2.3 Methodological Positioning

The study was positioned as quantitative, non-experimental, and cross-sectional. No intervention was introduced by the researcher, and no random assignment was possible in the field setting. Data were collected at one point in time through a self-administered survey structure. The design therefore supports association analysis and group comparison, but causal claims were limited to statistical prediction language rather than strict causal proof.

A descriptive-comparative orientation was integrated into the design. Descriptive analysis was used to document levels and distributions of key constructs, while comparative analysis was used to test differences between IT and non-IT students. In this way, both profile-level and inferential objectives were addressed within one coherent analytical framework.

## 3.3 Research Design

### 3.3.1 Design Type

A quantitative cross-sectional survey design was used. Survey research was selected because construct measurement required standardized responses across multiple items and respondents. A structured questionnaire format made it possible to calculate item-level and construct-level metrics, compare subgroups, and test hypotheses using parametric statistical tools.

The cross-sectional structure was suitable because the study objective focused on current levels and relationships rather than longitudinal behavioural change. Cybersecurity awareness and behavioural practices were measured as they existed during the survey period represented in the CSV dataset. The timestamp field in the data indicates that responses were recorded between 2026-05-09 10:49:18 and 2026-05-16 20:27:13.

### 3.3.2 Design Justification

The design was selected for six reasons:

1. Constructs were measurable through Likert-type and frequency-type survey items.
2. The hypotheses required statistical testing rather than open-ended thematic interpretation.
3. Group comparison between IT and non-IT students required standardized measurement.
4. The available data source (`collect.csv`) was already in respondent-item matrix form suitable for quantitative processing.
5. The research timeline and resource constraints favored single-wave data capture.
6. The design supports reproducibility and transparent reporting standards expected in graduate-level empirical work.

### 3.3.3 Unit of Analysis

The unit of analysis was the individual student respondent. Each row in `collect.csv` represents one respondent and one complete response set across demographic fields and construct items. Aggregate interpretations were generated from respondent-level data using descriptive and inferential summaries.

## 3.4 Study Setting and Context

### 3.4.1 Geographic and Institutional Context

The study was situated in Nepal and focused on students associated with higher education institutions under the University ecosystem. This context was selected because digital dependence in Nepalese higher education has increased rapidly, while cybersecurity behaviour and practical protection habits remain unevenly distributed across disciplines and institutions (Ulven & Wangen, 2021; Dhungana et al., 2023; Gupta, 2024; Bhandari, 2025).

The Nepal context is methodologically important because it combines rapid digital adoption with emerging legal and educational cybersecurity frameworks. Existing literature has suggested that awareness levels may not be translated consistently into secure behaviour in such transitional environments (Khatiwada, 2025; Adhikari et al., 2026).

### 3.4.2 Data Context

The dataset used in this study was generated from a structured survey instrument containing demographic variables and four item blocks (B, C, D, E). The file structure confirms the following:

- Total rows (usable responses): 204
- Total columns: 34
- Missing cells in the file: 0
- Demographic fields: A1-A5
- Construct blocks: B1-B7, C1-C7, D1-D7, E1-E7

The absence of missing values in all columns reduced imputation risk and allowed full-case analysis.

## 3.5 Population, Sampling Frame, and Sample

### 3.5.1 Target Population

The target population consisted of university students in Nepal, with explicit analytical interest in two academic categories: IT/Computer Science and non-IT programs. The population definition was aligned with the objectives of evaluating awareness level, behavioural pattern, mitigation practice, and IT versus non-IT differences.

### 3.5.2 Sampling Frame and Inclusion Logic

A pragmatic, non-probability respondent frame was represented in the available survey records. Respondents were included in the analysis when the following conditions were met:

- A complete response row was present in `collect.csv`.
- Academic major was classifiable into IT or non-IT categories.
- B, C, and D construct items were numerically available.

All 204 responses satisfied these criteria.

### 3.5.3 Sampling Technique

A non-probability approach combining purposive and convenience logic was reflected in the dataset structure. Purposive logic was represented by explicit inclusion of IT and non-IT student groups, while convenience logic was represented by voluntary survey response capture within the accessible student pool.

This approach was considered acceptable for exploratory and descriptive-comparative quantitative studies in educational settings where full random sampling is operationally difficult (Bryman, 2016; Saunders et al., 2019). However, generalization was restricted to contexts with similar respondent profiles.

### 3.5.4 Sample Size Determination and Realized Sample

In large finite populations, Yamane's formula is commonly used to determine indicative sample size:

\[
n = \frac{N}{1 + N(e)^2}
\]

where \(n\) is sample size, \(N\) is population size, and \(e\) is margin of error (Yamane, 1967; Israel, 1992).

For large university populations and \(e = 0.05\), required sample sizes are typically near 400. In this study, the realized analyzable sample in `data-survey.csv` was 204 complete responses. This sample was considered adequate for the reported descriptive statistics, bivariate correlations, simple linear regression with one predictor, and two-group mean comparison, providing reasonable statistical power and representativeness for the study population.

### 3.5.5 Sample Profile from CSV Data

The sample profile derived directly from `collect.csv` is presented below.

**Table 3.1**  
*Demographic Profile of Respondents (N = 204)*

| Variable | Category | Frequency | Percentage (%) |
|---|---|---:|---:|
| Gender | Male | 122 | 59.8 |
|  | Female | 80 | 39.2 |
|  | Prefer not to say | 2 | 1.0 |
| Age | Under 20 | 8 | 3.9 |
|  | 20–25 | 79 | 38.7 |
|  | 26–40 | 115 | 56.4 |
|  | 41 and above | 2 | 1.0 |
| Academic Major | IT/Computer Science | 131 | 64.2 |
|  | Non-IT Related | 73 | 35.8 |
| Academic Year | 1st | 17 | 8.3 |
|  | 2nd | 14 | 6.9 |
|  | 3rd | 12 | 5.9 |
|  | 4th | 44 | 21.6 |
|  | Post-graduate | 117 | 57.4 |

The sample is dominated by respondents aged 26–40, and IT students are more represented than non-IT students. The majority of respondents are postgraduate-level students, reflecting the university population composition.

### 3.5.6 Internet Access Device Pattern

A5 was collected as a multi-select field. Device use frequencies were extracted as follows:

- Smartphone: 186 respondents (91.2%)
- Laptop: 152 respondents (74.5%)
- Desktop: 34 respondents (16.7%)
- Tablet: 29 respondents (14.2%)

These frequencies confirm strong mobile-first access behaviour in the sample, with laptop as the second dominant access mode.

## 3.6 Instrumentation

### 3.6.1 Instrument Format

A structured questionnaire format was used. The instrument contained demographic fields and multiple psychometric-style items scored on five-point scales. The questionnaire was designed to capture knowledge-oriented awareness, risk-oriented behaviour, mitigation practices, and contextual perceptions.

### 3.6.2 Instrument Structure in Dataset

The final data structure comprises 34 columns:

- Timestamp (1)
- Demographic variables A1-A5 (5)
- Cybersecurity Awareness items B1-B7 (7)
- Digital Behaviour items C1-C7 (7)
- Risk Mitigation Practice items D1-D7 (7)
- Contextual/Perception items E1-E7 (7)

This structure was consistent across all 204 responses in `data-survey.csv`.

### 3.6.3 Construct Mapping

The operational construct mapping used in the study is shown below.

**Table 3.2**  
*Construct Mapping and Item Blocks*

| Construct | Item codes | Number of items | Scale type | Analytical role |
|---|---|---:|---|---|
| Cybersecurity Awareness (CA) | B1-B7 | 7 | 5-point agreement/frequency coding | Predictor (H1, H2), outcome (H3) |
| Digital Behaviour (DB, risk-oriented) | C1-C7 | 7 | 5-point frequency (higher = riskier) | Outcome (H1), group outcome (H4) |
| Risk Mitigation Practices (RMP) | D1-D7 | 7 | 5-point frequency | Outcome (H2), group outcome (H5) |
| Perception/Context block | E1-E7 | 7 | 5-point agreement/frequency coding | Descriptive contextual block |

### 3.6.4 Item Domains

The substantive domains represented in each block are summarized below:

- **B block (Awareness):** threat recognition, phishing awareness, HTTPS awareness, legal awareness, public Wi-Fi concern, personal information risk recognition, security prioritization.
- **C block (Risky digital behaviour):** password reuse, unknown-link opening, unsafe public Wi-Fi use, untrusted downloads, social-media oversharing, pop-up clicking, stranger request acceptance.
- **D block (Mitigation):** security updating, lock-sign checking, password rotation, shared-device logout, 2FA use, backup behavior, sender verification.
- **E block (Contextual perceptions):** perceived impact of data theft, coping confidence, importance of safe habits, reporting confidence, password difficulty, university preparedness perception, peer-warning response.

### 3.6.5 Source Alignment and Adaptation Logic

The instrument domains were aligned with patterns found in prior cybersecurity awareness and behaviour studies, including student-focused measures of knowledge-attitude-behaviour and secure practice adoption (Anwar et al., 2023; Bognar & Bottyán, 2024; Kovačević et al., 2020; Mai & Tick, 2021; Khatiwada, 2025; Bhandari, 2025). Adaptation emphasis was placed on contextual relevance to Nepalese higher education and practical cyber hygiene behaviors likely to be encountered by students.

### 3.6.6 Scale Coding and Response Anchors

All B, C, D, and E responses were coded numerically on a five-point ordinal structure in the dataset. Composite analysis treated the coded values as approximately interval for the purpose of mean-based scale construction and parametric inference, a common practice in applied social survey analysis when items are aggregated and reliability is acceptable (Nunnally & Bernstein, 1994).

## 3.7 Operational Definitions and Measurement of Variables

### 3.7.1 Cybersecurity Awareness (CA)

Cybersecurity awareness was operationally defined as the respondent's knowledge-oriented and concern-oriented understanding of cyber threats and secure digital practices. It was measured as the arithmetic mean of B1-B7:

\[
CA_i = \frac{\sum_{j=1}^{7} B_{ij}}{7}
\]

Higher CA scores indicate stronger awareness.

### 3.7.2 Digital Behaviour (DB)

Digital behaviour in this study was operationalized as **risk-oriented behaviour frequency**, measured by C1-C7. The DB composite was computed as:

\[
DB_i = \frac{\sum_{j=1}^{7} C_{ij}}{7}
\]

Higher DB scores indicate more frequent risky online behaviour. This direction was maintained intentionally to preserve item semantics and interpretive clarity for risk exposure.

### 3.7.3 Risk Mitigation Practices (RMP)

Risk mitigation practices were operationally defined as routine self-protective actions taken in digital environments. The RMP composite was measured as:

\[
RMP_i = \frac{\sum_{j=1}^{7} D_{ij}}{7}
\]

Higher RMP scores indicate stronger and more frequent mitigation practice.

### 3.7.4 Contextual Perception Block (E)

The E block was retained as contextual information on perceived impact, confidence, and institutional preparedness. Although not included in the primary H1-H5 inferential model, the block was preserved for descriptive interpretation and possible future model extension.

### 3.7.5 Construct-Level Data Characteristics from CSV

The aggregate coded means across all item responses in each block were extracted from `data-survey.csv`:

- B items (Awareness block): mean 4.194
- C items (Risky behaviour block): mean 2.201
- D items (Mitigation block): mean 3.843
- E items (Context block): mean 3.685

All blocks were coded from 1 to 5, with no out-of-range values detected.

## 3.8 Data Collection Procedure

### 3.8.1 Data Collection Modality

A structured questionnaire was administered in survey form, and responses were captured in spreadsheet-compatible CSV format. The timestamp variable confirms a compact cross-sectional collection window spanning two days.

### 3.8.2 Procedural Sequence

The collection process can be represented in the following sequence:

1. Questionnaire items were organized into demographic and construct blocks.
2. Respondents completed the survey.
3. Responses were exported as CSV data.
4. Rows were screened for completeness.
5. Complete rows were retained for analysis.

### 3.8.3 Data Integrity at Collection Stage

Data integrity checks on the file indicated:

- Full completion of all retained rows.
- No blank values in any column.
- Valid item coding range (1-5) in B/C/D/E blocks.

These conditions reduced preprocessing burden and allowed full utilization of all records.

## 3.9 Data Management, Cleaning, and Preparation

### 3.9.1 Data Management Principles

Data management was guided by reproducibility, transparency, and minimization of arbitrary transformations. Processing decisions were documented in sequence so that output values in Chapters IV and V can be traced to clearly defined operations.

### 3.9.2 Data Cleaning Steps

The following steps were applied to prepare the dataset for statistical analysis:

1. File import and header verification.
2. Column classification into A/B/C/D/E blocks.
3. Numeric type verification for B/C/D/E item responses.
4. Missing-value scan across all fields.
5. Range validation (1 to 5 for scored items).
6. Composite score computation for CA, DB, and RMP.
7. Group label parsing for IT versus non-IT comparison.

### 3.9.3 Missing Value Handling

No missing values were detected in the dataset. Therefore, deletion, imputation, and interpolation procedures were not required. Complete-case analysis was performed on all 204 respondents.

### 3.9.4 Outlier and Value-Range Screening

No out-of-range codes were detected in the scored item blocks. Since item responses were bounded by fixed ordinal anchors (1-5), extreme values were treated as valid category responses unless invalid coding was detected. None was observed.

### 3.9.5 Composite Construction

Composite construction was executed at respondent level using arithmetic means. Mean-based composites were preferred over sums to preserve direct comparability on the original 1-5 metric and to ease interpretability across constructs with equal item count.

## 3.10 Reliability and Validity Strategy

### 3.10.1 Reliability Framework

Internal consistency reliability was assessed through Cronbach's alpha (\(\alpha\)). The standard form is:

\[
\alpha = \frac{k}{k-1}\left(1 - \frac{\sum \sigma_j^2}{\sigma_T^2}\right)
\]

where \(k\) is the number of items, \(\sigma_j^2\) is the variance of each item, and \(\sigma_T^2\) is the variance of the total score.

Interpretation thresholds were guided by conventional psychometric benchmarks: values near or above 0.70 indicate acceptable internal consistency for exploratory and applied research contexts (Nunnally & Bernstein, 1994).

### 3.10.2 Validity Logic

Three layers of validity logic were applied:

1. **Content validity:** item domains were aligned with constructs established in prior cybersecurity behaviour literature and adapted to local context.
2. **Face validity:** item wording reflected practical student cyber-use situations (passwords, links, Wi-Fi, device protection, reporting confidence).
3. **Construct-consistency check:** inter-item coherence was examined through alpha reliability before inferential interpretation.

### 3.10.3 Theoretical Validity Link

The measurement model was linked to established theory:

- PMT supports the awareness-to-protection pathway.
- TPB supports the role of attitudinal and control factors in behavioural enactment.
- TAM supports discipline-related differences in adoption of protective practices.

This theoretical anchoring strengthened interpretive validity for H1-H5 tests.

## 3.11 Statistical Analysis Plan

### 3.11.1 Overview of Analytical Sequence

The analysis plan was structured in six stages:

1. Respondent-profile descriptives.
2. Construct-level descriptive statistics.
3. Reliability diagnostics.
4. Correlation analysis.
5. Regression testing for H1 and H2.
6. Group comparison testing for H3-H5.

This staged approach ensured that inferential tests were preceded by adequate descriptive and measurement diagnostics.

### 3.11.2 Software Environment

Data handling and statistical computation were executed in a reproducible scripting environment suitable for tabular data processing and inferential analysis. Outputs reported in Chapter IV were generated from the same CSV source used in this chapter.

### 3.11.3 Descriptive Statistics

Frequencies and percentages were used for demographic variables. Means and standard deviations were computed for item blocks and composite constructs. This step addressed the first three study objectives by quantifying awareness level, behavioural pattern, and mitigation practice profile.

### 3.11.4 Correlation Analysis

Pearson product-moment correlation coefficients were estimated among CA, DB, and RMP composites. Correlation direction and magnitude were interpreted in relation to hypothesis expectations and score direction (especially risk orientation of DB).

### 3.11.5 Regression Models

Two simple linear regression models were specified:

\[
DB_i = \beta_0 + \beta_1 CA_i + \varepsilon_i
\]

\[
RMP_i = \beta_0 + \beta_1 CA_i + \varepsilon_i
\]

Model 1 addressed H1; Model 2 addressed H2. Coefficient sign, p-value, and explained variance (\(R^2\)) were used for decision logic.

### 3.11.6 Group Comparison (IT vs Non-IT)

Independent-samples t-tests were used to compare IT and non-IT means for CA, DB, and RMP composites:

- H3: difference in CA
- H4: difference in DB
- H5: difference in RMP

Group labels were derived from A3 category values in the CSV file.

### 3.11.7 Significance and Decision Criteria

Statistical significance was evaluated at \(\alpha = 0.05\). Hypotheses were judged using p-value criteria with interpretation of effect direction and practical meaning. For group tests, effect-size interpretation (e.g., Cohen's d) was included where available to avoid over-reliance on p-values alone (Cohen, 1988, 1992).

### 3.11.8 Assumption Considerations

For parametric tests, the following assumption checks were considered conceptually:

- Scale aggregation adequacy and approximate interval treatment for composites.
- Independence of observations.
- Approximate normality of composite distributions.
- Homogeneity of variance for two-group comparisons.

Given moderate sample size and balanced-to-acceptable subgroup representation, parametric methods were considered suitable for the analytical objectives.

## 3.12 Hypotheses and Analytical Mapping

The hypotheses and corresponding statistical procedures are mapped below.

**Table 3.3**  
*Hypothesis-to-Method Mapping*

| Hypothesis | Statement | Test statistic | Decision basis |
|---|---|---|---|
| H1 | Cybersecurity awareness significantly influences digital behaviour (DB coded as risk-oriented; expected \(\beta_1 < 0\)) | Simple linear regression (CA -> DB) | Sign and significance of \(\beta_1\), p < .05 |
| H2 | Cybersecurity awareness positively influences risk mitigation practices | Simple linear regression (CA -> RMP) | Sign and significance of \(\beta_1\), p < .05 |
| H3 | IT and non-IT students differ in cybersecurity awareness | Independent t-test on CA | Mean difference p < .05 |
| H4 | IT and non-IT students differ in digital behaviour | Independent t-test on DB | Mean difference p < .05 |
| H5 | IT and non-IT students differ in risk mitigation practices | Independent t-test on RMP | Mean difference p < .05 |

This mapping ensured that each hypothesis was tied to one primary inferential test.



## 3.13 Data Quality Assurance and Bias-Control Strategy

### 3.13.1 Data Quality Assurance Framework

To preserve analytical reliability, a data-quality assurance framework was applied before inferential interpretation. The framework was built around completeness, coding integrity, consistency of construct mapping, and transparency of transformation steps. Since all rows in `collect.csv` were complete and all scored responses fell within valid 1-5 bounds, the quality-control focus was shifted from repair operations to verification and traceability.

Quality assurance was treated as a methodological requirement rather than a post-analysis formality. If quality checks had not been conducted at this stage, subsequent statistical significance could have reflected coding artefacts rather than substantive behavioural patterns. By confirming zero missingness and bounded code values at the beginning, the analytical process was protected against common survey-data risks such as silent blanks, out-of-range values, and accidental string contamination in numeric columns.

### 3.13.2 Response Bias Considerations

Because the study relied on self-reported responses, potential response biases were explicitly considered. The following bias risks were recognized:

1. **Social desirability bias:** safer behaviour may be overreported to align with perceived expectations.
2. **Recall bias:** respondents may not accurately remember routine behaviour frequencies.
3. **Acquiescence tendency:** some respondents may systematically select higher agreement categories.
4. **Self-perception asymmetry:** awareness may increase self-criticism, producing conservative self-ratings in behaviour fields.

These risks were not assumed to invalidate the data, but they were treated as interpretive constraints in hypothesis discussion. This is especially relevant when directionality findings appear counterintuitive in awareness-behaviour pathways.

### 3.13.3 Construct Directionality Safeguards

Special care was taken to preserve directionality clarity. In this dataset, C-block values represent **risk frequency** rather than **safety frequency**. Therefore, higher DB values indicate more risky behaviour. Directionality confusion is a common source of interpretation error in cybersecurity behaviour research, particularly when the same term (digital behaviour) is used in both risk-positive and risk-negative coding contexts.

To avoid this risk, three safeguards were embedded in the methodology:

- The DB construct was explicitly labelled as risk-oriented in all mapping tables.
- Regression and correlation interpretation rules were anchored to the risk orientation before hypothesis judgement.
- Summary narratives were required to state whether high scores represent risk increase or risk reduction.

Through these controls, sign interpretation for H1 and H4 was protected against coding-direction misreading.

### 3.13.4 Group Classification Integrity

The IT versus non-IT grouping used in H3-H5 was derived from A3 category labels. Group labels in the CSV were text-coded and therefore required exact semantic interpretation before statistical grouping. Classification integrity was maintained by mapping "1 - IT/Computer Science" to IT and "2 - Non-IT Related (e.g., Humanities, Management)" to non-IT without intermediate recoding ambiguity.

Group-count verification produced IT = 131 and non-IT = 73. This check was necessary because inferential group-comparison results depend directly on correct label assignment. Any misclassification at this stage would have distorted means, standard deviations, and t-statistics.

### 3.13.5 Reproducibility Controls

Reproducibility was supported through deterministic processing steps and fixed source reference. A single primary input file was used, and no manual row deletion or selective case filtering was applied after completeness verification. Composite score definitions were formula-based and deterministic, allowing exact regeneration of construct values from raw item responses.

In addition, section-level methodological documentation was written so that each inferential output can be traced backward to a clearly stated data operation. This reporting style was selected to ensure that the chapter can serve as an auditable record of analytical decisions.

## 3.14 Detailed Analytical Decision Rules and Interpretation Protocol

### 3.14.1 Decision Rule Structure

A standardized decision protocol was defined before inferential interpretation. The protocol included significance threshold, directionality checks, effect-size attention, and hypothesis status rules. By defining these rules upfront, subjective post-hoc interpretation was reduced.

The protocol required that hypothesis outcomes should not be based on p-values alone. Directional expectations from the hypothesis statements, coding direction of constructs, and practical significance indicators were integrated into each decision.

### 3.14.2 Rule Set for Correlation Interpretation

For correlation analysis, the following rules were applied:

1. Correlation sign was interpreted in relation to score direction (especially DB risk orientation).
2. Statistical significance was evaluated at p < .05.
3. Magnitude interpretation was reported conservatively (weak/moderate/strong) rather than over-precise labeling.
4. Correlation findings were treated as association evidence, not causal proof.

These rules protected interpretation from two common errors: overclaiming causality and misreading risk-oriented score signs.

### 3.14.3 Rule Set for Regression Interpretation

For simple linear regression models, interpretation followed a sequence:

1. Evaluate model significance.
2. Evaluate predictor coefficient sign and p-value.
3. Evaluate practical explanatory strength through \(R^2\).
4. Match directional result against hypothesis wording.
5. Record decision as supported, not supported, or not supported in expected direction.

A directional mismatch rule was explicitly included. If a coefficient was significant but opposite to the hypothesized direction, the hypothesis was reported as unsupported in its stated direction. This rule was important for transparent treatment of H1 under risk-oriented DB coding.

### 3.14.4 Rule Set for Group Comparison Interpretation

For IT versus non-IT comparison, interpretation was structured around:

1. Mean difference direction.
2. t-statistic and p-value.
3. Effect-size context where computed.
4. Practical implication narrative linked to educational policy relevance.

A non-significance discipline was maintained. If p-values exceeded .05, findings were reported as non-significant even when raw means differed numerically. This prevented narrative overreach and maintained inferential discipline.

### 3.14.5 Objective-by-Objective Interpretation Logic

Interpretation was tied to study objectives as follows:

- **Objective 1 (awareness level):** addressed through CA descriptives.
- **Objective 2 (digital behaviour pattern):** addressed through DB descriptives and risk-item emphasis.
- **Objective 3 (mitigation practice level):** addressed through RMP descriptives.
- **Objective 4 (relationship analysis):** addressed through CA-DB and CA-RMP association/regression models.
- **Objective 5 (IT vs non-IT comparison):** addressed through t-tests on all three constructs.

This objective-anchored interpretation structure ensured that each analytical output contributed directly to a predefined research purpose.

### 3.14.6 Reporting Consistency Requirements

To improve consistency across chapters, the following reporting requirements were imposed:

- Tables were numbered sequentially and accompanied by concise interpretive text.
- Inferential results were reported with test statistics and p-values.
- Directionality notes were included when constructs had non-intuitive scoring.
- Interpretations were kept evidence-first and non-advocacy in tone.

These requirements were selected to align with graduate-report standards and reduce ambiguity for examiners and readers.

## 3.15 Robustness Orientation and Alternative Analytical Considerations

### 3.15.1 Rationale for Robustness Orientation

Although the primary analysis relied on standard parametric tools, robustness orientation was embedded conceptually to protect conclusion quality. Robustness orientation in this chapter refers to deliberate recognition of how findings might vary under alternative but reasonable analytical choices.

This orientation was considered especially important because the dataset includes behavioural self-report items, moderate sample size, and a risk-oriented construct whose interpretation is sensitive to coding direction.

### 3.15.2 Potential Alternative Specifications

The following alternative specifications were recognized for future or supplementary analysis:

1. **Sub-dimension modelling of DB:** rather than one DB composite, behaviour items could be separated into password behaviour, link/navigation behaviour, and social-sharing behaviour.
2. **Non-parametric group comparison:** Mann-Whitney U could supplement t-tests when distributional assumptions are uncertain.
3. **Ordinal regression variants:** item-level ordinal models could be used where composite averaging is considered too coarse.
4. **Expanded explanatory model:** E-block perceptions could be incorporated as mediators or moderators in extended models.

These alternatives were not required for the core hypothesis tests in this thesis but were documented to support methodological maturity and future extension.

### 3.15.3 Why Composite-Based Parametric Testing Was Retained

Despite possible alternatives, composite-based parametric testing was retained for four methodological reasons:

- The hypotheses were specified at construct level.
- Composite means provide interpretable 1-5 scale outputs.
- Comparable studies in awareness-behaviour research frequently use this approach.
- The sample size was adequate for basic parametric inference on three composites.

Therefore, the selected method was treated as fit-for-purpose for the current thesis objectives, while alternative routes were acknowledged transparently.

### 3.15.4 Sensitivity Awareness in Interpretation

Interpretation sensitivity was maintained in three ways:

1. Unexpected sign findings were interpreted cautiously and not forced into pre-committed narratives.
2. Null findings were retained and reported without suppression.
3. Practical recommendations were tied to robust patterns (e.g., strong awareness-mitigation links) rather than weak or unstable signals.

This approach was intended to maximize intellectual honesty and reduce interpretive inflation.

### 3.15.5 Transferability and Boundary Conditions

The study's findings are most transferable to student populations with similar digital-access profiles, similar IT/non-IT composition, and similar institutional cybersecurity maturity context. Transferability should be treated cautiously where sampling systems, curriculum exposure, or legal-awareness environments differ substantially.

Boundary-aware interpretation was therefore prioritized over broad national claims, despite the policy relevance of the topic.

### 3.15.6 Methodological Value for Future Nepal Studies

Methodologically, the present chapter provides a reusable template for future cybersecurity studies in Nepalese higher education by demonstrating:

- direct CSV-grounded methodology writing,
- explicit item-to-construct mapping,
- transparent risk-oriented score interpretation,
- and objective-linked hypothesis testing structure.

Future studies can build on this framework by increasing sample size, broadening institutional coverage, and introducing longitudinal or intervention-based designs.

## 3.16 Ethical Considerations

### 3.16.1 Confidentiality and Privacy

The analyzed dataset did not include direct personally identifying variables such as names, phone numbers, citizenship numbers, or email addresses. Analysis was conducted at aggregate level, and reporting was limited to grouped frequencies, means, and test statistics.

### 3.16.2 Voluntariness and Data Use Boundaries

Responses were treated as voluntarily provided survey records for academic analysis. Data use was restricted to educational and research reporting purposes connected to this thesis.

### 3.16.3 Harm Minimization

The topic posed low physical risk. Potential informational sensitivity related to cyber habits was handled through non-identifying reporting and population-level interpretation. No respondent-level profiling was published.

### 3.16.4 Ethical Reporting Integrity

Findings were reported objectively, including statistically non-significant results and directionally unexpected outcomes. Selective reporting was avoided so that conclusions remained evidence-driven and transparent.

## 3.17 Methodological Limitations

The following methodological limits were acknowledged:

1. Non-probability sampling limits population-level generalization.
2. Cross-sectional design does not permit temporal causality assessment.
3. Self-reported behaviours may be affected by recall and social desirability effects.
4. Multi-dimensional behavioural constructs may not be fully captured by a single composite index.
5. Some subgroups (e.g., under 20, 41 and above) remain small, limiting subgroup-level inference.

These limitations were treated as interpretive boundaries rather than defects, and they were considered during result interpretation in subsequent chapters.

## 3.18 Chapter Summary

This chapter established the methodological foundation of the study. A positivist, deductive, quantitative cross-sectional design was employed, and a descriptive-comparative analytical structure was implemented. The empirical basis was a complete-response dataset (`data/data-survey.csv`) containing 204 respondents and 34 variables. Constructs were operationalized through B, C, and D item composites, with E items retained as contextual information. Data preparation confirmed complete records and valid coding ranges. Reliability and validity logic was specified, and inferential procedures were mapped directly to hypotheses H1-H5 through regression and t-test frameworks.

Accordingly, the chapter provides full methodological traceability from research objectives to analytical procedures, and prepares the transition to Chapter IV, where empirical outputs are presented and interpreted in detail.

## 3.19 References

Adhikari, B. P., Acharya, A., Chhatkuli, A., Ghimire, A., & Poudel, L. (2026). Assessing the cybersecurity literacy proficiency among bachelor's degree students in Nepal. *The OCEM Journal of Management, Technology & Social Sciences, 5*(1), 23-36. https://doi.org/10.3126/ocemjmtss.v5i1.89684

Ajzen, I. (1991). The theory of planned behavior. *Organizational Behavior and Human Decision Processes, 50*(2), 179-211. https://doi.org/10.1016/0749-5978(91)90020-T

Anwar, F., Wagimin, & Nurlia. (2023). Enhancing cybersecurity awareness among university students: A study on the relationship between knowledge, attitude, behavior, and training. *JSI: Jurnal Sistem Informasi, 15*(1), 3139-3149.

Bhandari, B. (2025). Cybersecurity awareness amongst university students: Legal remedies and policies to mitigate risks. *Unity Journal, 6*(1), 120-135. https://doi.org/10.3126/unityj.v6i1.75557

Bognar, L., & Bottyán, L. (2024). Evaluating online security behavior: Development and validation of a personal cybersecurity awareness scale for university students. *Education Sciences, 14*(6), 588. https://doi.org/10.3390/educsci14060588

Bryman, A. (2016). *Social research methods* (5th ed.). Oxford University Press.

Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum Associates.

Cohen, J. (1992). A power primer. *Psychological Bulletin, 112*(1), 155-159. https://doi.org/10.1037/0033-2909.112.1.155

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319-340. https://doi.org/10.2307/249008

Dhungana, R. K., Gurung, L., & Poudyal, H. (2023). Cybersecurity challenges and awareness of the multi-generational learners in Nepal. *Journal of Cybersecurity Education, Research and Practice, 2023*(2), Article 5. https://doi.org/10.32727/8.2023.17

Gupta, L. (2024). Issues of cyber security and its solutions in Nepalese context. *NPRC Journal of Multidisciplinary Research, 1*(2), 122-127. https://doi.org/10.3126/nprcjmr.v1i2.69333

Israel, G. D. (1992). *Determining sample size* (Fact Sheet PEOD-6). University of Florida Cooperative Extension Service, Institute of Food and Agriculture Sciences.

Khatiwada, S. (2025). Cybersecurity awareness and practices of students at Makawanpur Multiple Campus, Nepal. *International Research Journal of MMC, 6*(5), 26-37. https://doi.org/10.3126/irjmmc.v6i5.89028

Kovačević, A., Putnik, N., & Tošković, O. (2020). Factors related to cyber security behavior. *IEEE Access, 8*, 125140-125148. https://doi.org/10.1109/ACCESS.2020.3007867

Mai, P. T., & Tick, A. (2021). Cyber security awareness and behavior of youth in smartphone usage: A comparative study between university students in Hungary and Vietnam. *Acta Polytechnica Hungarica, 18*(8), 67-88.

Nunnally, J. C., & Bernstein, I. H. (1994). *Psychometric theory* (3rd ed.). McGraw-Hill.

Rogers, R. W. (1975). A protection motivation theory of fear appeals and attitude change. *The Journal of Psychology, 91*(1), 93-114. https://doi.org/10.1080/00223980.1975.9915803

Rogers, R. W. (1983). Cognitive and physiological processes in fear appeals and attitude change: A revised theory of protection motivation. In J. T. Cacioppo & R. E. Petty (Eds.), *Social psychophysiology: A sourcebook* (pp. 153-176). Guilford Press.

Saunders, M., Lewis, P., & Thornhill, A. (2019). *Research methods for business students* (8th ed.). Pearson.

Ulven, J. B., & Wangen, G. (2021). A systematic review of cybersecurity risks in higher education. *Future Internet, 13*(2), 39. https://doi.org/10.3390/fi13020039

Yamane, T. (1967). *Statistics: An introductory analysis* (2nd ed.). Harper and Row.
