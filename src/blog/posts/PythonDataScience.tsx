import BlogLayout from "../components/BlogLayout";

export const metaData = {
    title: "Python for Data Science: Essential Libraries and Techniques",
    slug: "python-data-science-guide",
    tags: ["Python", "Data Science", "Machine Learning", "Programming"],
    date: "2024-01-12",
    read_time: "12",
    description: "Explore the essential Python libraries for data science. Learn NumPy, Pandas, Matplotlib, and Scikit-learn with practical examples and best practices.",
};

export default function PythonDataScience() {
    return (
        <BlogLayout {...metaData}>
            <p>
                Python has become the go-to language for data science and machine learning. Its rich ecosystem of libraries and intuitive syntax make it perfect for data analysis, visualization, and building predictive models.
            </p>

            <figure className="my-8">
                <img 
                    src="/images/ocean.png" 
                    alt="Ocean Waves" 
                    className="w-full max-w-md mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Ocean - Like data science, deep and full of hidden patterns
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">NumPy: The Foundation</h2>
            <p>
                NumPy is the fundamental package for scientific computing in Python. It provides powerful N-dimensional array objects and sophisticated mathematical functions.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import numpy as np

# Creating arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2, 3], [4, 5, 6]])

# Array operations
result = arr * 2  # Element-wise multiplication
dot_product = np.dot(arr, arr)

# Statistical operations
mean = np.mean(arr)
std_dev = np.std(arr)
correlation = np.corrcoef(arr1, arr2)

# Advanced indexing
filtered = arr[arr > 3]
sliced = matrix[:, 1:3]`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Pandas: Data Manipulation Master</h2>
            <p>
                Pandas provides powerful data structures and data analysis tools. It's perfect for working with structured data like CSV files, SQL tables, and Excel spreadsheets.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import pandas as pd

# Creating DataFrames
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 70000]
})

# Data exploration
print(df.head())
print(df.describe())
print(df.info())

# Data filtering and selection
high_earners = df[df['salary'] > 60000]
selected = df[['name', 'salary']]

# Group by operations
avg_salary_by_age = df.groupby('age')['salary'].mean()

# Data cleaning
df.dropna()  # Remove missing values
df.fillna(0)  # Fill missing values
df.drop_duplicates()  # Remove duplicates`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/desert.png" 
                    alt="Desert" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Desert - Like data cleaning, vast but requires careful navigation
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Matplotlib: Data Visualization</h2>
            <p>
                Matplotlib is the most widely used data visualization library in Python. It allows you to create static, animated, and interactive visualizations.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`import matplotlib.pyplot as plt
import seaborn as sns

# Line plot
plt.figure(figsize=(10, 6))
plt.plot(x_data, y_data, label='Sales')
plt.xlabel('Month')
plt.ylabel('Revenue')
plt.title('Monthly Sales Trend')
plt.legend()
plt.show()

# Scatter plot
plt.scatter(df['age'], df['salary'], alpha=0.6)
plt.xlabel('Age')
plt.ylabel('Salary')
plt.title('Age vs Salary')

# Histogram
plt.hist(df['salary'], bins=10, alpha=0.7)
plt.xlabel('Salary Range')
plt.ylabel('Frequency')

# Heatmap with seaborn
correlation_matrix = df.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Scikit-learn: Machine Learning</h2>
            <p>
                Scikit-learn provides simple and efficient tools for data mining and data analysis. It features various classification, regression, and clustering algorithms.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

# Data preparation
X = df[['age', 'experience']]
y = df['salary']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Linear regression
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Predictions and evaluation
y_pred = model.predict(X_test_scaled)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Classification example
classifier = RandomForestClassifier(n_estimators=100)
classifier.fit(X_train, y_train_class)
accuracy = classifier.score(X_test, y_test_class)`}</code>
                </pre>
            </div>

            <figure className="my-8">
                <img 
                    src="/images/flower.png" 
                    alt="Flower" 
                    className="w-full max-w-xs mx-auto rounded-lg border border-[#333333]"
                />
                <figcaption className="text-center text-gray-400 text-sm mt-2">
                    Flower - Like machine learning, beautiful patterns emerge from data
                </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Advanced Techniques</h2>
            <p>
                Once you master the basics, you can explore advanced techniques like feature engineering, model optimization, and deep learning.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Feature engineering
df['age_squared'] = df['age'] ** 2
df['salary_per_year'] = df['salary'] / df['experience']

# Cross-validation
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)

# Hyperparameter tuning
from sklearn.model_selection import GridSearchCV
param_grid = {'n_estimators': [50, 100, 200]}
grid_search = GridSearchCV(
    RandomForestClassifier(), 
    param_grid, 
    cv=5
)
grid_search.fit(X_train, y_train)

# Pipeline for preprocessing
from sklearn.pipeline import Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier())
])
pipeline.fit(X_train, y_train)`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Best Practices</h2>
            <p>
                Following best practices will help you write cleaner, more efficient data science code and avoid common pitfalls.
            </p>

            <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 my-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{`# Use meaningful variable names
customer_churn_rate = calculate_churn_rate(customers)

# Document your functions
def clean_data(df, remove_duplicates=True):
    """
    Clean the input DataFrame by handling missing values and duplicates.
    
    Args:
        df: Input DataFrame
        remove_duplicates: Whether to remove duplicate rows
        
    Returns:
        Cleaned DataFrame
    """
    if remove_duplicates:
        df = df.drop_duplicates()
    return df.fillna(method='ffill')

# Handle memory efficiently
chunk_size = 10000
for chunk in pd.read_csv('large_file.csv', chunksize=chunk_size):
    process_chunk(chunk)

# Use vectorized operations
# Bad: Slow loop
result = []
for item in data:
    result.append(item * 2)

# Good: Fast vectorized operation
result = np.array(data) * 2`}</code>
                </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
            <p>
                Python's data science ecosystem provides powerful tools for every stage of the data analysis pipeline. From data cleaning and exploration to machine learning and visualization, these libraries enable you to extract valuable insights from data.
            </p>

            <p>
                The key to becoming proficient in data science is practice and continuous learning. Start with simple datasets, gradually work your way up to more complex projects, and don't be afraid to experiment with different techniques and approaches. With these tools and best practices, you'll be well-equipped to tackle any data science challenge.
            </p>
        </BlogLayout>
    );
}
