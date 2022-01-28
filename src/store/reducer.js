import {
  addSinger,
  addAlbum,
  addSong,
  removeSinger,
  removeAlbum,
  removeSong,
  addItemId,
  removeItemId,
  saveUsername,
  saveUserEmail,
  saveUserMobile
} from "./actions";

const initialValue = {
  selectedSingers: [],
  selectedAlbums: [],
  selectedSongs: [],
  totalPrice: 0,
  totalCount: 0,
  selectedIds: [], // for adding selected css class for selected items
  name: "",
  email: "",
  mobile: "",
};

const userCollectionReducer = (state = initialValue, action) => {
  const payload = action.payload;
  switch (action.type) {
    case addSinger().type:
      return {
        ...state,
        selectedSingers: [...state.selectedSingers, payload],
      };
    case addAlbum().type:
      return {
        ...state,
        selectedAlbums: [...state.selectedAlbums, payload],
      };
    case addSong().type:
      return {
        ...state,
        selectedSongs: [...state.selectedSongs, payload],
        totalCount: state.totalCount + +1,
        totalPrice: state.totalPrice + +payload.price.split("$")[1],
      };
    case removeSinger().type:
      return {
        ...state,
        selectedSingers: state.selectedSingers.filter(
          (singer) => singer.id !== payload.id
        ),
      };
    case removeAlbum().type:
      return {
        ...state,
        selectedAlbums: state.selectedAlbums.filter(
          (album) => album.id !== payload.id
        ),
      };
    case removeSong().type:
      return {
        ...state,
        selectedSongs: state.selectedSongs.filter(
          (song) => song.id !== payload.id
        ),
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - payload.price.split("$")[1],
      };
    case addItemId().type:
      return {
        ...state,
        selectedIds: [...state.selectedIds, payload],
      };
    case removeItemId().type:
      return {
        ...state,
        selectedIds: state.selectedIds.filter((id) => {
          return id !== payload;
        }),
      };
    case saveUsername().type:
      return {
        ...state,
        name: payload,
      };
    case saveUserEmail().type:
      return {
        ...state,
        email: payload,
      };
    case saveUserMobile().type:
      return {
        ...state,
        mobile: payload,
      };
    default:
      return state;
  }
};

export default userCollectionReducer;
