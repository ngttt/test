import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Test = () => {
    const input1 = useRef();
    const input2 = useRef();
    const [input,setInput] = useState([]);
    
    const handleChange1 = () => {
        setInput([
            ...input, input1.current.value
        ])
    }

    const handleChange2 = () => {
        setInput([
            ...input,input2.current.value ])
    }

    const inputt = input;
    console.log(input);

    function unique (inputt) {
        inputt.map( item => {
            for(var i = 0; i < item.length; i++){
                for(var j = 1; j<item.length; j++){
                    if(i===j){
                        break
                    }
                    else return item[i];
                }
            }
            return(<div>{item}</div>);
        })
    }
        
    return (
        <div>
            <span>Nhap phan tu vao mang A1: </span>
            <input ref={input1} type="text"></input>
            <button onClick={handleChange1}>Click</button>
            <br/>
            <span>Nhap phan tu vao mang A2: </span>
            <input ref={input2} type="text"></input>
            <button onClick={handleChange2}>Click</button>
            <div> Mang gom: 
                <span>{input.map( item => {
                    return item;
                }
                )}</span>
            </div>
            <div> suy ra:
            <button onClick={unique(inputt)}>Click</button>
            </div>
        </div>
    );
}

ReactDOM.render(<Test/>, document.getElementById("root"));