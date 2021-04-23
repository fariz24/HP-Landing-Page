import React from "react";

type Props = {
  name: string;
};
const Home: React.FC<Props> = ({ name }) => {
  return (
    <>
      <h1>Home</h1>
      <p>{name}</p>
    </>
  );
};

export default Home;
