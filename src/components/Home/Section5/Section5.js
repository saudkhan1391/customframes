import React from 'react'
import "./styles.css"
import { ReactComponent as SVG1 } from "../../../assets/svgs/svg1.svg"
import { ReactComponent as SVG2 } from "../../../assets/svgs/svg2.svg"
import { ReactComponent as SVG3 } from "../../../assets/svgs/svg3.svg"
import { ReactComponent as Discount } from "../../../assets/svgs/price.svg"
import { ReactComponent as SVG4 } from "../../../assets/svgs/svg4.svg"
import { ReactComponent as Square } from "../../../assets/svgs/square.svg"

export default function Section5() {
    return (
        <div className="main5">

            <div className="halfside5">
                <h1>Why Choose Us ?</h1>
                <h5 style={{ color: "grey" }}>Our counless frames types are loved by global frame lovers, due to the variety, quality yet simplicity.</h5>

                <div className="fouritemsContainer">
                    <div className="cardsRowContainer">


                        <div className="card4">
                            <div>
                                <SVG4 />
                            </div>
                            <div style={{ width: 210, marginLeft: 10 }}>
                                <h5 style={{ color: "#112D46" }}>Free Shipping</h5>
                                <text style={{ color: "#555", lineHeight: 0.6 }}>You are here to buy art, not cardboard boxes</text>
                            </div>

                        </div>
                        <div className="card4" style={{marginLeft:10}}>
                            <div>
                                <SVG1 />
                            </div>
                            <div style={{ width: 210, marginLeft: 10 }}>
                                <h5 style={{ color: "#112D46" }}>Free Design Advice</h5>
                                <text style={{ color: "#555", lineHeight: 0.6 }}>You are here to buy art, not cardboard boxes</text>
                            </div>
                        </div>
                    </div>
                    <div className="cardsRowContainer">


                        <div className="card4">
                            <div>
                                {/* <SVG2 /> */}
                                <Discount />
                            </div>
                            <div style={{ width: 210, marginLeft: 10 }}>
                                <h5 style={{ color: "#112D46" }}>EveryDay Low Price</h5>
                                <text style={{ color: "#555", lineHeight: 0.6 }}>You are here to buy art, not cardboard boxes</text>
                            </div>

                        </div>
                        <div className="card4" style={{marginLeft:10}}>
                            <div>
                                <SVG3 />
                            </div>
                            <div style={{ width: 210, marginLeft: 10 }}>
                                <h5 style={{ color: "#112D46" }}>Free Returns</h5>
                                <text style={{ color: "#555", lineHeight: 0.6 }}>You are here to buy art, not cardboard boxes</text>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="framingBtn" >Start Framming</button>
            </div>
            <div className="halfside5">

                <div className="imageandsquare">
                    {/* <div style={{ width: "27%", height:300, border: "solid 7px", position: "initial" }} /> */}
                    <img src={require("../../../assets/images/pink1.png")}
                        style={{ width: 300,   marginTop: 40, marginLeft: "5%" }} />
                </div>

            </div>
        </div>
    )
}