import React from 'react'

function Grape() {
  return (
    <div  style={{backgroundColor:"black ",color:"white" ,height:"1000px"}}>
        <h1>Grape</h1>
         <img src="https://www.indianonshop.com/wp-content/uploads/2022/06/Graps.jpg" height={200} width={200} alt="" />
         <h3>Description:-</h3>
         <p>Grapes are a type of fruit that grow in clusters of 15 to 300, and can be crimson, black, dark blue, yellow, green, orange, and pink. "White" grapes are actually green in color, and are evolutionarily derived from the purple grape. Mutations in two regulatory genes of white grapes turn off production of anthocyanins, which are responsible for the color of purple grapes.[12] Anthocyanins and other pigment chemicals of the larger family of polyphenols in purple grapes are responsible for the varying shades of purple in red wines.[13][14] Grapes are typically an ellipsoid shape resembling a prolate spheroid.</p>
        <div style={{border:'1px solid black',width:'700px',margin:"auto",boxShadow:"0px 0px 30px white",padding:"10px",background:"white",color:"black"}}>
            <h3>Tips</h3>
        <ol>
            <li>Choose the right variety: Select grape varieties that are suitable for your climate and soil conditions. Different varieties thrive in different environments, so do your research and choose ones that are known to grow well in your area.</li>
            <li>Find the right location: Grapes need a sunny location to thrive. Ensure that the site you choose receives at least 6-8 hours of direct sunlight each day. Good air circulation is also important to prevent diseases.</li>
            <li>Prepare the soil: Before planting, make sure the soil is well-draining and fertile. Amend the soil with organic matter like compost or well-rotted manure to improve its fertility and drainage.</li>
            <li>Provide support: Grapes are vines and need support to grow. Install a trellis, arbor, or sturdy support system for the vines to climb on. This helps in training the vines, increases air circulation, and makes harvesting easier.</li>
            <li>Prune regularly: Pruning is essential for grapevines to maintain their health and productivity. Prune during the dormant season to remove dead or weak wood and shape the vine. Also, thin out excessive foliage to increase sunlight penetration.</li>
         </ol>

        </div>

    </div>
  )
}

export default Grape