# Yonex Sunrise India Open 2025 - Match Dashboard

A dynamic and responsive web application displaying badminton match results for the Yonex Sunrise India Open 2025. The project showcases match rounds, players, scores, and winners with a clean and interactive UI.

---

## Data Source

* Match data is **manually inserted** for Men’s Singles.
* Player images are sourced from the official BWF website: [BWF Tournament Page](https://bwfworldtour.bwfbadminton.com/tournament/5268/yonex-sunrise-india-open-2025/overview/).

---

## Tech Stack

* **Frontend:** React.js, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ORM)

---

## Features

* Display match rounds (Quarterfinals, Semifinals, Finals)
* Player names, images, scores, and winners
* Responsive UI with hover effects and cards
* Fully dynamic and visually appealing design

---

## Steps to Run

### Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Make sure MongoDB is running locally or update `.env` with your MongoDB URI.
4. Seed the database:

   ```bash
   node seed/scrapeMensSingles.js
   ```
5. Start the backend server:

   ```bash
   npm start
   ```

   API endpoint: `http://localhost:5000/api/matches`

---

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React application:

   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`.

---

## Assumptions & Limitations

* Player images are **manually linked**; not dynamically scraped due to CORS restrictions.
* Only **Men’s Singles** matches are included.
* Backend **does not include authentication**; all data is publicly accessible.
* Scores and winners are **hardcoded** for demonstration purposes.
* Responsive design covers mobile, tablet, and desktop but may need further fine-tuning for extreme screen sizes.

---

## Contact

Developed by **Adharsh** as part of a company assignment demonstrating full-stack development with React.js, Node.js, Express.js, MongoDB, CSS, and JavaScript.
