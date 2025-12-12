// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import LanguagesPage from "./LanguagesPage";
import ExamPage from "./ExamPage";
import JLPTPage from "./JLPTPage";
import NATPage from "./NATPage";
import N5Page from "./N5Page";
import HiraganaKatakana from "./HiraganaKatakana";
import Lesson1Vocabulary from "./Lesson1Vocabulary";
import Lesson2Vocabulary from "./Lesson2Vocabulary";
import Lesson3Vocabulary from "./Lesson3Vocabulary";
import Lesson4Vocabulary from "./Lesson4vocabulary";
import Grammar1 from "./Grammar1";
import Grammar2 from "./Grammar2";
import Grammar3 from "./Grammar3.js";
import Grammar4 from "./Grammar4.js";
import Grammar5 from "./Grammar5.js";
import Kaiwa1 from "./Kaiwa1.js";
import Lesson5Vocabulary from "./Lesson5Vocabulary.js";
import Lesson6Vocabulary from "./Lesson6vocabulary.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/languages" element={<LanguagesPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/jlpt" element={<JLPTPage />} />
        <Route path="/nat" element={<NATPage />} />
        <Route path="/n5" element={<N5Page />} />
        <Route path="/hiragana-katakana" element={<HiraganaKatakana />} />
        <Route path="/n5/lesson1" element={<Lesson1Vocabulary />} />
        <Route path="/n5/grammar1" element={<Grammar1 />} />  {/* ✅ FIXED */}
           <Route path="/n5/grammar2" element={<Grammar2 />} />  {/* ✅ FIXED */}
        <Route path="/n5/lesson2" element={<Lesson2Vocabulary />} />
        <Route path="/n5/lesson3" element={<Lesson3Vocabulary />} />
          <Route path="/n5/lesson4" element={<Lesson4Vocabulary />} />
          <Route path="/n5/kaiwa1" element={<Kaiwa1 />} />
           <Route path="/n5/lesson5" element={<Lesson5Vocabulary />} />
             <Route path="/n5/lesson6" element={<Lesson6Vocabulary />} />
                    <Route path="/n5/grammar3" element={<Grammar3 />} />  {/* ✅ FIXED */}
                      <Route path="/n5/grammar4" element={<Grammar4 />} />  {/* ✅ FIXED */}
                           <Route path="/n5/grammar5" element={<Grammar5 />} />  {/* ✅ FIXED */}

   

  


      </Routes>
    </Router>
  );
}

export default App;
