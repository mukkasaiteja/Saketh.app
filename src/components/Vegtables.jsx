import React from 'react'
import { useNavigate } from 'react-router-dom'

function Vegtables() {
       const nagigate=useNavigate()
       const potato=()=>{

              nagigate('/Potato')
       }
       const tomato =()=>{
              nagigate('/Tomato')
       }
  return (
    <div>




      
<div className="hom">
       
        
       <div className="main plant">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/330px-Patates.jpg" alt="" />

<h4>Potato</h4>
<p>The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae.[2]

Wild potato species can be found from the southern United States to southern Chile.[3] The potato was originally believed to have been domesticated by Native Americans independently in multiple locations,[4] but later genetic studies traced a single origin, in the area of present-day southern Peru and extreme northwestern Bolivia.</p>
<button onClick={potato}>click here</button>
       </div>


  
    
      <div className="main plant">
       <img src="https://rukminim1.flixcart.com/image/416/416/kgpg5u80/plant-seed/w/j/r/100-ct-126-premium-f1-hybrid-cherry-tamoto-potent-100-original-imafwvszdzwzhyqx.jpeg?q=70" alt="" />

<h4>Tomato</h4>
<p>The tomato (/təmeɪtoʊ/ or /təmɑːtoʊ/) is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.[2][3] The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.</p>
<button onClick={tomato}>click here</button>
       </div>

    

   



    </div>
    </div>
  )
}

export default Vegtables