
# Contact Management Application

## About Author
Mitansh Chaudhari  
Email: mchaudhari1@hawk.iit.edu  
Class: ITMD 422  
Assignment: Lab 3  
Git repository URL: https://github.com/ITMD442-MitC/lab3Sqlite

## Project Description
This project, an extension of Lab 2, evolves the simple yet functional Contact Management Application to utilize SQLite for data storage, enhancing its data management capabilities. Built using Node.js, Express, and integrating `better-sqlite3` for database operations, it facilitates creating, viewing, editing, and deleting contact information through a web interface.

## Development Environment
- **OS**: macOS Sonoma
- **Node.js Version**: 14.15.1
- **Editor**: Visual Studio Code
- **Database**: SQLite with `better-sqlite3` for synchronous database interactions.
- **Other tools**: Express.js, Pug for templating, Bootstrap for styling, nodemon for development efficiency.

## Installation/Running Instructions
1. Clone the repository:
```
git clone https://github.com/ITMD442-MitC/lab3Sqlite.git
```
2. Navigate to the project directory:
```
cd lab3Sqlite
```
3. Install dependencies:
```
npm install
```
4. Start the application:
```
npm run dev
```
5. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Insights and Results
Transitioning to SQLite introduced the challenge of integrating synchronous database operations within an asynchronous web server environment. Utilizing `better-sqlite3` facilitated a smoother development process, allowing for straightforward SQL queries execution. This lab emphasizes the importance of database management systems in web applications, offering insights into effective data handling and storage solutions.

## References
- SQLite Documentation: https://www.sqlite.org/index.html
- `better-sqlite3` Documentation: https://github.com/WiseLibs/better-sqlite3
