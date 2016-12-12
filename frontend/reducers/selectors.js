import { values } from 'lodash';

export const asArray = (albums) => Object.keys(albums).map(key => albums[key]);

export const songList = (songsArray) => {
  let songsListObject = {};

  songsArray.forEach((song) => {
    songsListObject[song.track_num] = song;
  });

  return songsListObject;
};

export const resultsArray = (results) => Object.keys(results).map(key => results[key]).shuffle;
