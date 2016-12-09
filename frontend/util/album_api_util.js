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

export function create(formData) {
  return $.ajax({
    url: 'api/albums',
    type: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
}

export function destroy(id) {
  return $.ajax({
    method: 'DELETE',
    url: `api/albums/${ id }`,
  });
}

export function update(formData, success, failure, id) {
  return $.ajax({
    url: `api/albums/${ id }`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success
  });
}
