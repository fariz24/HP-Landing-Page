import React, { Component, Fragment } from "react";
import ParalaxComponent from "../../components/ParalaxComponent/ParalaxComponent";
import CardDivision from "../../components/CardComponent/CardDivision";
import CardArticle from "../../components/CardComponent/CardArticle";
import businessPerson from "../../asset/img/bussiness-person.jpg";
import "./Home.scss";
import { FaBeer } from "react-icons/fa";
import { Card, Icon, Image } from "semantic-ui-react";

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
  state = {
    divisions: [],
    division: {
      image: [""],
      divisionName: [],
    },
    image: businessPerson,
  };

  render() {
    return (
      <Fragment>
        <ParalaxComponent name="propsname" />
        <div className="container">
          <div className="divisions">
            <h2>DIVISIONS</h2>

            <div className="row">
              {/* {
                this.state.division.map(divsion => {
                  return <CardDivision key="id" />
                })
              } */}

              <CardDivision />
              <CardDivision />
              <CardDivision />
              <CardDivision />
            </div>

            <Card>
              <Image
                src="http://localhost:3000/static/media/bussiness-person.79441078.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>

            <div className="division-description">
              <h3>
                Harsha Pratala (HP) melakukan penyaringan melalui pendidikan
                dasar dan beberapa perjalanan 4 divisi yaitu jeram, panjat
                tebing, selusur goa, dan gunung & hutan . Setelah perjalanan 4
                divisi, selanjutnya adalah spesialisasi 1 divisi yang telah
                dipilih. Tanpa anggota yang menguasai, tentu sangat riskan untuk
                melakukan kegiatan, karena organisasi ini bergerak di bidang
                olahraga , yang beresiko tinggi, selain hal tersebut dilakukan
                agar HP mampu lebih cepat berkembang.
              </h3>
            </div>
          </div>

          <div className="banner">
            <h2 className="banner-title">
              TRIBUTES <br />
              OUR BROTHERS
            </h2>
            <div className="banner-description">
              HP melakukan penyaringan melalui pendidikan dasar dan beberapa
              perjalanan 4 divisi yaitu jeram, panjat tebing, selusur goa, dan
              gunung & hutan . Setelah perjalanan 4 divisi, selanjutnya adalah
              spesialisasi 1 divisi yang telah dipilih.
            </div>
          </div>

          <div className="article">
            <h2>
              ARTICLE <FaBeer />
            </h2>

            <div className="article-description">
              <h3>
                HARSHA PRATALA (HP) menyikapi kemajuan jaman ini dengan
                membangun base informasi bagi para anggotanya di seluruh jagat
                raya, HP mencoba untuk memfasilitasi jarak dan waktu, dengan
                dimensi yang berbeda, dunia maya saat ini menjadi solusi untuk
                menjadi solusi untuk menyambung benang merah antar generasi.
              </h3>
            </div>

            <div className="banner-article">
              <div className="banner-article-image">
                <img src={this.state.image} alt="banner-article" />
              </div>

              <div className="banner-article-content">
                <h3 className="banner-article-title">
                  Siapa Stop Global Warming
                </h3>
                <div className="banner-article-description">
                  Kemajuan jaman ini dengan membangun base informasi bagi para
                  anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat raya, HP mencoba untuk
                  memfasilita,Kemajuan jaman ini dengan membangun base informasi
                  bagi para anggotanya di seluruh jagat
                </div>
                <div className="banner-article-created">
                  11-MARET 2021 - by HP 146
                </div>
                <a href="#" className="banner-article-button">
                  Lebih Lanjut
                </a>
              </div>
            </div>

            <div className="row">
              {/* {
                this.state.division.map(divsion => {
                  return <CardDivision key="id" />
                })
              } */}

              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
              <CardArticle />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
