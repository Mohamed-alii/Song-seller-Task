import React from "react";
import ListItems from "../ListItem/ListItem";
import { singersArray } from '../../singersArray'

const Singers = () => {
  return <ListItems listData={singersArray} listType="singers" />;
};

export default Singers;
