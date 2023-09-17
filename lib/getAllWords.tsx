import React from 'react';

export default async function getAllWords() {
  const getWords = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/`
  );
  const res = getWords.json();

  return <div>getAllWords</div>;
}
