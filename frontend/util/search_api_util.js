export function search(query) {
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: { search: { query } }
  });
};

export function random(amount) {
  return $.ajax({
    method: "GET",
    url: `api/searches/${amount}`
  });
}
