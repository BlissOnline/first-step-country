// import React, { useState } from 'react';
// import { BrowserRouter as Routes, Route } from 'react-router-dom';

// import Q1 from '../components/Questions/Q1';
// import Q2 from '../components/Questions/Q2';
// import Q3 from '../components/Questions/Q3';
// import Q4 from '../components/Questions/Q4';
// import Q5 from '../components/Questions/Q5';
// import Q6 from '../components/Questions/Q6';
// import Q7 from '../components/Questions/Q7';
// import Q8 from '../components/Questions/Q8';
// import ShowResults from '../components/Questions/ShowResults';
// import './QuestionPage.css';

// const QuestionPage: React.FC = () => {
//     const [formData, setFormData] = useState({
//         ocean: '',
//         ppm: 0,
//         english: '',
//         dining: '',
//         unsafe: '',
//         education: '',
//         medical: '',
//         nomadVisa: ''
//     });

//     const handleChange = (name: string, value: string) => {
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };
    
    
    
    

//     const showNextPage = () => {
//         console.log("Next question");
//     };

//     return (
//         <Routes>
//             <Route path="/questions/q1" element={<Q1 value={formData.ocean} onChange={(e) => handleChange('ocean', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q2" element={<Q2 value={formData.ppm.toString()} onChange={(e) => handleChange('ppm', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q3" element={<Q3 value={formData.english} onChange={(e) => handleChange('english', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q4" element={<Q4 value={formData.dining} onChange={(e) => handleChange('dining', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q5" element={<Q5 value={formData.unsafe} onChange={(e) => handleChange('unsafe', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q6" element={<Q6 value={formData.education} onChange={(e) => handleChange('education', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q7" element={<Q7 value={formData.medical} onChange={(e) => handleChange('medical', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/q8" element={<Q8 value={formData.nomadVisa} onChange={(e) => handleChange('nomadVisa', e.target.value)} onNext={showNextPage} />} />
//             <Route path="/questions/results" element={<ShowResults formData={formData} />} />
//         </Routes>
//     );
// };

// export default QuestionPage;