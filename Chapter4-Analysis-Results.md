# CHAPTER IV: DATA ANALYSIS, RESULTS, AND FINDINGS

## 4.1 Introduction

This chapter presents the statistical analysis of the updated dataset from `/home/runner/work/thesis/thesis/data/data-survey.csv`. The file contains **204 valid responses** and **34 variables** (Timestamp, A1–A5, B1–B7, C1–C7, D1–D7, E1–E7), with no missing values.

The analysis is organized to align with the study objectives and hypotheses. It includes:

1. Demographic profile of respondents,
2. Construct-level and item-level descriptive statistics,
3. Reliability analysis,
4. Correlation analysis,
5. Regression analysis,
6. Group comparison (IT vs non-IT),
7. Additional subgroup analysis (gender, age, and academic year), and
8. Hypothesis testing summary.

For interpretation, the key constructs are:

- **CA** = Cybersecurity Awareness (B1–B7),
- **DB** = Digital Behavior risk score (C1–C7; higher score = riskier behavior),
- **RMP** = Risk Mitigation Practices (D1–D7),
- **IF** = Influencing Factors (E1–E7; exploratory).

---

## 4.2 Data Preparation and Measurement Model

### 4.2.1 Data Screening

The updated file was checked for completeness and consistency. All rows were complete, and all measurement items were in the expected 1–5 scale format.

- Total respondents: **N = 204**
- Total variables: **34**
- Missing values: **0**

### 4.2.2 Composite Score Construction

Composite scores were calculated as the mean of each respondent's item responses:

- CA = mean(B1..B7)
- DB = mean(C1..C7)
- RMP = mean(D1..D7)
- IF = mean(E1..E7)

---

## 4.3 Demographic Profile of Respondents

**Table 4.1**  
*Demographic characteristics of respondents (N = 204)*

| Variable | Category | Frequency | Percentage (%) |
|---|---|---:|---:|
| Gender (A1) | Male | 122 | 59.8 |
|  | Female | 80 | 39.2 |
|  | Prefer not to say | 2 | 1.0 |
| Age (A2) | Under 20 | 8 | 3.9 |
|  | 20–25 | 79 | 38.7 |
|  | 26–40 | 115 | 56.4 |
|  | 41 and above | 2 | 1.0 |
| Academic Major (A3) | IT/Computer Science | 131 | 64.2 |
|  | Non-IT Related | 73 | 35.8 |
| Academic Year (A4) | 1st year | 17 | 8.3 |
|  | 2nd year | 14 | 6.9 |
|  | 3rd year | 12 | 5.9 |
|  | 4th year | 44 | 21.6 |
|  | Post-graduate | 117 | 57.4 |

The sample is dominated by respondents aged 26–40, and IT students represent a larger share than non-IT students. More than half of respondents are postgraduate-level students, enabling a reasonably stable major-based comparison.

---

## 4.4 Descriptive Statistics of Main Constructs

### 4.4.1 Construct-Level Descriptive Results

**Table 4.2**  
*Composite descriptive statistics*

| Construct | Items | Mean | SD | Min | Max | 95% CI of Mean |
|---|---|---:|---:|---:|---:|---|
| Cybersecurity Awareness (CA) | B1–B7 | 4.194 | 0.857 | 1.000 | 5.000 | 4.076–4.312 |
| Digital Behavior Risk (DB) | C1–C7 | 2.202 | 0.904 | 1.000 | 5.000 | 2.078–2.326 |
| Risk Mitigation Practices (RMP) | D1–D7 | 3.843 | 0.912 | 1.000 | 5.000 | 3.718–3.968 |
| Influencing Factors (IF) | E1–E7 | 3.685 | 0.735 | 1.000 | 5.000 | 3.584–3.786 |

The updated data show a high average awareness score, low-to-moderate risky digital behavior, and relatively strong mitigation practice. This pattern indicates that participants generally understand cyber risks and report moderate protective behavior, but risky actions still remain in specific daily habits.

### 4.4.2 Distribution Shape (Construct Scores)

- CA skewness = **-1.997**, kurtosis = **4.210** (high scores concentrated at upper scale points).
- DB skewness = **0.857**, kurtosis = **0.509** (risk behavior clustered at lower scores with a right tail).
- RMP skewness = **-0.804**, kurtosis = **0.593** (more frequent agreement with protective practices).
- IF skewness = **-0.855**, kurtosis = **2.054**.

These distributions are typical for awareness/behavior surveys where most participants report relatively safe attitudes and moderate compliance.

---

## 4.5 Item-Level Analysis

### 4.5.1 Awareness Items (B1–B7)

**Table 4.3A**  
*Cybersecurity awareness item statistics*

| Item | Mean | SD |
|---|---:|---:|
| B1 | 4.309 | 1.131 |
| B2 | 4.485 | 1.057 |
| B3 | 4.211 | 1.248 |
| B4 | 3.770 | 1.166 |
| B5 | 3.985 | 1.242 |
| B6 | 4.441 | 1.051 |
| B7 | 4.157 | 1.099 |

