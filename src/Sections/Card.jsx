import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import '../assets/js/jquery.min.js'
import '../assets/js/parallax.min.js'

const Card=({title,calories,image,ingredients})=>{
    return(
        
				
				
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src={image} alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">{title}</h4>
								{ingredients.map(ingredient=>(
									<p class="tm-gallery-description">{ingredient.text}</p>
								))}
								<p class="tm-gallery-price">Calories : {calories}</p>
								
							</figcaption>
						</figure>
					</article>

					


					
					
					
				
				
				
			
    )
}
export default Card