import { useContext } from "react";
import MyContext from "../myContext";

export default function Favoritos() {
  const {fav} = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          fav?.map(photo => (
            <div key={photo.id} className='foto' style={{backgroundImage:`url(${photo.src.medium})`}}>
            </div>
          ))
        }
      </div>
    </div>
  );
}
