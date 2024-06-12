
import '../assets/css/templatemo-style.css'
import '../assets/css/all.min.css'
import '../assets/css/fonts.css'
import { useState,useEffect } from 'react'
import {Main} from '../Components/index.jsx'
import {Title,Card,LastSection} from '../Sections/index.jsx'

const Home=()=>{
    const APP_ID = "142e657f"; 
    const APP_KEY = "e083e4d5bd8b2c8ce7553739c7337350"; 
	const [meals, setmeals] = useState([]); 
  const [search, setSearch] = useState(""); 
    const [query, setQuery] = useState("meat"); 
	useEffect(() => { 
		getmeals(); 
	  }, [query]) 

	const getmeals =async()=>{
		const response =await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data= await response.json();
		setmeals(data.hits);
	};

	const updateSearch=e=>{
		setSearch(e.target.value);
	}

  const getSearch=e=>{
	e.preventDefault();
	setQuery(search);
	setSearch("")
  }

    return(
    <>

		<Main>
		<div class="row tm-welcome-section">
		<form onSubmit={getSearch} >
	    <label for="search">Search</label>
	    <input className="search" id="search" type="search"  pattern=".*\S.*" required value={search} onChange={updateSearch}  />
	   <span class="caret"></span>
       </form>
	   </div>

         <Title/>
		
		 <div class="row tm-gallery">
		 <div id="tm-gallery-page-pizza" class="tm-gallery-page">
		 {meals.map(meal=>(
			<Card 
			key={meal.recipe.lable}
			title={meal.recipe.label}
			calories={meal.recipe.calories}
			image={meal.recipe.image}
			ingredients={meal.recipe.ingredients}
			/>

		 ))}
		 </div>
		 </div>
	     
	     <LastSection/>
		</Main>
    
    </>
    )
}
export default Home