# Personal Growth Log - POST MORTEM
## Approach and Process
### What went well</br>
Using personal experiences to think about the user experience. I wanted to make something that is able to be used easily. Similar to [this*](https://punktapp.me/) </br>
</br>
*disclaimer: this app was found after the creation of this project. It will be used for reference in future developments*
</br>
### What can be done differently</br>
I had put in too much time trying to figure out the "sequence" of building the application, and did not put too much thought on the folder structure. This caused some trouble when I tried to deployed on Heroku.</br>
</br>
**I learnt that the approach can be as followed:**</br>
1. install dependencies and libraries
2. determine routes (CRUD operations)
3. link routes in repository, and controller (front-end)
4. make sure front-end is correctly linked to the routes that has been determined
</br>
**To host the app on Heroku, I can use the following approach:** </br>
1. make sure directories are correct (ie: put all source codes into src, routes.js and server.js into root folder, and .env is correctly linked to a dynamic port). This also means to include all directory correctly for each folder. (special credits to angrylobster for the dependencies fix)
2. have Heroku app setup on a whitelist IP (in this case, its 0.0.0.0/0, since it is just a small project)
3. include mongoDB URL 
4. include mongoDB Atlas cluster, and link it to Heroku
</br>

## Code and Code Design
### What went well</br>
The process allows me to sharpen my skills in learning how to search for the problems in my code to find a solution. It is to build something that is the most simple case, and then letting that work. Then, to add code on top of the code that works. My previous approach is to include the whole block of codes that I think would work for the app, but realize it is too hard to debug and find the real problem as I always have to re-look the codes.</br>
</br>
To be able to "find" the problem, I will need to learn the components and the parts I am having problems with. To be able to know the problems, I have to print out what the code is passing. In simple terms, it is to "console.log" everything I am passing as results. When the results are printed, and there is an error, I can google the problem. However, this will only work if the problem is a tactical issue. For areas that I have a bigger, conceptual gap of knowledge, this approach will not work. Then it will require a lot of asking and clarifying concepts. I leverage on TA and my classmates who have experienced this, or are ahead of me. For example, I would not have been able to understand how chart.js work in 1 day, if I did not consult Yue Jia, Alvis and Wilfred. They helped to explain the documentations, shared their experiences, and probed more areas to discover that improves the idea for the app. </br>

### What can be done differently </br>
#### Strategy
Conceptually, I am still unfamiliar with how the codes should be able to work in an intuitive way. I will have to refer to the notes several times, again and again, to refresh the memory. Hence, most of the time during project 2 was spent relooking at lecture recordings. Sometimes, I may even implement it wrongly. For example, I had forgotten that in ejs, I could not be using DELETE route without disguisting it into a PUT request. I think this is a fairly reasonable progress and learning curve, given that I have no prior background and I have to use extra effort for a similar outcome. This takes time and practice, and I wonder where I would be able to practice this and not lose touch with the concepts. </br>
#### Tactics 
Will not paste the whole chunck of code over to my file and assume it works. Imitation does not solve the problem when I do not understand the concepts and the purpose of the code.</br>
I did not implement TDD in the repository directory as I have not fully understand the ways of writing code yet. My thought is to build something that is workable. 

## Future development: front-end user experience
1. Navbar: Jumbotron from Bootstrap and footer - to add "Home" and "About"
2. Mobile app design, inspiration from Shi Jie's project
3. Having dropdown of multiple options from "Index" page to include delete and edit function (Alvis' project)
4. Include tags as categories, and query the data by tags
5. Have placeholder texts
6. Render the graph by not storing data within <graph.ejs>. Currently, I was able to pull the data from the graph, but I need to be able to write the code in a way that the data can be pulled directly from MongoDB as the current view is not idea

## Future development: back-end codes
1. TDD test cases on the repository directory
2. Formatter and validator on the data that has been entered
3. User sign in/sign up formatter and validator
4. User sign in route and journey
5. Error handling
