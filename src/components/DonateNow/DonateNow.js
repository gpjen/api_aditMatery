
import './DonateNow.css'
import CardDonation from './CardDonation'


function DonationNow() {

    return(
        <div className='donateNow'>
            <h4 className="text-red fw-bold">Donation Now</h4>
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <CardDonation 
                        content={{
                            imageUrl: "https://i.ibb.co/dkL9T0b/Rectangle-7.jpg",
                            tittle: "The Strength of a People. Power of Community",
                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            totalDonasiTerkumpul: 80,
                            totalDonasi: "25.000.000",
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDonation 
                        content={{
                            imageUrl: "https://i.ibb.co/Kwpms7y/Rectangle-7-1.jpg",
                            tittle: "Empowering Communities Ending Poverty",
                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            totalDonasiTerkumpul: 25,
                            totalDonasi: "50.000.000",
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <CardDonation 
                        content={{
                            imageUrl: "https://i.ibb.co/LdFDfkX/Rectangle-7-2.jpg",
                            tittle: "Please our brothers in flores",
                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            totalDonasiTerkumpul: 55,
                            totalDonasi: "100.000.000",
                        }}
                    />
                </div>
            </div>
        </div>

        </div>
    )
}

export default DonationNow