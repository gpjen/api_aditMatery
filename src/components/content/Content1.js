
import './Content1.css'
import img1 from '../../assets/img/1340554718 1.jpg'
import img2 from '../../assets/img/1340554718 2.jpg'

function Content1() {
    
    return(
        <div>
            <div className="container-fluid p-0">
                <div class="content1 pt-5">
                    <div className="row marking">
                        <div class="col-md-1"></div>
                        <div className="col-md-6 text-light">
                            <h1 className='mb-3'>While you are still standing, try to reach out to the people who are falling.</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                            <button className='btn btn-light fw-bold mt-5 mb-5' style={{padding: "5px 30px", color: "#C32424"}}>Donate Now</button>
                        </div>
                        <div className="col-md-5 position-relative center">
                            <img className='imgcontent1' src={img1} alt="image1" />
                        </div>
                    </div>
                </div>
                <div class="content2">
                    <div className="row pt-5">
                        <div className="col-md-5 position-relative center">
                            <img className='imgcontent2' src={img2} alt="image2" />
                        </div>
                        <div className="col-md-5 text-dark">
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