##  Project Name: FITLOG

## Description
FitLog is a daily fitness routine website where users can explore a collection of gym workouts and exercises. Users can view workout details, add workouts to Today's Plan, save workouts for later, and manage their workout activities from the My Plan page.

## Technology Used
Next.js, React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, React Toastify, LocalStorage, REST API.


## 🔗 Live Project

**Live Website:** https://fitlog-beta-gilt.vercel.app/
**GitHub Repository:** https://github.com/Rumi-Parvez/Assignment-of-PH-06-From-RumiParvez

## API
FitLog uses REST API data for the workout collection.

**All Workout Data:**
```text
https://api.api-store.workers.dev/api/fitlog```
**Single Workout Data:**
```text
https://api.api-store.workers.dev/api/fitlog:id
```

### Example Workout Data
```json
{
    "id": 1,
    "name": "Barbell Bench Press",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    "muscleGroups": [
      "Chest",
      "Arms"
    ],
    "equipment": "Barbell, Bench",
    "difficulty": "Intermediate",
    "duration": 25,
    "caloriesBurned": 180,
    "sets": 4,
    "reps": "6-8",
    "rating": 4.8,
    "description": "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    "instructions": [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  }
```

## 🔧 The Core and Key Features
* Huge workout data collection.
* Dynamic routing.
* Dynamic workout details page.
* Add workouts to Today's Plan and Saved with functional buttons using live API data.
* React Toastify toast notifications for user actions.
* Added data is displayed dynamically on the My Plan page.
* Plan and Saved counters are dynamically displayed in the Navbar.
* Conditional data rendering on the My Plan page with two sections: Today's Plan and Saved.
* Responsive styling based on different screen sizes and application states.
* All added workout data is displayed according to the selected section and its functionality.

### Workout List Actions
Each workout in the list contains:

* View Details button.
* Mark as Done button.
* Remove button with a cross icon.
* Functional toast notifications for different actions.

The Remove and Mark as Done actions update the workout data and dynamically update the related counters in the Navbar.

The Mark as Done button is available in Today's Plan but is not available in the Saved section.

### Dynamic Dashboard
The My Plan page includes a dynamic dashboard with three metrics:

* Exercises
* Minutes
* Calories


These values are fully functional for both Today's Plan and Saved sections.

* **Exercises:** Shows the total number of workouts currently added to the selected section.
* **Minutes:** Calculates and displays the combined duration of all workouts in the selected section.
* **Calories:** Calculates and displays the combined calories of all workouts in the selected section.


The dashboard updates dynamically according to the selected section and its current data.


### Today's Plan Limit
Today's Plan allows a maximum of 5 workouts.

When the plan already contains 5 workouts:

* The Add to Today's Plan button becomes disabled.
* If the user tries to add another workout, a notification is shown informing them that Today's Plan is full.

The Saved section has no maximum limit and allows unlimited saved workouts.

### Sort Option
The My Plan page includes a sorting option for both Today's Plan and Saved sections.

Users can sort the workout data by:
* Duration
* Calories
* Rating

The data is sorted from low to high.

### Error Handling
The application includes error handling for:
* Unknown or invalid routes with a custom 404 page.
* API data fetching errors.
* Invalid or unavailable workout IDs with a custom error page.

### LocalStorage
All important workout data is stored in LocalStorage, including:
* Plan items.
* Saved items.
* Counts.
* Added data.
* Deleted data.
* Updated workout data.

This allows the data to remain available after a browser reload.

### Loading State
The Home page and global application include custom loading states.

A loading spinner and custom loading UI are displayed while data is being loaded or fetched.

## Sections
* Navbar
* Hero
* Library
* Footer
* Workout Details Page with dynamic `[id]`
* My Plan Page
* Dynamic Dashboard Section
* Today's Plan and Saved Data Sections

## Responsive
The website is responsive and works on:
* Mobile
* Tablet
* Desktop

## 👨‍💻 Developer

**Name:** Rumi Parvez
**Age:** 17 (2026)
**Email:** openyhoolceo@gmail.com

**Description:**
A full-stack frontend developer and the Founder & CEO of @OpenyHool Software Company. I love exploring new technologies and building modern web applications.

## Project Links
**Live Website:**
https://fitlog-beta-gilt.vercel.app/
**GitHub Repository:**
https://github.com/Rumi-Parvez/Assignment-of-PH-06-From-RumiParvez
