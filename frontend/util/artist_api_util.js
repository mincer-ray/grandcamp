export function update(artist, id) {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${ id }`,
    data: { artist }
  });
};

export function fetch(artistId) {
  return $.ajax({
    method: "GET",
    url: `api/users/${ artistId }`,
  });
};
