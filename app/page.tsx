import Image from 'next/image';
import './scss/styles.scss';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import Letters from './Components/Letters';
import Help from './Components/Help';
import { getAllWords } from '@lib/getAllWords.tsx';

export default function Home() {
  return (
    <>
      <p className="title">Word Scramble</p>
      <Help />

      <main className="main_wrapper">
        <div className="score_time_wrapper">
          <div className="score_wrapper">
            <span className="score">1000</span>
          </div>
          <div className="time_wrapper">
            <span className="timer">1:00</span>
          </div>
        </div>
        <Display />
        <Letters />
        <Buttons />
      </main>
    </>
  );
}
