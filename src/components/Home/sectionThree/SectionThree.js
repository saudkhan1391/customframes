import React, { useState } from 'react'
import "./styles.css"
export default function SectionThree() {
    return (
        <div>
            <div >
                <h1 className="title">Feature Product</h1>
                <h4 className="header4">Design a custom frame for photos, art and more</h4>
            </div>

            <div className="MainContainer3">

            <div className="imgContainer3">
                    <img src={require("../../../assets/images/a.png")} 
                    className="imgStyle"
                    />
                </div>
            <div>

            
            <div className="imagesContainer">

                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame1.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Dower</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame2.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Marquette</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame3.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Wren</h5>
                </div>
              
            </div>

            <div className="imagesContainer">

            <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame4.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Merser</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame5.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Everett</h5>
                </div>
                <div className="imageAndLabelContainer">
                    <div className="imgContainer">
                        <img src={require("../../../assets/images/frame6.png")}
                            className="imagestyle"
                        />
                    </div>
                    <h5>Mandallay</h5>
                </div>

            </div>
            </div>
            </div>
        </div>
    )
}