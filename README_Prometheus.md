# CommunityTaught.org: A Comprehensive Learning Management Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage 100Devs class lessons and homework assignments. It provides an integrated platform for students to monitor their progress, complete assignments, and engage with course materials.

### Key Features
- Lesson tracking and progress monitoring
- Homework assignment management
- User authentication with multiple login methods (GitHub, Google, local)
- Resource hub for community projects and downloads
- Interactive dashboard for tracking individual progress

### Purpose
The project addresses the challenges of managing educational content and student progress by offering:
- A centralized platform for tracking 100Devs class materials
- Easy progress tracking for individual students
- Streamlined access to lessons, homework, and resources
- Simplified authentication and user management

### Benefits
- Simplifies course progression tracking
- Provides a unified interface for learning resources
- Supports multiple authentication methods
- Offers a community-focused learning experience

## Getting Started, Installation, and Setup

### Prerequisites

Before getting started, ensure you have the following installed:
- Node.js (version 18 or higher recommended)
- Yarn package manager
- MongoDB (local installation or MongoDB Atlas account)

### Quick Start

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
  - `PORT`: Default is 3000, can be customized
  - `DB_URI`: MongoDB connection string
  - `SECRET`: Session secret (any random string)
  - Optional: Configure SMTP, Google, and GitHub OAuth settings if needed

### Development Setup

#### Running the Application

To start the application in development mode:
```bash
yarn dev
```
This will launch the server with hot-reloading enabled.

#### Compiling CSS

If you're making changes to Tailwind CSS:
```bash
yarn css
```
This watches for CSS changes and recompiles.

### Production Build

For production deployment:
```bash
yarn start
```
Ensure all environment variables are properly configured.

### Testing

#### End-to-End Testing
Run Cypress E2E tests:
```bash
# Run tests in Chrome
yarn e2e

# Open Cypress interactive mode
yarn e2e:watch

# Record test results
yarn e2e:record
```

### Additional Configuration Notes

- The application supports multiple authentication methods:
  - Local login
  - Google OAuth
  - GitHub OAuth
- Configure OAuth credentials in `.env` for respective login methods
- SMTP settings can be configured for email functionality

### Deployment Platforms

This project includes a `fly.toml` configuration, suggesting compatibility with Fly.io deployment.

### Troubleshooting

- Verify MongoDB connection string
- Check that all required environment variables are set
- Ensure Node.js and all dependencies are correctly installed

## Deployment

### Deployment Platforms

The application supports multiple deployment platforms:

#### Fly.io Deployment
This project is configured for deployment on Fly.io with a pre-configured `fly.toml`:

1. Install Fly CLI
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh
```

2. Login to Fly
```bash
flyctl auth login
```

3. Deploy the application
```bash
flyctl deploy
```

#### Local Production Deployment
For local production deployment:

1. Install dependencies
```bash
yarn install
```

2. Build Tailwind CSS
```bash
yarn css
```

3. Start the production server
```bash
yarn start
```

### Environment Configuration
- Create a `.env` file based on the `.env.example` template
- Set all required environment variables, including:
  - Database connection strings
  - Authentication keys
  - Deployment-specific configurations

### Additional Deployment Considerations
- Ensure MongoDB connection is properly configured
- Set up environment-specific authentication strategies
- Configure environment variables for different deployment stages

### Scaling and Performance
- The application supports horizontal scaling
- Maximum concurrent connections: 25 (hard limit), 20 (soft limit)
- HTTPS is forced by default
- Default internal port: 8080

### Recommended Deployment Workflow
1. Set up environment variables
2. Build Tailwind CSS assets
3. Run database migrations (if applicable)
4. Start the application
5. Verify deployment by accessing the application URL

## Feature Highlights

### User Authentication
- Comprehensive authentication system supporting:
  - User registration with email verification
  - Secure login process
  - Password reset functionality
  - Account management (change password, change email, account deletion)

### Dashboard and Progress Tracking
- Personalized dashboard showing:
  - Next upcoming class
  - User-specific progress tracking
  - Username display
  - Admin users have quick access to add classes and homework

### Homework Management
- Complete homework tracking system:
  - View all homework assignments
  - Track individual homework progress
  - Mark homework as completed
  - Intuitive interface for monitoring assignments

### Resources Section
- Dedicated resources page with multiple subsections
- Easy navigation between different resource pages
- Provides additional learning materials and support for users

### Accessibility and User Experience
- Responsive design
- Clean, intuitive interface
- Mobile-friendly navigation
- User-friendly progress indicators

## Configuration

The project uses environment-based configuration to manage different deployment settings and sensitive information. Configuration can be customized using the following methods:

### Environment Variables
Create a `.env` file in the project root with the following configurable options:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Application environment mode (e.g., 'development', 'production')
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key (should be a random string)
- `DB_URI`: MongoDB connection URI
  - Local example: `mongodb://localhost:27017/<dbname>`
  - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.<subdomain>.mongodb.net/<dbname>`

#### Email Configuration (Optional)
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

#### OAuth Authentication (Optional)
- `GOOGLE_ID` and `GOOGLE_SECRET`: Google OAuth credentials
- `GITHUB_ID` and `GITHUB_SECRET`: GitHub OAuth credentials

### Development Scripts
The `package.json` provides several configuration and development scripts:

- `start`: Run the production server
- `dev`: Run the development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- `e2e:watch`: Open Cypress in interactive mode
- `e2e:record`: Run Cypress tests and record results

### Cypress Configuration
The `cypress.config.js` file allows customization of end-to-end testing:
- Base URL is set to `http://0.0.0.0:3000`
- Video recording is disabled by default
- Chrome web security is turned off for testing

