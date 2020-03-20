import React, {Component} from 'react';

class Movie extends Component{
    componentDidMount(){
        //Notification of component mounting
        alert(`The Movie component did mount`);
    }
    render(){
      

        
      return(
        <div className ="Movie">
            <h2>Favorite Movie</h2>
            {/* {Iterate through the list of movies the users typed in */
                this.props.movieList.map(el =>{
                    return <h3>{el}</h3>
                })
            }
            
        </div>
      ) 
    }
}
export default Movie;