Highest awareness appears on phishing danger (B2) and risk of careless internet use (B6). Lower awareness appears in legal/policy knowledge (B4), indicating that students understand technical/personal risk better than legal framework details.

### 4.5.2 Digital Behavior Risk Items (C1–C7)

**Table 4.3B**  
*Risk-oriented digital behavior item statistics*

| Item | Description | Mean | SD |
|---|---|---:|---:|
| C1 | I use one password for many accounts. | 2.740 | 1.440 |
| C2 | I open links in emails from unknown senders. | 1.843 | 1.210 |
| C3 | I use public Wi-Fi for sensitive work without extra protection. | 2.495 | 1.430 |
| C4 | I download from untrusted websites. | 2.240 | 1.349 |
| C5 | I post personal location/photos openly. | 2.279 | 1.367 |
| C6 | I click pop-up ads while browsing. | 1.887 | 1.192 |
| C7 | I accept friend/chat requests from strangers. | 1.926 | 1.162 |

The highest-risk behaviors are password reuse (C1) and unsafe public Wi-Fi use (C3). These two practices remain the most critical behavioral gaps in the sample.

### 4.5.3 Risk Mitigation Practice Items (D1–D7)

**Table 4.3C**  
*Risk mitigation item statistics*

| Item | Mean | SD |
|---|---:|---:|
| D1 | 3.618 | 1.244 |
| D2 | 3.618 | 1.260 |
| D3 | 3.544 | 1.261 |
| D4 | 4.078 | 1.253 |
| D5 | 4.137 | 1.136 |
| D6 | 3.770 | 1.248 |
| D7 | 4.137 | 1.154 |

The strongest mitigation behaviors are checking sender identity (D7) and enabling 2FA (D5). The lowest is periodic password change (D3), followed closely by update/check practices (D1, D2).

### 4.5.4 Influencing Factor Items (E1–E7) – Exploratory

**Table 4.3D**  
*Influencing-factor item statistics*

| Item | Mean | SD |
|---|---:|---:|
| E1 | 4.225 | 1.127 |
| E2 | 3.505 | 1.189 |
| E3 | 4.289 | 1.012 |
| E4 | 3.627 | 1.301 |
| E5 | 3.093 | 1.461 |
| E6 | 3.010 | 1.321 |
| E7 | 4.044 | 1.047 |

Respondents strongly acknowledge the seriousness of data compromise (E1) and the importance of safe internet habits (E3). Lower values for E5 and E6 suggest practical barriers (password complexity burden and perceived inadequacy of university preparation).

---

## 4.6 Reliability Analysis

