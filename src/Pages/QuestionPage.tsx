import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionLogicForm from '../QuestionLogicForm';
import './QuestionPage.css';

const QuestionPage: React.FC = () => {
    return (
        <div className="question-page-container">
            <QuestionLogicForm />
        </div>
    ); 
};

export default QuestionPage; 