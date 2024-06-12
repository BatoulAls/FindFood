import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import '../assets/js/jquery.min.js'
import '../assets/js/parallax.min.js'

const Container=(props)=>{


    return(
        <div className="container">
            {props.children}


        </div>
    )

}

export default Container