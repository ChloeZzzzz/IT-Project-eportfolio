# Folihub
A online e-portfolio storing and sharing tool. Folihub provides template for users to choose, receive user's input text and uploaded images, and makes it an elegant e-portfolio. Sharing as URL or download as a PDF options are avaliable. Let's do some e-portfolio today! :-)

## How To Deploy
**Sprint 1**  
In sprint 1, frontend homepage, sign up, login and user homepage skeleton code are finished, and database is setted up for backend. However, the web app has not been deployed online, and could only be viewd locally. Hence, if you would like to access what we have done, you could:
* Clone or download the frontend code from branch "dev-frontend",
* Navigate to the folder and run "npm install" in terminal,
* "npm start" and view it on localhost: 3000.

## APIs - Routers and Controllers
**User Authentication**  


## Features and Functionalities
**Homepage**  
Homepage is avaliable for all users (those who have accounts) and visitors (those who do not have accounts). This page includes product introduction, which is mainly on "Secure", "Fast" and "Inspiring", and also gives users and visitors a taste of the style of our product.     
  
URL Link: /  
  
**User Sign Up**  
This page is for visitors to sign up and use more advanced functionalities. Users are identified by an unique email address, and are required to set up a password, which is hashed and stored in the database. Sign up with Gmail is also planned to be implemented in future versions.  

URL Link: /signup  

**User Login**  
This page is for users to log in and access stored e-portfolios, or create new ones. User email and password are required.

URL Link: /login  

**User Homepage**  
User homepage displays all the e-portfolios the user owns. It can be accessed only after logged in. User can create new e-portfolios, or select past e-portfolios to edit from this page.  

URL Link: /userHomepage  

**Edit Folio**  
Edit folio page is when user click existed e-portfolios or create new e-portfolios from user homepage. Previous work (or empty page) along with editing tools in tool bar are displayed to allow the user to design and update that page (the term "page" here refers to a "page" in the e-portfolio). User could add new pages to e-portfolio as well. To do this, a pop up window will appear and user cam choose a template to continue.  

URL Link:  


**Export Folio**  
To export an e-portfolio, a url or PDF can be generated based on user selection. The url is a link to a web page presenting user's e-portfolio in a flipping book format. User could share this link to viewers, which could allow them to access without log in. A PDF of that eportfoilo could also be downloaded.  

URL Link:  

## Documentations
**Included in "Diagrams_and_models" folder**  
* Entity-relationship Model
* Class Diagram
* Architecture Model
* Motivation Model
* Front-end Page-Page Logic
* Sequence Diagram  

**Axure Prototype**  
https://6lugp1.axshare.com/  

**Trello board**  
https://trello.com/b/YKcZYnsR/it-project-team-11   

**Google Drive**  
https://drive.google.com/drive/folders/1lw9btbpFqWp7t7XuJI8qckoxfXTZ-9LF?usp=sharing  

including:
* Product Backlog / User Stories and acceptance criteria
* Standup and Group Meeting Minutes
* Do/Be/Feel Model
* Sprint Backlog
* Client Interview Notes


## Team Members  
| Role | Name |
| ----------- | ----------- |
| Product Owner | Yunwei Wu |
| Scrum Master | Yifei Zhu |
| Development Team | Haoyang Yu |
| | Ruijie Pan
| | Danlei Mou
| | Yifei Zhu
