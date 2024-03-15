import styled from "styled-components"
import imageSrc from"../../../img/woman.png"
import imageSvg1 from "../../../img/block.svg"
import imageSvg2 from "../../../img/Group 58.svg"
import imageSvg3 from "../../../img/Rectangle 34.svg"
import { ButtonStarted, CardWraper, ImgHome, Title, TitleParagraf } from "./HomePage.styled"

import { GoArrowUpRight } from "react-icons/go";
const HomePage = () => {
  return (
    <CardWraper>
    <div>
<Title>The road to the<span style={{color:"#54be96", fontStyle:"italic"}} > depths</span> of the human soul</Title>
<TitleParagraf>We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</TitleParagraf>
<ButtonStarted >Get started <GoArrowUpRight size = '25px'  /></ButtonStarted>


</div>


<div style={{position:'relative'}} >
<img style={{position:"absolute", top:"400px" ,left:"5px"}} src={imageSvg1}/>
<img style={{position:"absolute", top:"70px" ,left:"575px"}} src={imageSvg2}/>
<img style={{position:"absolute", top:"200px" ,left:"90px"}} src={imageSvg3}/>

<ImgHome src={imageSrc} />

</div>




    </CardWraper>
  )
}

export default HomePage
