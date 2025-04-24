# CommunityTaught: A Comprehensive Learning Management Platform

## Project Overview

This project is a comprehensive learning management platform designed to facilitate online education and skill development. The codebase provides a web application that enables users to manage lessons, track homework, and access educational resources.

### Main Purpose and Problems Solved
The primary purpose of this platform is to create an organized, user-friendly environment for learners and educators to interact with course content. It addresses common challenges in online education by:
- Providing structured lesson management and progress tracking
- Offering homework assignment and completion monitoring
- Centralizing educational resources for easy access
- Supporting user authentication and personalized dashboards

### Key Features and Benefits
- **Lesson Management**: Browse, add, and track progress through educational lessons with a clean interface
- **Homework Tracking**: Assign, manage, and mark homework completion with progress indicators
- **Resource Library**: Access a wide range of learning materials, including downloads and community projects
- **User Authentication**: Secure login system with support for GitHub and Google OAuth
- **Responsive Design**: Mobile-friendly interface for learning on the go
- **Personal Dashboard**: Individual user accounts with personalized progress tracking

This platform benefits users by creating an all-in-one solution for managing educational content and tracking learning progress, making online education more accessible and organized.

## Getting Started, Installation, and Setup

This guide will help you quickly set up and run the **CommunityTaught** application, a Node.js and MongoDB-based project with Tailwind CSS and Pug templating.

### Quick Start Guide

For those familiar with Node.js projects, here's a quick overview to get the application running:
1. Clone the repository and navigate to the project directory.
2. Install dependencies with `yarn install` or `npm install`.
3. Copy `.env.example` to `.env` and fill in the necessary environment variables (e.g., `DB_URI` for MongoDB connection).
4. Run the development server with `yarn dev` or `npm run dev`.
5. Open your browser and navigate to `http://localhost:3000` (or the port specified in your `.env` file).

For detailed instructions, including setting up environment variables and deployment options, refer to the sections below.

### Installation

Follow these steps to install the project and its dependencies:

1. **Clone the Repository**:
   If you haven't already, clone this repository to your local machine and navigate to the project folder:
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. **Install Dependencies**:
   Use Yarn or NPM to install the required packages:
   ```bash
   yarn install
   # or
   npm install
   ```
   This will install dependencies like Express, Mongoose, Passport for authentication, and Tailwind CSS for styling, as listed in `package.json`.

3. **Environment Setup**:
   Create a `.env` file based on the provided `.env.example` file:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file to include your specific configuration:
   - `PORT`: Set the port for the application (default is 3000).
   - `NODE_ENV`: Set to `development` or `production`.
   - `DOMAIN`: Your application domain (e.g., `http://localhost:3000` for development).
   - `SECRET`: A random string for session security.
   - `DB_URI`: Your MongoDB connection string (local or cloud like MongoDB Atlas).
   - SMTP settings for email functionality (if using local login in production).
   - OAuth credentials for Google and GitHub login (if enabling social logins).

   Ensure you have MongoDB running locally or provide a valid cloud database URI.

### Setup and Running the Application

#### Development Mode
To run the application in development mode with auto-restart on file changes:
```bash
yarn dev
# or
npm run dev
```
This uses `nodemon` to monitor changes in server files (excluding client-side JS and test files). Additionally, if you want to watch for CSS changes with Tailwind:
```bash
yarn css
# or
npm run css
```
The application will be accessible at `http://localhost:3000` (or your configured port).

#### Production Mode
To start the application in production mode:
```bash
yarn start
# or
npm start
```
Ensure your `.env` file has `NODE_ENV=production` and all necessary configurations (like SMTP for emails) are set. For a production build, consider additional steps like minimizing assets or using a process manager like PM2, though specific build scripts are not provided in this repository.

