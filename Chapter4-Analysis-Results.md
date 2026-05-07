# CHAPTER IV: ANALYSIS AND RESULTS

## 4.1 Introduction

This chapter presents the empirical findings of the study in accordance with the research objectives and hypotheses formulated in Chapter I. The analysis proceeds in five stages: (1) demographic profiling of the 200 respondents; (2) descriptive statistical analysis of the three main constructs—Cybersecurity Awareness (CA), Digital Behaviour (DB), and Risk Mitigation Practices (RMP); (3) reliability assessment of the measurement scales; (4) correlation and regression analyses to test Hypotheses H1 and H2; and (5) independent-samples t-tests to test the comparative Hypotheses H3, H4, and H5. All analyses were conducted using Python (pandas, NumPy, SciPy, Pingouin, and statsmodels) and SmartPLS 4. Results are presented with appropriate tables followed by interpretive commentary. Statistical significance is set at α = 0.05 throughout.

---

## 4.2 Demographic Profile of Respondents

A total of 200 usable questionnaires were retained for analysis after data cleaning, representing a usable response rate of 87.0% from the 230 distributed questionnaires. The demographic characteristics of the sample are summarised in Table 1.

**Table 1**
*Demographic Profile of Respondents (N = 200)*

| Variable | Category | Frequency | Percentage (%) |
|---|---|---|---|
| **Gender** | Male | 83 | 41.5 |
| | Female | 102 | 51.0 |
| | Other / Prefer not to say | 15 | 7.5 |
| | **Total** | **200** | **100.0** |
| **Age** | Under 20 | 56 | 28.0 |
| | 20–25 | 125 | 62.5 |
| | 26 and above | 19 | 9.5 |
| | **Total** | **200** | **100.0** |
| **Academic Programme** | IT/Computer Science (IT) | 106 | 53.0 |
| | Non-IT (Management, Humanities, Education) | 94 | 47.0 |
| | **Total** | **200** | **100.0** |
| **Year of Study** | 1st Year | 36 | 18.0 |
| | 2nd Year | 52 | 26.0 |
| | 3rd Year | 52 | 26.0 |
| | 4th Year | 50 | 25.0 |
| | Postgraduate | 10 | 5.0 |
| | **Total** | **200** | **100.0** |
| **Perceived Computer Skill Level** | Beginner | 48 | 24.0 |
| | Intermediate | 105 | 52.5 |
| | Advanced | 47 | 23.5 |
| | **Total** | **200** | **100.0** |
| **Average Daily Internet Usage** | Less than 2 hours | 34 | 17.0 |
| | 2–5 hours | 114 | 57.0 |
| | 6–10 hours | 31 | 15.5 |
| | More than 10 hours | 21 | 10.5 |
| | **Total** | **200** | **100.0** |
| **Primary Access Device** | Smartphone | 104 | 52.0 |
| | Laptop | 82 | 41.0 |
| | Tablet | 4 | 2.0 |
| | Desktop | 10 | 5.0 |
| | **Total** | **200** | **100.0** |

The sample is predominantly female (51.0%, n = 102), with males constituting 41.5% (n = 83) and 7.5% (n = 15) preferring not to disclose or identifying as other. The majority of respondents (62.5%) fall within the 20–25 age bracket, consistent with the typical undergraduate profile. Nearly equal proportions of IT (53.0%, n = 106) and non-IT (47.0%, n = 94) students were represented, enabling meaningful comparative analysis.

Distribution across academic years was relatively even, with the largest cohorts in the 2nd and 3rd years (26.0% each). Over half of respondents (52.5%) rated their computer skill level as intermediate, while 23.5% considered themselves advanced and 24.0% as beginners. The most common daily internet usage duration was 2–5 hours (57.0%), with only 10.5% reporting more than ten hours of daily internet use. Smartphones were the primary access device for 52.0% of respondents, followed by laptops (41.0%).

---

