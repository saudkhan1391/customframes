import React, { useState } from 'react'
import "./styles.css";
import { ReactComponent as Right } from '../../../assets/svgs/left.svg';
import { ReactComponent as Left } from '../../../assets/svgs/right.svg';
export default function Section6() {
    return (
        <div>
            <div >
                <h1 className="title">Feature Product</h1>
                <h4 className="header4">Design a custom frame for photos, art and more</h4>
            </div>

            <body className="body6">
                {/* <div className="imgContainer6"> */}
                    <img src={require("../../../assets/images/client.png")}
                        className="imgStyle6"
                    />
                {/* </div> */}
                <div style={{width:"5%"}} />
                <div className="rightdetails6">
                    <h3>JEREMY CROUSE</h3>
                    <h5>(Graphic Designer)</h5>
                    <div style={{ width: "100%",border:"", color: "#666",fontSize:22 }}>I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. 
                    I have got my degree framed in stylish design which is also adding beauty to my room.</div>

                    <div style={{display:"flex",alignItems:"center"}} >
                        <Left />
                        <div  style={{width:2,height:20,backgroundColor:"#000",marginLeft:5,marginRight:5}} />
                        <Right />
                    </div>
                </div>
                <div>
                </div>

            </body>
        </div>
    )
}