# airport-dist
Distances between airports

# Setup 
1. npm install
2. gulp
3. Insert your own google maps API Key into index.html
4. npm start
5. Look up JFK to LGA.

# Things to Remember or Note
1. Ask Questions: 

For this project, it is important to understand many things before any steps are made toward implementation. 
It shouldn't be assumed that a particular project is going to be built as a single-page application. 

It is also faulty to assume an app requires a backend. If it is a project that will never be scaled and does not serve the purpose of education, then using a framework and even implementing a backend can be deemed 
excessive and overengineered. 

Also, what APIs are you able to access to implement said idea? The difficulty of this project varies greatly depending on the ability to use an existing map API. 

Also, who are the users that you are making this app for? Isn't that, in the end, the most important
aspect? If you aren't developing this app for its users, then who are you developing it for (assuming not for educational purposes)? The list goes on, but remember that it only benefits both parties if you ask questions
concerning uncertainties. 

2. This is not a complete project.

This is only a bare minimum of potential requirements. The airport dataset that this project draws from has gaps and the app does not protect against this.
I chose not to since this functionality depends on the type of data made available. Were I to use a different API, my code would vary. It is up to you to
ask about potential datasets to use, and build appropriate error-handling. 

Some features you may choose to implement as well: persistent past routes saved to a table that can also be selected, ability to select
different travel modes from point A to point B, e.g. walking, driving, skipping... improved searching based on location of user, ability to browse
flights corresponding to route...

#Also
You should modify the gulp file to also concatenate and minify the css and js files for the final product. And also write unit tests. Of course, this all
goes back to asking about the requirements. 