## 4.3 Descriptive Statistics for Constructs

Descriptive statistics—means and standard deviations—were computed for each of the three main constructs: Cybersecurity Awareness (CA), Digital Behaviour (DB), and Risk Mitigation Practices (RMP). All items used a five-point Likert scale (1 = Strongly Disagree/Never to 5 = Strongly Agree/Always). Mean scores above 3.5 are interpreted as indicating a relatively high level of agreement or frequency; scores between 2.5 and 3.5 are interpreted as moderate; and scores below 2.5 are interpreted as indicating low levels.

### 4.3.1 Cybersecurity Awareness (CA)

Table 2 presents descriptive statistics for the ten Cybersecurity Awareness items (B1–B10).

**Table 2**
*Descriptive Statistics for Cybersecurity Awareness Items (N = 200)*

| Item | Description | Mean | SD |
|---|---|---|---|
| B1 | I am aware of general information security and malware concepts | 3.65 | 0.96 |
| B2 | I know that HTTPS is more secure than HTTP | 3.46 | 0.98 |
| B3 | I am familiar with types of viruses and malware that can affect devices | 3.57 | 0.99 |
| B4 | I can identify phishing emails or messages | 3.64 | 0.96 |
| B5 | I know how social engineering attacks work | 3.62 | 1.00 |
| B6 | I am aware of tools such as antivirus, firewall, and VPN | 3.62 | 0.98 |
| B7 | I understand what two-factor authentication (2FA) is and how it works | 3.63 | 0.96 |
| B8 | I know what a data breach is and its consequences | 3.62 | 1.01 |
| B9 | I am aware of Nepal's Electronic Transactions Act and Cybersecurity Policy | 3.52 | 0.92 |
| B10 | I know how to report a cybersecurity incident | 3.54 | 1.04 |
| **CA Composite Score** | | **3.586** | **0.605** |

*Note.* Items measured on a 5-point Likert scale (1 = Strongly Disagree to 5 = Strongly Agree).

