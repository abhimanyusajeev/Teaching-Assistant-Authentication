// pages/quiz.tsx
import React from 'react';
import MCQQuestion from '../components/MCQQuestion';

const QuizPage: React.FC = () => {
    const questions = [
        {
            question: 'Select Circle',
            options: ['Circle.png', 'triangle.png', 'Square.png', 'Rectangle.png'],
            correctOptionIndex: 0,
        },
        {
            question: 'Select Dog',
            options: ['mice.jpg', 'dog.png', 'cat.jpg', 'duck.jpg'],
            correctOptionIndex: 1,
        },
        {
            question: 'Select Red Color',
            options: ['pink.jpg', 'yellow.png', 'red.jpg', 'green.png'],
            correctOptionIndex: 2,
        },
        {
            question: 'Select Letter A',
            options: ['e.png', 'c.png', 'd.png', 'ajpg.jpg'],
            correctOptionIndex: 3,
        },
        {
            question: 'Select Tree ',
            options: ['vegetable.jpg', 'tree.png', 'fruits.jpg', 'flower.png'],
            correctOptionIndex: 1,
        },
        {
            question: 'Select Pencil',
            options: ['/chalk.png', 'pen.png', '/pencil.png', 'marker.png'],
            correctOptionIndex: 2,
        },
        {
            question: 'Select Phone',
            options: ['tab.png', 'tv.png', 'laptop.png', 'mobile.png'],
            correctOptionIndex: 3,
        },
        {
            question: 'select Tom',
            options: ['tom.png', 'jerry.jpg', 'jacky.png', 'bheem.png'],
            correctOptionIndex: 0,
        }
        // Add more questions here
    ];

    return (
        <div className="container mx-auto">
            {/* <h1 className="text-3xl font-bold my-8">MCQ Quiz</h1> */}
            <MCQQuestion questions={questions} />
        </div>
    );
};

export default QuizPage;
