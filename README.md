# E-com/SaaS RBAC

Welcome to the E-com/SaaS RBAC application! This sample demonstrates Role-Based Access Control (RBAC) within a single-tenant web application, using a hierarchical approach tailored for small to medium-sized e-commerce and SaaS projects.

It's designed as a simple E-commerce/SaaS application showcasing RBAC principles. The user interface allows account creation as either a Customer or an Admin.

A middleware prevents unauthenticated users from accessing the dashboard, requiring login or registration first.

Once on the dashboard, the left menu is protected by the user's role and associated permissions, ensuring access is role-specific.

## Features

- Supported roles
  - ADMIN
  - EMPLOYEE
  - MANAGER
  - SALES_REP
  - SUPPORT_STAFF
  - CUSTOMER
- Admins can create other roles (Manager, Sales Reps, and Support Staffs)
- User store
- Admins can create new roles dynamically
- Admins can assign extra permissions to specific users
- API Route and UI pages protected by permissions
- User Dashboard
- User Authentication and Authorization
- HOC UI component to easily hide or show protected components

## What I learned

To understand Role-Based Access Control (RBAC) from backend to frontend, I built a single-tenant RBAC module (suitable for small to medium-sized e-commerce/SaaS projects). Here are my few take away from this project:

- Database setup for RBAC,
- API route protection
- JWT session management
- Next.js app router structure, and
- Next.js middleware for unauthorized access prevention.

## Build with

- Next.js
- Typescript
- TailwindCSS
- PrimeReact
- Postgres
- Prisma, and
- Docker

## Project Setup

```bash

git clone https://github.com/DannyEnagu/next-rbac.git

# Step into the project directory

cd next-rbac

# Start the docker container for database

docker compose -d up

# Run local build

npm run dev

# Open your browser on

http://localhost:3000/
```

### Generate a Random JWT Secret Key

```bash

node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
