export function signup(user) {
  $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export function login(user) {
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export function logout() {
  $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};
