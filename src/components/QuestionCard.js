import React, { useState } from 'react'
import styled from 'styled-components'
import { randQustions } from '../lib/quiz'
import ShowMessage from './PageElements/ShowMessage';
import { Box, Button } from './PageElements/UIElements';
import ShowConfetti from './ShowConfetti';
const BasicGrid = styled.div`
   display: grid;
   gap: 1rem;
   margin: 1rem 0;
`
const QuestionCard = () => {
   const [currentIndex, setCurrentIndex] = useState(0)
   const [endQuiz, setEndQuiz] = useState(false)
   const [score, setScore] = useState(0);
   const [avg, setAvg] = useState(0);
   const [showAns, setShowAns] = useState(false);

   //function to calc score and show correct answer
   const handleAnswerClick = (isCorrect, e) => {
      setShowAns(true)
      if (isCorrect) {
         setScore((prev) => prev + 1);
      }
      setTimeout(() => {
         nextQuestion()
      }, 1800)
   }

   //function to go to next question if within bounds of quiz length and hide correct answer 
   // if ouside the bounds of the quiz array, the quiz will end
   const nextQuestion = () => {
      setShowAns(false)
      if (currentIndex === randQustions.length - 1) {
         endOfQuiz()
      }
      else {
         setCurrentIndex(prev => prev + 1);
      }
   }

   //function to pre-emptively end quiz
   const seeResults = () => {
      setEndQuiz(true)
      setAvg((score / currentIndex) * 100)
   }

   const endOfQuiz = () => {
      setEndQuiz(true)
      setCurrentIndex(prev => prev + 1)
      setAvg((score / currentIndex) * 100)
   }

   //function to result all variables 
   const reset = () => {
      setEndQuiz(false);
      setCurrentIndex(0);
      setScore(0)
      setShowAns(false)
   }
   if (endQuiz) {
      return (
         <>
            {avg >= 80 &&
               <ShowConfetti whenToShow={endQuiz} />
            }
            <Box >
               <div className="spacer"></div>
               <div className="top" style={{ textAlign: 'center' }}>
                  <ShowMessage avg={avg} />
                  <p>you scored <strong>{score}</strong> out of <strong>{currentIndex}</strong> = <strong>{avg.toFixed(1)}%</strong></p>
               </div>
               <Button onClick={reset} >Start over?</Button>
            </Box>
         </>
      )
   }

   return (
      <>
         <Box className='question-box m-full-y' >
            <div className="top">
               <h6 className='top-text'>question {currentIndex + 1} of {randQustions.length}</h6>
               <div className="question">
                  <h2 className='question-text'>{randQustions[currentIndex].question}</h2>
               </div>
            </div>

            <BasicGrid className="answers-row middle">
               {randQustions[currentIndex].answers.map((answer, key) => (
                  <Button
                     className={showAns && answer.isCorrect ? 'ans' : ''}
                     onClick={(e) => { handleAnswerClick(answer.isCorrect, e) }}
                     key={key}
                     disabled={showAns}
                  >
                     {answer.answerText}
                  </Button>
               ))}
            </BasicGrid>

            <div className="bottom">
               <Button
                  className='secondary'
                  onClick={seeResults}
                  disabled={showAns || currentIndex === 0}>
                  See Results
               </Button>
            </div>
         </Box>
      </>
   )
}

export default QuestionCard
