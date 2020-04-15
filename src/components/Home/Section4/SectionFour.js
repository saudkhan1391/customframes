import React, { useState } from 'react'
import "./styles.css"
export default function Section4() {
    return (
        <div>
            <div >
                <h1 className="title">Our Impressive Works</h1>
                <h4 className="header4">Design a custom frame for photos, art and more</h4>
            </div>

            <div className="MainContainer4">

                <div className="imgContainer4">
                    <img src={require("../../../assets/images/room3.png")}
                        // className="imgStyle"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div style={{width:"1%"}} />
                <div className="rightside4">


                    <div className="imagesContainer4a">

                        <div className="imgContainer4b">
                            <img src={require("../../../assets/images/room1.png")}
                                style={{ width: "98%" }}
                            />
                        </div>
                        <div className="imgContainer4b">
                            <img src={require("../../../assets/images/room2.png")}
                                style={{ width: "98%", marginLeft: 10 }}
                            />
                        </div>

                    </div>

                    {/* <div className="imagesContainer"> */}

                    <div className="imgContainer4c">
                        <img src={require("../../../assets/images/room4.png")}
                            style={{ width: "100%" }}
                            // style={{ width: 400 }}
                        />
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}