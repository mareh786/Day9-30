# 📚 Book Recommendation App – Day 9 of 30 Days of Deployment

This is a 3-tier web application that helps users discover books by genre, stay motivated, and track their reading progress.

## ✨ Features

### 🎨 Frontend (HTML/CSS + Vanilla JS)
- Beautiful landing page with black, yellow, and lemon yellow theme
- Motivational quotes with subtle animations
- Genre-based book filtering
- User login and registration

### 🛠 Backend (Node.js + Express)
- API endpoints to serve book data and handle user sessions
- Simple authentication logic
- Integration with MySQL database

### 💾 Database (MySQL)
- Tables for books, users, and reading history
- Schema loaded automatically in CI/CD pipeline

### 🔁 CI/CD (GitHub Actions)
- MySQL service configured inside GitHub Actions
- Schema auto-import
- Starts backend and frontend in the background
- Keeps app running briefly to simulate runtime

## 🚀 How to Run on EC2

```bash
# Clone the repo
git clone https://github.com/mareh786/Day9-30.git
cd Day9-30

# Start MySQL and import schema (make sure MySQL is installed)
mysql -uroot -p < setup.sql

# Start backend
cd backend
npm install
node server.js

# Start frontend (in separate terminal or background)
cd ../frontend
python3 -m http.server 8000
