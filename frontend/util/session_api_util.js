export function signup(user) {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export function login(user) {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export function logout() {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};