### Deployment Configuration
The `fly.toml` file provides deployment-specific configurations for Fly.io:
- Uses Heroku builder
- Sets internal port to 8080
- Configures HTTPS and service concurrency limits

**Note**: Always ensure sensitive information like credentials are kept confidential and not committed to version control.

## Project Structure

The project follows a structured directory layout that separates concerns and organizes code logically:

#### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `cypress.config.js`: Cypress testing configuration
- `fly.toml`: Deployment configuration for Fly.io
- `tailwind.config.cjs`: Tailwind CSS configuration

#### Source Code Structure
```
src/
│
├── assets/                 # Static assets
│   ├── css/                # Stylesheets (CSS and Font Awesome)
│   ├── fonts/              # Web fonts
│   ├── img/                # Images and graphics
│   ├── js/                 # Client-side JavaScript
│   └── site.webmanifest    # Web app manifest
│
├── config/                 # Application configuration
│   ├── db.js               # Database configuration
│   ├── githubAuth.js       # GitHub authentication setup
│   ├── googleAuth.js       # Google authentication setup
│   └── importData.js       # Data import utilities
│
├── controllers/            # Business logic and request handlers
│   ├── auth.js             # Authentication controllers
│   ├── email.js            # Email-related controllers
│   ├── homework.js         # Homework management controllers
│   ├── lessons.js          # Lesson-related controllers
│   └── pages.js            # Page rendering controllers
│
├── middleware/             # Express middleware
│   ├── auth.js             # Authentication middleware
│   └── flash.js            # Flash message middleware
│
├── models/                 # Data models
│   ├── ExtraProgress.js    # Extra progress tracking
│   ├── Homework.js         # Homework data model
│   ├── HomeworkExtra.js    # Additional homework details
│   ├── HomeworkItem.js     # Individual homework items
│   ├── HomeworkProgress.js # Homework completion tracking
│   ├── ItemProgress.js     # Progress for specific items
│   ├── Lesson.js           # Lesson data model
│   ├── LessonProgress.js   # Lesson completion tracking
│   ├── Token.js            # Authentication token model
│   └── User.js             # User account model
│
├── routes/                 # Express route definitions
│   ├── emailRouter.js      # Email-related routes
│   ├── hwRouter.js         # Homework routes
│   ├── lessonRouter.js     # Lesson-related routes
│   ├── mainRouter.js       # Main application routes
│   └── oauthRouter.js      # OAuth authentication routes
│
├── views/                  # Pug template views
│   ├── layouts/            # Base layout templates
│   ├── mixins/             # Reusable view components
│   ├── partials/           # Partial view components
│   ├── resources/          # Resource-specific views
│   └── Various page templates (login, register, etc.)
│
├── server.js               # Main application entry point
└── tailwind.css            # Tailwind CSS base styles
```

#### Testing
- `cypress/`: End-to-end testing directory
  - `e2e/`: Test specifications
  - `fixtures/`: Test data
  - `support/`: Custom commands and test configuration

#### Data
- `data/`: Static JSON data files for homeworks and lessons

