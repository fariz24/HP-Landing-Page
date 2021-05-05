import React , {Component} from "react"
import ParalaxComponent from '../../components/ParalaxComponent/ParalaxComponent'
import { Card, Grid, Image } from 'semantic-ui-react'
import businessPerson from "../../asset/img/bussiness-person.jpg"
import './Home.scss'

const src = businessPerson

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
  state= {
    divisions: {
      image: [""],
      divisionName : []
    }
  }

  render() {
    return (
      <div className="home">
        <ParalaxComponent name="propsname"/>

        <div className="container">
          <div className="divisions">
            <h2>DIVISIONS</h2>

            <div className="row">
              <div className="division-card">
                  <div className="image-division">
                    <img src={src}/>
                    <div className="division-name">
                      <p>ROCK CLIMBING</p>
                    </div>
                  </div>
              </div>
              <div className="division-card">
                  <div className="image-division">
                    <img src={src}/>
                    <div className="division-name">
                      <p>RAFTING</p>
                    </div>
                  </div>
              </div>
              <div className="division-card">
                  <div className="image-division">
                    <img src={src}/>
                    <div className="division-name">
                      <p>CAVING</p>
                    </div>
                  </div>
              </div>
              <div className="division-card">
                  <div className="image-division">
                    <img src={src}/>
                    <div className="division-name">
                      <p>MOUNTAINERING</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="division-description">
              <h3>Harsha Pratala (HP) melakukan penyaringan melalui pendidikan dasar dan beberapa perjalanan 4 divisi yaitu jeram, 
                  panjat tebing, selusur goa, dan gunung & hutan . Setelah perjalanan 4 divisi, 
                  selanjutnya adalah spesialisasi 1 divisi yang telah dipilih. Tanpa anggota yang menguasai, 
                  tentu sangat riskan untuk melakukan kegiatan, karena organisasi ini bergerak di bidang olahraga ,
                  yang beresiko tinggi, selain hal tersebut dilakukan agar HP mampu lebih cepat berkembang.</h3>
            </div>

          </div>
        </div>

        <div className="article">
          <div className="container">
            <h1>ARTICLE</h1>

            <Card>
              
            </Card>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Home;
