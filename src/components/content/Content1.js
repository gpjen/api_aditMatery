
import './Content1.css'
import img1 from '../../assets/img/1340554718 1.jpg'
import img2 from '../../assets/img/1340554718 2.jpg'

function Content1() {
    
    return(
        <div>
            <div className="container-fluid pt-5 content1 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 text-light">
                            <h1 className='mb-3'>While you are still standing, try to reach out to the people who are falling.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            <button className='btn btn-light fw-bold mt-5 mb-5' style={{padding: "5px 30px", color: "#C32424"}}>Donate Now</button>
                        </div>
                        <div className="col-md-5">
                        <img className='imgcontent1' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5 content2">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <img className='imgcontent2' src={img2} alt="" />
                        </div>
                        <div className="col-md-7 text-dark">
                            <h1 className='mt-5 mb-5'>Your donation is very helpful for people affected by forest fires in Kalimantan.</h1>
                            <div className="row">
                                <div className="col-md-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </div>
                                <div className="col-md-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content1;