#### Platform-Specific Instructions
- **Windows, macOS, Linux**: The setup process is largely the same across platforms. Ensure you have Node.js (version compatible with the dependencies, ideally >=16) and Yarn or NPM installed. MongoDB must be installed locally if not using a cloud database.
- If using a cloud MongoDB instance like Atlas, ensure your IP is whitelisted or network access is configured appropriately in your database settings.

#### Testing
The project includes Cypress for end-to-end testing. To run tests:
```bash
yarn e2e
# or
npm run e2e
```
To open the Cypress test runner for interactive testing:
```bash
yarn e2e:watch
# or
npm run e2e:watch
```
Ensure the application is running during tests or configure Cypress to start the server if needed.

This setup should cover most use cases for running and developing with the CommunityTaught application. For deployment instructions, refer to the Deployment section of this README.

## Deployment

This section provides instructions on how to build and deploy the `communitytaught` application to production. The application is built using Node.js, Express, and MongoDB, with a configuration that supports deployment to platforms like Fly.io.

### Building the Application

Before deploying, ensure you have Node.js and npm installed on your system. Follow these steps to build the application:

1. **Install Dependencies**: Run the following command in the root directory of the project to install all required npm packages:
   ```bash
   npm install
   ```

2. **Environment Configuration**: Create a `.env` file in the root directory based on the `.env.example` file. Set the necessary environment variables such as database connection strings and authentication credentials.

3. **Build CSS**: If you are using Tailwind CSS, compile the styles by running:
   ```bash
   npm run css
   ```
   This command processes the Tailwind CSS file (`src/tailwind.css`) and outputs the result to `src/assets/css/index.css`.

### Deploying to Production

#### Fly.io

The repository includes a `fly.toml` configuration file, indicating that the application is prepared for deployment on Fly.io, a platform for running full-stack apps and databases.

