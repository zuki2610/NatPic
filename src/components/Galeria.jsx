import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext, useState } from "react";
import MyContext from "../myContext";

export default function Galeria() {
const {gallery , setGallery , fav , setFav , heart , setHeart} = useContext(MyContext);
const addFav = (photo) =>{
  console.log(photo);
  if (!fav.find((favPhoto) => favPhoto.id === photo.id)){
    setFav([...fav, photo]);
  }
  else{
    let favoritos = fav.filter(photoFav => photoFav.id !== photo.id )
    setFav(favoritos);
  }
  setHeart(
    {
      ...heart,
      [photo.id] : !heart[photo.id]
    }
  )
}

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        gallery?.map(photo => (
          <div key={photo.id} className='foto' onClick={() => addFav(photo)} style={{backgroundImage:`url(${photo.src.tiny})`}}>
          <Heart filled={heart[photo.id]}/>
          <p className="svg">{photo.alt}</p>
          </div>
        ))
      }
    </div>
  );
}
