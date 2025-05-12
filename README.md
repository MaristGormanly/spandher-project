# spandher-project

Universal Connect is a social platform that allows users to share thoughts, updates, and events in real time through a central feed. Designed as a streamlined version of Twitter, Universal Connect focuses on clean interaction and fast posting. Users can share anything that they wish to post and connect with others.

b. 
i. You must have node.js, postgresql, npm, pgadmin installed on your system. 

ii. 
 clone the project
git clone https://github.com/your-username/universal-connect.git
cd universal-connect

install dependencies
npm install

start the express server
npm start

iii. 
CREATE USER uc_user WITH ENCRYPTED PASSWORD 'uc_pass';
CREATE DATABASE universalconnect OWNER uc_user;
\c universalconnect

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

c. What works: The signup and login pages are functionally and redirect you to the feed page, post submission works through fetch, RESTful Api for post creation and reading. Posts being sent to the database and stored within posts table. 

Improvements: The security of Universal Connect could be better but for now this is just meant to be basic for the sake of the project. The application can also be more visually appealing, and have more features. 

Future plans: I want to implement a system where users can tag and reference other posts and also have a reply system to the posts. Along with a system where the feed can be filtered and specific things can be searched for. 


User documentation: Starting off with npm start and running everything.
So when you first get onto the site http://localhost:1337/ you will see that this is the homepage that has your traditional login and signup. Once you are signed up or logged in you will be redirected to the feed page, where all the posts are made and available for viewing. Here one can make a post on the feed page, enter a title and body, then click post and see it pop up on the live feed for everyone to see. The posts that are made are also sent over to our database and pop up within the posts table in our database.

