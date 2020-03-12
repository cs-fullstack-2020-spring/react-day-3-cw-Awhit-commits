import React, {Component} from 'react';

class Albums extends Component{
     //Notification of component mounting
    componentDidMount(){
        alert(`The Album component did mount`);
    }
    render(){
        // Combining definition of variables and intilization

        //Also prompting the user to enter Albums and pushing them to an array
        let FavAlbum = prompt("What is your favorite Album?")
        let albumList = [];
        albumList.push(FavAlbum);
        let secAlbum = prompt("What is your second favorite Album?");
        albumList.push(secAlbum);

        
      return(
        <div className ="Album">
            <h2>Favorite Albums</h2>
            {/* {Iterate through the list of albums the users typed in */
                albumList.map(el =>{
                    return <h3>{el}</h3>
                })
            }
            
        </div>
      ) 
    }
}
export default Albums;