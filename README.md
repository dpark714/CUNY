# CTP Project Starter

A full stack web application starter template for building projects with React, Express.js, and Sequelize.js

**Current version:** 3.0.0 (Oct 2023)

## Stack

> Node.js v16 LTS is recommended

_Backend API_

- express.js (v4.18.2)
- sequelize.js (v6.33.0)
- PostgreSQL (v14 recommended)

_Frontend React client_

- Based on `create-react-app`
  - pre-configured to work with the api
- Bootstrap (v5)
  - added to `/client/public/index.html` (_optional_ can be removed)
- React Router (v6)

## Development Setup

Each team member will need to do this on their local machine.

### Ensure you have PostgreSQL installed

- Check if you have PostgreSQL installed
  - ✅ versions 10-14 should work
  - 🚫 version 15 has not been tested
- If you need to install PostgreSQL see the [installing PostgreSQL guides](https://github.com/CUNYTechPrep/guides#postgresql)

### Create a PostgreSQL user and database

The project-starter template expects the following for local development:

- PostgreSQL User/Role
  - name: `ctp_user`
  - password: `ctp_pass`
- PostgreSQL Database
  - name: `ctp_appdb_development`

#### For Windows/pgAdmin users

If you are on Windows and installed **pgAdmin** follow our [pgAdmin guide](https://github.com/CUNYTechPrep/guides/blob/master/pgAdmin-create-user-db.md) to create a user in PostgreSQL named `ctp_user` with the password `ctp_pass` and a database named `ctp_appdb_development`.

#### For Mac/Linux users

Create a user in PostgreSQL named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user ctp_appdb_development
```

> You will create a DB for each project you start based on this repo. For other projects change `ctp_appdb_development` to the new apps database name.

### Running the app locally

For local development you will need two terminals open, one for the api-backend and another for the react-client.

_Clone_ this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

## Deployment

The following are hosting options that have a free tier for deploying apps based on this project-starter. Each option has it's pro's and con's.

Students can also get education credits for using Heroku through the [GitHub Student Developer Pack](https://education.github.com/pack)

### Hosting on [Render.com](https://render.com/) (_recommended_)

1. Create an account by clicking the __Get Started__ button
  - It's recommended to Sign up using your __Github__ account for easy linking to project repos.
  - The __Individual__ account type does NOT require a credit card
2. Navigate to the [Dashboard](https://dashboard.render.com/)
3. Create a PostgreSQL Database
  - Click the __New +__ button at the top of the page
  - Select __PostgreSQL__ from the drop down menu
  - Provide a __Name__ for your projects database
  - Choose a __Region__ closest to you or your users.
  - Choose __Instance Type__: Free
  - You can leave the optional settings empty
  - Click on the __Create Database__ button
  - Your database will be ready to use in 1-5 minutes.
  - Once the database is active, make note of where to get the Connection details, such as "__Internal Database URL__" and "__External Database URL__"
4. Create a Web Service
  - Click the __New +__ button at the top of the page
  - Select __Web Service__ from the drop down menu
  - Click on the __"Build and deploy from a Git repository"__ option and click __Next__
  - Connect to your project's repository on Github
  - Provide a __Name__ for your projects web app
  - Choose the same __Region__ as you chose for your database (_important for db connectivity_)
  - Choose the __Branch__ with the code you want to deploy (usually `main`)
  - Leave the __Root Directory__ empty
  - Choose __Runtime__: Node
  - Set __Build Command__: `npm install && npm run build`
  - Set __Start Command__: `npm start`
  - Choose __Instance Type__: `Free`
  - Expand the __Advanced__ options
  - Add __Environment Variables__
    + key: `SESSION_SECRET` = value: click on the __Generate__ button
    + key: `DATABASE_URL` = value: copy the "__Internal Database URL__" from your step 3.
    - Do NOT add the `PORT` variable (Render will set this for you)
  - Click the "__Create Web Service__" button
  - Your application will be live in 1-5 minutes

### Hosting on [Railway.app](https://railway.app/)

1. Create a Starter account using your Github username
   - You get $5 in credit a month for free and do not have to provide a credit card
2. Verify your account by answering Railways questions
3. Create a **"New Project"**
4. Select **"Deploy from Github repo"**
   - follow instruction to link your project repo to railway
5. Click **"Deploy now"**
   - your app will fail, but we will fix it in the next steps
6. Add a PostgreSQL Database to your Railway project
   - click the **"+ New"** button at the top right of the project
   - click **"Database >"**
   - click **"Add PostgreSQL"**
   - to add a PostgreSQL Database to your project
7. Add environment variables if you need any
   - Do not add the `PORT` variable (Railway will set this for you)

Your app will now be live and auto deployed on new commits. If it's not working you may need to restart the app manually in the Railway UI.

### Hosting on Heroku (no longer free)

> NOTE: Heroku is no longer free, but these instructions still work. We recommend getting started with render.com or railway.app

1. Create a Heroku account (_if you don't have one_)
2. Install the [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (_if you don't already have it_)

- Requires that you have `git` installed

```bash
# login with the cli tool
heroku login
```

#### Create a Heroku project

Next, `cd` into this project directory and create a project:

```bash
# replace `cool-appname` with your preferred app name
heroku create cool-appname

# add a free PostgreSQL database to your heroku project
heroku addons:create heroku-postgresql:hobby-dev
```

> This will make your app accessible at https://cool-appname.herokuapp.com (_if the name is available_).

> You only need to do this once per app

#### Add Environment Variables

Any environment variables your app needs will be available through your heroku project's settings page.

> NOTE: _Heroku calls them **Config Vars**_

- Go to the dashboard page here: https://dashboard.heroku.com/apps
- Click on the Settings tab
- Click `Reveal Config Vars`
- Add any environment variables you have in your `.env` file

#### Deploying the app

Whenever you want to update the deployed app run this command.

```bash
git push heroku main
```

> This command deploys your main branch. You can change that and deploy a different branch such as: `git push heroku development`

## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── index.js
│   │   └── microPosts.js
│   └── <strong>models</strong>
│       ├── MicroPost.js
│       └── index.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── <strong>components</strong>
│       │   ├── ErrorAlert.js
│       │   ├── LoadingSpinner.js
│       │   └── MicroPostCard.js
│       ├── index.js
│       └── <strong>pages</strong>
│           ├── AboutUsPage.js
│           ├── PostFormPage.js
│           ├── PostsListPage.js
│           └── ShowPostPage.js
├── package-lock.json
└── package.json
</pre>

____________________________________________________________________________________________
### Team Name & Project Name
CUNYCrafters & CUNYSphere

### Team Members
Dahyeon Park, Benjamin Zhang, Omar Abdullah, Amir Hamza

### Executive summary
A summary of your project
In today’s vast digital landscape, students often face challenges in sourcing reliable academic resources and engaging with peers who share their educational pursuits. UniSphere is designed to address these challenges by serving as a comprehensive platform for students. Here's how it works:
### What does the application do?
UniSphere provides a two-fold service approach for students. Firstly, it offers a selection of vetted academic resources, assisting students in their studies. Secondly, it creates a dedicated space for students to interact, discuss, and collaborate on academic topics.


### What is the motivation for your application?
The driving force behind UniSphere is to address the existing gap in the market. Students often find themselves switching between platforms that are either off academic resources or community engagement. UniSphere aims to streamline the student experience by seamlessly integrating both aspects into a single platform. 


### Which types of people would want to use this application?
UniSphere is tailored specifically to college students, particularly those within the CUNY system. However, it can also benefit high school students who are considering attending CUNY college in the future. 


### Are there similar applications and/or competitors available now? How does your idea differ? or why is there a need for a competitor?
While there are existing platforms like CourseHero and CollegeConfidential that cater to student needs, they tend to address only one aspect of the student experience. CourseHero primarily focuses on providing study materials, while CollegeConfidential emphasizes student discussions. UniSphere sets itself apart by integrating academic resources with a vibrant community, offering students a holistic experience. This unique combination makes UniSphere a necessary addition to the current market.


## User Types:
### Students
Description: Primary users seeking academic resources, engaging in discussions, asking questions, collaborating on projects, and interacting with peers.


Role: Access and download study materials, initiate or participate in discussions, create study groups, rate and review resources, and more.


### Administrators
Description: Behind-the-scenes managers responsible for ensuring the platform’s smooth operation, which control over all aspects of the platform.


Role: User management, including adding or removing users and assigning roles, addressing major technical glitches, managing partnerships or integrations, and overseeing the overall functioning of the platform.
User Stories:
As a student, I want to…
easily register and create a profile so that I can access study resources.
search and download relevant study materials so that I can prepare for my exams.
join or initiate discussions on topics I'm interested in so that I can understand concepts better.
rate and review resources so that others can benefit from my feedback and make informed choices
create or join study groups so that I can collaborate with peers. 


As an administrator, I want to…
manage user accounts, assigning roles and permissions so that the platform runs smoothly.
handle technical issues and oversee updates so that the platform remains up-to-date and bug-free.
analyze user activity and platform performance so that necessary improvements can be implemented.