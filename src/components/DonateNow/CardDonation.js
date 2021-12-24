import React from "react";
import './CardDonation.css'



function Donation(props) {
    // console.log(props.content.imageUrl);
    return (
        <div>
            <div className="card mb-5">
                <img src={props.content.imageUrl} className="card-img-top" alt="gpjen" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.content.tittle}</h5>
                    <p className="card-text">{props.content.text}</p>
                    <div className="ContainerBar mt-4 mb-4">
                        <div className="statusbar" style={{width: props.content.totalDonasiTerkumpul}}></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-7">
                            <p className="fw-bold">Rp {props.content.totalDonasi}</p>
                        </div>
                        <div className="col-md-5 d-grid gap-1">
                            <button className="btnDonate text-light rounded">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation;