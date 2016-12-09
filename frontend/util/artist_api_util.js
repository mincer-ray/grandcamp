export function fetch(artistId) {
  return $.ajax({
    method: "GET",
    url: `api/users/${ artistId }`,
  });
};

export function update(formData, success, failure, id) {
  return $.ajax({
    url: `api/users/${ id }`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
    success
  });
}
