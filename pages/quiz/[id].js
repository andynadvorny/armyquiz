/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function OtherQuizesPage({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  try {
    const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json();
        }
        throw new Error('Failed to retrieve data');
      })
      .then((responseMadeObject) => responseMadeObject);

    return {
      props: {
        dbExternal,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
