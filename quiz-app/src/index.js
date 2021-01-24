import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const Quiz = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(json => 
            setItems(json.results)
            )
    },[]);
    
    return (
      <div>
        <h1>Sport Quizz</h1>
        {console.log(items)}
        {items.map( item => { 
                return (
                        <div key={item.question}>
                          <p>{item.question}</p>
                          <input type="checkbox" isChecked="false" ></input>{item.incorrect_answers[0]}
                          <br></br>
                          <input type="checkbox" isChecked="true"></input>{item.correct_answer}
                          <br></br>
                          <input type="checkbox" isChecked="false"></input>{item.incorrect_answers[1]}
                          <br></br>
                          <input type="checkbox" isChecked="false"></input>{item.incorrect_answers[2]}
                        </div>
            )})}
            <br></br>
            <button>Check</button>
      </div>
    );
}

ReactDOM.render(
  <Quiz/>,
  document.getElementById('root')
);

