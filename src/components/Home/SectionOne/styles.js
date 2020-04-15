import React from 'react'

export default () => (
    <style>
        {`
.main{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    // border:solid; 
}
.imgContainer1{
    /* width: 50%; */
    width: 800px;
}
.imgStyle{
    width: 100%;
    height: 100%;
}
.rightSide{
    width: 600px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* width: 40%; */
    margin-left: 40px;
    margin-right: 40px;
    flex-direction: column;
}
.framingBtn{
    width: 190px;
    background-color: white;
    border-width: 1px;
    border-radius: 28px;
    border-color: #000;
    padding: 5px;
}
.loremParagraph{
    padding-top: 15px;
    padding-bottom: 15px;
}
        `}
    </style>
)