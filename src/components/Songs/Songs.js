import React from "react";
import ListItems from "../ListItem/ListItem";
import { useSelector } from "react-redux";

const Songs = () => {
  const stateselectedAlbums = useSelector((state) => state);

  const getAvailableSongs = () => {
    const availableSongs = [];
    stateselectedAlbums.selectedAlbums.forEach(album => {
      availableSongs.push(...album.songs)
    });
    return availableSongs;
  }

  const availableSongs = getAvailableSongs();

  return <ListItems listData={availableSongs} listType="availableSongs" />;
};

export default Songs;
