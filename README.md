## Getting Started

You should have installed [Node.js](https://nodejs.org/) and [git](https://git-scm.com/) in your computer.

First, run the following command to install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the aplicaction by modifying `src/App.jsx`. The page auto-updates as you edit the file.

## Getting Started  with Testing

First, run the following command to install the dependencies:

```bash
npm install
```

Then, run the test server:

```bash
npm run test
```

Otherwise, run the test ui server:

```bash
npm run test:ui
```

Open [http://localhost:51204/__vitest\__/](http://localhost:51204/__vitest__/) with your browser to see the result.

## More about QA and Testing

To learn more about QA and Testing, take a look at the following resources:

- [Vitest](https://vitest.dev/) - Blazing Fast Unit Test Framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete testing utilities that encourage good testing practices.
- [Tutorial](https://www.youtube.com/watch?v=Yocj2BB3AQU&t=1582s&ab_channel=FaztCode) - React Vitest Tutorial, Unit Testing con React Testing Library y Typescript *Start with this one*.

## Coding Best Practices

When contributing to this project, it's important to follow some coding best practices to maintain code quality and streamline collaboration. Here are some guidelines to keep in mind:

### 1. Commit Messages

When making commits to the repository, use meaningful commit messages that describe the purpose of the commit. Follow these conventions:

- **Prefixes**: Start your commit message with a prefix to categorize the type of change. Some common prefixes include:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for code style changes (e.g., formatting)
  - `refactor:` for code refactoring
  - `test:` for adding or modifying tests
  - `chore:` for routine tasks, maintenance, or housekeeping

Example commit messages:

feat: Add user authentication feature
fix: Resolve issue with login form validation
docs: Update README with installation instructions


- **Keep it concise**: Limit your commit message to 72 characters or less for a clear and concise description. If additional details are needed, you can provide them in the commit body, separated by a blank line.

### 2. Pull Requests (PRs)

When creating Pull Requests (PRs) to propose changes, follow these practices:

- **PR Titles**: Use a clear and descriptive title for your PR that summarizes the purpose of the changes.

- **Link to Issues**: If your PR is related to an issue or a ticket, mention the issue number in the PR description or title to create a link between the PR and the issue.

- **Assign Reviewers**: Assign one or more reviewers to your PR to ensure code quality and consistency.

- **Review and Discussion**: Be responsive to comments and feedback during the PR review process. Address any concerns or suggestions raised by reviewers.

### 3. Issue and Ticket Tracking

For tracking issues, enhancements, and tasks, consider using a consistent naming convention for tickets:

- **Prefixes**: Start issue or ticket names with a prefix to indicate their type, such as:
  - `bug:` for bug reports
  - `enhancement:` for feature requests
  - `task:` for general tasks or chores


## 4. Use of Prefixes in Branch Names
When working with Git and GitHub, it's a good practice to use prefixes in branch names to categorize and differentiate your branches. Common prefixes include:

- `feature/:` For new features or enhancements.
- `bugfix/:` For fixing bugs or issues.
- `hotfix/:` For critical fixes that need to be deployed quickly.
- `refactor/:` For code refactoring.
- `docs/:` For documentation changes.
- `chore/:` For maintenance or non-functional changes.

## Deploy on Vercel

The easiest way to deploy a react application is to use the  Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EstandaresDeCalidadSW23/vikingos-analyser)