Bucket-List-Front-End
![bucket-list](http://www.ratemovieshere.com/img/poster/thebucketlist.jpg)

Link to deployed front end: https://bearpigman.github.io/bucket-list-front-end/
Link to back end repo: https://github.com/BearPigMan/bucket-list-back-end/tree/location

Our Project is a Bucket List app, designed for keeping track of your goals located around the world. Your data is private, and users can access their saved goals visually.

# TECH #

* Google Maps API
* Express Node API
* JavaScript
* MongoDB
* Mongoose
* JQuery
* Twitter Bootstrap
* Grunt
* Sass
* Handlebars (depricated)

# APPROACH #

We took a basics-first approach to this project, adding complexity and functionality in each successive version. As much as possible, we tried to use  agile development, dividing up the work into short independent sprints, and coming together frequently to check in and to solve particularly hard problems.

After getting a very basic CRUD application with no styling to speak of, we started to implement the Google API. Getting the map to appear was easy, getting the markers to function properly was more difficult. After struggling with how to save data onto marker/goal objects, we eventually decided to save a map object locally and use that to interact both with the map object and the database.

# CHALLENGES #

* Working with handlebars (in a previous iteration of the app) to get data to appear visually
* Working with the Maps API and their approach to interacting with the DOM
* Encountering circular dependencies and saving data to a unique API object type

# INSTALLATION #

``npm install``

# USER STORIES #

I am a user and I want to save my goals to the database in order to remember them later
I am a user and I want to see my goals on the map in order to visualize where I should travel next
I am a user and I want to update my goals so that I can mark which I have accomplished

# WIREFRAMES #

http://i.imgur.com/DHYeBei.jpg

# ERD #

http://i.imgur.com/j6g4kLY.jpg
