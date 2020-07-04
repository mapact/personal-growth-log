# Personal Growth Log - POST MORTEM
## Approach and Process
1. What went well</br>
Using personal experiences to think about the 

2. What can be done differently

## Code and Code Design
1. What went well</br>
The process allows me to sharpen my skills in learning how to search for the problems in my code to find a solution. It is to build something that is the most simple case, and then letting that work. Then, to add code on top of the code that works. My previous approach is to include the whole block of codes that I think would work for the app, but realize it is too hard to debug and find the real problem as I always have to re-look the codes.</br>
</br>
To be able to "find" the problem, I will need to learn the components and the parts I am having problems with. To be able to know the problems, I have to print out what the code is passing. In simple terms, it is to "console.log" everything I am passing as results. When the results are printed, and there is an error, I can google the problem. However, this will only work if the problem is a tactical issue. For areas that I have a bigger, conceptual gap of knowledge, this approach will not work. Then it will require a lot of asking and clarifying concepts. I leverage on TA and my classmates who have experienced this, or are ahead of me. For example, I would not have been able to understand how chart.js work in 1 day, if I did not consult Yue Jia, Alvis and Wilfred. They helped to explain the documentations, shared their experiences, and probed more areas to discover that improves the idea for the app. </br>

2. What can be done differently </br>
### Strategy
Conceptually, I am still unfamiliar with how the codes should be able to work in an intuitive way. I will have to refer to the notes several times, again and again, to refresh the memory. Hence, most of the time during project 2 was spent relooking at lecture recordings. Sometimes, I may even implement it wrongly. For example, I had forgotten that in ejs, I could not be using DELETE route without disguisting it into a PUT request. I think this is a fairly reasonable progress and learning curve, given that I have no prior background and I have to use extra effort for a similar outcome. This takes time and practice, and I wonder where I would be able to practice this and not lose touch with the concepts. </br>
### Tactics 
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