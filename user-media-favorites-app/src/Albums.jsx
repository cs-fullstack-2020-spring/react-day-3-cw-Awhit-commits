import React, {Component} from 'react';

class Albums extends Component{
     //Notification of component mounting
    componentDidMount(){
        alert(`The Album component did mount`);
    }
    render(){
        

        
      return(
        <div className ="Album">
            <h2>Favorite Albums</h2>
            {/* {Iterate through the list of albums the users typed in */
                this.props.albumList.map(el =>{
                    return <h3>{el}</h3>
                })
            }
            
        </div>
      ) 
    }
}
export default Albums;