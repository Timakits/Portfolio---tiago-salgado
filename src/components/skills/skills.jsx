import React from 'react'
import "./styles.css"

//icons
import VSC from "../../assets/Img/icons/Vsc.svg"
import MUI from "../../assets/Img/icons/MUI.svg"
import FMK from "../../assets/Img/icons/formik.svg"


const Skills = () => {
  return (
    <div className='categoryContainer' id='skills'>
        <div className="container-fluid">
            <div className="row">
            <h1 className="categoryTitle" >skills</h1>
                <div className="col-md-12 cont">
                <h2 className='skillTittle'>Programming languages:</h2>
                <div className="col-md-12 lenguajes">
                    <div className="js badge">JavaScript <i className="fa-brands fa-square-js jsw"></i></div>
                    <div className="html badge">HTML <i className="fa-brands fa-html5 htmlw"></i></div>
                    <div className="css badge">CSS <i className="fa-brands fa-css3-alt cssw"></i></div>
                </div>
                </div>
                <div className="col-md-12 cont">
                <h2 className='skillTittle'>Frameworks and libraries:</h2>
                <div className="fyl ">
                    <div className="bootsrap badge">Bootsrap <i className="fa-brands fa-bootstrap"></i></div>
                    <div className="mui badge">Material UI <img src={MUI} className='Icon' /></div>
                    <div className="react badge">React <i className="fa-brands fa-react rw"></i></div>
                    <div className="formik badge">Formik <img src={FMK} className='Icon' /></div>
                </div>
                </div>
                <div className="col-md-12 cont ">
                <h2 className='skillTittle'>Software y tools:</h2>
                <div className="syh ">
                <div className="github badge">Github <i className="fa-brands fa-github"></i></div>
                <div className="git badge">Git <i className="fa-brands fa-git-alt"></i></div>
                <div className="google badge">Google <i className="fa-brands fa-google"></i></div>
                <div className="vsc badge">Visual Studio Code <img src={VSC} className='Icon'/></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills