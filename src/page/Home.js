import Navbars from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Body";
const  Home = () => {
    return(
        <>
        <Navbars/>
        <main>
           
           <div className=" container mt-4">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_640.jpg" />
                    </div>

                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_640.jpg"/>
                    </div>


                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2014/03/24/17/06/bird-295026_640.png"/>
                    </div>


                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2019/04/26/17/47/color-4158152_640.jpg"/>
                    </div>


                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_640.jpg"/>
                    </div>


                    <div className="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
                        <Card myImage="https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_640.jpg"/>
                    </div>


                </div>

           </div>
        </main>

        <div className="container">
        <Footer/>

        </div>
        
     
        </>
    )
}
export default Home;