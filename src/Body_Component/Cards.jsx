import React from 'react';

export default class Cards extends React.Component{
   constructor(props){
      super(props);
    }
    render(){
        return(
            <div className='common' id='one'><img src={this.props.imgSrc} />
               <div className='sub' >
                 
                  <h2>{this.props.h2}
                  </h2>
                  <div>{this.props.div}</div>
                  <a href="">See More</a><br />
                  <button>{this.props.button}</button>
               </div>
            </div>   
        )
    }
}

