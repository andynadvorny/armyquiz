/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Loading...
      </Widget.Header>
      <Widget.Content>
        [insert loading here]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question__${questionIndex + 1}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative))${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">
            Confirm
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function onSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={onSubmit}
          />
        )}
        {screenState === screenStates.RESULT && <div>You got X questions right, gratz!</div>}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/andynadvorny/armyquiz" />
    </QuizBackground>
  );
}

QuestionWidget.defaultProps = {
  question: '',
  questionIndex: '0',
  title: '',
  image: '',
  description: '',
};

QuestionWidget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object,
  questionIndex: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
