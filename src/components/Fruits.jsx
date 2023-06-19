import React from 'react'

import { useNavigate } from 'react-router-dom'


function Fruits() {
  const navigate=useNavigate();
  const goTo=()=>{
    navigate("/Mango")
  }
  const grapes=()=>{
    navigate('/Grape')
  }
  return (
    <div>

      
<div className="hom">
    
     
      <div className="main plant">
       <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqekFLnfEnL9VojJLADU_B6208UVUHgH2O77txSLMphp8VyM2dIs6XgGVjHg3MA7aWWwnExPVbu8_aqas" alt="" />

<h4>Mango</h4>
<p>A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in southern Asia, particularly in eastern India, Bangladesh, and the Andaman Islands M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two types of modern mango cultivars. </p>
<button onClick={goTo}>click here</button>
       </div>


       <div className="main plant">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/330px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg" alt="" />

<h4>Grape</h4>
<p>A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters.</p>
<button onClick={grapes}>click here</button>
       </div>
  



    </div>
    </div>
  )
}

export default Fruits