import React, {Component } from "react";
import Albums from "./Albums";
import Movie from "./Movies";

 class Favorites extends Component{
     constructor(props){
         super(props)
         this.state = {
             movieList:[],
             albumList:[],

         }
         //Prompting the user and pushing their answers to a list
         let favMovie;
         favMovie = prompt("What is your favorite movie");
         this.state.movieList.push(favMovie);
         let secMovie = prompt("What is your second favorite movie?");
         this.state.movieList.push(secMovie);
         this.setState({movieList:this.state.movieList});
         let favAlbum = prompt("What is your favorite album");
         this.state.albumList.push(favAlbum);
         let secAlbum =prompt("What is your second favorite album?");
         this.state.albumList.push(secAlbum);
         
     }
     
     render(){
         return(
             <div className="Favorites">
                 {/* Passing the respective list to their respective component*/}
                 <Albums albumList ={this.state.albumList}/>
                 <Movie movieList = {this.state.movieList}/>
             </div>
         )
     };
 };

 export default Favorites;