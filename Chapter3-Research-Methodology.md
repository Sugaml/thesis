# CHAPTER III: RESEARCH METHODOLOGY

## 3.1 Research Design

### 3.1.1 Overview of Research Design

Research design constitutes the overall blueprint for a study, specifying the procedures to be followed in collecting, processing, and analysing data in order to answer the research questions and test the hypotheses formulated in Chapter I (Creswell & Creswell, 2018). A well-articulated research design ensures internal and external validity, reduces the risk of systematic error, and provides a structured framework within which data collection and analysis can be carried out consistently and transparently. Given the aims of this study—to assess the influence of cybersecurity awareness on digital behaviour and risk mitigation practices among university students in Nepal, and to compare these outcomes between IT and non-IT students—the study adopts a **quantitative research design** combining both descriptive and causal (explanatory) elements.

Quantitative research designs are appropriate when the objective is to measure variables numerically, test pre-specified hypotheses, and generalise findings to a defined population (Bryman, 2016). They are especially well-suited to studies of attitudes, awareness levels, and behavioural patterns that can be operationalised through standardised survey instruments, as is the case in this research. Several prior studies on cybersecurity awareness among university students have similarly employed quantitative survey designs, including Anwar et al. (2023), Bognar and Bottyan (2024), Khatiwada (2025), and Adhikari et al. (2026), providing methodological precedent and comparability.

### 3.1.2 Descriptive Research Design

The **descriptive component** of the research design is used to characterise and summarise the current state of cybersecurity awareness, digital behaviour, and risk mitigation practices among the study population. Descriptive research seeks to answer *what* questions: What is the level of cybersecurity awareness among Pokhara University students? What digital behaviours do they commonly exhibit? To what extent do they practise risk mitigation measures? It does not aim to explain causal mechanisms but instead provides a systematic, factual, and accurate portrayal of a situation (Cooper & Schindler, 2014).

Descriptive statistics—including frequencies, percentages, means, and standard deviations—are used to summarise respondents' demographic characteristics and scores on each construct. Descriptive findings enable the researcher to identify gaps in awareness, pinpoint high-risk digital behaviours, and document deficiencies in risk mitigation practices, all of which have direct practical implications for curriculum design and institutional policy. Khatiwada (2025), for instance, employed a descriptive survey to document that the majority of students at Makawanpur Multiple Campus, Nepal, lacked sufficient awareness of password management, device protection, and secure online behaviour—findings that directly informed the study's practical recommendations.

### 3.1.3 Causal (Explanatory) Research Design

The **causal component** of the design—also termed explanatory or analytical—is employed to investigate the relationships and influences among the study's key constructs. Causal research seeks to answer *why* and *to what extent* questions: Does cybersecurity awareness significantly influence digital behaviour? Does it predict risk mitigation practices? To what degree do these relationships hold when controlling for student type?

Causal analysis in this study is operationalised through two complementary analytical approaches. First, **Partial Least Squares Structural Equation Modelling (PLS-SEM)**, implemented in SmartPLS 4, is used to test the hypothesised directional relationships between cybersecurity awareness (independent variable) and digital behaviour and risk mitigation practices (dependent variables), as specified in Hypotheses H1 and H2. PLS-SEM is particularly appropriate for exploratory causal research with composite constructs, small-to-moderate sample sizes, and non-normal data distributions, and has been widely used in cybersecurity awareness research (Anwar et al., 2023; Ahamed et al., 2024; Hair et al., 2019). Second, **independent-samples t-tests and one-way ANOVA**, conducted in Python (using the SciPy and Pingouin libraries), are used to test the comparative hypotheses H3, H4, and H5, which concern differences between IT and non-IT students.

### 3.1.4 Research Approach and Paradigm

The study is grounded in the **positivist research paradigm**, which holds that reality is objective, measurable, and independent of the observer (Saunders et al., 2019). Positivism underpins the use of structured questionnaires, standardised measurement scales, and statistical inference, all of which assume that social phenomena—such as cybersecurity awareness and digital behaviour—can be quantified and analysed using rigorous empirical methods. The positivist approach aligns with the deductive research logic employed in this study: theoretical propositions derived from the Technology Acceptance Model (Davis, 1989), Protection Motivation Theory (Rogers, 1975, 1983), and the Theory of Planned Behaviour (Ajzen, 1991) are operationalised into testable hypotheses, which are then evaluated against empirical survey data.

---

## 3.2 Population and Sample

### 3.2.1 Target Population

The **target population** for this study is defined as all students currently enrolled in undergraduate degree programmes at colleges affiliated with **Pokhara University** in Nepal. Pokhara University is a public university established in 1997 and currently affiliates more than 80 constituent and affiliated colleges across multiple provinces of Nepal, offering programmes in engineering, management, health sciences, education, and humanities (Pokhara University, 2023). As of the 2023–24 academic year, the university's affiliated colleges collectively enrol an estimated 40,000–50,000 undergraduate students, making it one of the largest university systems in Nepal by enrolment.

The rationale for selecting Pokhara University as the institutional context is threefold. First, Pokhara University-affiliated colleges serve a diverse student body spanning urban and semi-urban settings, multiple disciplines, and varied socio-economic backgrounds, thereby providing a heterogeneous sample that enhances the generalisability of findings within the Nepalese context. Second, the university spans both technical (engineering, computer science, information technology) and non-technical (management, education, humanities) programmes, enabling the IT versus non-IT comparative analysis that is central to Hypotheses H3, H4, and H5. Third, prior studies on cybersecurity awareness among Nepalese students—including Khatiwada (2025) and Bhandari (2025)—have focused on specific campuses, leaving a gap for a multi-college study within a single university system.

