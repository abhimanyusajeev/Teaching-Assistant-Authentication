// components/MCQQuestion.tsx
import React, { useState } from 'react';

interface MCQProps {
    questions: {
        question: string;
        options: string[];
        correctOptionIndex: number;
    }[];
}

const MCQQuestion: React.FC<MCQProps> = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);

    const handleOptionSelect = (index: number) => {
        setSelectedOption(index);
        if (index === questions[currentQuestionIndex].correctOptionIndex) {
            setIsCorrectAnswer(true);
        } else {
            setIsCorrectAnswer(false);
        }
        setShowPopup(true);
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setShowPopup(false);
        setIsCorrectAnswer(false);
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle end of quiz, perhaps show a summary or go to a results page
            alert('End of quiz!');
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(null);
            setShowPopup(false);
            setIsCorrectAnswer(false);
        }
    };

    return (
        <div className="my-8">
            <h2 className="text-xl font-bold mb-2">{questions[currentQuestionIndex].question}</h2>
            <div className="grid grid-cols-2 gap-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-100 focus:outline-none ${selectedOption === index ? 'bg-blue-200' : ''
                            }`}
                        onClick={() => handleOptionSelect(index)}
                    >
                        <img src={option} alt={`Option ${index + 1}`} className="w-32 h-32 object-fill" />
                    </button>
                ))}
            </div>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <p className="text-xl font-bold mb-4">
                            {isCorrectAnswer ? 'Answer is correct!' : 'Answer is incorrect!'}
                        </p>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                            onClick={handleNextQuestion}
                        >
                            Next Question
                        </button>
                        {currentQuestionIndex > 0 && (
                            <button
                                className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md focus:outline-none"
                                onClick={handlePreviousQuestion}
                            >
                                Go Back
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MCQQuestion;
