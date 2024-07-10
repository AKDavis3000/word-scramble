import { apiKey, appId } from '@/data/dontcommit';
const testGuess = 'hose';

export default async function getAllWords() {
  const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/search/en-gb?q=${testGuess}`;
  const options = {
    method: 'GET',
    headers: {
      app_id: appId,
      app_key: apiKey,
      Accept: 'application/json',
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) throw new Error('failed to fetch words');
  return res.json();
}
