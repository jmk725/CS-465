# CS 465 Full Stack Development

This repository contains my Travlr Getaways full stack web application that I worked on throughout CS 465. The project includes a customer-facing travel website and an Angular admin side where an authorized user can add, edit, and delete trips.

## Architecture

During this course, I worked with different types of frontend development. The customer-facing side used Express with HTML/Handlebars and JavaScript. This worked well for displaying information from the server, but it was more traditional because the server handled most of the page rendering. The admin side used Angular as a single-page application (SPA). Angular felt more complex at first because the project was broken into components, services, and routes, but I could also see why that structure is useful. The SPA can update information and move between different views without reloading an entirely new page each time.

The backend used MongoDB, which is a NoSQL database. MongoDB worked well for this project because the trip information could be stored as documents that are similar to the JSON data being passed through the application. It also worked well with Node, Express, and the rest of the MEAN stack.

## Functionality

JSON and JavaScript are related, but they are not the same thing. JavaScript is a programming language that contains logic and can perform actions, while JSON is mainly a format for storing and exchanging data. In this project, JSON helped connect the frontend and backend. The Angular application could request trip information from the API, receive the data in JSON format, and then display it to the user. Information entered on the admin side could also be sent back through the API to update MongoDB.

There were several times during the project when I refactored code instead of repeating the same functionality. One example was moving trip data access into a service that could be reused by different Angular components. I also used reusable components such as the trip card instead of creating the same layout separately for every trip. Later, I added an authentication service and JWT interceptor so the security logic did not have to be repeated in every request. Reusable UI components made the application easier to organize and made changes easier because I could update one component instead of changing the same code in several places.

## Testing

Testing was a big part of getting the full stack application working. I learned that an endpoint is the location in the API where the frontend can request or change information. Different HTTP methods perform different actions. GET retrieves information, POST creates new information, PUT updates existing information, and DELETE removes information.

I used Postman to test the API endpoints separately from the Angular application. This helped me figure out whether a problem was coming from the backend API or the frontend. Security added another layer to the testing because some endpoints required a valid JWT. I tested logging in to receive a token and also tested what happened when a protected request was made without proper authorization. During this process I ran into errors such as 401 Unauthorized, 404 Not Found, and connection refused errors. Working through those errors helped me understand how the Angular frontend, Express API, authentication, and MongoDB database all have to communicate correctly for the application to work.

## Reflection

This course was challenging for me because full stack development involved a lot of different pieces working together. At the beginning, it was sometimes difficult to understand how all of the folders, files, routes, and services connected. As I worked through the modules, it started making more sense because I could actually see data moving from MongoDB through the API and then appearing in the application.

I gained more experience with Node.js, Express, MongoDB, Angular, APIs, JSON, GitHub, and testing with Postman. I also learned more about authentication and using JWTs to protect parts of an application. One of the biggest things I improved on was troubleshooting. There were plenty of times when something did not work the first time, and I had to use the terminal, browser developer tools, error messages, and Postman to figure out what was wrong.

I still have a lot to learn, but completing a working full stack application gave me a better understanding of how frontend and backend development work together. These are skills I can continue building on and can talk about when applying for positions that involve software development, web development, or other areas of technology.
