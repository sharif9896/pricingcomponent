"use client";
import Image from "next/image";


const Headertext: React.FC = () => {
    return (
        <>
        <header>
        <div className="nav" style={{position:"absolute", top:"0"}}>
        <Image src="./images/favicon-32x32.png" alt="ring" width="50" height="50" />
            </div>
        </header>
            <center>
            <div className="fix">
                <div className="can">
                    
                <div className="contaimain">
                    
                    <center>
                       
                    <div className="imcir">
                    <Image src="./images/pattern-circles.svg" alt="ring" width="100" height="100" />
                    </div>
                    </center>
                    <div className="head1" >
                        <h6> Simple, traffic-based pricing</h6>
                    </div>
                    <center>
                        <div className="head2">
                            <h6>Sign-up for our 30-days trial No credit card requied.</h6>
                        </div>
                    </center>
                </div>
                </div>
                </div>
            </center>
        </>
    );
}
export default Headertext;