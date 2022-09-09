import React, {useState} from "react";
import List from "./List";

function Form(){
    let [list, setList] = useState(["A Item"]);
    let [item, setItem] = useState("");

    function handleChange(event){
        let {value} = event.target
        setItem(value)
    }

    function add(event){
        setList((prevList)=>{return[...prevList, item]})
        setItem("")
        event.preventDefault()
    }

    function deleteItem(id){
        console.log(id)
        setList((prevList)=> {return prevList.filter((item, index)=>{
            console.log(index, id);
            return (index!==id)
        })})
        console.log(list) 
    }

    return(
    <div>
        <div className="form" onSubmit={add}>
            <input style={{outline:"none"}} type="text" onChange={handleChange} placeholder="What's next?" value={item}/>
            <button onClick={add}>
                <span>Add</span>
            </button>
        </div>

        <div>
            <ul>
            {list.map((item, index)=>{return(<List id={index} del={deleteItem} key={index} list={item}/>)})}
            </ul>
        </div>
    </div>
    )
}

export default Form;