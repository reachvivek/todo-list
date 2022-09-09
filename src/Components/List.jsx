import React from "react";

function List(props) {
    // let [isClicked, setClicked] = useState(false)
    // function strike(){
    //     setClicked((prevValue)=>{return(prevValue===false?true:false)})
    // }
    return(
        <li style={{cursor:"pointer"}} onClick={()=>{props.del(props.id)}}>{props.list}</li>
        )
}
export default List;