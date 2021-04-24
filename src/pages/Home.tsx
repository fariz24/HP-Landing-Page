import React from "react";
import { Navbar } from "../components";

type Props = {
  name: string;
};
const Home: React.FC<Props> = ({ name }) => {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>{name}</p>
    </div>
  );
};

export default Home;
