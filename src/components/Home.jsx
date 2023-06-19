import React from 'react'
import './Home.css'
import Tree from './Tree.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const forIt=()=>{
    navigate('/New')
  }
  const tomato =()=>{
    navigate('/Tomato')
}
const goTo=()=>{
  navigate("/Mango")
}
  return (
    <div>
      <div className='title'> 
        <img src={Tree} height='500px' width='100%' style={{boxShadow:'10px 10px 90px pink'}} alt="" />
        <img src="https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2022-04/5-things-plants-need_0.png?itok=z2J23M6d" height='500px' width='100%' alt="" />

      </div>
      <div >
    <center>  <h2>THIS IS ABOUT GARDENING PLANTS EXAMPLES</h2></center>
      <div className="tommy">
       
        
           <div className="main">
           <img src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/flowers-blog/hibiscus-flower-its-scientific-name.jpg" alt="" />

<h4>Hibiscus Plant</h4>
<p>The hibiscus flower's scientific name is Hibiscus rosa-sinensis. It might seem like a mouthful, but trust us, this fancy name is worth knowing. It belongs to the Malvaceae family, which includes other well-known flowers like the cotton plant and okra. The hibiscus flower is also popularly referred to as the Chinese Hibiscus, or China rose, due to its resemblance to the ever-popular rose.</p>
<button onClick={forIt}>click here</button>
           </div>


      
        
          <div className="main">
           <img src="https://rukminim1.flixcart.com/image/416/416/kgpg5u80/plant-seed/w/j/r/100-ct-126-premium-f1-hybrid-cherry-tamoto-potent-100-original-imafwvszdzwzhyqx.jpeg?q=70" alt="" />

<h4>TOMATO</h4>
<p>The tomato (/təmeɪtoʊ/ or /təmɑːtoʊ/) is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America. The Nahuatl word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived. Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.</p>
<button  onClick={tomato}>click here</button>
           </div>

        
         
          <div className="main">
           <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqekFLnfEnL9VojJLADU_B6208UVUHgH2O77txSLMphp8VyM2dIs6XgGVjHg3MA7aWWwnExPVbu8_aqas" alt="" />

<h4>Mango</h4>
<p>A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in southern Asia, particularly in eastern India, Bangladesh, and the Andaman Islands. M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two types of modern mango cultivars. </p>
<button onClick={goTo}>click here</button>
           </div>


        </div>
      </div>





    </div>
  )
}

export default Home