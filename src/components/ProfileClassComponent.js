import React from 'react'

class ProfileClassComponent extends React.Component {
  constructor(){
    super();
    this.state={
       count:0
    };
    console.log("constructor")
  }


componentDidMount(){
   console.log("component did  Mount")
   this.timer=setInterval(()=>{
    console.log("this is an interval")
   },1000)
}

componentDidUpdate(){
    console.log("component did updated")
}

componentWillUnmount(){
    console.log("component will unmount");
    clearInterval(this.timer);
}
  render() {
    console.log("render")
    return (
        <React.Fragment>
            <h1 onClick={()=>{
        this.setState({
            count:1
        })
      }}>{this.state.count}</h1>
      <h2>
     {this.props.name}
      </h2>
        </React.Fragment>
      
    )
  }
}

export default ProfileClassComponent;