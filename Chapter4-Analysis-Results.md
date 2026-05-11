# CHAPTER IV: DATA ANALYSIS, RESULTS, AND FINDINGS

## 4.1 Introduction

This chapter presents the statistical analysis of the updated dataset from `/home/runner/work/thesis/thesis/data/data-collection.csv`. The file contains **135 valid responses** and **34 variables** (Timestamp, A1–A5, B1–B7, C1–C7, D1–D7, E1–E7), with no missing values.

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

- Total respondents: **N = 135**
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
*Demographic characteristics of respondents (N = 135)*

| Variable | Category | Frequency | Percentage (%) |
|---|---|---:|---:|
| Gender (A1) | Male | 81 | 60.0 |
|  | Female | 52 | 38.5 |
|  | Prefer not to say | 2 | 1.5 |
| Age (A2) | Under 20 | 7 | 5.2 |
|  | 20–25 | 55 | 40.7 |
|  | 26–40 | 71 | 52.6 |
|  | 41 and above | 2 | 1.5 |
| Academic Major (A3) | IT/Computer Science | 80 | 59.3 |
|  | Non-IT Related | 55 | 40.7 |
| Academic Year (A4) | 1st year | 17 | 12.6 |
|  | 2nd year | 10 | 7.4 |
|  | 3rd year | 4 | 3.0 |
|  | 4th year | 30 | 22.2 |
|  | Post-graduate | 74 | 54.8 |

The sample is moderately diverse but dominated by postgraduate students and participants aged 26–40. IT students represent a larger share than non-IT students, enabling a more stable major-based comparison than many smaller student studies.

---

## 4.4 Descriptive Statistics of Main Constructs

### 4.4.1 Construct-Level Descriptive Results

**Table 4.2**  
*Composite descriptive statistics*

| Construct | Items | Mean | SD | Min | Max | 95% CI of Mean |
|---|---|---:|---:|---:|---:|---|
| Cybersecurity Awareness (CA) | B1–B7 | 4.178 | 0.899 | 1.000 | 5.000 | 4.025–4.331 |
| Digital Behavior Risk (DB) | C1–C7 | 2.131 | 0.885 | 1.000 | 5.000 | 1.981–2.282 |
| Risk Mitigation Practices (RMP) | D1–D7 | 3.842 | 0.968 | 1.000 | 5.000 | 3.678–4.007 |
| Influencing Factors (IF) | E1–E7 | 3.670 | 0.776 | 1.000 | 5.000 | 3.538–3.802 |

The updated data show a high average awareness score, low-to-moderate risky digital behavior, and relatively strong mitigation practice. This pattern indicates that participants generally understand cyber risks and report moderate protective behavior, but risky actions still remain in specific daily habits.

### 4.4.2 Distribution Shape (Construct Scores)

- CA skewness = **-1.888**, kurtosis = **3.485** (high scores concentrated at upper scale points).
- DB skewness = **0.922**, kurtosis = **0.897** (risk behavior clustered at lower scores with a right tail).
- RMP skewness = **-0.925**, kurtosis = **0.748** (more frequent agreement with protective practices).
- IF skewness = **-1.057**, kurtosis = **2.425**.

These distributions are typical for awareness/behavior surveys where most participants report relatively safe attitudes and moderate compliance.

---

## 4.5 Item-Level Analysis

### 4.5.1 Awareness Items (B1–B7)

**Table 4.3A**  
*Cybersecurity awareness item statistics*

| Item | Mean | SD |
|---|---:|---:|
| B1 | 4.304 | 1.154 |
| B2 | 4.407 | 1.141 |
| B3 | 4.200 | 1.227 |
| B4 | 3.800 | 1.196 |
| B5 | 3.956 | 1.292 |
| B6 | 4.363 | 1.117 |
| B7 | 4.215 | 1.102 |

Highest awareness appears on phishing danger (B2) and risk of careless internet use (B6). Lower awareness appears in legal/policy knowledge (B4), indicating that students understand technical/personal risk better than legal framework details.

### 4.5.2 Digital Behavior Risk Items (C1–C7)

**Table 4.3B**  
*Risk-oriented digital behavior item statistics*

