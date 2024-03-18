
import { Avatar, AvatarWraper, ColectionComent, Collection, CollectionSection, ComenParagraph, Coment, ComentImg, ComentRating, ComentWraper, Name, NameTitle, NameTitleWraper, Paragraf, PriceTitle, RatingTitle, ReadMore, WraperCard } from './Card.styled';
import { nanoid } from 'nanoid';
import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { PsichologData } from '../../firebase/fierbase';

export const Card = () => {
  const [openedCardId, setOpenedCardId] = useState(null);
  const [isFavorins, setisFavorins] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [psicholog, setpsicholog] = useState([]);
  const updateFavorite =(id)=>{
   
   const psichologid =  psicholog.findIndex(function(e){return e.id == id})
   console.log(psichologid)



  }

  const readMore = (id) => {
    setOpenedCardId(openedCardId === id ? false : id);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#f3f3f3";
  }, []);

  useEffect(() => {
    async function handleUserAccount() {
      try {
    
        const userAccount = await PsichologData();
        setpsicholog(userAccount);
      if(userAccount){
        setIsLoading(false);
      }
      } catch (error) {
        console.error(error);
       
      } 
    }
    handleUserAccount();
  }, []);








  return (
    <>

    {isLoading ? <div>Загрузка...</div> : psicholog.map((e) => {
  return (

    <WraperCard key={e.id}>
      <AvatarWraper><Avatar src={e.avatar_url} width={"96px"} /></AvatarWraper>
<div>{e.id}</div>
<NameTitleWraper>
        <span style={{ color: " #8a8a89", fontSize: "16px", fontWeight: "500", lineHeight: "150%" }}>Psychologist</span>
        <NameTitle>{e.name}</NameTitle>
      </NameTitleWraper>
      <RatingTitle><MdOutlineStar style={{ color: "#ffc531", width: "16px" }} />Rating:{e.rating}</RatingTitle>
      <PriceTitle>Price / 1 hour:<span style={{color:"#38CD3E"}}>{e.price_per_hour}$</span> </PriceTitle>
     {isFavorins ?  <FaRegHeart onClick={()=>updateFavorite(e.id)} style={{width:"26px"} }/>:<FaHeart  onClick={()=>updateFavorite(e.id)} style={{color:"red"} }/>}

      <CollectionSection>
        <Collection>Experience: {e.experience}</Collection>
        <Collection>License: {e.license}</Collection>
        <Collection>Specialization: {e.specialization}</Collection>
        <Collection>Initial_consultation: {e.initial_consultation}</Collection>
      </CollectionSection>
      <Paragraf>{e.about}</Paragraf>
      <ReadMore onClick={() => readMore(e.id)}>Read more</ReadMore>
      {openedCardId === e.id && <ColectionComent>
        {e.reviews.map((review) =>
          <ComentWraper key={nanoid()}>
            <ComentImg>{review.reviewer[0].toUpperCase()}</ComentImg>
            <Coment>
              <Name>{review.reviewer}</Name>
              <ComentRating><MdOutlineStar style={{ color: "#ffc531", width: "16px" }}></MdOutlineStar> {review.rating} </ComentRating>
              <ComenParagraph>{review.comment}</ComenParagraph>
            </Coment>
          </ComentWraper>
        )}
      </ColectionComent>}

    </WraperCard>
  )
  })}
    
    </>
  
  )
}

export default Card;


