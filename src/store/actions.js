import {
  ADD_ALBUM,
  ADD_SINGER,
  ADD_SONG,
  REMOVE_SINGER,
  REMOVE_ALBUM,
  REMOVE_SONG,
  ADD_ITEM_ID,
  REMOVE_ITEM_ID,
  SAVE_USER_NAME,
  SAVE_USER_EMAIL,
  SAVE_USER_MOBILE
} from "./constants";

export const addSinger = (singer) => {
  return {
    type: ADD_SINGER,
    payload: singer,
  };
};

export const addAlbum = (album) => {
  return {
    type: ADD_ALBUM,
    payload: album,
  };
};

export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};
export const removeSinger = (singerId) => {
  return {
    type: REMOVE_SINGER,
    payload: singerId,
  };
};

export const removeAlbum = (albumId) => {
  return {
    type: REMOVE_ALBUM,
    payload: albumId,
  };
};

export const removeSong = (songId) => {
  return {
    type: REMOVE_SONG,
    payload: songId,
  };
};

export const addItemId = (id) => {
  return {
    type: ADD_ITEM_ID,
    payload: id,
  };
};

export const removeItemId = (id) => {
  return {
    type: REMOVE_ITEM_ID,
    payload: id,
  };
};

export const saveUsername = (name) => {
  return {
    type: SAVE_USER_NAME,
    payload: name,
  };
};
export const saveUserEmail = (email) => {
  return {
    type: SAVE_USER_EMAIL,
    payload: email,
  };
};
export const saveUserMobile = (mobile) => {
  return {
    type: SAVE_USER_MOBILE,
    payload: mobile,
  };
};