| Item | Description | Mean | SD |
|---|---|---:|---:|
| C1 | I use one password for many accounts. | 2.570 | 1.464 |
| C2 | I open links in emails from unknown senders. | 1.696 | 1.095 |
| C3 | I use public Wi-Fi for sensitive work without extra protection. | 2.385 | 1.349 |
| C4 | I download from untrusted websites. | 2.222 | 1.353 |
| C5 | I post personal location/photos openly. | 2.185 | 1.339 |
| C6 | I click pop-up ads while browsing. | 1.896 | 1.192 |
| C7 | I accept friend/chat requests from strangers. | 1.963 | 1.218 |

The highest-risk behaviors are password reuse (C1) and unsafe public Wi-Fi use (C3). These two practices remain the most critical behavioral gaps in the sample.

### 4.5.3 Risk Mitigation Practice Items (D1–D7)

**Table 4.3C**  
*Risk mitigation item statistics*

| Item | Mean | SD |
|---|---:|---:|
| D1 | 3.615 | 1.293 |
| D2 | 3.637 | 1.325 |
| D3 | 3.578 | 1.290 |
| D4 | 4.007 | 1.324 |
| D5 | 4.111 | 1.170 |
| D6 | 3.830 | 1.231 |
| D7 | 4.119 | 1.222 |

The strongest mitigation behaviors are checking sender identity (D7) and enabling 2FA (D5). The lowest is periodic password change (D3), followed closely by update/check practices (D1, D2).

### 4.5.4 Influencing Factor Items (E1–E7) – Exploratory

**Table 4.3D**  
*Influencing-factor item statistics*

| Item | Mean | SD |
|---|---:|---:|
| E1 | 4.252 | 1.144 |
| E2 | 3.467 | 1.214 |
| E3 | 4.319 | 0.982 |
| E4 | 3.652 | 1.334 |
| E5 | 2.970 | 1.466 |
| E6 | 3.037 | 1.346 |
| E7 | 3.993 | 1.116 |

Respondents strongly acknowledge the seriousness of data compromise (E1) and the importance of safe internet habits (E3). Lower values for E5 and E6 suggest practical barriers (password complexity burden and perceived inadequacy of university preparation).

---

## 4.6 Reliability Analysis