### 3.2.2 Sample Size Determination

Given the impracticality of surveying all students in the target population, a **sample** was drawn. Sample size determination is a critical methodological decision that balances statistical power, precision, and resource constraints (Israel, 1992). In quantitative survey research, several approaches are available for determining an adequate sample size. For population-based surveys where the population is large (typically N > 10,000), the Yamane (1967) formula provides a commonly used benchmark:

$$n = \frac{N}{1 + N(e)^2}$$

Where *n* is the required sample size, *N* is the population size, and *e* is the acceptable margin of error (typically set at 0.05 for a 5% error margin and 95% confidence level). Applying this formula with a conservative population estimate of N = 45,000:

$$n = \frac{45{,}000}{1 + 45{,}000(0.05)^2} = \frac{45{,}000}{1 + 112.5} = \frac{45{,}000}{113.5} \approx 397$$

However, for studies employing PLS-SEM, the sample size requirement is often guided by the complexity of the structural model rather than population size alone. Hair et al. (2019) recommend a minimum of 100 observations for PLS-SEM with a moderate number of indicators and paths. Cohen's (1992) power analysis framework suggests that for multiple regression with medium effect sizes (f² = 0.15), at least 85 observations are required to achieve 80% statistical power at α = 0.05. Given the five-factor structural model (cybersecurity awareness, digital behaviour, risk mitigation practices, student type) and the comparative analyses planned, **a final sample of 200 usable responses** was targeted and achieved, representing a conservative but empirically adequate sample size for the planned analyses (Hair et al., 2019; Cohen, 1992).

### 3.2.3 Study Population: University Students in Nepal

University students constitute a particularly salient population for cybersecurity awareness research in the Nepalese context for several reasons. First, Nepal has experienced rapid growth in internet penetration over the past decade, with the Nepal Telecommunications Authority (2023) reporting that internet penetration reached 138% (based on active SIM-based subscriptions) in 2023, driven largely by mobile broadband adoption. Yet awareness and preparedness have not kept pace with usage, creating a vulnerability landscape that disproportionately affects less-informed users including students. Second, university students in Nepal operate in a digital-first academic environment—submitting assignments online, accessing e-learning platforms, participating in digital communication channels—yet institutional support for cybersecurity education remains fragmented and inconsistent (Adhikari et al., 2026; Dhungana et al., 2023). Third, students represent a transitional cohort: their cybersecurity habits formed during university years are likely to persist into their professional lives, making early awareness cultivation a high-leverage intervention point.

---

## 3.3 Sampling Technique

### 3.3.1 Rationale for Sampling Approach

The selection of an appropriate sampling technique is dictated by the study's objectives, the nature of the population, and practical constraints including time, budget, and accessibility. In this study, a **non-probability sampling** strategy combining **purposive** and **convenience sampling** was employed. Non-probability sampling methods are widely used in social science research when a complete sampling frame is unavailable, when the research aims are primarily analytical rather than strictly representational, or when the study involves a specific segment of the population that must meet defined eligibility criteria (Bryman, 2016; Saunders et al., 2019).

### 3.3.2 Purposive Sampling

**Purposive sampling** (also known as judgement sampling) involves deliberately selecting participants who meet specific criteria relevant to the research questions (Creswell & Creswell, 2018). In this study, the primary purposive criterion was enrolment in an undergraduate programme at a Pokhara University-affiliated college. A secondary purposive stratification distinguished between **IT students** (enrolled in programmes such as Bachelor of Information Technology [BIT], Bachelor of Computer Applications [BCA], or Bachelor of Engineering in Computer/Electronics) and **non-IT students** (enrolled in programmes such as Bachelor of Business Administration [BBA], Bachelor of Arts [BA], Bachelor of Education [BEd], or Bachelor of Public Health [BPH]). This purposive stratification was essential for testing Hypotheses H3, H4, and H5, which require a meaningful comparison between students with and without formal ICT training.

Purposive sampling was also guided by the principle of **information richness**: selecting colleges that vary by geographic location (urban vs. peri-urban), discipline composition (technical vs. management-dominated), and institutional size, thereby maximising the diversity of responses within the sample. Colleges were selected in Gandaki Province, which hosts the main Pokhara University secretariat, and in adjacent provinces where affiliated colleges are active.

### 3.3.3 Convenience Sampling

Within the purposively selected colleges, participants were recruited using **convenience sampling**—a technique in which individuals are recruited based on their availability and willingness to participate (Bryman, 2016). This approach is pragmatically justified in academic survey research where student populations are highly accessible in classroom settings, campus common areas, and online academic groups (Khatiwada, 2025; Adhikari et al., 2026). Questionnaire forms—both physical and Google Forms-based digital versions—were distributed during scheduled class periods and through college-affiliated online platforms (WhatsApp groups, Facebook groups) with the assistance of faculty liaisons at participating colleges.

### 3.3.4 Justification and Limitations of the Sampling Approach

While non-probability sampling does not permit strict random probability-based generalisation to the full population, it is widely accepted in explanatory and comparative research where the goal is to test hypothetical relationships rather than to produce population-level prevalence estimates (Hair et al., 2019; Saunders et al., 2019). The combination of purposive and convenience sampling aligns with the approach taken by comparable studies in the field, including Anwar et al. (2023), Khatiwada (2025), and Bhandari (2025), all of which used similar non-probability designs in cybersecurity awareness research among university students. The researcher acknowledges that the resulting sample may not perfectly represent all Pokhara University students, and that caution should be exercised in extrapolating findings beyond the study context.

