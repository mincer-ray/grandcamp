export function update(artist) {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${ artist.id }`,
    data: { artist }
  });
};

export function fetch(artistId) {
  return $.ajax({
    method: "GET",
    url: `api/users/${ artistId }`,
  });
};
