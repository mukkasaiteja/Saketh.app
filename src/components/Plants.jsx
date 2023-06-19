import React from 'react'
import './Plants.css'
import { useNavigate } from 'react-router-dom'

function Plants() {
  const navigate=useNavigate()
  const Rose=()=>{
navigate('/Rose')
  }
  const forIt=()=>{
    navigate('/New')
  }
  return (

<div className="hom">
       
        
       <div className="main plant">
       <img src="https://m.media-amazon.com/images/I/51y0E3bJMgL.jpg" alt="" />

<h4>Rose</h4>
<p>A rose is either a woody perennial flowering plant of the genus Rosa (/ˈroʊzə/), in the family Rosaceae (/roʊˈzeɪsiːˌiː/),or the flower it bears. There are over three hundred species and tens of thousands of cultivars.[citation needed] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.</p>
<button onClick={Rose}>click here</button>
       </div>


  
    
     
       <div className="main">
           <img src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/flowers-blog/hibiscus-flower-its-scientific-name.jpg" alt="" />

<h4>Hibiscus Plant</h4>
<p>The hibiscus flower's scientific name is Hibiscus rosa-sinensis. It might seem like a mouthful, but trust us, this fancy name is worth knowing. It belongs to the Malvaceae family, which includes other well-known flowers like the cotton plant and okra. The hibiscus flower is also popularly referred to as the Chinese Hibiscus, or China rose, due to its resemblance to the ever-popular rose.</p>
<button onClick={forIt}>click here</button>
           </div>
      

    
     
    
  



    </div>
  )
}

export default Plants