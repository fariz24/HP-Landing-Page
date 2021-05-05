import React , {Fragment} from 'react';
import {Input, Button, Icon, Transition} from 'semantic-ui-react'
import "./navbar.scss"

type Props = {
    menu: { name: string; path: string } | null | undefined;
};

const Menu = () => {
    return (
        <ul>
            <li>Sejarah</li>
            <li>Artikel</li>
            <li>Kontak Kami</li>
            <li>Penjelajahan</li>
            <li>Majalah Vegetasi</li>
        </ul>
    )
}

const NavbarComponent:React.FC<Props>  = ({menu}) => {
    const [mobileMenuDisplay, setMobileMenuDisplay] = React.useState(false) 
    const [mobileSearchDisplay, setMobileSearchDisplay] = React.useState(false) 
    const [scrollY, updateScrollY] = React.useState(0)

    // Handle Scroll Function to handle navbar when scrolling
    const handleScroll = () => {
        const position = window.pageYOffset;
        updateScrollY(position);
    }

    // Handle show menu on mobile screen when bar icon clicked
    const barClickHandler = () => {
        setMobileMenuDisplay(!mobileMenuDisplay)
        if (mobileSearchDisplay === true) setMobileSearchDisplay(false)
        console.log('Bars Clicked : ', mobileMenuDisplay)
    }

    // Handle search fields on mobile screen when bar icon clicked
    const searchClickHandler = () => {
        setMobileSearchDisplay(!mobileSearchDisplay)
        if (mobileMenuDisplay === true) setMobileMenuDisplay(false)
        console.log('Bars Clicked : ', mobileSearchDisplay)
    }



    React.useEffect( () => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[scrollY]);

    return (
        <div className="navbar"
             style={
                 scrollY > 0 
                 ? {
                     backgroundColor: "white",
                     color: "black",
                     boxShadow: "0 1px 2px #ccc",
                     transition: "0.3s",
                   }
                 : {
                     backgroundColor: "transparent",
                     color: "white",
                   }
             }
        >
            <div className="container">
                <h1 className="logo">HARSHA PRATALA</h1>

                <div className="icon-bars" onClick={() => barClickHandler()}>
                    {
                        mobileMenuDisplay === true 
                        ? (<Transition animation='pulse' duration={500} visible={true} ><Icon disabled name="close" size="large" /></Transition>)
                        : (<Icon disabled name="bars" size="large" />)
                    }
                </div>

                <div className="icon-search" onClick={() => searchClickHandler()}>
                    {
                        mobileSearchDisplay === true 
                        ? (<Transition animation='pulse' duration={500} visible={true} ><Icon disabled name="close" size="large" /></Transition>)
                        : (<Icon disabled name="search" size="large" />)
                    }
                </div>

                { 
                    mobileMenuDisplay === true ? (
                        <Transition.Group animation="fade down" duration={300}>
                            <div className="mobile-menu">
                                <Menu />
                            </div>
                        </Transition.Group>
                    ): (
                        <Fragment>
                            <div className="menu">
                                <Menu />
                            </div>

                            { 
                                mobileSearchDisplay === true ? (
                                    <Transition.Group animation="fade down" duration={300}>
                                        <div className="mobile-search">
                                            <Transition animation="jigle" duration={500} >
                                                <Input 
                                                    transparent 
                                                    fluid
                                                    size="huge"
                                                    icon="search"
                                                    id="nav-input"
                                                    placeholder='Search...' />
                                                {/* <Input 
                                                    icon="search"
                                                    className="searc-box"
                                                    placeholder="Search..."
                                                    id="nav-input"
                                                    
                                                /> */}
                                            </Transition>
                                        </div>
                                    </Transition.Group>
                                ) : (
                                    <div className="navbar-action">
                                        <Transition animation="jigle" duration={500} >
                                            <Input 
                                                size='small'
                                                icon="search"
                                                placeholder="Search..."
                                                id="nav-input"
                                                
                                            />
                                        </Transition>
                                        <Transition animation="pulse" duration={500} >
                                            <Button primary size="medium" id="nav-button" >
                                            Login Anggota
                                            </Button>
                                        </Transition>
                                    </div>
                                )
                            }   
                        </Fragment>
                    ) 
                }

                
                
                
            </div>
        </div>
    )
}

export default NavbarComponent;