**Table 4.4**  
*Internal consistency reliability (Cronbach's alpha)*

| Construct | Items | Cronbach's alpha | Interpretation |
|---|---:|---:|---|
| CA | 7 | 0.870 | Good |
| DB | 7 | 0.816 | Good |
| RMP | 7 | 0.867 | Good |
| IF (exploratory) | 7 | 0.709 | Acceptable |

All primary constructs exceed common acceptability thresholds for internal consistency, supporting stable scale performance in this dataset.

---

## 4.7 Correlation Analysis

### 4.7.1 Pearson Correlation Matrix

**Table 4.5**  
*Correlation matrix among composite constructs*

| Construct | CA | DB | RMP | IF |
|---|---:|---:|---:|---:|
| CA | 1.000 | -0.249 | 0.594 | 0.614 |
| DB | -0.249 | 1.000 | -0.361 | -0.202 |
| RMP | 0.594 | -0.361 | 1.000 | 0.589 |
| IF | 0.614 | -0.202 | 0.589 | 1.000 |

### 4.7.2 Significance Tests for Key Correlations

- CA–DB: **r = -0.249, p < .001**
- CA–RMP: **r = 0.594, p < .001**
- DB–RMP: **r = -0.361, p < .001**
- CA–IF: **r = 0.614, p < .001**
- IF–RMP: **r = 0.589, p < .001**
- IF–DB: **r = -0.202, p = 0.0034**

Awareness has the strongest positive association with mitigation practice and a significant inverse relationship with risky behavior. This pattern supports the idea that awareness is linked with safer cyber conduct.

---

## 4.8 Regression Analysis

### 4.8.1 Model 1: Effect of Awareness on Digital Behavior Risk (H1)

**Table 4.6**  
*Simple linear regression (DV = DB)*

| Predictor | B | SE | t | p | 95% CI |
|---|---:|---:|---:|---:|---|
| Intercept | 3.305 | 0.308 | 10.745 | < .001 | 2.702 to 3.908 |
| CA | -0.263 | 0.072 | -3.661 | < .001 | -0.404 to -0.122 |

Model fit: **R² = 0.062**, Adjusted R² = 0.058, F = 13.400, p < .001.

Interpretation: As CA increases by one unit, DB risk decreases by 0.263 units on average. Because DB is risk-oriented, this indicates safer behavioral tendency at higher awareness levels.

### 4.8.2 Model 2: Effect of Awareness on Risk Mitigation (H2)

**Table 4.7**  
*Simple linear regression (DV = RMP)*

| Predictor | B | SE | t | p | 95% CI |
|---|---:|---:|---:|---:|---|
| Intercept | 1.192 | 0.258 | 4.624 | < .001 | 0.687 to 1.697 |
| CA | 0.632 | 0.060 | 10.502 | < .001 | 0.514 to 0.750 |

Model fit: **R² = 0.353**, Adjusted R² = 0.350, F = 110.300, p < .001.

Interpretation: Awareness is a strong positive predictor of mitigation practices. The effect size is substantially larger than the CA→DB model.

---

## 4.9 Comparative Analysis: IT vs Non-IT Students

### 4.9.1 Group Means

- IT (n = 131): CA = 4.273, DB = 2.077, RMP = 3.945, IF = 3.795
- Non-IT (n = 73): CA = 4.053, DB = 2.425, RMP = 3.659, IF = 3.487

### 4.9.2 Independent-Samples Welch t-test

**Table 4.8**  
*IT vs non-IT comparison*

| Construct | IT Mean (SD) | Non-IT Mean (SD) | t | df | p | Cohen's d |
|---|---|---|---:|---:|---:|---:|
| CA | 4.273 (0.899) | 4.053 (0.763) | 1.848 | 170.1 | 0.0645 | 0.258 |
| DB | 2.077 (0.816) | 2.425 (1.012) | -2.512 | 124.6 | **0.0120** | 0.390 |
| RMP | 3.945 (0.929) | 3.659 (0.857) | 2.217 | 159.3 | **0.0267** | 0.316 |
| IF (exploratory) | 3.795 (0.761) | 3.487 (0.645) | 3.059 | 170.3 | 0.0022 | 0.426 |

For cybersecurity awareness (CA), the difference is not statistically significant at α = 0.05 (p = 0.0645). However, IT students report significantly lower risky digital behaviour (DB: p = 0.0120, d = 0.390) and significantly higher risk mitigation practices (RMP: p = 0.0267, d = 0.316) than non-IT students. Effect sizes are in the small-to-medium range.

The exploratory IF dimension also shows a significant difference (p = 0.0022), indicating IT students perceive stronger preparedness and support factors than non-IT students.

---

## 4.10 Additional Subgroup Findings

### 4.10.1 Gender-Based ANOVA

- CA: F = 0.470, p = 0.6254 (not significant)
- DB: F = 0.302, p = 0.7397 (not significant)
- RMP: F = 1.762, p = 0.1737 (not significant)

No significant gender differences were observed for the main constructs.

### 4.10.2 Age-Based ANOVA

- CA: F = 1.814, p = 0.1454 (not significant)
- DB: F = 0.369, p = 0.7755 (not significant)
- RMP: **F = 5.707, p = 0.0009** (significant)

Risk mitigation practice varies significantly across age groups. The youngest respondents (under 20, n = 8) report the lowest RMP mean (3.018), while respondents aged 26–40 show the highest RMP mean (4.039).

### 4.10.3 Academic Year-Based ANOVA

- CA: F = 1.281, p = 0.2778 (not significant)
- DB: F = 1.615, p = 0.1727 (not significant)
- RMP: F = 2.206, p = 0.0694 (not significant at α = 0.05)

No significant differences were identified across academic year levels for CA or DB. RMP shows a trend toward significance (p = 0.0694), with 2nd-year students showing the lowest mean (3.296) and 4th-year students showing the highest (4.058).

---

## 4.11 Hypothesis Testing Summary

**Table 4.9**  
*Summary of hypothesis outcomes*

| Hypothesis | Statement | Statistical Result | Decision |
|---|---|---|---|
| H1 | Positive relationship between CA and DB | CA→DB coefficient = -0.263, p < .001 | **Not supported in stated positive direction**; significant inverse association found |
| H2 | Positive relationship between CA and RMP | CA→RMP coefficient = 0.632, p < .001 | **Supported** |
| H3 | IT and non-IT differ in CA | p = 0.0645 | **Not supported** |
| H4 | IT and non-IT differ in DB | p = 0.0120 | **Supported** (IT lower risky behavior) |
| H5 | IT and non-IT differ in RMP | p = 0.0267 | **Supported** (IT higher mitigation) |

---

## 4.12 Chapter Summary

Using the updated sample of 204 respondents, the findings show that students report high cybersecurity awareness and moderate-to-strong mitigation practices, while risky digital behavior remains present in key areas such as password reuse and unsafe public Wi-Fi use. Reliability is good across the three core scales. Awareness is significantly associated with lower risky behavior and strongly associated with better mitigation practice. The IT/non-IT comparison reveals no significant difference in awareness (CA), but statistically significant differences in digital behaviour (DB: p = 0.0120) and mitigation practice (RMP: p = 0.0267), with IT students showing safer behavior and stronger mitigation. IT students also score significantly higher on the exploratory influencing-factor dimension.

Overall, the updated evidence reinforces that awareness matters, but awareness alone is not sufficient to eliminate day-to-day risky behavior. The next chapter interprets these findings in relation to prior research, practical context, and policy implications for Nepalese universities.
