import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <div className="welcome-section">
        <h1>Welcome to My React Application</h1>
        <p>
          This application integrates three main features: a To-Do List, a Shopping Cart, and a Weather App.
          Navigate through the app to explore each feature in detail!
        </p>
      </div>

      <div className="features">
        <div className="feature">
          <h2>To-Do List</h2>
          <p>
            Manage your tasks efficiently. Add new tasks, mark them as completed, or remove them from your list.
            Keep track of the total and completed tasks easily.
          </p>
        </div>
        <div className="feature">
          <h2>Shopping Cart</h2>
          <p>
            Add items to your shopping cart and manage them effortlessly. View the total number of items and the
            subtotal of your cart.
          </p>
        </div>
        <div className="feature">
          <h2>Weather App</h2>
          <p>
            Get real-time weather updates from your preferred API. Experience the data presented in a visually
            appealing format.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
