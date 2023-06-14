import React, {Component} from "react";  
import UserOutput from "./UserOutput";


class App extends Component{


  state = {
    newName: [
      {username: "Omolara"}
    ],
  }

  nameChangedHandler = (e) =>{
    this.setState({
      newName: [
        { username: e.target.value }, 
     ],
    });
  }

  
    render()
  {
    return (
          <div className=" h-screen w-screen bg-gradient-to-tr from-green-600 to-blue-400 flex place-content-center place-items-center flex-col"  >
            <UserOutput userName={this.state.newName[0].username} change={this.nameChangedHandler}/>
          </div>
    );
  }
}


export default App