import pandas as pd
from sklearn.linear_model import LogisticRegression
import joblib

# Simulated training dataset
data = pd.DataFrame({
    "distance": [1.2, 5.0, 10.5, 0.8, 15.2],
    "help_type": [1, 0, 2, 1, 2],  # 0 = Legal, 1 = NGO, 2 = Police
    "rating": [4.5, 3.2, 5.0, 4.7, 2.5],
    "clicked": [1, 0, 1, 1, 0]  # 1 = user clicked / contacted
})

X = data[["distance", "help_type", "rating"]]
y = data["clicked"]

model = LogisticRegression()
model.fit(X, y)

joblib.dump(model, "ml_model.pkl")
print("Model trained and saved as ml_model.pkl")
