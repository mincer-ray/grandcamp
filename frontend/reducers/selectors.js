import { values } from 'lodash';

export const asArray = (albums) => Object.keys(albums).map(key => albums[key]);
