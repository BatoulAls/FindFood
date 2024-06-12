import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import '../assets/js/jquery.min.js'
import '../assets/js/parallax.min.js'
const NavItem=(props)=>{
    return(
<>
<nav class="col-md-6 col-12 tm-nav">
    {props.children}

</nav>
</>
    )

}
export default NavItem