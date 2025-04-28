# Community Taught: Full-Stack Node.js Web Application Boilerplate with Multi-Authentication and Modern Development Features

## Project Overview

A comprehensive web application designed as a versatile Node.js and MongoDB MVC boilerplate with robust authentication and modern web development features.

### Core Purpose
This project provides a flexible, feature-rich web application framework that simplifies the development of full-stack web applications by offering:
- A solid Model-View-Controller (MVC) architectural pattern
- Integrated authentication mechanisms
- Scalable and modular project structure

### Key Features
- **Multi-Authentication Support**
  - Local authentication
  - GitHub OAuth integration
  - Google OAuth integration
  - Secure user session management

- **Modern Web Technologies**
  - Express.js backend
  - MongoDB database integration
  - Pug templating engine
  - Tailwind CSS for responsive styling
  - Client-side and end-to-end testing capabilities

- **Developer-Friendly Configuration**
  - Environment variable management
  - Flexible routing
  - Middleware for authentication and request handling
  - Comprehensive logging and error handling

### Primary Benefits
- Rapid project bootstrapping
- Secure authentication out of the box
- Modular and extensible architecture
- Support for multiple authentication strategies
- Easy integration with various front-end and back-end tools

The project serves as an excellent starting point for developers looking to kickstart web application development with a pre-configured, secure, and adaptable foundation.

## Getting Started, Installation, and Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (version 18 or later recommended)
- Yarn package manager
- MongoDB (local installation or MongoDB Atlas account)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required configuration:
     - `PORT`: Server port (default: 3000)
     - `NODE_ENV`: Set to `development` or `production`
     - `DOMAIN`: Your application's base URL
     - `SECRET`: Random string for session management
     - `DB_URI`: MongoDB connection string
     - Optional: Email (SMTP), Google, and GitHub authentication settings

### Running the Application

#### Development Mode
To run the application in development mode with hot reloading:
```bash
yarn dev
```

#### Production Mode
To start the application in production mode:
```bash
yarn start
```

### Additional Setup

#### Tailwind CSS
To watch and compile Tailwind CSS:
```bash
yarn css
```

#### Testing

##### End-to-End Testing
Run Cypress E2E tests:
```bash
# Run tests in Chrome
yarn e2e

# Open Cypress interactive mode
yarn e2e:watch
```

### Environment Configuration Notes
- For local development, use a local MongoDB instance
- For production, use a cloud MongoDB service like MongoDB Atlas
- Configure authentication providers (Google, GitHub) as needed
- Set up SMTP settings for email functionality in production environment

## Deployment

### Prerequisites

- Node.js (version from package.json)
- MongoDB database
- Yarn package manager

### Environment Configuration

Create a `.env` file with the following required variables:
- `MONGODB_URI`: Connection string for MongoDB database
- `SESSION_SECRET`: Secret key for session management
- `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`: GitHub OAuth credentials
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Google OAuth credentials

### Local Deployment

1. Install dependencies:
```bash
yarn install
```

2. Generate CSS:
```bash
yarn css
```

3. Start the application:
```bash
yarn start  # Production mode
yarn dev    # Development mode with hot reloading
```

### Production Deployment

#### Fly.io Deployment

This project is configured for deployment on Fly.io:

1. Install Fly CLI
2. Authenticate with Fly
3. Deploy the application:
```bash
fly launch
fly deploy
```

Configuration details:
- Internal Port: 8080
- HTTPS Enforcement: Enabled
- Scaling: Soft limit of 20 connections, hard limit of 25

#### Docker Deployment

While no explicit Dockerfile is present, the application can be containerized using standard Node.js deployment practices:

1. Create a `Dockerfile` with:
```dockerfile
FROM node:latest
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
```

2. Build and run the container:
```bash
docker build -t communitytaught .
docker run -p 8080:8080 communitytaught
```

### Deployment Notes

- Ensure all environment variables are correctly configured
- Verify MongoDB connection before deployment
- Enable HTTPS in production environments
- Configure OAuth providers with appropriate callback URLs

## Feature Highlights

The application provides a comprehensive learning platform with the following core features:

### User Authentication
- Secure user registration with email validation
- Email-based login system
- Password reset and change functionality
- Email verification process
- OAuth integration (GitHub and Google)

### User Account Management
- Create and manage user accounts
- Update personal information
- Change email and password
- Account deletion option

### Learning Dashboard
- Personalized dashboard showing user progress
- Display of next upcoming class/lesson
- Tracking of lesson and homework completion
- Admin users can add new classes and homework

### Resources and Learning Materials
- Extensive resources section
- Multiple resource pages covering various topics
- Downloadable materials and guides
- Community project showcases

### Homework and Lesson Tracking
- Add and manage homework assignments
- Track progress on individual homework items
- Mark lessons and homework as complete
- Detailed progress tracking system

## Project Structure

The project follows a modular and organized structure designed to separate concerns and enhance maintainability:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code (`src/`)
The main application code is organized into several key subdirectories:

#### `src/assets/`
- `css/`: Stylesheets including Font Awesome and custom CSS
- `fonts/`: Web font files
- `img/`: Image assets for the application
- `js/`: Client-side JavaScript files for various functionalities
- `site.webmanifest`: Web app manifest file
- `tailwind.css`: Tailwind CSS source file

