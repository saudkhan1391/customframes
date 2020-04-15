import React, { useState } from 'react'
import Styles from "./styles.js"
import { MdPersonOutline, FiShoppingCart } from 'react-icons/all'
export default function SectionTwo() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div >
                <h1 className="title">What are your framing ?</h1>
                <h4 className="header4">Design a custom frame for photos art and more</h4>
            </div>
            <div className="imagesContainer">

                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/mix2.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Original Art</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/chainch.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Object</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/flower.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Textile</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/shirt.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Jersey</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/couple.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Photography</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/kevin.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Something else</h5>
                </div>
            </div>
            <Styles />
        </div>
    )
}