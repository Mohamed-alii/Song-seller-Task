import React from "react";
import ListItems from "../ListItem/ListItem";
import { useSelector } from "react-redux";

const Albums = () => {
  const selectedSingers = useSelector((state) => state.selectedSingers);

  const getAvailableAlbums = () => {
    const availableAlbums = [];
    selectedSingers.forEach(singer => {
      availableAlbums.push(...singer.albums)
    });
    return availableAlbums;
  }

  const availableAlbums = getAvailableAlbums();

  return <ListItems listData={availableAlbums} listType="availableAlbums" />;
};

export default Albums;
