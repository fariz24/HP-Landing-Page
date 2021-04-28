import React , {Component, Fragment} from "react"
import Paralax from '../../components/Paralax/Paralax'
import './Home.scss'

// type Props = {
//   name: string;
// };
// const Home: React.FC<Props> = ({ name }) => {
//   return (
//     <div className="container">
//       <h1>Home</h1>
//       <p>{name}</p>
//     </div>
//   );
// };

class Home extends Component {

  render() {
    return (
      <Fragment>
        <Paralax name="propsname"/>
      </Fragment>
    )
  }
}

export default Home;
