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

export function updateArtistWithPic(formData, success, failure, id) {
  $.ajax({
    url: `api/users/${ id }`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success
  });
}
