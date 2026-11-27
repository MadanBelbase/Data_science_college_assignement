
# Normalization and Standardization

## 1. Normalization

**Normalization** is a data preprocessing technique used to scale numerical values into a specific range, usually between 0 and 1.

It ensures that features with larger numerical values do not dominate features with smaller numerical values.

Normalization is particularly useful for distance-based algorithms such as K-Nearest Neighbors (KNN), K-Means Clustering, and Neural Networks.

### Types of Normalization

### 1.1 Min-Max Normalization

Min-Max Normalization scales the values of a feature into a fixed range, usually [0, 1].

**Formula:**

```text
Normalized Value = (X - X_min) / (X_max - X_min)
```

**Where:**

- `X` = Original data value.
- `X_min` = Minimum value in the dataset.
- `X_max` = Maximum value in the dataset.
- `Normalized Value` = Scaled value.


**Result:** The normalized value of 30 is **0.5**.

### 1.2 Decimal Scaling Normalization

Decimal Scaling Normalization scales data by moving the decimal point of the values. The number of decimal places moved depends on the maximum absolute value in the dataset.

**Formula:**

```text
Normalized Value = X / 10^j
```

**Where:**

- `X` = Original data value.
- `j` = Smallest integer such that the maximum absolute normalized value is less than 1.
- `Normalized Value` = Scaled value.





### 1.3 Mean Normalization

Mean Normalization scales the values based on the mean and the range of the dataset. It generally transforms the values into a range around zero.

**Formula:**

```text
Normalized Value = (X - Mean) / (X_max - X_min)
```

**Where:**

- `X` = Original data value.
- `Mean` = Average of the dataset.
- `X_max` = Maximum value.
- `X_min` = Minimum value.
- `Normalized Value` = Scaled value.






### 1.4 Vector Normalization (L2 Normalization)

Vector Normalization scales a vector so that its Euclidean (L2) norm becomes 1.

**Formula:**

```text
Normalized Vector = Original Vector / L2 Norm
```

The L2 norm is calculated using:

```text
L2 Norm = sqrt(x1^2 + x2^2 + ... + xn^2)
```

**Where:**

- `Original Vector` = Input feature vector.
- `xi` = Individual vector elements.
- `n` = Number of elements.
- `L2 Norm` = Euclidean norm of the vector.



## 2. Standardization

**Standardization** is a data preprocessing technique that transforms numerical data so that it has a mean of 0 and a standard deviation of 1.

Unlike Min-Max Normalization, Standardization does not restrict values to a fixed range. The transformed values can be positive, negative, or zero.

It is commonly used in algorithms such as Logistic Regression, Support Vector Machines (SVM), and Principal Component Analysis (PCA).

### 2.1 Z-Score Standardization

Z-Score Standardization is the most commonly used standardization technique. It transforms data so that the mean becomes 0 and the standard deviation becomes 1.

**Formula:**

```text
Z = (X - Mean) / Standard Deviation
```

**Where:**

- `X` = Original data value.
- `Mean` = Average of the dataset.
- `Standard Deviation` = Measure of data dispersion.
- `Z` = Standardized value (Z-score).

**Example:**





## Difference Between Normalization and Standardization

| Basis | Normalization | Standardization |
|:---|:---|:---|
| **Meaning** | Scales data into a specific range. | Transforms data based on mean and standard deviation. |
| **Range** | Usually between 0 and 1. | No fixed range. |
| **Mean** | Not necessarily 0. | 0 (when calculated using the same dataset). |
| **Standard Deviation** | Not necessarily 1. | 1 (when using population standard deviation). |
| **Formula** | Min-Max or other scaling formulas. | Z-score formula. |
| **Outliers** | Sensitive to outliers, especially Min-Max. | Also influenced by outliers through mean and standard deviation. |
| **Common Use** | KNN, K-Means, and Neural Networks. | SVM, Logistic Regression, and PCA. |

---
