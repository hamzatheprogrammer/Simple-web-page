import React from "react";
import './style.css'
import Kaghan from './Kaghan.jpg'

function MainSec(){
    return(
        <div className="main-page">
            <h1 className="Main-Heading">Naran kagan</h1>
            <img className="Nran-img" src={Kaghan} alt="NaranKaghan" />
            <p className="para">Naran and Kaghan are renowned tourist destinations nestled in the picturesque valleys of the Khyber Pakhtunkhwa province in Pakistan. Known for their breathtaking natural beauty, these areas offer lush green landscapes, snow-capped peaks, and crystal-clear rivers that attract thousands of visitors each year. The journey to Naran and Kaghan is an adventure in itself, winding through scenic routes lined with dense forests and panoramic views. Key attractions include Saif-ul-Malook Lake, a serene body of water surrounded by majestic mountains, and the Babusar Pass, which offers stunning vistas and connects the region to Gilgit-Baltistan. The local culture is rich with traditions and hospitality, providing tourists with a unique and memorable experience. Whether it's hiking, fishing, or simply soaking in the serene environment, Naran and Kaghan present an ideal retreat for nature lovers and adventure seekers alike.</p>
        </div>
    )
}
export default MainSec;