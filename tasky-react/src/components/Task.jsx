import React from 'react';

const Task = (props) => {
    const getPriorityColor = (priority) => {
        switch(priority) {
            case "High":
                return { backgroundColor: "red", color: "white" };
            case "Medium":
                return { backgroundColor: "yellow", color: "white" };
            case "Low":
                return { backgroundColor: "green", color: "white" };
            default:
                return {};
        }
    };
    
    return (
  <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p
                className="priority"
                style={{
                    ...getPriorityColor(props.priority),
                    padding: "5px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
            >
            {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>


        </div>
    )

}

export default Task;