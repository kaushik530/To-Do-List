# To-Do List

A responsive task management application built with **HTML, CSS, and JavaScript**. It allows you to organize tasks into projects, track deadlines, priorities, and completion status, with data persisted using `localStorage`.

## Features

- Create and delete projects
- Create tasks inside projects
- Set task title, description, due date, and priority
- Mark tasks as completed
- Delete tasks
- View:
  - All Tasks
  - Upcoming Tasks
  - Completed Tasks
  - Tasks belonging to a specific project

- Task details view
- Priority indicators
- Responsive mobile layout
- Persistent data using browser `localStorage`
- Built with ES6 modules
- Uses `date-fns` for date formatting

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- date-fns
- LocalStorage

## Getting Started

Clone the repository:

```bash
git clone https://github.com/kaushik530/To-Do-List.git
cd To-Do-List
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at the local development URL shown by Webpack.

## Persistence

Projects and their associated tasks are stored in the browser's `localStorage`, so your data remains available after refreshing or reopening the website in the same browser.

## Deployment

The project is deployed using **GitHub Pages**.

**Live Demo:**
[https://kaushik530.github.io/To-Do-List/](https://kaushik530.github.io/To-Do-List/)

## Project Structure

```text
To-Do-List/
├── src/
│   ├── assets/
│   ├── index.js
│   ├── project.js
│   ├── projectView.js
│   ├── task.js
│   ├── taskView.js
│   ├── storage.js
│   └── styles.css
├── package.json
├── webpack.config.js
└── README.md
```

## Future Improvements

- Edit existing tasks and projects
- Drag-and-drop task organization
- Better task sorting and filtering
- Persistent task selection/state
- Improved accessibility
- More advanced deadline management
