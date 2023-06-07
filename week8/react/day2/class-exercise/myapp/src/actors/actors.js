
import React from 'react';

// const Actors = ({firstName,LastName,image})=>{
//     return (
//     <div>
//         {firstName}
//         {LastName}
//        <img src={image} alt={firstName}/>
//     </div>
//     );
// }
class Actors extends React.Component{
    render(){
const { firstName, lastName, image}=this.props;
return(
    <div>
        {firstName}
        {lastName}
        <img src={image} alt={firstName}/>
    </div>
    );
    }
    }

export default Actors;