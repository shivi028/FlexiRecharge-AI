import os
import joblib
import pandas as pd

from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import(mean_absolute_error, root_mean_squared_error, r2_score)

# load dataset
dataset_path = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "dataset",
    "recharge_dataset.csv"
)

df = pd.read_csv(dataset_path)
print(df.head())

# seprate feature
X = df.drop(columns=['price'])
y = df['price']

# train test split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)
# 80% 20%

# train
models = {
    "Linear Regression" : LinearRegression(),
    "Decision Tree" : DecisionTreeRegressor(random_state=42),
    "Random Forest" : RandomForestRegressor(
        n_estimators=200, 
        random_state=42
    )
}
results = []
for name, model in models.items():
    model.fit(X_train, y_train)

    # predict
    predictions = model.predict(X_test)

    # evaluate
    mae = mean_absolute_error(y_test, predictions)
    rmse = root_mean_squared_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)

    results.append({"Model": name, "MAE": mae, "RMSE": rmse, "R2": r2})

results_df = pd.DataFrame(results)
print('\n Model Comparison')
print(results_df)

# save model
model_path = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "models",
    "price_model.pkl"
)
best_model = models['Random Forest']
joblib.dump(best_model, model_path)
print()
print("Model Saved Successfully")

