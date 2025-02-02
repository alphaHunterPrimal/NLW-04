import Head from "next/head";
import { GetServerSideProps } from 'next';

import {ExperienceBar} from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext'

const styles = require("../styles/pages/Home.module.css");

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >
<div className={styles.container}>
  <Head>
    <title>Início</title>
  </Head>
      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdown/>
        </div>
        
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async(ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}