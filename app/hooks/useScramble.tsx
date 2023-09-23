'use client';
import { useState, useEffect, use } from 'react';
import letterArray from '@/data/LetterArray';

const useScramble = () => {
  const [isGame, setIsGame] = useState(true);
  const [input, setInput] = useState([]);
  const [slicedLetters, setSlicedLetters] = useState([]);
  const [currentGuess, setCurrentGuess] = useState();
  const [score, setScore] = useState(0);
  const [getHelp, setGetHelp] = useState(false);
  // const [historyGuesses, setHistoryGuesses] = useState();
  // const [wasClicked, setWasClicked] = useState(false);
  // const [click, setClick] = useState();

  // opens the help modal
  const changeHelpModal = () => {
    setGetHelp((prev) => !prev);
  };

  // generates 6 letters from an array
  const newLetters = () => {
    const sort = letterArray.sort(() => Math.random() - 0.5);
    const sliced = sort.slice(0, 6);
    return setSlicedLetters((prev) => {
      return sliced;
    });
  };

  // starts the game
  function startGame() {
    setIsGame((prevState) => !prevState);
    newLetters();
  }

  // displays clicked letter in display section
  const getLetterInput = (event, i) => {
    // clicked();
    // console.log(event);
    // console.log(i);
    const letters = event.target.textContent;
    const elementId = i;
    const element = event.target;
    setInput((prev) => {
      return [...prev, letters];
    });
    // if (input.length === 6) {
    // }
    // delete the clicked letter from green
    // add display:none to specific span
    // if span is clicked then add display none
    // how to tell is span is "clicked"
    // if the index was clicked then delete it
    // first using element
    // setClick((prev) => {
    //   const arr = [...prev, element];
    //   arr.forEach((el) => {

    //   })
    // });
    // second using element id
  };

  // deletes letter using arrow
  const deleteLetterInput = () => {
    setInput((prev) => {
      return prev.slice(0, -1);
    });
  };

  // save the current guess and convert to string
  const saveCurrentGuess = () => {
    const joinedInput = input.join('');
    setCurrentGuess(joinedInput);
  };

  // resets the letters
  const resetGame = () => {
    newLetters();
    setInput('');
  };

  return {
    isGame,
    input,
    slicedLetters,
    currentGuess,
    getHelp,
    changeHelpModal,
    saveCurrentGuess,
    getLetterInput,
    deleteLetterInput,
    resetGame,
    startGame,
  };
};

export default useScramble;
