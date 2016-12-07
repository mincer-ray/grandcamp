export function update(artist) {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${ artist.id }`,
    data: { artist }
  });
};

export function fetch(artist) {
  return $.ajax({
    method: "GET",
    url: `api/users/${ artist.id }`,
  });
};
