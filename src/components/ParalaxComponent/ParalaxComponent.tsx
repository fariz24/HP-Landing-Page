import React , {useEffect, useState} from 'react'
import bg from "../../asset/graphic_materials/jungle-paralax-assets/layer1.png"
import layer2tree from "../../asset/graphic_materials/jungle-paralax-assets/layer2-tree.png"
import layer3 from "../../asset/graphic_materials/jungle-paralax-assets/monkey3.png"
import treeLeft from "../../asset/graphic_materials/jungle-paralax-assets/tree-left.png"
import treeRight from "../../asset/graphic_materials/jungle-paralax-assets/tree-right.png"
import bigTree from "../../asset/graphic_materials/jungle-paralax-assets/big-tree.png"
import './Paralax.scss'

type Props = {
    name: string;
};


const ParalaxComponent: React.FC<Props>  = ( {name} ) => {
    const [offset, setOffset] = useState(0)
    var winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
    var ofset = 0
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset < winHeight){
                setOffset(window.pageYOffset)
            }
        }
        
        
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };

    }, []);

    return (
        <div className="paralax">
            <img
                src={bg}
                alt="layer-bg-1"
                className="bg-image"
                style={{
                    transform: `rotate(${(offset * 0.3) / 10}deg)`,
                }}
            />
            <img
                src={layer3}
                alt="layer-bg-1"
                id="layer-3"
                style={{
                    transform: `rotate(${offset * 0.8}deg) translateX(${
                    offset * 0.8
                    }px`,
                }}
            />
            <img
                src={layer2tree}
                alt="layer-bg-1"
                id="layer-2A"
                style={{
                    transform: `translateX(${offset * 0.05}px)`,
                }}
            />

            <img
                src={treeLeft}
                alt="layer-bg-1"
                id="tree-left"
                style={{
                    transform: `translateX(${offset * 0.3}px)`,
                }}
            />
            <img
                src={treeRight}
                alt="layer-bg-1"
                id="tree-right"
                style={{
                    transform: `translateX(${offset * -0.3}px)`,
                }}
            />
        
            <img
                src={bigTree}
                alt="layer-bg-1"
                id="layer-6"
                style={{
                    transform: `translateY(${offset * 0.05}px)`,
                }}
            />

            <div id="logo" style={{transform: `translateY(${offset * 0.8}px)`}}>
                <div className="container">
                    <p style={{ transform: `translateX(${offset * 0.5}px)` }}>- 1989 -</p>
                    <h1>HARSHA PRATALA</h1>
                    <p style={{ transform: `translateX(${offset * 0.8}px)` }}>- Cinta Bumi Beserta Isinya -</p>
                </div>
            </div>
      </div>
    )
}

export default ParalaxComponent