The project is organized to provide clear separation of concerns, with dedicated directories for configuration, controllers, models, routes, and views. This structure facilitates maintainability and allows for easy navigation and extension of the application.

## Technologies Used

### Backend
- **Runtime:** Node.js
- **Web Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** 
  - Passport.js
  - Passport strategies: 
    - Local authentication
    - GitHub OAuth
    - Google OAuth

### Frontend
- **Template Engine:** Pug
- **CSS Framework:** Tailwind CSS
- **JavaScript:** Vanilla JavaScript

### Development Tools
- **Package Manager:** Yarn
- **Bundling/Build:** Node.js module system (ES modules)
- **Development Server:** Nodemon

### Testing
- **End-to-End Testing:** Cypress
- **Unit Testing:** 
  - Jest
  - Vitest

### Third-Party Libraries
- **GitHub Integration:** Octokit Core
- **Email:** Nodemailer
- **Session Management:** Express Session
- **Validation:** Validator.js
- **Environment Configuration:** dotenv

### Deployment & Infrastructure
- **Deployment Configuration:** Fly.io (fly.toml present)

### Monitoring & Logging
- **Request Logging:** Morgan

#### Security
- **CORS Handling:** cors package
- **Session Storage:** connect-mongodb-session

## Additional Notes

### Project Background
This project was developed as a comprehensive tracking system for 100Devs classes and homework, initially created as a personal project and now open for community contributions.

### Development Insights
- The project represents the author's largest application to date, built with a focus on learning and iterative improvement
- The current implementation acknowledges technical debt and potential areas for future refinement

### Known Limitations
- The project uses Pug templating, which may have a steeper learning curve for potential contributors
- Documentation and collaborative processes are still being developed

### Testing and Quality Assurance
- End-to-end testing is implemented using Cypress
- Multiple browser testing configurations are available (Chrome, Edge, Firefox)
- Test scripts are configured in the `package.json`

#### Testing Commands
- Run end-to-end tests: `yarn e2e`
- Open Cypress interactive mode: `yarn e2e:watch`
- Record test videos: `yarn e2e:video`

### Future Considerations
- Ongoing improvements in project documentation
- Potential refactoring of templating system
- Enhancing contributor onboarding process

### Performance Notes
When developing or contributing, be mindful of:
- Database performance with MongoDB
- Potential complexity in authentication flows
- Tailwind CSS compilation for styling

### Deployment Considerations
- The project is currently hosted at [CommunityTaught.org](https://communitytaught.org/)
- Requires proper environment configuration (see `.env.example`)
- Depends on MongoDB for data persistence

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

#### 1. Find an Issue
- Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
- Look for open issues you're interested in working on
- If you want to work on something not yet listed, create a new issue first

#### 2. Contribution Process
1. Wait to be assigned to the issue to avoid duplicate work
2. Fork the repository
3. Create a branch named `issue-{number}-{brief-description}`
   - Example: `issue-42-update-lesson-card`
4. Make your changes
5. Create a pull request linking to the original issue
6. Respond to any review feedback

### Contribution Guidelines

#### Code Contribution Rules
- Make changes specific to the assigned issue
- If you discover additional improvements, create a separate issue
- Ensure your code follows the project's existing style and conventions

#### Development Setup
- Use `yarn` for package management
- Development scripts:
  - `yarn dev`: Run development server
  - `yarn css`: Watch and compile Tailwind CSS
  - `yarn e2e`: Run end-to-end tests
  - `yarn test`: Run unit tests (currently not configured)

#### Testing
- End-to-end tests are implemented using Cypress
- Run tests with `yarn e2e`
- Ensure all tests pass before submitting a pull request

#### Pull Request Requirements
- Clearly describe the changes made
- Link the pull request to the corresponding issue
- Include any relevant context or reasoning for the changes

### Code of Conduct
Be respectful, inclusive, and considerate of others. Harassment and discriminatory behavior are not tolerated.

### Questions?
If you have questions about contributing, please open an issue or reach out to the project maintainers.

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows you to:
- Use the software commercially
- Modify the software
- Distribute the software
- Privately use the software

#### Conditions
- Include the original license and copyright notice in any substantial portion of the software
- The software is provided "as is" without warranty

For the full license text, see the [LICENSE](LICENSE) file in the repository.

#### Copyright
Copyright (c) 2022 Laura Abro