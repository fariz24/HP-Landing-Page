import React from "react";
import "../styles/navbar.scss";
import { Input, Button, Icon, Transition } from "semantic-ui-react";

type Props = {
  menu: { name: string; path: string } | null | undefined;
};

const Navbar: React.FC<Props> = ({ menu }) => {
  const [mobileMenuDisplay, setMobileMenuDisplay] = React.useState(false);
  const [buttonClicked, setButtonClicked] = React.useState(true);
  const [searchClicked, setSearchClicked] = React.useState(true);
  const [scrollY, updateScrollY] = React.useState(0);

  function barClickHandler() {
    setMobileMenuDisplay(!mobileMenuDisplay);
    console.log(`bars clicked!, mobileDisplay : ${mobileMenuDisplay}`);
  }

  function buttonClickedHandler() {
    setButtonClicked(!buttonClicked);
    console.log(`button clicked!, buttonLogin status : ${buttonClicked}`);
  }

  function searchClickedHandler() {
    setSearchClicked(!buttonClicked);
    console.log(`button clicked!, buttonLogin status : ${buttonClicked}`);
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    updateScrollY(position);
  };

  React.useEffect(() => {
    console.log(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div
        className="navbar"
        style={
          scrollY > 0
            ? {
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 2px 2px -2px rgba(0, 0, 0, 0.4)",
              }
            : {
                backgroundColor: "transparent",
                color: "white",
              }
        }
      >
        <section className="logo">HARHSA PRATALA</section>
        <section className="menu">
          <ul>
            <li>Sejarah</li>
          </ul>
          <ul>
            <li>Artikel</li>
          </ul>
          <ul>
            <li>Kontak Kami</li>
          </ul>
          <ul>
            <li>Penjelajahan</li>
          </ul>
          <ul>
            <li>Majalah Vegetasi</li>
          </ul>
        </section>
        <section className="navbar-action">
          <Transition animation="jiggle" duration={500} visible={searchClicked}>
            <Input
              icon="search"
              placeholder="Search..."
              id="nav-input"
              onClick={searchClickedHandler}
            />
          </Transition>
          <Transition animation="pulse" duration={500} visible={buttonClicked}>
            <Button primary id="nav-button" onClick={buttonClickedHandler}>
              Login Anggota
            </Button>
          </Transition>
        </section>

        <section onClick={() => barClickHandler()}>
          <Icon disabled name="bars" size="large" className="icon-bars" />
        </section>
      </div>
      <Transition.Group animation="fade down" duration={300}>
        {mobileMenuDisplay === true ? (
          <div className="mobile-menu">
            <section className="menu">
              <ul>
                <li>Sejarah</li>
              </ul>
              <ul>
                <li>Artikel</li>
              </ul>
              <ul>
                <li>Kontak Kami</li>
              </ul>
              <ul>
                <li>Penjelajahan</li>
              </ul>
              <ul>
                <li>Majalah Vegetasi</li>
              </ul>

              <ul>
                <li>Login Anggota</li>
              </ul>
            </section>
            <section className="navbar-action">
              <Input icon="search" placeholder="Search..." id="nav-input" />
            </section>
          </div>
        ) : null}
      </Transition.Group>
    </>
  );
};

export default Navbar;