#### `src/config/`
Configuration modules for:
- Database connection
- GitHub authentication
- Google authentication
- Data import utilities

#### `src/controllers/`
Handle application logic for:
- Authentication
- Email management
- Homework management
- Lesson management
- Page rendering

#### `src/middleware/`
Custom middleware for:
- Authentication checks
- Flash message management

#### `src/models/`
Mongoose models defining data schemas for:
- Users
- Homework
- Lessons
- Progress tracking
- Authentication tokens

#### `src/routes/`
Express route handlers for:
- Email routing
- Homework routing
- Lesson routing
- Main application routing
- OAuth authentication

#### `src/views/`
Pug template files organized into:
- Main page templates
- Layouts
- Mixins (reusable template components)
- Partials (shared template fragments)
- Resource-specific views

### Testing
- `cypress/`: End-to-end testing directory
  - `e2e/`: Test specification files
  - `fixtures/`: Test data
  - `support/`: Custom commands and test configuration

### Data
- `data/`: JSON data files for homeworks and lessons

The project structure emphasizes modularity, separation of concerns, and clear organization of different application components.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Document Mapper) for MongoDB

### Authentication
- **Passport.js**: Authentication middleware
- **Passport Local**: Local authentication strategy
- **Passport GitHub**: GitHub OAuth authentication
- **Passport Google OAuth**: Google OAuth authentication

### Frontend
- **Pug**: Template engine
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### Development Tools
- **Nodemon**: Automatic server restart during development
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Vitest**: Lightweight testing framework

### Other Libraries and Utilities
- **dotenv**: Environment variable management
- **express-session**: Session middleware
- **cors**: Cross-origin resource sharing
- **validator**: Input validation
- **morgan**: HTTP request logging
- **nodemailer**: Email sending
- **@octokit/core**: GitHub API client

### Deployment and Infrastructure
- **Fly.io**: Cloud deployment platform (inferred from fly.toml)

## Additional Notes

### Project Roadmap and Future Improvements

The project is continuously evolving, with several areas identified for potential enhancement:

- **Documentation Refinement**: The current documentation is minimal and needs comprehensive expansion to facilitate easier contributor onboarding.
- **Technology Stack Evaluation**: The current use of Pug templating is acknowledged as potentially challenging for new contributors, suggesting a potential future migration to a more widely-used templating solution.

### Testing and Quality Assurance

The project includes end-to-end testing capabilities through Cypress, with multiple test execution configurations available in the project scripts:

- Standard end-to-end testing across different browsers (Chrome, Edge, Firefox)
- Video recording options for test runs
- Cypress verification and information retrieval scripts

### Authentication and Security

Multiple authentication strategies are implemented:
- Local authentication
- OAuth authentication via GitHub
- OAuth authentication via Google

### Performance Considerations

The project is designed with development flexibility in mind:
- Supports both production and development environment configurations
- Utilizes Nodemon for streamlined development workflow
- Integrates Tailwind CSS with watch mode for dynamic styling updates

### Potential Limitations

- Email functionality requires additional setup (e.g., Mailhog)
- Database setup and data import are manual processes
- Currently lacks comprehensive automated testing coverage

### Recommended Environment

- Node.js
- MongoDB (local or Atlas)
- Basic understanding of MVC architecture
- Familiarity with OAuth and authentication flows

### Browser and Platform Support

While specific comprehensive compatibility testing is not evident, the project appears to be designed for modern web browsers with ES module support.

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. **Find an Issue**
   - Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
   - Look for open issues you'd like to work on
   - If you have a suggestion, create a new issue describing the proposed change

2. **Contribution Process**
   - Wait to be assigned to an issue to avoid duplicate work
   - Fork the repository
   - Create a branch named `issue-{number}-{short-description}`
   - Make your changes
   - Submit a pull request linking to the original issue

### Development Setup

#### Prerequisites
- Node.js
- Yarn package manager

#### Local Development
- Clone your forked repository
- Run `yarn install` to install dependencies
- Use `yarn dev` to start the development server
- Use `yarn css` to watch Tailwind CSS changes

### Testing

The project includes multiple testing approaches:
- End-to-end testing with Cypress: `yarn e2e`
- Additional testing scripts available in `package.json`

### Code Guidelines
- Follow existing code style and patterns
- Write clear, concise commit messages
- Include tests for new features or bug fixes
- Ensure all tests pass before submitting a pull request

### Pull Request Process
1. Ensure your code follows the project's coding standards
2. Update documentation if your changes impact existing functionality
3. Your pull request will be reviewed and merged after approval

### Reporting Issues
- Use GitHub Issues to report bugs or suggest improvements
- Provide detailed information about the issue
- Include steps to reproduce, expected behavior, and actual results

### Code of Conduct
Be respectful, inclusive, and considerate of others. Harassment and discrimination are not tolerated.

Thank you for contributing!

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows users to do almost anything with the project's code with limited restrictions. 

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Conditions
- Include the original license and copyright notice in any substantial portion of the software

The full license text is available in the [LICENSE](LICENSE) file. 

### Copyright
Copyright (c) 2022 Laura Abro