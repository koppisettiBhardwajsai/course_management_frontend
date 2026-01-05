# Course Management Application

A simple Course Management system built using SQLite, Express, React, and Node.js.

## Tech Stack
- Frontend: React (Vite), CSS
- Backend: Node.js, Express
- Database: SQLite
- Authentication: JWT

## Features
- User Registration & Login
- Password hashing
- JWT authentication
- Create, Read, Update, Delete Courses
- Clean UI with basic CSS
- Secure API routes

## Deployment
- Frontend: Vercel
- Backend: Render

SQLite is hosted on Render since Vercel serverless does not support persistent SQLite storage.

## How to Run Locally

### Backend

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/courses
- POST /api/courses
- PUT /api/courses/:id
- DELETE /api/courses/:id