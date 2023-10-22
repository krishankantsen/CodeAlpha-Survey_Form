import { useState } from "react";
import questionsAndAnswers from "./Question";
import { useNavigate } from "react-router-dom";
import './Ques.css';
var ansarr=[]
const Ques = () => {
    const navigate = useNavigate();
    const [ans, setans] = useState("-1");
    const [ind, setind] = useState(0);
    const [qn, setqn] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
        setans(event.target.value);
    };

    const moveToNextQuestion = () => {
        if (ind < 9 && selectedOption) {
            ansarr.push(ans); // Store the selected answer
            setind(ind + 1);
            setqn(qn + 1);
            setans("-1");
            setSelectedOption(null); // Reset selected option for the next question
        } else {
            ansarr.push(ans); // Store the selected answer for the last question
            localStorage.setItem("response", ansarr);
            navigate("/lastpage");
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <p className="mb-6 text-4xl font-bold text-white text-center">
                {qn}. {questionsAndAnswers[ind].question}
            </p>
            {questionsAndAnswers[ind].options.map((option, index) => (
                <label key={index} className="text-2xl text-white font-bold">
                    <input
                        type="radio"
                        name="option"
                        value={index.toString()}
                        id={`Option ${index + 1}`}
                        className="mr-2 mt- w-7 h-7"
                        checked={selectedOption === `Option ${index + 1}`}
                        onChange={handleOptionChange}
                    />
                    {option}
                </label>
            ))}
            <br />
            <button
                className="font-bold bg-white text-3xl rounded-2xl p-2 hover:drop-shadow-xl"
                onClick={moveToNextQuestion}
                disabled={!selectedOption}
            >
                Next
            </button>
        </div>
    );
}

export default Ques;
