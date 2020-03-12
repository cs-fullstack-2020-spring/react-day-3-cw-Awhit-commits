# React Day 3 CW


* Create a react app called `user-media-favorites-app`. 
* Create a class based component called `Favorites`. 
* In the `Favorites` component render `<h1> This is a list of your favorite movies and albums</h1>` and two child components `Movies` and `Albums`. In the `Favorites` component prompt the user to enter their favorite movie, then prompt the user to enter their second favorite movie. 
* Store both movies in a movie array and pass this array to the child component  `Movies`. Also prompt the user for the favorite album and their second favorite album. 
* Store both albums in an album array and pass this array the the child component `Album`. In each child component print the message `Child component mounted` using a lifecylce method. Also iterate through the passed arrays rendering each element as an h3 tag. Display the `Movies` component and `Albums` component side by side.