# Instructions  

---

In this lesson, you will build an application that
allows users to pick a maximum number and then
guess at the correct value. The correct answer is
calculated on the backend as a random value between
1 and the maximum value.

You will create two Express routes inside 'index.js'. The
first one will serve up the 'index.html' file. The second route
uses request queries in the URL and responds to GET requests 
at routes that look like `/api/:x/:y`, where x is the max 
number and y is the user's guess.
This route should respond by sending a boolean true if the
user made a correct guess or a boolean false if the user's guess
was not correct. If the user has changed their maximum value or made a 
new maximum value, update the correct answer before sending a response.
The correct answer should not change unless the maximum number has
changed.

Inside 'index.html', you should create a function
that checks if the user's input is valid (their max value
and guess value are both positive integers, and the guess
value is less than or equal to the max value). If the input
is not valid, update the `innerHTML` attribute of the element
with the id of `result`. If the input is valid, make
a `fetch` request to the second route
you made in 'index.js' using the values the user types into the 
input fields as request queries. Then, update
the HTML element with the `result` id based on
if the user made a correct or incorrect guess.

Once you have everything working, rework your project to use request
queries instead of request params. 