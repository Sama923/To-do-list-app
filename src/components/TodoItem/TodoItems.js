import React from 'react';
import './TodoItems.css'

const TodoItems = (props) => {
    const { items ,deleteItems } = props;
    let length =items.length;
    const ListItems=length?(
        items.map(item => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={()=> deleteItems(item.id)}>&times;</span>
            </div>
        )
    })
    ):(
        <p>there is no item to show</p>
    )
     
    return (
        
        <div className="List">
        <div>
            <span className="name list">Name</span>
            <span className="age list">Age</span>
            <span className="action title">Action</span>
        </div>
        {ListItems}
        </div>
    )
}

export default TodoItems;