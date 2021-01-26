import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [playerName, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} key="title" />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://armyquiz.vercel.app/" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content="blob:https://vercel.com/27ac17d7-a416-4928-a970-dbdba07b55b1" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${playerName}`);
            }}
            >
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Type your name in order to play.."
              />
              <Button type="submit" disabled={playerName.length === 0}>
                Play
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Other Quizes</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/andynadvorny/armyquiz" />
    </QuizBackground>
  );
}