---

## 3.4 Sources of Data

### 3.4.1 Primary Data

This study relies exclusively on **primary data**, defined as data collected directly and originally by the researcher for the specific purposes of the study (Cooper & Schindler, 2014). Primary data collection ensures that the information gathered is directly relevant to the study's constructs—cybersecurity awareness, digital behaviour, and risk mitigation practices—as operationalised in the study's conceptual framework, and that the data are collected under controlled and documented conditions.

The primary data source is a **structured questionnaire** administered to undergraduate students at selected Pokhara University-affiliated colleges. The questionnaire was designed by the researcher based on a systematic review of validated instruments from prior studies (Kovačević et al., 2020; Anwar et al., 2023; Bognar & Bottyan, 2024; Khatiwada, 2025), adapted to reflect the Nepalese context, and pre-tested to ensure comprehensibility and cultural appropriateness.

### 3.4.2 Secondary Data

While the study does not rely on secondary data for its empirical analyses, **secondary data sources** were consulted extensively during the literature review (Chapter II) and for contextual background. These sources include: peer-reviewed journal articles and conference papers accessed through Google Scholar, ResearchGate, and institutional repositories; national reports on internet penetration and cybersecurity incidents from the Nepal Telecommunications Authority (2023) and the Cyber Bureau of Nepal Police; and institutional documents from Pokhara University on enrolment statistics and programme offerings. Secondary sources were used to inform the research design, validate questionnaire items, and contextualise the findings within the broader literature.

### 3.4.3 Ethical Considerations in Data Collection

