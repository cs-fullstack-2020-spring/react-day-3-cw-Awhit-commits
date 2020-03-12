import React, {Component } from "react";
import Albums from "./Albums";
import Movie from "./Movies";

 class Favorites extends Component{
     constructor(props){
         super(props)
     }
     render(){
         return(
             <div className="Favorites">
                 <Albums/>
                 <Movie/>
             </div>
         )
     };
 };

 export default Favorites;