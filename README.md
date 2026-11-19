# KAAMFLOW – Repair Operations & Outcome Intelligence Platform

KAAMFLOW is an initial working demo for managing customers and repair service requests.

## Included in this version
- Responsive dashboard with request and customer counts
- Customer directory with add and search
- Service request creation and search
- Demo data saved in the browser's local storage
- Prisma PostgreSQL schema foundation
- API endpoint that validates service-request input

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Deploy to GitHub and Vercel
1. Create a new GitHub repository.
2. Upload the contents of this folder (not the ZIP file itself) to the repository.
3. In Vercel, choose **Add New → Project** and import the GitHub repository.
4. Keep the framework preset as **Next.js** and click **Deploy**.

No environment variables are required for this demo deployment.

## Current limitations
- This is a demonstration build. It does not yet include secure user authentication or role-based access control.
- Demo customer and request data is stored in the current browser only; it is not shared between users or devices.
- The Prisma schema is a foundation only. PostgreSQL connection, migrations and database-backed persistence are not yet implemented.
- The equipment section currently explains the planned workflow; a dedicated equipment form is pending.
- The API validates request data but does not save it to a database.

These limitations should be addressed before using the platform with real customer information.
