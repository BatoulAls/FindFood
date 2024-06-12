import '../App.css'
import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import image05 from '../assets/img/about-05.jpg'
const Contact =()=>{
    return(<>
	<main>
			<header class="row tm-welcome-section">
				<h2 class="col-12 text-center tm-section-title">Contact Page</h2>

			</header>

			<div class="tm-container-inner-2 tm-contact-section">
				<div class="row">

				<div class="col-md-6">
				<figure class="tm-description-figure">
                    <img src={image05} alt="Image" class="img-fluid" />
                </figure>
					</div>
					
					<div class="col-md-6">
						<div class="tm-address-box">
							<h4 class="tm-info-title tm-text-success">Our Address</h4>
							<address>
								Abu Dhabi, Yas island, Waters Edge
							</address>
							
							<a href="mailto:info@company.co" class="tm-contact-link">
								<i class="fas fa-envelope tm-contact-icon"></i>batoul.alsharif@icloud.com
							</a>
							<div class="tm-contact-social">
			
								<a href="#" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
								<a href="#" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
            

			
			
		</main>


    </>)
}

export default Contact