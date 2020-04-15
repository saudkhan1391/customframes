import React, { useState } from 'react'
import "./styles.css";
import { ReactComponent as Right } from '../../../assets/svgs/left.svg';
import { ReactComponent as Left } from '../../../assets/svgs/right.svg';
export default function Section7() {
    return (
        <div>
            <div >
                <h1 className="title">Feature Product</h1>
                <h4 className="header4">Design a custom frame for photos, art and more</h4>
            </div>

            <body className="body7">
                <div className="halfside7">


                    {/* <div className="imgContainer7"> */}
                    <img src={require("../../../assets/images/pink1.png")}
                        className="imgStyle7"
                    />
                    {/* </div> */}
                    <div className="rightdetails7">
                        <div>

                            <h5 style={{ color: "grey", marginTop: 20 }}>Category BLog</h5>
                            <h5 style={{ color: "##112D46",width:250 }}>A vey Anthropologie Holidy with Joddy Harrison</h5>
                            <div style={{ display: "flex", justifyContent: "space-between", width: 250 }}>
                                <h5 style={{ color: "grey" }}>By Admin</h5>
                                <h5 style={{ color: "grey" }}>30/3/2020</h5>
                            </div>
                            <h5 style={{ color: "grey" }}>One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...</h5>
                        </div>

                        <button style={{ border: "solid 2px", borderRadius: 16, paddingLeft: 25, paddingRight: 25, marginTop: 20,position:"absolute" }} >Read More</button>

                    </div>
                    <div>
                    </div>
                </div>
                <div style={{width:120}} />
                <div className="halfside7" >


                    {/* <div className="imgContainer7"> */}
                    <img src={require("../../../assets/images/frame20.png")}
                        className="imgStyle7"
                    />
                    {/* </div> */}
                    <div className="rightdetails7">
                        <div>

                            <h5 style={{ color: "grey", marginTop: 20 }}>Category BLog</h5>
                            <h5 style={{ color: "##112D46",width:250 }}>A vey Anthropologie Holidy with Joddy Harrison</h5>
                            <div style={{ display: "flex", justifyContent: "space-between", width: 250 }}>
                                <h5 style={{ color: "grey" }}>By Admin</h5>
                                <h5 style={{ color: "grey" }}>30/3/2020</h5>
                            </div>
                            <h5 style={{ color: "grey" }}>One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...</h5>
                        </div>

                        <button style={{ border: "solid 2px", borderRadius: 16, paddingLeft: 25, paddingRight: 25, marginTop: 20,position:"absolute" }} >Read More</button>

                    </div>
                    <div>
                    </div>
                </div>
            </body>
        </div>
    )
}