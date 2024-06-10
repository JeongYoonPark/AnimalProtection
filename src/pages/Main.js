import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Main.scss"
import SampleImg from "../assets/img/SampleImg.png";

function Main(){
    return(
        <div className="Main">
            <Header/>
            <div className="box">
                <img className="si" src={SampleImg} />
            </div>
            <Footer/>
        </div>
    )
}

export default Main;