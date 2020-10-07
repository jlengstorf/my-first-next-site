import { Layout } from '../components/layout';

export default function Index({ characters }) {
  return (
    <Layout>
      <h1>Characters!</h1>
      {characters.map((character) => (
        <h2 key={character.name}>{character.name}</h2>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/'
  ).then((response) => response.json());

  return {
    props: {
      characters: characters.results,
    },
  };
}