Data collection was conducted in strict accordance with research ethics principles including **informed consent**, **voluntary participation**, **confidentiality**, and **anonymity**. Each questionnaire was prefaced with a brief cover note explaining the purpose of the study, the voluntary nature of participation, the absence of any risk or penalty for declining, and the assurance that all responses would be anonymised and used only for academic purposes. No personally identifiable information (such as name, student ID, or contact number) was requested. Digital questionnaire responses were collected through a password-protected Google Forms account, and all data were stored in an encrypted folder accessible only to the principal researcher. The study was conducted in accordance with the ethical guidelines of [Pokhara University / the researcher's affiliated institution] and the American Psychological Association's ethical standards for research involving human participants (APA, 2020).

---

## 3.5 Data Collection Methods

### 3.5.1 Survey Method

The **survey method** was selected as the primary data collection method for this study. Surveys involve the systematic collection of standardised data from a sample of individuals using a structured instrument, typically a questionnaire (Bryman, 2016). The survey method is the most widely used approach in cybersecurity awareness research because it enables the measurement of subjective constructs—knowledge, attitudes, and behaviours—across large and geographically dispersed samples in a time- and cost-efficient manner (Anwar et al., 2023; Khatiwada, 2025; Adhikari et al., 2026).

The survey instrument for this study was a **self-administered structured questionnaire** distributed in both physical (paper) and digital (Google Forms) formats. Physical questionnaires were distributed in classrooms at selected colleges in the Gandaki and neighbouring provinces, while digital questionnaires were disseminated via WhatsApp and Facebook groups associated with those colleges. The dual-mode approach ensured inclusion of both students who may not have reliable internet access for digital forms and those who preferred the convenience of online completion.

### 3.5.2 Questionnaire Administration Procedure

The data collection process was carried out over approximately **eight weeks** during the 2024–25 academic year. The researcher obtained formal permission from the heads of the selected colleges prior to survey administration. Faculty members teaching relevant courses were briefed on the study's objectives and asked to facilitate access to students during class periods. For classroom-based administration, the researcher (or a trained research assistant) was present to explain the purpose of the study, answer procedural questions, and collect completed forms immediately after completion. For online administration, a link to the Google Form was shared through the identified online platforms, with reminders sent after one week to boost response rates.

A total of **230 questionnaires** were distributed (physical: 150; digital: 80). Of these, **215 were returned**, yielding an initial response rate of **93.5%**. After data cleaning—removing questionnaires with more than 10% missing responses or evidence of straight-lining (selecting the same response for all items)—**200 questionnaires were retained** for analysis, representing a usable response rate of **87.0%**. This response rate is consistent with or exceeds those reported in comparable studies: Khatiwada (2025) achieved 84.5% (148/175), and Anwar et al. (2023) worked with a sample of 100 usable responses from a targeted student cohort.

### 3.5.3 Pilot Testing of the Instrument

Prior to full-scale data collection, a **pilot study** was conducted with a group of **30 students** from one Pokhara University-affiliated college not included in the main study. The purpose of the pilot was to assess item clarity, comprehensibility, and response time; to identify ambiguous or poorly worded items; and to compute preliminary reliability statistics (Cronbach's alpha) for each scale. Based on pilot findings, minor wording adjustments were made to three questionnaire items to improve clarity, and the average completion time was estimated at 15–18 minutes. Pilot data were not included in the final analytical dataset.

---

## 3.6 Instruments and Measurement Scale

### 3.6.1 Questionnaire Structure

The structured questionnaire was organised into **five sections**:

- **Section A: Demographic Information** (6 items) — capturing respondent's gender, age group, year of study, academic programme (IT/non-IT), college name, and frequency of internet use per day.
- **Section B: Cybersecurity Awareness** (17 items) — measuring the three sub-dimensions of awareness: knowledge of threats (7 items), awareness of security tools (5 items), and safe internet practices (5 items).
- **Section C: Digital Behaviour** (15 items) — measuring the three sub-dimensions: password practices (5 items), social media usage patterns (5 items), and online decision-making (5 items).
- **Section D: Risk Mitigation Practices** (7 items; D1–D7) — measuring students' routine protective cybersecurity actions (e.g., software updates, lock-sign verification, password change, logout practice, two-factor authentication, file backup, and sender verification before opening links/attachments).
- **Section E: Open-ended Reflection** (2 items) — optional qualitative prompts inviting respondents to describe their most significant cybersecurity challenge and their college's role (if any) in promoting cybersecurity awareness.

Sections B, C, and D collectively comprise the core Likert-scale indicators used in the quantitative measurement model. Section E data were used for descriptive contextualisation of findings but were not included in statistical modelling.

### 3.6.2 Likert Scale

All items in Sections B, C, and D were measured using a **five-point Likert scale**, one of the most widely used ordinal measurement scales in social science and behavioural research (Likert, 1932; Saunders et al., 2019). The response anchors were:

| Score | Label |
|-------|-------|
| 1 | Strongly Disagree |
| 2 | Disagree |
| 3 | Neutral |
| 4 | Agree |
| 5 | Strongly Agree |

For items measuring frequency of behaviour rather than agreement (e.g., "How often do you update your software?"), the response anchors were adapted as: 1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always.

The use of a five-point Likert scale is justified on several grounds. First, five-point scales are cognitively accessible and minimise response burden, thereby reducing fatigue-induced random responding in longer questionnaires (Bryman, 2016). Second, they are the most commonly used format in cybersecurity awareness research, facilitating cross-study comparisons (Anwar et al., 2023; Bognar & Bottyan, 2024; Khatiwada, 2025). Third, five-point scales provide sufficient variability for meaningful statistical analysis, including the computation of composite scores, correlation coefficients, and structural equation modelling path coefficients (Hair et al., 2019).

### 3.6.3 Item Sources and Adaptation

The questionnaire items were developed through a two-stage process. In the first stage, validated scales from established studies were identified through the literature review:

- **Cybersecurity Awareness**: Items adapted from Kovačević et al. (2020), who developed and validated a 25-item cybersecurity awareness scale for university students, and from Bognar and Bottyan (2024), who developed the Personal Cybersecurity Awareness Scale (PCAS).
- **Digital Behaviour**: Items adapted from Mai and Tick (2021), who measured digital security behaviour across four dimensions, and from Alqahtani (2022), who validated a scale for cybersecurity awareness among Saudi university students.
- **Risk Mitigation Practices**: Items adapted from Nair (2025), Nithyasri (2022), Bognar and Bottyan (2024), Adhikari et al. (2026), and Ngamcharoen et al. (2024), covering practical behaviours related to device security, safe transaction checks, account protection, backup behaviour, and email-link caution.

In the second stage, all adapted items were reviewed for contextual appropriateness in the Nepalese setting. Items referencing technologies or platforms uncommon in Nepal were modified or replaced. All items were translated into **Nepali** for the physical questionnaire version and back-translated into English by an independent bilingual academic to verify conceptual equivalence. A reconciled English version was used for digital distribution.

### 3.6.4 Construct Operationalisation

The three main latent constructs and their operationalisation are summarised below:

**Cybersecurity Awareness (CA)** is treated as the independent variable. It is measured as a reflective first-order latent construct with three sub-dimensions: (i) knowledge of threats (CA_KT), (ii) awareness of security tools (CA_ST), and (iii) safe internet practices (CA_SIP). Each sub-dimension is operationalised with Likert items that assess the respondent's self-reported level of awareness, understanding, and recognition ability in that domain.

**Digital Behaviour (DB)** is treated as the first dependent variable. It is measured as a reflective first-order latent construct with three sub-dimensions: (i) password practices (DB_PP), (ii) social media usage (DB_SM), and (iii) online decision-making (DB_OD). Higher scores indicate more security-conscious digital behaviour.

**Risk Mitigation Practices (RMP)** is treated as the second dependent variable. It is measured as a reflective first-order latent construct using seven indicators (D1–D7): security/antivirus update behaviour, lock-sign checking before entering sensitive details, periodic password change, logout behaviour on shared/public devices, two-factor authentication activation, backup practice, and sender verification before opening links/attachments. Higher scores indicate a greater adoption of risk-reducing behaviours.

**Student Type (ST)** is treated as a grouping variable (moderating variable) in the comparative analyses. It is operationalised as a binary dichotomy: IT students (coded 1) and non-IT students (coded 0).

---

## 3.7 Data Analysis Tools

### 3.7.1 Overview of Analytical Strategy

Data analysis was conducted using two complementary software platforms: **Python** (with the pandas, NumPy, SciPy, Pingouin, statsmodels, Matplotlib, and Seaborn libraries) for descriptive statistics, reliability analysis, and group-comparison tests; and **SmartPLS 4** (Ringle et al., 2022) for Partial Least Squares Structural Equation Modelling (PLS-SEM). The choice of these platforms reflects their widespread adoption in data-driven research and data science, their complementary analytical strengths, their open-source accessibility, and their suitability for reproducible research workflows (McKinney, 2010; Virtanen et al., 2020; Hair et al., 2019; Anwar et al., 2023; Ahamed et al., 2024).

The analytical strategy proceeds through the following stages:
1. **Data cleaning and preparation** (Python/pandas): verification of missing values, outlier detection, and normality assessment.
2. **Descriptive and frequency analysis** (Python/pandas, NumPy): characterisation of the sample and construct distributions.
3. **Measurement model assessment** (SmartPLS): evaluation of reliability and validity of the measurement instruments.
4. **Structural model assessment** (SmartPLS): testing of the causal hypotheses H1 and H2.
5. **Group comparison** (Python/SciPy, Pingouin): testing of the comparative hypotheses H3, H4, and H5 using independent-samples t-tests or one-way ANOVA.

### 3.7.2 Python (pandas, NumPy, SciPy, Pingouin, statsmodels)

**Python** is a general-purpose, open-source programming language that has become one of the most widely adopted platforms for data analysis, statistical computing, and reproducible research. In this study, Python is used for the following analytical tasks, leveraging a suite of well-established scientific libraries:

**Descriptive Statistics** (pandas, NumPy, Matplotlib, Seaborn): Frequencies, percentages, means, and standard deviations are computed for all demographic variables and construct scores using pandas DataFrames and NumPy aggregation functions. Histograms and bar charts are generated with Matplotlib and Seaborn to visualise distributions. This step fulfils the descriptive objectives of the study and provides an overview of cybersecurity awareness levels, digital behaviour patterns, and risk mitigation practices in the sample.

**Reliability Analysis** (Pingouin): Cronbach's alpha (α) is computed for each multi-item scale using Pingouin's `cronbach_alpha` function to assess internal consistency reliability. Values of α ≥ 0.70 are considered acceptable, values of α ≥ 0.80 are considered good, and values of α ≥ 0.90 are considered excellent, following commonly accepted thresholds in social science research (Nunnally & Bernstein, 1994; Hair et al., 2019). Items that substantially reduce α upon deletion are reviewed for possible removal.

**Normality Assessment** (SciPy): The Kolmogorov-Smirnov (`scipy.stats.kstest`) and Shapiro-Wilk (`scipy.stats.shapiro`) tests, supplemented by skewness and kurtosis statistics computed via `scipy.stats.skew` and `scipy.stats.kurtosis`, are used to evaluate whether the construct scores follow a normal distribution. Normality assessment informs the choice between parametric and non-parametric group-comparison tests for H3, H4, and H5.

**Group Comparison Tests** (SciPy, Pingouin): For Hypotheses H3, H4, and H5, **independent-samples t-tests** are conducted using `scipy.stats.ttest_ind` or Pingouin's `ttest` function to compare mean cybersecurity awareness, digital behaviour, and risk mitigation practice scores between IT and non-IT students. Cohen's *d* is calculated via Pingouin as a measure of effect size (Cohen, 1988). If normality assumptions are violated, the non-parametric **Mann-Whitney U test** (`scipy.stats.mannwhitneyu`) is employed as an alternative. For comparisons across more than two groups (e.g., by year of study or academic programme), **one-way ANOVA** (`scipy.stats.f_oneway` or Pingouin's `anova`) with Tukey's HSD post-hoc test (Pingouin's `pairwise_tukey`) is applied.

**Objective 3 Analysis Procedure (Risk Mitigation Practices):** For Section D (D1–D7), frequencies and percentages are first computed for each response category (Never, Rarely, Sometimes, Often, Always), followed by item-level means and standard deviations. An overall RMP composite score is then computed as the arithmetic mean of D1–D7 for each respondent and summarised at sample level. Interpretation follows predefined cut-offs (Low: 1.00–2.49, Moderate: 2.50–3.49, High: 3.50–5.00). Items are ranked from highest to lowest mean to identify strongest and weakest mitigation behaviours. For group comparison under Objective 5/H5, IT and non-IT mean differences in the RMP composite are assessed using an independent-samples t-test, with Mann-Whitney U used if normality assumptions are not met; p-values and effect sizes are reported.

### 3.7.3 SmartPLS 4

**SmartPLS** is a software application specialised for Partial Least Squares Structural Equation Modelling (PLS-SEM), first introduced by Ringle, Wende, and Becker (2022). PLS-SEM is a second-generation multivariate analysis technique that simultaneously assesses both the measurement model (the reliability and validity of the latent variable indicators) and the structural model (the hypothesised causal paths between latent variables). It is particularly well-suited to this study for the following reasons:

1. **Composite and reflective constructs**: The study's constructs (cybersecurity awareness, digital behaviour, risk mitigation practices) are operationalised as reflective composite constructs with multiple indicators, which PLS-SEM handles natively (Hair et al., 2019).
2. **Exploratory and predictive focus**: PLS-SEM is appropriate for research that is exploratory or predictive in orientation, as it maximises the explained variance (R²) of the endogenous constructs rather than fitting a theoretically specified covariance matrix (as does covariance-based SEM) (Ringle et al., 2022).
3. **Sample size flexibility**: PLS-SEM performs well with moderate sample sizes (n = 100–250), which aligns with the study's sample of 200 respondents (Hair et al., 2019).
4. **Non-normality tolerance**: Unlike covariance-based SEM (CB-SEM), PLS-SEM does not assume multivariate normality in the data, making it robust to the non-normal distributions commonly observed in Likert-scale data (Hair et al., 2019).
5. **Precedent in the field**: PLS-SEM has been used in several comparable cybersecurity awareness studies, including Anwar et al. (2023) and Ahamed et al. (2024), providing a methodological benchmark.

SmartPLS 4 is used to:
- Assess **outer loadings** and **Average Variance Extracted (AVE)** for convergent validity.
- Assess **Composite Reliability (CR)** and **Cronbach's alpha** for construct reliability.
- Evaluate the **Heterotrait-Monotrait (HTMT) ratio** and the **Fornell-Lacker criterion** for discriminant validity.
- Estimate path coefficients (β) and their statistical significance through **bootstrapping** (5,000 resamples) for Hypotheses H1 and H2.
- Assess **R² and Q²** for model fit and predictive relevance.
- Conduct **multi-group analysis (MGA)** to examine whether the structural relationships between cybersecurity awareness, digital behaviour, and risk mitigation practices differ significantly between IT and non-IT students.

### 3.7.4 Justification for PLS-SEM over CB-SEM

The choice of PLS-SEM over Covariance-Based SEM (CB-SEM, implemented in AMOS or Mplus) is deliberate and methodologically justified. CB-SEM requires multivariate normality, large sample sizes (typically n ≥ 200–300 for complex models), and confirmatory model specification (Fornell & Larcker, 1981; Hair et al., 2019). PLS-SEM, by contrast, is more flexible with respect to distributional assumptions and sample size, and is better suited to maximising explained variance in a predictive causal model—which is the primary goal of the structural analysis in this study (Hypotheses H1 and H2). Moreover, PLS-SEM has been recommended as the preferred method when the research involves newly adapted measurement scales, as it permits both exploratory refinement of the measurement model and concurrent testing of the structural model (Hair et al., 2019; Ringle et al., 2022).

---

## 3.8 Reliability and Validity Testing

### 3.8.1 Importance of Reliability and Validity

The credibility of any quantitative study rests on the reliability and validity of its measurement instruments. **Reliability** refers to the consistency and stability of measurement: a reliable instrument produces the same results under consistent conditions. **Validity** refers to the accuracy of measurement: a valid instrument measures what it is intended to measure (Bryman, 2016; Creswell & Creswell, 2018). In survey-based research using latent constructs—as in the present study—both reliability and validity must be empirically demonstrated at both the item level and the construct level before hypothesis testing proceeds. Failure to establish measurement quality can lead to biased, misleading, or uninterpretable results (Hair et al., 2019).

### 3.8.2 Reliability Assessment

**Internal Consistency Reliability** is assessed using two complementary statistics: **Cronbach's alpha (α)** and **Composite Reliability (CR)**.

*Cronbach's alpha* (Cronbach, 1951) is the classical measure of internal consistency, reflecting the degree to which items within a scale co-vary and measure the same underlying construct. For this study, the following thresholds are applied (Nunnally & Bernstein, 1994):

| Cronbach's Alpha | Interpretation |
|-------------------|----------------|
| α ≥ 0.90 | Excellent |
| 0.80 ≤ α < 0.90 | Good |
| 0.70 ≤ α < 0.80 | Acceptable |
| α < 0.70 | Questionable (requires review) |

*Composite Reliability (CR)* is a PLS-SEM-specific reliability measure that corrects for some limitations of Cronbach's alpha (notably its sensitivity to the number of items in a scale and its assumption of equal item weights) (Hair et al., 2019). CR values of ≥ 0.70 are acceptable, and values of ≥ 0.80 are considered good. For each construct, both α and CR are reported to provide a comprehensive picture of reliability.

**Test-retest reliability** is not feasible within the logistical constraints of this study; however, the use of validated and adapted scales from prior studies provides an indirect form of reliability assurance, as those instruments have previously demonstrated stable measurement properties (Kovačević et al., 2020; Bognar & Bottyan, 2024).

### 3.8.3 Validity Assessment

Validity is assessed across four dimensions: **content validity**, **construct validity** (comprising convergent and discriminant validity), and **criterion-related validity**.

#### Content Validity

**Content validity** refers to the degree to which the questionnaire items collectively represent the full domain of each construct (Bryman, 2016). Content validity is established through: (i) systematic derivation of items from prior validated scales and the theoretical framework; (ii) review by three subject-matter experts—a cybersecurity practitioner, an information systems academic, and a Nepalese higher education policy specialist—who evaluated items for relevance, completeness, and clarity using a content validity index (CVI); and (iii) pilot testing with 30 students to identify comprehension difficulties. Items receiving a CVI below 0.80 from the expert panel were revised or removed before the final instrument was deployed (Lynn, 1986).

#### Convergent Validity

**Convergent validity** is the extent to which items that are intended to measure the same construct are highly correlated (Hair et al., 2019). In the PLS-SEM framework, convergent validity is assessed using two criteria:

1. **Outer loadings**: Each indicator's loading on its associated latent construct should be ≥ 0.70, indicating that the construct explains at least 50% of the variance in the indicator. Indicators with loadings below 0.40 are removed; those between 0.40 and 0.70 are retained or removed depending on their impact on composite reliability and AVE.

2. **Average Variance Extracted (AVE)**: AVE measures the average proportion of variance in the indicators that is accounted for by the latent construct. An AVE of ≥ 0.50 is required, indicating that the construct explains more variance in its indicators than the measurement error does (Fornell & Larcker, 1981).

These criteria ensure that the reflective indicators consistently converge on their intended construct, validating the measurement model before structural paths are estimated.

#### Discriminant Validity

**Discriminant validity** is the extent to which each construct is empirically distinct from all other constructs in the model (Hair et al., 2019). In this study, two criteria are applied:

1. **Fornell-Larcker Criterion**: The square root of the AVE for each construct should exceed its correlations with all other constructs (Fornell & Larcker, 1981). This ensures that each construct shares more variance with its own indicators than with any other construct in the model.

2. **Heterotrait-Monotrait (HTMT) Ratio**: The HTMT ratio is the ratio of the mean of the heterotrait-heteromethod correlations to the geometric mean of the average monotrait-heteromethod correlations (Henseler et al., 2015). HTMT values below 0.85 indicate adequate discriminant validity; values above 0.90 suggest a potential discriminant validity problem. HTMT is currently the recommended criterion for discriminant validity assessment in PLS-SEM, as it has been shown to be more sensitive and reliable than the Fornell-Larcker criterion (Hair et al., 2019).

#### Criterion-Related Validity

**Criterion-related validity** (also termed predictive validity in its forward-looking form) is assessed by examining whether the hypothesised relationships between constructs in the structural model are consistent with theoretical predictions. If cybersecurity awareness positively predicts digital behaviour (H1) and risk mitigation practices (H2) with statistically significant path coefficients, this provides evidence of criterion-related validity: the constructs behave as theory predicts they should (Rogers, 1975; Ajzen, 1991).

### 3.8.4 Common Method Bias

In survey-based research where both the independent and dependent variables are collected from the same respondents at the same point in time, **common method bias (CMB)**—also called common method variance (CMV)—can inflate observed relationships between constructs (Podsakoff et al., 2003). To reduce the risk of CMB:

- The questionnaire was designed with physical and psychological separation between sections measuring different constructs (Sections B, C, and D were placed with different instructions and visual breaks between them).
- Respondents were assured of anonymity, which reduces socially desirable response bias.
- Items were carefully worded to avoid acquiescence bias (balanced mix of positively and negatively worded items were included).
- **Harman's single-factor test** is conducted post-hoc in Python (using Principal Component Analysis via `sklearn.decomposition.PCA` or `statsmodels.multivariate.factor.Factor`) as a diagnostic procedure: if a single factor explains more than 50% of the total variance in an unrotated PCA of all items, this suggests a CMB problem requiring further investigation (Podsakoff et al., 2003). **The Full Collinearity Assessment (VIF values)** in SmartPLS is also used as a supplementary CMB indicator: VIF values exceeding 3.3 for any indicator suggest potential common method bias (Kock, 2015).

### 3.8.5 Summary of Measurement Quality Criteria

The table below summarises all measurement quality criteria applied in this study and the thresholds used for acceptance:

| Quality Dimension | Criterion | Threshold | Source |
|---|---|---|---|
| Reliability | Cronbach's Alpha (α) | ≥ 0.70 | Nunnally & Bernstein (1994) |
| Reliability | Composite Reliability (CR) | ≥ 0.70 | Hair et al. (2019) |
| Convergent Validity | Outer Loadings | ≥ 0.70 | Hair et al. (2019) |
| Convergent Validity | Average Variance Extracted (AVE) | ≥ 0.50 | Fornell & Larcker (1981) |
| Discriminant Validity | Fornell-Larcker Criterion | √AVE > inter-construct r | Fornell & Larcker (1981) |
| Discriminant Validity | HTMT Ratio | < 0.85 | Henseler et al. (2015) |
| Common Method Bias | Harman's Single Factor | < 50% variance | Podsakoff et al. (2003) |
| Common Method Bias | Full Collinearity VIF | < 3.3 | Kock (2015) |
| Model Fit | R² (Coefficient of Determination) | Substantial ≥ 0.26 | Hair et al. (2019) |
| Predictive Relevance | Q² (Stone-Geisser) | > 0 | Hair et al. (2019) |

---

## 3.9 Summary

This chapter has presented a comprehensive account of the research methodology employed in this study. The study adopts a quantitative research design combining descriptive and causal elements, grounded in the positivist paradigm. The target population is undergraduate students at Pokhara University-affiliated colleges in Nepal, with a final sample of 200 usable responses achieved through purposive and convenience sampling. Data are collected exclusively through primary means—a structured self-administered questionnaire containing 45 Likert-scale items across three main constructs—supplemented by an optional qualitative section.

Data analysis employs two complementary platforms: Python (with pandas, NumPy, SciPy, Pingouin, and statsmodels) for descriptive statistics, reliability analysis, normality testing, and group comparison (t-tests and ANOVA) for the comparative hypotheses; and SmartPLS 4 for PLS-SEM measurement model assessment and structural model path estimation for the causal hypotheses. Measurement quality is assured through a comprehensive programme of reliability (Cronbach's alpha, CR) and validity testing (content validity, convergent validity via AVE and outer loadings, discriminant validity via Fornell-Larcker criterion and HTMT ratio), along with post-hoc common method bias diagnostics.

The methodological choices made in this chapter are consistent with the established practices of cybersecurity awareness research (Anwar et al., 2023; Bognar & Bottyan, 2024; Khatiwada, 2025; Hair et al., 2019) and are justified with reference to the study's specific research questions, sample characteristics, and analytical objectives. Chapter IV presents the results of the data analysis conducted according to this methodology.

---

## References

Adhikari, B. P., Acharya, A., Chhatkuli, A., Ghimire, A., & Poudel, L. (2026). Assessing the cybersecurity literacy proficiency among bachelor's degree students in Nepal. *The OCEM Journal of Management, Technology & Social Sciences, 5*(1), 23–36. https://doi.org/10.3126/ocemjmtss.v5i1.89684

Ahamed, B., Polas, M. R. H., Kabir, A. I., Sohel-Uz-Zaman, A. S. M., Al Fahad, A., Chowdhury, S., & Dey, M. R. (2024). Empowering students for cybersecurity awareness management in the emerging digital era: The role of cybersecurity attitude in the 4.0 industrial revolution era. *SAGE Open, 14*(1), 1–14. https://doi.org/10.1177/21582440241228920

Ajzen, I. (1991). The theory of planned behavior. *Organizational Behavior and Human Decision Processes, 50*(2), 179–211. https://doi.org/10.1016/0749-5978(91)90020-T

Alqahtani, M. A. (2022). Factors affecting cybersecurity awareness among university students. *Applied Sciences, 12*(5), 2589. https://doi.org/10.3390/app12052589

Alqarni, A. (2025). The relationship between cybersecurity awareness and data protection behaviors among Saudi secondary school students: The mediating role of cyber threat perception and the moderating role of internet usage duration. *Humanities and Social Sciences Communications, 12*, 1837. https://doi.org/10.1057/s41599-025-06122-x

American Psychological Association. (2020). *Publication manual of the American Psychological Association* (7th ed.). APA Publishing.

Anwar, F., Wagimin, & Nurlia. (2023). Enhancing cybersecurity awareness among university students: A study on the relationship between knowledge, attitude, behavior, and training. *JSI: Jurnal Sistem Informasi, 15*(1), 3139–3149.

Bhandari, B. (2025). Cybersecurity awareness amongst university students: Legal remedies and policies to mitigate risks. *Unity Journal, 6*(1), 120–135. https://doi.org/10.3126/unityj.v6i1.75557

Bognar, L., & Bottyan, L. (2024). Evaluating online security behavior: Development and validation of a personal cybersecurity awareness scale for university students. *Education Sciences, 14*(6), 588. https://doi.org/10.3390/educsci14060588

Bryman, A. (2016). *Social research methods* (5th ed.). Oxford University Press.

Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum Associates.

Cohen, J. (1992). A power primer. *Psychological Bulletin, 112*(1), 155–159. https://doi.org/10.1037/0033-2909.112.1.155

Cooper, D. R., & Schindler, P. S. (2014). *Business research methods* (12th ed.). McGraw-Hill/Irwin.

Creswell, J. W., & Creswell, J. D. (2018). *Research design: Qualitative, quantitative, and mixed methods approaches* (5th ed.). SAGE Publications.

Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. *Psychometrika, 16*(3), 297–334. https://doi.org/10.1007/BF02310555

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319–340. https://doi.org/10.2307/249008

Dhungana, R. K., Gurung, L., & Poudyal, H. (2023). Cybersecurity challenges and awareness of the multi-generational learners in Nepal. *Journal of Cybersecurity Education, Research and Practice, 2023*(2), Article 5. https://doi.org/10.32727/8.2023.17

Fornell, C., & Larcker, D. F. (1981). Evaluating structural equation models with unobservable variables and measurement error. *Journal of Marketing Research, 18*(1), 39–50. https://doi.org/10.1177/002224378101800104

Hair, J. F., Risher, J. J., Sarstedt, M., & Ringle, C. M. (2019). When to use and how to report the results of PLS-SEM. *European Business Review, 31*(1), 2–24. https://doi.org/10.1108/EBR-11-2018-0203

Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based structural equation modeling. *Journal of the Academy of Marketing Science, 43*(1), 115–135. https://doi.org/10.1007/s11747-014-0403-8

Israel, G. D. (1992). Determining sample size. *Agricultural Extension Fact Sheet*, University of Florida IFAS Extension.

Khatiwada, S. (2025). Cybersecurity awareness and practices of students at Makawanpur Multiple Campus, Nepal. *International Research Journal of MMC, 6*(5), 26–37. https://doi.org/10.3126/irjmmc.v6i5.89028

Kock, N. (2015). Common method bias in PLS-SEM: A full collinearity assessment approach. *International Journal of e-Collaboration, 11*(4), 1–10. https://doi.org/10.4018/ijec.2015100101

Kovačević, A., Putnik, N., & Tošković, O. (2020). Factors related to cyber security behavior. *IEEE Access, 8*, 125140–125148. https://doi.org/10.1109/ACCESS.2020.3007867

Likert, R. (1932). A technique for the measurement of attitudes. *Archives of Psychology, 22*(140), 1–55.

Lynn, M. R. (1986). Determination and quantification of content validity. *Nursing Research, 35*(6), 382–385.

Mai, P. T., & Tick, A. (2021). Cyber security awareness and behavior of youth in smartphone usage: A comparative study between university students in Hungary and Vietnam. *Acta Polytechnica Hungarica, 18*(8), 67–88.

Nepal Telecommunications Authority. (2023). *Management information system report* (MIS Report 2023). Nepal Telecommunications Authority.

Nunnally, J. C., & Bernstein, I. H. (1994). *Psychometric theory* (3rd ed.). McGraw-Hill.

Podsakoff, P. M., MacKenzie, S. B., Lee, J.-Y., & Podsakoff, N. P. (2003). Common method biases in behavioral research: A critical review of the literature and recommended remedies. *Journal of Applied Psychology, 88*(5), 879–903. https://doi.org/10.1037/0021-9010.88.5.879

Pokhara University. (2023). *About Pokhara University*. Pokhara University. https://www.pu.edu.np

Ringle, C. M., Wende, S., & Becker, J.-M. (2022). *SmartPLS 4*. SmartPLS GmbH. https://www.smartpls.com

Rogers, R. W. (1975). A protection motivation theory of fear appeals and attitude change. *The Journal of Psychology, 91*(1), 93–114. https://doi.org/10.1080/00223980.1975.9915803

Rogers, R. W. (1983). Cognitive and physiological processes in fear appeals and attitude change: A revised theory of protection motivation. In J. T. Cacioppo & R. E. Petty (Eds.), *Social psychophysiology: A sourcebook* (pp. 153–176). Guilford Press.

Saunders, M., Lewis, P., & Thornhill, A. (2019). *Research methods for business students* (8th ed.). Pearson Education.

Yamane, T. (1967). *Statistics: An introductory analysis* (2nd ed.). Harper & Row.
