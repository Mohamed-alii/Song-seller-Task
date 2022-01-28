import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAlbum, addSong, addSinger, removeSinger, removeAlbum, removeSong, addItemId, removeItemId } from "../../store/actions";
import './ListItem.css';

const ListItems = ({ listData, listType }) => {
  const selectedSingers = useSelector((state) => state.selectedSingers);
  const selectedAlbums = useSelector((state) => state.selectedAlbums);
  const selectedSongs = useSelector((state) => state.selectedSongs);
  const selectedIds = useSelector((state) => state.selectedIds);

  const dispatch = useDispatch();
  
  const itemClickHandler = (item) => {

    switch (listType) {
      case "singers":
        //check if the singer is3 already selected
        //add to selected singers
        if(!selectedSingers.find(singer => singer.id === item.id)){
          dispatch(addSinger(item))
          dispatch(addItemId(item.id))
        }else{
          dispatch(removeSinger(item))
          dispatch(removeItemId(item.id))
        }
        break;
      case "availableAlbums":
        //check if the album is already selected
        //add to selected albums
        if(!selectedAlbums.find(album => album.id === item.id)){
          dispatch(addAlbum(item))
          dispatch(addItemId(item.id))
        }else{
          dispatch(removeAlbum(item))
          dispatch(removeItemId(item.id))
        }
        break;
      case "availableSongs":
        //check if the song is already selected
        //add to selected songs 
        if(!selectedSongs.find(song => song.id === item.id)){
          dispatch(addSong(item))
          dispatch(addItemId(item.id))
        }else{
          dispatch(removeSong(item))
          dispatch(removeItemId(item.id))
        }
        break;
    }
  };

  return (
    <div className="container">
       {listData.map((item) => (
          <div className={`list__item ${selectedIds.includes(item.id) ? 'selected' : ''}`} key={item.id} onClick={() => itemClickHandler(item)}>
            <figure className="list__item__img-wrapper">
              <img src={item.image} alt={item.name} />
            </figure>
            <h3 className="list__item__text">{item.name}</h3>
            {listType === 'availableAlbums' ? <p className="list__item__text">{item.date}</p> : null}
            {listType === 'availableSongs' ? <p className="list__item__text">{item.price}</p> : null}
          </div>
       ))}
      
    </div>
  )

}

export default ListItems;
