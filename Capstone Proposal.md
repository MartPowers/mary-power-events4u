# Project Title

## Overview

What is your app? Brief description in a couple of sentences.

My app is an events web application that utilizes the Eventbrite API to allow users to search for and filter events by location and type, view popular events, and access detailed event information. Users can also reserve tickets and receive recommendations for similar events.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

Many users find it challenging to discover and attend events that match their interests and fit their schedules. Existing event discovery platforms may lack comprehensive filtering options, making it difficult for users to find specific types of events in their area. Additionally, users often need a streamlined way to reserve tickets and find similar events without having to conduct multiple searches.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The app will be used by individuals looking to discover and attend various events, such as concerts, trade shows, art shows, and more. Users range from casual event-goers to avid enthusiasts who frequently attend events.

-   Users will search for events by entering keywords and location details in the search bars.
-   They will use filtering options to specify the type of events they are interested in.
-   Users will view popular events directly from the home page.
-   They will navigate to event details pages to read descriptions, check locations, view costs, and reserve tickets.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Search Functionality:

-   Users can search for events using a search bar.
-   Users can search for events in specific locations using a location search bar.

Filtering Options:

-   Users can filter search results by event type (e.g., concerts, trade shows, art shows).

Popular Events Display:

-   The home page will display a list of popular events.

Event Thumbnails:

-   Event thumbnails will include a button to navigate to the event details page.

Event Details Page:

-   Users can view detailed information about an event, including description, location, costs, and date/time.
-   Users can reserve tickets for the event.

Responsive Design:

-   The app will be designed to work seamlessly on mobile, tablet, and desktop devices.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Frontend Technologies
-   React App
-   Sass Styling
-   React-router-dom

Backend Technologies
-   Node.js
-   Express.js

Libraries

-   Axios
-   EventBrite API
-   Lodash

### APIs

List any external sources of data that will be used in your app.

-   EventBrite API

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Site Map
    Home Page (/)
        Header
            Logo
            Create Event Button

        Main Content
            Search Bar
                Event Search Input
                Location Search Input
            Popular Events Section
                List of Popular Event Thumbnails
                Each thumbnail includes:
                    Event Image
                    Event Title
                    Event Date
                    Event Location
                    Button to Event Details Page
            Filter Section
                Event Type Filters (e.g., Concerts, Trade Shows, Art Shows, etc.)

        Footer
            Links
                Social Media Links


    Event Details Page (/event/:eventId)
        Header
            Logo
            Create Event Button

        Main Content

            Event Details Section
                Event Image
                Event Title
                Event Date and Time
                Event Location
                Event Description
                Ticket Reservation Button

            Recommended Events Section
                List of Similar Event Thumbnails
                    Each thumbnail includes:
                    Event Image
                    Event Title
                    Event Date
                    Event Location
                    Button to Event Details Page

        Footer
            Links
                Social Media Links

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.



### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

Relationships
An Organizer can host multiple Events (One-to-Many).
A User can reserve multiple Tickets (One-to-Many).
A Ticket is associated with one Event and one User (Many-to-One).

+-------------+         +--------------+          +----------+
|   Organizer |         |    Event     |          |   User    |
|-------------|         |--------------|          |----------|
| organizer_id|<------->| event_id     |          | user_id  |
| name        |  (1, M) | name         |          | name     |
| contact_email|        | description  |          | email    |
| contact_phone|        | date         |          | password |
| address     |        /| location     |----\     | location |
+-------------+      /  | image_url    |     \    +----------+
                     /  | type         |      \  
                   /    | cost         |       \
                 /      | organizer_id |        \
               /        +--------------+         \
             /          /                       \
+----------+       /  /                          \ 
|  Ticket  |      /  /                             \
|----------|     /  /                                \
| ticket_id |    /  /                                  \
| event_id  |< /  /                                     \ >
| user_id   |(M,M)                                       \
| reservation_date|                                         \
+----------+                                               \
                                                            \
                                                          +-------------+
                                                          |   User      |
                                                          |-------------|
                                                          | user_id     |
                                                          | name        |
                                                          | email       |
                                                          | password    |
                                                          | location    |
                                                          +-------------+


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

1. Get All Events
Endpoint: /api/events

Method: GET
Parameters: None

2. Get Event by ID
Endpoint: /api/events/:eventId

Method: GET
Parameters: eventId (path parameter)

3. Search Events
Endpoint: /api/events/search

Method: GET
Parameters:
query (query parameter for event name/type/location)
date (optional query parameter for date)
location (optional query parameter for location)

4. Get Popular Events
Endpoint: /api/events/popular

Method: GET
Parameters: None

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Timeframe Summary
Sprint 1: Project Setup and Basic Functionality 

    Task 1.1: Project Setup

        Step 1.1.1: Set up the development environment (Node.js, npm/yarn).
        Step 1.1.2: Initialize the project repository (Git).
        Step 1.1.3: Install necessary dependencies (React, Axios, Express, etc.).

    Task 1.2: Basic Frontend Setup

        Step 1.2.1: Create the basic file structure (e.g., src/components, src/pages).
        Step 1.2.2: Implement the header and footer components.
        Step 1.2.3: Implement routing for Home and Event Details pages using React Router.

    Task 1.4: Initial Home Page Implementation

        Step 1.4.1: Implement the search bar for event search and location search.
        Step 1.4.2: Display a list of popular events (use static data for now).

    Task 1.3: Eventbrite API Integration

        Step 1.3.1: Set up communication with the Eventbrite API.
        Step 1.3.2: Create a service to fetch events data (e.g., src/services/eventService.js).
        Step 1.3.3: Test API integration with dummy data.

Sprint 2: Home Page Functionality and Filtering 

    Task 2.1: Dynamic Data Integration  

        Step 2.1.1: Replace static data with dynamic data fetched from the Eventbrite API.
        Step 2.1.2: Display popular events dynamically.

    Task 2.2: Filtering Functionality

        Step 2.2.1: Implement event type filters (e.g., concerts, trade shows).
        Step 2.2.2: Implement date and location filters.
        Step 2.2.3: Ensure filters update the event list dynamically.

    Task 2.3: Search Functionality

        Step 2.3.1: Implement search functionality to fetch and display events based on user queries.
        Step 2.3.2: Ensure search results update dynamically as filters are applied.

    Task 2.4: Styling and Responsiveness

        Step 2.4.1: Apply basic styling to the home page using CSS or Sass.
        Step 2.4.2: Ensure the home page is responsive on mobile, tablet, and desktop views.

Sprint 3: Event Details Page and Ticket Reservation  

    Task 3.1: Event Details Page Implementation

        Step 3.1.1: Create the Event Details page layout.
        Step 3.1.2: Fetch and display event details (description, date, location, cost).

    Task 3.2: Ticket Reservation Functionality

        Step 3.2.1: Implement a form for reserving tickets.
        Step 3.2.2: When user clicks reserve, alerts users their tickets have been reserved

Sprint 5: Testing and Debugging

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Login Authorization.
Create Event form and post.
Animated interactive elements.
Reccomended events based on what you view.
Reserved ticket when clicked.
When you add a ticket, the total cost is added
