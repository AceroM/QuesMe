# QuesMe
#### Creators: Miguel Acero, Leo-Auyeung, Angela Lim, and Shariar Kabir

#### Overview
QuesMe is an interactive website that enhances student to teacher engagement by taking in anonymous student questions which are sent to the teacher in real time. Other students will be able to vote on submitted questions, and the most popular question will grow in size indicating that it is a concerning topic/question. The professor will be able to see this activity through their own page in the form of a dashboard. 

#### Inspiration
Throughout our education, it's always been a teacher to student relationship in the classroom. This may not always be the best teaching/learning environment because it discourages proper student engagement. Many students can be too intimidated to ask questions in class because of the fear for being judged for asking a "stupid question." They are also too afraid to answer questions because of the embarrassment of getting it wrong. Additionally, in large lectures, participating is quite difficult thus creating a lecture heavy course which is very mundane. 

#### How we built it!

We built a database for the students and teacher data using PostgreSQL
The frontend was built using React, Redux and Node.js while the the backend uses Express and Node.js
We used Socket.io to connect the database and our frontend/backend components to keep them updated in real time

#### Installation and how to run the site
  *Make sure you have Node and React installed. If you don't you can install it with these commands.
  If you're using a Mac you can use Homebrew to install Node with:

  ```sh
  $ brew install node
  ```
  If you're running Ubuntu you can use:
  ```sh
  $ sudo apt install nodejs
  ```

  After installing Node, cd to the frontend folder and type in terminal:

  ```sh
  $ npm install
  $ npm start
  ```
  For the backend, cd to the root folder and type:

  ```sh
  $ node app.js
  ```
  This should run the Postgres database on http://localhost:5000 

  The program should now run on http://localhost:3000


