import React, {Component} from 'react';

class Movie extends Component{
    componentDidMount(){
        //Notification of component mounting
        alert(`The Movie component did mount`);
    }
    render(){
        // Combining definition of variables and intilization

        //Also prompting the user to enter movies and pushing them to an array
        let FavMovie = prompt("What is your favorite Movie?")
        let movieList = [];
        movieList.push(FavMovie);
        let secMovie = prompt("What is your second favorite Movie?");
        movieList.push(secMovie);

        
      return(
        <div className ="Movie">
            <h2>Favorite Movie</h2>
            {/* {Iterate through the list of movies the users typed in */
                movieList.map(el =>{
                    return <h3>{el}</h3>
                })
            }
            
        </div>
      ) 
    }
}
export default Movie;