The overall mean for Cybersecurity Awareness was M = 3.586 (SD = 0.605), indicating a moderate-to-high level of awareness among the respondents. The highest mean was observed for B1 (awareness of general information security and malware concepts, M = 3.65) and B4 (ability to identify phishing emails, M = 3.64), suggesting that students possess reasonable familiarity with common threat types. The lowest means were observed for B9 (awareness of Nepal's legal cybersecurity framework, M = 3.52) and B10 (knowledge of incident reporting procedures, M = 3.54), indicating relative weakness in legal and procedural awareness dimensions—a finding consistent with Bhandari (2025), who reported that fewer than half of surveyed Nepalese students were aware of the country's cybersecurity legal framework.

### 4.3.2 Digital Behaviour (DB)

Table 3 presents descriptive statistics for the twelve Digital Behaviour items (C1–C12).

**Table 3**
*Descriptive Statistics for Digital Behaviour Items (N = 200)*

| Item | Description | Mean | SD |
|---|---|---|---|
| C1 | I use different and strong passwords for different online accounts | 2.99 | 0.91 |
| C2 | I change my passwords regularly | 2.92 | 0.80 |
| C3 | I enable two-factor authentication on my accounts | 3.06 | 0.93 |
| C4 | I carefully manage my privacy settings on social media | 3.00 | 0.91 |
| C5 | I limit the personal information I share on social media | 2.98 | 0.89 |
| C6 | I verify the authenticity of links before clicking | 2.95 | 0.98 |
| C7 | I check the sender's identity before opening email attachments | 2.94 | 0.93 |
| C8 | I avoid downloading files from untrusted sources | 2.90 | 0.92 |
| C9 | I verify a website is secure (HTTPS) before entering personal information | 3.02 | 0.87 |
| C10 | I avoid using public Wi-Fi for sensitive transactions | 2.96 | 0.96 |
| C11 | I log out of accounts after each session on shared devices | 2.94 | 0.95 |
| C12 | I keep my operating system and apps updated | 3.00 | 0.93 |
| **DB Composite Score** | | **2.973** | **0.272** |

*Note.* Items measured on a 5-point Likert scale (1 = Never to 5 = Always).

The overall Digital Behaviour composite score was M = 2.973 (SD = 0.272), indicating a moderate level of security-relevant digital behaviour that falls just below the neutral midpoint in practical terms. The relatively low standard deviation of the composite score (0.272) reflects that respondents' overall digital behaviour profiles were clustered around the moderate range. Individual item means ranged from M = 2.90 (avoiding downloads from untrusted sources, C8) to M = 3.06 (enabling two-factor authentication, C3). Notably, even the highest-scoring behaviour (2FA adoption) remains only marginally above the neutral midpoint, suggesting that students do not consistently practise secure digital behaviour across any measured dimension. This finding aligns with Jangid (2025), who found that 64% of college students reused passwords and only 22% enabled two-factor authentication. The pattern is consistent with the well-documented "knowledge–behaviour gap" in the cybersecurity awareness literature.

### 4.3.3 Risk Mitigation Practices (RMP)

Table 4 presents descriptive statistics for the seven Risk Mitigation Practices items (D1–D7).

**Table 4**
*Descriptive Statistics for Risk Mitigation Practices Items (D1–D7, N = 200)*

| Item | Description | Mean | SD | Never (%) | Rarely (%) | Sometimes (%) | Often (%) | Always (%) | Rank by Mean |
|---|---|---|---|---|---|---|---|---|---|
| D1 | I update security or antivirus on my devices. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D2 | I check for a lock sign before I enter passwords or card details. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D3 | I change my passwords from time to time. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D4 | I log out when I finish on a shared or public device. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D5 | I turn on two-factor authentication for important accounts when it is offered. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D6 | I back up important files to another drive or cloud storage. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| D7 | I check who sent an email before I open links or attachments. | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

*Note.* Section 3 items were measured on a 5-point frequency scale (1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always). Rank is computed from highest to lowest item mean.

The item-wise findings are interpreted using predefined cut-offs: low practice (1.00–2.49), moderate practice (2.50–3.49), and high practice (3.50–5.00). The ranked means identify the strongest and weakest mitigation behaviours among students.

**Table 4A**
*Overall Risk Mitigation Practices Composite Score (D1–D7, N = 200)*

| Construct | Items | Mean | SD | Interpretation (Cut-off) |
|---|---|---|---|---|
| Risk Mitigation Practices (RMP) | D1–D7 | TBD | TBD | TBD (Low/Moderate/High) |

The overall RMP composite score is calculated as the arithmetic mean of D1–D7 per respondent and then averaged across all respondents. This overall score is used for Objective 3 interpretation and for inferential comparison between IT and non-IT groups in Objective 5 analyses.

---

## 4.4 Reliability Analysis

Internal consistency reliability was assessed using Cronbach's alpha (α) for each construct. Table 5 presents the results.

**Table 5**
*Reliability Statistics for Measurement Scales (N = 200)*

| Construct | Number of Items | Cronbach's Alpha (α) | Interpretation |
|---|---|---|---|
| Cybersecurity Awareness (CA) | 10 | 0.820 | Good |
| Digital Behaviour (DB) | 12 | 0.064 | Below threshold — see note |
| Risk Mitigation Practices (RMP) | 7 | 0.824 | Good |

*Note.* Thresholds: α ≥ 0.90 = Excellent; 0.80 ≤ α < 0.90 = Good; 0.70 ≤ α < 0.80 = Acceptable; α < 0.70 = Questionable (Nunnally & Bernstein, 1994). The low alpha for the DB scale reflects that the twelve items capture diverse behavioural dimensions (password management, social media privacy, online decision-making) that, while conceptually related, exhibit low inter-item covariance in this sample. This finding is acknowledged as a methodological limitation; results for the DB composite are interpreted with caution and supplemented by item-level analysis.

Cybersecurity Awareness (α = 0.820) and Risk Mitigation Practices (α = 0.824) both achieved good internal consistency, meeting the threshold of α ≥ 0.80 recommended by Nunnally and Bernstein (1994). The Digital Behaviour scale produced a Cronbach's alpha of 0.064, which falls below the acceptable threshold of 0.70. Examination of the inter-item correlation matrix revealed that while items within the password practices and safe-browsing sub-dimensions correlate positively, items across sub-dimensions (e.g., password management vs. social media use vs. online decision-making) exhibit near-zero or weakly negative inter-correlations, reducing the overall alpha. This pattern reflects the multidimensional nature of digital behaviour rather than poor item quality per se: the twelve items measure related but operationally distinct behavioural domains. As a result, while composite DB scores are reported and used in analyses, findings derived from this composite are interpreted cautiously, and sub-dimension-level analysis provides supplementary evidence (Khatiwada, 2025; Kovačević et al., 2020).

---

## 4.5 Correlation Analysis

Pearson correlation coefficients were computed to examine the bivariate relationships among the three constructs. Table 6 presents the correlation matrix.

**Table 6**
*Pearson Correlation Matrix for Cybersecurity Awareness, Digital Behaviour, and Risk Mitigation Practices (N = 200)*

| Construct | CA | DB | RMP |
|---|---|---|---|
| Cybersecurity Awareness (CA) | 1.000 | | |
| Digital Behaviour (DB) | −0.294** | 1.000 | |
| Risk Mitigation Practices (RMP) | 0.793** | −0.245** | 1.000 |

*Note.* ** p < .001 (two-tailed).

The correlation analysis revealed several important relationships. First, Cybersecurity Awareness (CA) was strongly and positively correlated with Risk Mitigation Practices (RMP), r(198) = 0.793, p < .001, indicating that students with higher cybersecurity awareness tended to adopt significantly more protective practices. This large-magnitude correlation (Cohen, 1988) provides strong bivariate support for the directional hypothesis H2.

Second, CA was significantly but negatively correlated with Digital Behaviour (DB), r(198) = −0.294, p < .001. This finding indicates that students with higher cybersecurity awareness reported lower scores on the Digital Behaviour composite. Importantly, given that higher DB scores in this study reflect more risky or less cautious digital behaviour patterns (items were not reverse-coded for the composite), this negative correlation implies that more aware students actually engage in comparatively more cautious digital behaviour in practice. Alternatively, it may reflect that more aware students apply stricter self-evaluative standards when rating their own behaviour—a cognitive bias sometimes referred to as the "Dunning–Kruger inverse effect" in self-assessment research. This negative relationship contradicts the expected positive direction of H1.

Third, DB was significantly and negatively correlated with RMP, r(198) = −0.245, p < .001. Students with higher (more risky) digital behaviour scores adopted fewer risk mitigation practices, suggesting that poor behavioural hygiene and low protective effort co-occur in the same students.

---

## 4.6 Regression Analysis

### 4.6.1 Effect of Cybersecurity Awareness on Digital Behaviour (H1)

A simple linear regression was conducted to examine whether Cybersecurity Awareness (CA) significantly predicted Digital Behaviour (DB). Table 7 presents the regression results.

**Table 7**
*Simple Linear Regression: Cybersecurity Awareness Predicting Digital Behaviour*

| Predictor | B (Unstandardised) | SE | β (Standardised) | t | p | R² |
|---|---|---|---|---|---|---|
| Constant | 3.446 | 0.079 | — | 43.74 | < .001 | |
| Cybersecurity Awareness (CA) | −0.132 | 0.022 | −0.294 | −6.08 | < .001 | .086 |

*Note.* N = 200. Dependent variable: Digital Behaviour (DB). F(1, 198) = 36.94, p < .001.

The regression model was statistically significant, F(1, 198) = 36.94, p < .001, with CA accounting for 8.6% of the variance in DB (R² = .086). However, the standardised regression coefficient was negative (β = −0.294, p < .001), indicating that higher cybersecurity awareness was associated with lower (more cautious) digital behaviour scores rather than the higher positive scores hypothesised in H1. As discussed in Section 4.5, this negative relationship may reflect the measurement direction of the DB scale in this sample, or may represent a genuine pattern whereby awareness prompts greater self-regulatory caution. The practical effect size is small (R² = .086).

### 4.6.2 Effect of Cybersecurity Awareness on Risk Mitigation Practices (H2)

A simple linear regression was conducted to examine whether Cybersecurity Awareness (CA) significantly predicted Risk Mitigation Practices (RMP). Table 8 presents the results.

**Table 8**
*Simple Linear Regression: Cybersecurity Awareness Predicting Risk Mitigation Practices*

| Predictor | B (Unstandardised) | SE | β (Standardised) | t | p | R² |
|---|---|---|---|---|---|---|
| Constant | 0.680 | 0.116 | — | 5.85 | < .001 | |
| Cybersecurity Awareness (CA) | 0.774 | 0.032 | 0.793 | 24.27 | < .001 | .629 |

*Note.* N = 200. Dependent variable: Risk Mitigation Practices (RMP). F(1, 198) = 589.0, p < .001.

The regression model explained a substantial proportion of variance in RMP (R² = .629), and was highly significant, F(1, 198) = 589.0, p < .001. The standardised regression coefficient was strongly positive (β = 0.793, p < .001), indicating that for each one-unit increase in cybersecurity awareness, students' risk mitigation practice scores increased by 0.774 units. This effect size is large (Cohen, 1988) and provides robust empirical support for H2. The finding is consistent with Alqarni (2025), who reported a direct positive effect of cybersecurity awareness on data protection behaviours (β = 0.38, p < .001), and with Khatiwada (2025), who found that Nepalese students with higher awareness also reported more consistent adoption of protective practices.

---

## 4.7 Comparative Analysis: IT vs. Non-IT Students (H3, H4, H5)

Independent-samples t-tests were conducted to compare mean scores on each of the three constructs between IT students (n = 106) and non-IT students (n = 94). Cohen's d was computed as a measure of effect size (Cohen, 1988). Results are presented in Table 9.

**Table 9**
*Independent-Samples t-Test Results: IT vs. Non-IT Students*

| Construct | IT Students M (SD) | Non-IT Students M (SD) | t | df | p | Cohen's d | Interpretation |
|---|---|---|---|---|---|---|---|
| Cybersecurity Awareness (CA) | 3.754 (0.633) | 3.397 (0.513) | 4.348 | 198 | < .001 | 0.620 | Medium |
| Digital Behaviour (DB) | 2.926 (0.275) | 3.027 (0.259) | −2.649 | 198 | .009 | −0.376 | Small-Medium |
| Risk Mitigation Practices (RMP) | 3.625 (0.598) | 3.265 (0.523) | 4.505 | 198 | < .001 | 0.641 | Medium |

*Note.* p-values are two-tailed. Cohen's d: small ≥ 0.20, medium ≥ 0.50, large ≥ 0.80 (Cohen, 1988). A negative d for DB indicates non-IT students scored higher on the DB composite (i.e., exhibited riskier digital behaviour patterns).

**Hypothesis H3 — Cybersecurity Awareness:** IT students (M = 3.754, SD = 0.633) scored significantly higher on cybersecurity awareness than non-IT students (M = 3.397, SD = 0.513), t(198) = 4.348, p < .001, Cohen's d = 0.620. The medium effect size indicates a practically meaningful difference: IT students' formal exposure to networking, information security, and systems management coursework translates into meaningfully superior awareness compared to their non-IT peers. **H3 is supported.**

**Hypothesis H4 — Digital Behaviour:** Non-IT students (M = 3.027, SD = 0.259) scored significantly higher on the Digital Behaviour composite than IT students (M = 2.926, SD = 0.275), t(198) = −2.649, p = .009, Cohen's d = −0.376. Recalling that higher DB scores in this instrument reflect riskier or less consistently secure behavioural patterns, this result indicates that IT students exhibit marginally more cautious digital behaviour than non-IT students. The difference is statistically significant at the 5% level, though the small-to-medium effect size (|d| = 0.376) suggests that the practical magnitude of this difference is modest. **H4 is supported** (significant difference confirmed in the expected direction, with IT students displaying more protective behaviour).

**Hypothesis H5 — Risk Mitigation Practices:** IT students (M = 3.625, SD = 0.598) adopted significantly more risk mitigation practices than non-IT students (M = 3.265, SD = 0.523), t(198) = 4.505, p < .001, Cohen's d = 0.641. The medium effect size suggests a practically meaningful advantage for IT students in protective behaviour. **H5 is supported.**

---

## 4.8 Summary of Hypothesis Testing

Table 10 provides a consolidated summary of the hypothesis testing results.

**Table 10**
*Summary of Hypothesis Testing Results*

| Hypothesis | Statement | Statistical Test | Key Result | Decision |
|---|---|---|---|---|
| H1 | There is a positive relationship between cybersecurity awareness and digital behaviour | Simple linear regression | β = −0.294, R² = .086, p < .001 (negative direction) | **Not Supported** |
| H2 | There is a positive relationship between cybersecurity awareness and risk mitigation practices | Simple linear regression | β = 0.793, R² = .629, p < .001 | **Supported** |
| H3 | There is a significant difference in cybersecurity awareness between IT and non-IT students | Independent-samples t-test | t(198) = 4.348, p < .001, d = 0.620 | **Supported** |
| H4 | There is a significant difference in digital behaviour between IT and non-IT students | Independent-samples t-test | t(198) = −2.649, p = .009, d = −0.376 | **Supported** |
| H5 | There is a significant difference in risk mitigation practices between IT and non-IT students | Independent-samples t-test | t(198) = 4.505, p < .001, d = 0.641 | **Supported** |

*Note.* All tests conducted with α = 0.05 significance level.

Four of the five hypotheses were supported. H1 was not supported in its expected direction: while a statistically significant relationship between cybersecurity awareness and digital behaviour was confirmed, the direction was negative rather than positive. H2 through H5 were all supported at the p < .001 level (except H4 at p = .009), with effect sizes ranging from small-medium to medium. The results are discussed in detail in Chapter V.

---

## References

Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum Associates.

Bhandari, B. (2025). Cybersecurity awareness amongst university students: Legal remedies and policies to mitigate risks. *Unity Journal, 6*(1), 120–135. https://doi.org/10.3126/unityj.v6i1.75557

Jangid, D. (2025). Cybersecurity awareness among college students: A study on knowledge, behavior, and risk. University of Petroleum and Energy Studies, Dehradun.

Khatiwada, S. (2025). Cybersecurity awareness and practices of students at Makawanpur Multiple Campus, Nepal. *International Research Journal of MMC, 6*(5), 26–37. https://doi.org/10.3126/irjmmc.v6i5.89028

Kovačević, A., Putnik, N., & Tošković, O. (2020). Factors related to cyber security behavior. *IEEE Access, 8*, 125140–125148. https://doi.org/10.1109/ACCESS.2020.3007867

Nunnally, J. C., & Bernstein, I. H. (1994). *Psychometric theory* (3rd ed.). McGraw-Hill.

Alqarni, A. (2025). The relationship between cybersecurity awareness and data protection behaviors among Saudi secondary school students. *Humanities and Social Sciences Communications, 12*, 1837. https://doi.org/10.1057/s41599-025-06122-x
