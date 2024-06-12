import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import '../assets/js/jquery.min.js'
import '../assets/js/parallax.min.js'
import { Link } from 'react-router-dom'
import {NavItem} from '../Components/index.jsx'


import logo from '../assets/img/logo.jpg'




const Header=()=>{
    return(
        <>
        
        
		<div class="placeholder">
			<div class="parallax-window" >
				
				<div class="tm-header">
					<div class="row tm-header-inner">
						<div class="col-md-6 col-12">
							<img width="60" height="60" src={logo} alt="Logo" class="tm-site-logo" /> 
							<div class="tm-site-text-box">
								<h1 class="tm-site-title">Find Your Meal</h1>
								<h6 class="tm-site-description">Sweet & Salt</h6>	
							</div>
						</div>
						
						<NavItem>
							<ul class="tm-nav-ul">
								<li class="tm-nav-li"><Link to="/" class="tm-nav-link active">Home</Link></li>
								
								<li class="tm-nav-li"><Link to="/Contact" class="tm-nav-link">Contact</Link></li>
							</ul>
							</NavItem>
							
					</div>
				</div>
			</div>
		</div>
        
        </>

    )
}

export default Header