**Table 4.4**  
*Internal consistency reliability (Cronbach's alpha)*

| Construct | Items | Cronbach's alpha | Interpretation |
|---|---:|---:|---|
| CA | 7 | 0.881 | Good |
| DB | 7 | 0.811 | Good |
| RMP | 7 | 0.881 | Good |
| IF (exploratory) | 7 | 0.742 | Acceptable |

All primary constructs exceed common acceptability thresholds for internal consistency, supporting stable scale performance in this dataset.

---

## 4.7 Correlation Analysis

### 4.7.1 Pearson Correlation Matrix

**Table 4.5**  
*Correlation matrix among composite constructs*

| Construct | CA | DB | RMP | IF |
|---|---:|---:|---:|---:|
| CA | 1.000 | -0.251 | 0.654 | 0.624 |
| DB | -0.251 | 1.000 | -0.290 | -0.209 |
| RMP | 0.654 | -0.290 | 1.000 | 0.587 |
| IF | 0.624 | -0.209 | 0.587 | 1.000 |

### 4.7.2 Significance Tests for Key Correlations

- CA–DB: **r = -0.251, p = 0.0033**
- CA–RMP: **r = 0.654, p < 0.001**
- DB–RMP: **r = -0.290, p = 0.0006**
- CA–IF: **r = 0.624, p < 0.001**
- IF–RMP: **r = 0.587, p < 0.001**
- IF–DB: **r = -0.209, p = 0.0148**

Awareness has the strongest positive association with mitigation practice and a significant inverse relationship with risky behavior. This pattern supports the idea that awareness is linked with safer cyber conduct.

---

## 4.8 Regression Analysis

### 4.8.1 Model 1: Effect of Awareness on Digital Behavior Risk (H1)

**Table 4.6**  
*Simple linear regression (DV = DB)*

| Predictor | B | SE | t | p | 95% CI |
|---|---:|---:|---:|---:|---|
| Intercept | 3.164 | 0.353 | 8.956 | < .001 | 2.465 to 3.862 |
| CA | -0.247 | 0.083 | -2.989 | 0.0033 | -0.411 to -0.084 |

Model fit: **R² = 0.063**, Adjusted R² = 0.056, F = 8.933, p = 0.0033.

Interpretation: As CA increases by one unit, DB risk decreases by 0.247 units on average. Because DB is risk-oriented, this indicates safer behavioral tendency at higher awareness levels.

### 4.8.2 Model 2: Effect of Awareness on Risk Mitigation (H2)

**Table 4.7**  
*Simple linear regression (DV = RMP)*

| Predictor | B | SE | t | p | 95% CI |
|---|---:|---:|---:|---:|---|
| Intercept | 0.900 | 0.302 | 2.984 | 0.0034 | 0.304 to 1.497 |
| CA | 0.704 | 0.071 | 9.973 | < .001 | 0.565 to 0.844 |

Model fit: **R² = 0.428**, Adjusted R² = 0.424, F = 99.460, p < .001.

Interpretation: Awareness is a strong positive predictor of mitigation practices. The effect size is substantially larger than the CA→DB model.

---

## 4.9 Comparative Analysis: IT vs Non-IT Students

### 4.9.1 Group Means

- IT (n = 80): CA = 4.245, DB = 2.071, RMP = 3.945, IF = 3.804
- Non-IT (n = 55): CA = 4.081, DB = 2.218, RMP = 3.694, IF = 3.475

### 4.9.2 Independent-Samples Welch t-test

**Table 4.8**  
*IT vs non-IT comparison*

| Construct | IT Mean (SD) | Non-IT Mean (SD) | t | df | p | Cohen's d |
|---|---|---|---:|---:|---:|---:|
| CA | 4.245 (0.960) | 4.081 (0.799) | 1.079 | 128.13 | 0.2826 | 0.183 |
| DB | 2.071 (0.860) | 2.218 (0.922) | -0.934 | 110.83 | 0.3523 | -0.166 |
| RMP | 3.945 (1.025) | 3.694 (0.865) | 1.536 | 127.39 | 0.1271 | 0.261 |
| IF (exploratory) | 3.804 (0.833) | 3.475 (0.641) | 2.582 | 131.25 | 0.0109 | 0.431 |

For the three hypothesis-linked constructs (CA, DB, RMP), differences are not statistically significant at α = 0.05. IT students report slightly better means, but effect sizes remain small.

The exploratory IF dimension shows a significant difference, indicating IT students may perceive stronger preparedness/support factors than non-IT students.

---

## 4.10 Additional Subgroup Findings

### 4.10.1 Gender-Based ANOVA

- CA: F = 0.370, p = 0.6917
- DB: F = 0.292, p = 0.7472
- RMP: F = 2.088, p = 0.1281

No significant gender differences were observed for the main constructs.

### 4.10.2 Age-Based ANOVA

- CA: F = 2.274, p = 0.0830 (not significant at .05)
- DB: F = 0.094, p = 0.9632
- RMP: **F = 4.189, p = 0.0072** (significant)

Risk mitigation practice varies significantly across age groups. Younger respondents (under 20) report the lowest RMP mean.

### 4.10.3 Academic Year-Based ANOVA

- CA: F = 0.776, p = 0.5429
- DB: F = 0.914, p = 0.4581
- RMP: F = 1.081, p = 0.3685

No significant differences were identified across academic year levels.

---

## 4.11 Hypothesis Testing Summary

**Table 4.9**  
*Summary of hypothesis outcomes*

| Hypothesis | Statement | Statistical Result | Decision |
|---|---|---|---|
| H1 | Positive relationship between CA and DB | CA→DB coefficient = -0.247, p = 0.0033 | **Not supported in stated positive direction**; significant inverse association found |
| H2 | Positive relationship between CA and RMP | CA→RMP coefficient = 0.704, p < .001 | **Supported** |
| H3 | IT and non-IT differ in CA | p = 0.2826 | **Not supported** |
| H4 | IT and non-IT differ in DB | p = 0.3523 | **Not supported** |
| H5 | IT and non-IT differ in RMP | p = 0.1271 | **Not supported** |

---

## 4.12 Chapter Summary

Using the updated sample of 135 respondents, the findings show that students report high cybersecurity awareness and moderate-to-strong mitigation practices, while risky digital behavior remains present in key areas such as password reuse and unsafe public Wi-Fi use. Reliability is good across the three core scales. Awareness is significantly associated with lower risky behavior and strongly associated with better mitigation practice. The IT/non-IT contrast does not produce significant differences in CA, DB, or RMP, though IT students show somewhat more favorable mean values and significantly higher scores in the exploratory influencing-factor dimension.

Overall, the updated evidence reinforces that awareness matters, but awareness alone is not sufficient to eliminate day-to-day risky behavior. The next chapter interprets these findings in relation to prior research, practical context, and policy implications for Nepalese universities.
