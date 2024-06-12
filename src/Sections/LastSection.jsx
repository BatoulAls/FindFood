import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import '../assets/js/jquery.min.js'
import '../assets/js/parallax.min.js'
import image01 from '../assets/img/about-06.jpg'
import { Link } from 'react-router-dom'
const LastSection=()=>{
    return(<div class="tm-section tm-container-inner">
        <div class="row">
            <div class="col-md-6">
                <figure class="tm-description-figure">
                    <img src={image01} alt="Image" class="img-fluid" />
                </figure>
            </div>
            <div class="col-md-6">
                <div class="tm-description-box"> 
                    <h4 class="tm-gallery-title">Our Meals</h4>
                    <p class="tm-mb-45">We Prepare Our Meal with love ^-^</p>
                    <Link to="/Contact" class="tm-btn tm-btn-default tm-right">Read More</Link>
                </div>
            </div>
        </div>
    </div>)
}
export default LastSection 