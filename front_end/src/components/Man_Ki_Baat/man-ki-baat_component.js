import React from "react";
import "./man-ki-baat_component.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faStar,faMessage,faEye,faUser,faPhoneVolume,faVideo,faWallet } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";

export function ManKiBaatComponent() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div id="header">
        <div className="container">
            <div className="row">
                <div className="col-md-6 form-group mt-2 d-flex" >
                    <h1>MKB</h1>
                    <input type="" className="form-control ms-5" placeholder="Search" style={{width:"200px",height:"50px"}}/>
                </div>
                <div className="col-md-6">
                    <ul className="dropdown" style={{listStyle:"none",margin:"0",padding:"0"}}>
                        <li className="ms-4 dropdown-toggle" onClick={toggleDropdown} style={{display:"inline-block",color:"black",padding:"15px 10px",cursor:"pointer"}}>Find People</li>
                        <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="stress">Stress</a>
                        <a className="dropdown-item" href="anxiety">Anxiety</a>
                        <a className="dropdown-item" href="emotion">Emotion</a>
                        <a className="dropdown-item" href="elicit">Elicit</a>
                        <a className="dropdown-item" href="motivation">Motivation</a>
                        <a className="dropdown-item" href="law">Law</a>
                        <a className="dropdown-item" href="love">Love</a>
                        <a className="dropdown-item" href="break-up">Break Up</a>
                        <a className="dropdown-item" href="ex">Ex</a>
                        <a className="dropdown-item" href="depressed">Depressed</a>
                        <a className="dropdown-item" href="over-thinking">Over Thinking</a>
                        </div>
                        <li className="ms-4" style={{display:"inline-block",color:"black",padding:"15px 10px",cursor:"pointer"}}>Message</li>
                        <FontAwesomeIcon icon={faEnvelope} style={{color:"blue"}}/>
                        <li className="ms-4" style={{display:"inline-block",color:"black",padding:"15px 10px",cursor:"pointer"}}>My Contacts</li>
                        <img className="ms-4" src="boy-img.jpg" alt="" style={{width:"50px",height:"50px",borderRadius:"100px"}}/>
                    </ul>
                </div>
            </div>
        </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-5">
                    <img src="boy-img.jpg" alt="" style={{height:"350px",width:"350px",borderRadius:"50px"}}/>
                </div>
                <div className="col-md-4 mt-5">
                    <h3>Jeremy Rose <FontAwesomeIcon className="ms-2" icon={faLocationDot} style={{color:"darkgray",fontSize:"20px"}}/> <span style={{fontSize:"1rem",color:"darkgray"}}>New York City</span></h3>
                    <p style={{color:"blue"}}>Product Designer</p>
                    <p style={{color:"darkgray"}}>DEPRESSION</p>
                    <p>8,6 <FontAwesomeIcon className="ms-2" icon={faStar} style={{color:"blue"}}/><FontAwesomeIcon className="ms-2" icon={faStar} style={{color:"blue"}}/><FontAwesomeIcon className="ms-2" icon={faStar} style={{color:"blue"}}/><FontAwesomeIcon className="ms-2" icon={faStar} style={{color:"blue"}}/><FontAwesomeIcon className="ms-2" icon={faStar} style={{color:"darkgray"}}/></p>
                    <button className="mt-3" type="button" style={{background:"linear-gradient(135deg,cyan,blue)",border:"none",borderRadius:"7px",width:"70px",height:"40px",color:"white"}}><FontAwesomeIcon className="me-2" icon={faMessage} />Msg</button> 
                    <button className="ms-2 mt-3" type="button" style={{background:"linear-gradient(135deg,cyan,blue)",border:"none",borderRadius:"7px",width:"70px",height:"40px",color:"white"}}><FontAwesomeIcon className="me-2" icon={faPhoneVolume} />Call</button>
                    <button className="ms-2 mt-3" type="button" style={{background:"linear-gradient(135deg,cyan,blue)",border:"none",borderRadius:"7px",width:"70px",height:"40px",color:"white"}}><FontAwesomeIcon className="me-2" icon={faVideo} />Call</button>
                    <p className="mt-4"><FontAwesomeIcon icon={faWallet} /> My Wallet</p>
                    <p className="mt-3" style={{color:"darkgray"}}><FontAwesomeIcon icon={faEye} /> Timeline <p  className="ms-3 mt-3" style={{display:"inline-block",color:"black"}} ><FontAwesomeIcon icon={faUser} /> About</p></p>
                </div>
                <div className="col-md-4 mt-5 user">
                    <img className="mt-5" src="boy-img.jpg" alt="" style={{width:"70px",height:"70px",borderRadius:"100px",display:"flex",margin:"auto"}}/>
                    <p className="text-center mt-3">Jeremy Rose</p>
                    <p className="text-center">Moblie : +1 125 456 7850</p>
                    <p className="text-center">Experience: 3 Years</p>
                    <button className="mt-3" type="button" style={{background:"linear-gradient(135deg,cyan,blue)",border:"none",borderRadius:"7px",width:"70px",height:"40px",color:"white",marginLeft:"110px"}}><FontAwesomeIcon className="me-2" icon={faMessage} />Msg</button> 
                    <button className="ms-2 mt-3" type="button" style={{background:"linear-gradient(135deg,cyan,blue)",border:"none",borderRadius:"7px",width:"70px",height:"40px",color:"white"}}><FontAwesomeIcon className="me-2" icon={faVideo} />Call</button>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h3>Spotify New York <button type="button" className="btn btn-outline-primary ms-4">Primary</button></h3>
                    <p>170 William Street</p>
                    <p style={{marginTop:"-15px"}}>New York, NY 10038.78 212.312.51</p>
                    <h3>Metropolitian Museum <button type="button" className="btn btn-outline-primary ms-4">Secondary</button></h3>
                    <p>S25 Earth Street</p>
                    <p style={{marginTop:"-15px"}}>New York, NY 10038.78 212.312.51</p>
                    <hr></hr>
                    <h5>Branding</h5>
                    <h5>UI/UX</h5>
                    <h5>Web-Design</h5>
                    <h5>Packaging</h5>
                    <h5>Print & Editorial</h5>
                </div>
                <div className="col-md-6 mt-5">
                    <p>Phone <span className="ms-5" style={{color:"blue"}}>+1 125 456 7850</span></p>
                    <p>Address <span className="ms-5">S25 Earth Street</span></p>
                    <p style={{marginLeft:"110px",marginTop:"-15px"}}>New York, NY 10038.78 212.312.51</p>
                    <p>Email <span style={{color:"blue",marginLeft:"70px"}}>hello@jeremyrose.com</span></p>
                    <p>Size <span style={{color:"blue",marginLeft:"80px"}}>www.jeremyrose.com</span></p>
                    <hr style={{marginTop:"56px"}}></hr>
                    <p>Birthday <span className="ms-5">June 5,1992</span></p>
                    <p>Gender <span style={{marginLeft:"55px"}}>Male</span></p>
                </div>
            </div>
        </div>
        </>
    )
}