1. **Install Flyctl**: Download and install the Flyctl CLI tool by following the instructions at [fly.io/docs](https://fly.io/docs/getting-started/installing-flyctl/).

2. **Authenticate**: Log in to your Fly.io account using:
   ```bash
   flyctl auth login
   ```

3. **Deploy the Application**: From the root directory of the project, run the following command to deploy to Fly.io:
   ```bash
   flyctl deploy
   ```
   This will build and deploy the application using the settings specified in `fly.toml`. The configuration sets the app to listen on port 8080 and enables HTTPS redirection.

#### Other Platforms

While Fly.io is the primary deployment target based on the provided configuration, you can deploy this Node.js application to other platforms such as Heroku, Vercel, or Netlify with additional configuration:

- **Heroku**: Create a `Procfile` and specify the start command as `npm start`. Use the Heroku CLI to create an app and deploy.
- **Vercel**: Vercel can deploy Node.js apps if configured with a `vercel.json` file. Ensure the build settings point to the correct output directory for static assets.
- **Docker**: Containerize the application by creating a `Dockerfile` and deploying to a container orchestration platform like Kubernetes or directly on a cloud provider supporting Docker images.

Ensure that environment variables are properly set in the deployment environment for database connections, session management, and authentication providers (GitHub and Google OAuth).

### Running in Production

To start the application in a production environment locally, use:
```bash
npm start
```

Make sure your MongoDB database is accessible and environment variables are configured correctly.

## Technologies Used

- **Node.js**: The primary runtime environment for executing server-side JavaScript.
- **Express**: A web application framework for Node.js, used for building the server-side application.
- **MongoDB with Mongoose**: MongoDB as the database, with Mongoose as the ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Pug**: A high-performance template engine for rendering HTML.
- **Passport**: An authentication middleware for Node.js, used for handling user authentication with strategies like GitHub and Google OAuth.
- **Cypress**: An end-to-end testing framework for web applications.
- **Nodemon**: A tool for automatically restarting the server during development.
- **Jest and Vitest**: Testing frameworks for unit and integration tests.
- **Supertest**: A library for testing HTTP assertions.

## Feature Highlights

- **Authentication**: The application supports user authentication with both traditional email/password login and OAuth integration with Google and GitHub. Users can register, log in, reset passwords, and manage their accounts through dedicated routes and controllers.
- **Dashboard**: A personalized dashboard is available for authenticated users, displaying relevant information such as current lessons. It serves as the central hub for user activity after login.
- **Homework Management**: Users can view, add, and edit homework assignments. The system allows tracking progress by marking items as complete or submitted, ensuring users stay on top of their tasks.
- **Lessons**: The platform provides access to a comprehensive list of lessons. Users can view individual lessons, track their progress by marking lessons as watched or checked-in, and manage lesson content through add/edit functionalities.
- **Routing**: The application features a well-structured routing system with dedicated routes for main pages (e.g., homepage, about), authentication, homework, lessons, and resource pages, ensuring seamless navigation across different sections.
- **Resources**: A section dedicated to additional resources, including community projects and other helpful materials, is accessible to users for further learning and exploration.

## Configuration

This section outlines the configurable options, build settings, and plugins used in the project.

### Environment Variables
The project uses environment variables for configuration. A template for these variables is provided in the `.env.example` file. You will need to create a `.env` file with the following configurable options:
- **PORT**: The port on which the server runs (default: 3000).
- **NODE_ENV**: The environment mode (`development` or `production`).
- **DOMAIN**: The base URL of your application (e.g., `http://localhost:3000`).
- **SECRET**: A random string used for session encryption.
- **DB_URI**: MongoDB connection URI for database connectivity.
- **SMTP Settings**: Required for email functionality in production:
  - **SMTP_SERVER**: SMTP server address.
  - **SMTP_PORT**: SMTP server port.
  - **SMTP_USER**: SMTP username.
  - **SMTP_PASS**: SMTP password.
  - **FROM_EMAIL**: Sender email address.
  - **FROM_NAME**: Sender name.
- **Google OAuth**: For Google login integration:
  - **GOOGLE_ID**: Google OAuth client ID.
  - **GOOGLE_SECRET**: Google OAuth client secret.
- **GitHub OAuth**: For GitHub login integration:
  - **GITHUB_ID**: GitHub OAuth client ID.
  - **GITHUB_SECRET**: GitHub OAuth client secret.

### Build Settings
The project uses Node.js with Express as the main framework. Key build and development scripts are defined in `package.json`:
- **start**: Runs the server with `node .`.
- **dev**: Uses `nodemon` for development with automatic restarts on file changes (ignores certain directories like `src/assets/js`).
- **css**: Compiles Tailwind CSS from `src/tailwind.css` to `src/assets/css/index.css` with a watch option for continuous updates.
- **e2e**: Runs end-to-end tests using Cypress in Chrome browser.
- **e2e:watch**: Opens Cypress test runner for interactive testing.

### Plugins and Dependencies
- **Tailwind CSS**: Used for styling with a custom configuration in `tailwind.config.cjs`. It includes custom themes, breakpoints, fonts, and colors. The `@tailwindcss/forms` plugin is used to style form elements.
- **Passport.js**: Authentication middleware with support for local, Google, and GitHub login strategies.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Pug**: Template engine for rendering views.
- **Cypress**: End-to-end testing framework.

### Tailwind Configuration
The Tailwind CSS configuration is customized in `tailwind.config.cjs` with:
- Custom breakpoints for responsive design (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`).
- Extended theme options for fonts, colors (custom `twilight` palette), and text decoration.
- Content sources include Pug templates and JavaScript files for purging unused styles.

## Project Structure

This section outlines the organization of the repository, highlighting the purpose of key directories and files that make up the project.

### Key Directories
- **src/**: The main source code directory for the application.
  - **src/assets/**: Contains static assets like CSS, fonts, images, and JavaScript files used in the frontend of the application.
  - **src/config/**: Configuration files for database connections and authentication setups (e.g., GitHub and Google OAuth).
  - **src/controllers/**: Backend logic for handling requests related to authentication, email, homework, lessons, and page rendering.
  - **src/middleware/**: Custom middleware for authentication and flash messages.
  - **src/models/**: Database models defining the schema for various entities like users, lessons, homework, and progress tracking.
  - **src/routes/**: Route definitions for different parts of the application including email, homework, lessons, and OAuth.
  - **src/views/**: Template files using Pug for rendering HTML pages, including layouts, partials, and specific pages like login and dashboard.
- **cypress/**: End-to-end testing directory with test files for various features like authentication, lessons, and homework.
- **data/**: JSON data files for homework and lessons, likely used for seeding or static content.

### Key Files
- **src/server.js**: The entry point for the application, setting up the Express server.
- **package.json**: Defines project metadata, dependencies, and scripts for running and testing the application.
- **tailwind.config.cjs**: Configuration for Tailwind CSS, a utility-first CSS framework used for styling.
- **fly.toml**: Configuration file for deployment on Fly.io.
- **.env.example**: Example environment file for setting up environment variables.
- **.gitignore**: Specifies intentionally untracked files to ignore in Git.

## Additional Notes

This section provides supplementary information and insights about the project that may be useful for users and contributors.

### Project Context
This application serves as an educational platform tailored for learning programming concepts. It offers structured lessons, homework assignments, progress tracking, and a variety of resources to support learners. Key functionalities include user authentication (with GitHub and Google OAuth support), lesson and homework management, and a resource hub with downloadable materials and community projects.

### Data Management
The project uses predefined data files located in the `data/` directory for lessons, homework items, and additional content. These JSON files are likely imported into a database or used directly within the application to populate content dynamically.

### Testing
End-to-end testing is implemented using Cypress, with test scripts located in `cypress/e2e/`. These scripts cover authentication, basic page functionality, homework tracking, lesson navigation, and mobile menu interactions. Developers can run these tests to ensure the application behaves as expected across different scenarios.

### Customization
If you're looking to customize the application, consider exploring the Pug templates in `src/views/` for UI modifications, and the JavaScript files in `src/assets/js/` for client-side logic adjustments. Server-side logic, including authentication and data handling, can be modified in the `src/controllers/` and `src/routes/` directories.

### Environment Configuration
An `.env.example` file is provided as a template for setting up environment variables. Ensure you create a `.env` file with the necessary configurations for database connections, OAuth credentials, and other sensitive settings before running the application.

### Deployment Notes
The project includes a `fly.toml` configuration file, indicating it may be deployed using Fly.io. Review this file for deployment-specific settings and ensure all environment variables are properly configured in your deployment environment.

### Community and Support
For additional support or to engage with other users, check out the community resources and projects listed in the application. These can be found under the resources section, which includes challenges, FAQs, and downloadable materials to aid in your learning journey.

## Contributing

We welcome contributions to this project and appreciate your interest in making it better. Here's how you can contribute:

### How to Contribute
- **Find an Issue**: Browse through the [issues tab](https://github.com/labrocadabro/communitytaught/issues) to find something to work on, or create a new issue for a change you'd like to propose.
- **Get Assigned**: Wait to be assigned to an issue before starting work to avoid duplication of efforts.
- **Fork and Branch**: Fork the repository and create a branch named with the issue number and a brief description (e.g., `issue-1-lesson-card-styling`).
- **Make Changes**: Implement your changes on the branch, focusing only on the assigned issue.
- **Submit a Pull Request**: Create a pull request explaining your changes, linking it to the relevant issue.
- **Address Feedback**: Make any requested changes during the review process.

### Guidelines
- Follow the project's structure for naming branches and linking pull requests to issues.
- Keep changes focused on the specific issue; create new issues for unrelated changes.
- Adhere to the code style and practices used in the project (specific guidelines can be found in the full [Contributor's Guide](CONTRIBUTING.md)).

For detailed instructions on contributing, please refer to our [Contributor's Guide](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. For more details, please see the [LICENSE](./LICENSE) file.