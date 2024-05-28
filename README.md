# <div align="center">Personal Finance Management System</div>

<p align="center">
  A backend system for managing personal finances, including budgeting, expense tracking, and financial reporting.
</p>

## <div>Objective</div>

<p>Develop a backend system for managing personal finances with the following features:</p>
<ul>
  <li>User registration and authentication</li>
  <li>CRUD operations for income and expenses</li>
  <li>Budget creation and tracking</li>
  <li>Monthly financial reports</li>
  <li>Category-wise expense tracking (e.g., groceries, rent, entertainment)</li>
</ul>

## <div>Technologies Used</div>

<ul>
  <li>Node.js with Express</li>
  <li>MongoDB</li>
  <li>JWT for authentication</li>
</ul>

## <div>Project Setup</div>

<p>Follow these steps to set up and run the project:</p>

### <div>1. Initialize the Project</div>

<p>Create a new directory for your project and initialize it:</p>
<pre>mkdir personal-finance-manager</pre>
<pre>cd personal-finance-manager</pre>
<pre>npm init -y</pre>

### <div>2. Install Necessary Packages</div>

<p>Install the required packages:</p>
<pre>npm install express mongoose jsonwebtoken bcryptjs body-parser dotenv</pre>
<pre>npm install --save-dev nodemon</pre>

### <div>3. Create the Project Structure</div>

<p>Create the necessary directories for your project:</p>
<pre>mkdir src</pre>
<pre>cd src</pre>
<pre>mkdir controllers models routes middlewares config</pre>

## <div>Environment Variables</div>

<p>Create a <code>.env</code> file in the root of the project to store environment variables:</p>

<pre>PORT=3000</pre>
<pre>MONGO_URI=your_mongodb_connection_string</pre>
<pre>JWT_SECRET=your_secret_key</pre>

## <div>Configure Express Server</div>

<p>Set up the Express server and configure middleware and routes in <code>src/index.js</code>.</p>

## <div>Define Database Schemas</div>

<p>Define the following database schemas:</p>

### <div>Users Schema</div>

<p>Define a schema for user information in <code>src/models/User.js</code>.</p>

### <div>Transactions Schema</div>

<p>Define a schema for transactions in <code>src/models/Transaction.js</code>.</p>

### <div>Categories Schema</div>

<p>Define a schema for categories in <code>src/models/Category.js</code>.</p>

### <div>Budgets Schema</div>

<p>Define a schema for budgets in <code>src/models/Budget.js</code>.</p>

## <div>Implement Authentication Middleware</div>

<p>Create middleware for user authentication in <code>src/middlewares/auth.js</code>.</p>

## <div>Create Controllers</div>

<p>Implement the following controllers:</p>

### <div>User Controller</div>

<p>Handle user registration and login in <code>src/controllers/userController.js</code>.</p>

### <div>Transaction Controller</div>

<p>Manage transactions in <code>src/controllers/transactionController.js</code>.</p>

### <div>Budget Controller</div>

<p>Manage budgets in <code>src/controllers/budgetController.js</code>.</p>

## <div>Define Routes</div>

<p>Set up the following routes:</p>

### <div>User Routes</div>

<p>Define routes for user registration and login in <code>src/routes/user.js</code>.</p>

### <div>Transaction Routes</div>

<p>Define routes for transactions in <code>src/routes/transaction.js</code>.</p>

### <div>Budget Routes</div>

<p>Define routes for budgets in <code>src/routes/budget.js</code>.</p>

## <div>Run the Application</div>

<p>To start the server, add a script to your <code>package.json</code> and run the application:</p>

<pre>"scripts": {
  "start": "nodemon src/index.js"
}</pre>

<pre>npm start</pre>

## <div>Conclusion</div>

<p>This setup provides a basic structure for a Personal Finance Management System backend. It includes user authentication with JWT, CRUD operations for transactions and budgets, and uses MongoDB for data storage. You can further expand this system by adding more features such as detailed financial reports, notifications, and integrations with other financial tools.</p>
