export function fetchAll(artistId) {
  return $.ajax({
    method: "GET",
    url: 'api/albums',
    data: { id: artistId }
  });
};

export function fetch(albumId) {
  return $.ajax({
    method: "GET",
    url: `api/albums/${ albumId }`,
  });
};
