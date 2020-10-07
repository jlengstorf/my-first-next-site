const fetch = require('node-fetch');

exports.handler = async () => {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/'
  ).then((response) => response.json());

  const filteredData = characters.results.map((character) => {
    return { name: character.name };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(filteredData),
  };
};
