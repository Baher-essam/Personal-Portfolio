import React, {useState, useContext} from 'react'
import { MouseContext } from "../context/mouseContext" //cursor 
import moon from '../Assets/badges/moon.svg'
import sun from '../Assets/badges/sun.svg'

const LightModeSwitcher = () => {
    const {  cursorChangeHandler } = useContext(MouseContext); //cursor
    //color mode switcher
    // const [isActive, setActive] = useState("false");
    // const ToggleClass = () => {
    // setActive(!isActive); 
    // };
  return (
            <div 
                id="lightModeToggle" 
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
            >
                <div className="lightModeRotate">
                    <div className="moon">
                        <img src={moon} className="img-fluid" alt="moon"/>
                    </div>
                    <div className="sun">
                        <img src={sun} className="img-fluid" alt="sun"/>
                    </div>
                </div>
            </div>
  )
}

export default LightModeSwitcher
