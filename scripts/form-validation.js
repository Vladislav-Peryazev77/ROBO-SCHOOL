document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  let email = document.getElementById("email").value;

  console.log(`Имя: ${name}, Телефон: ${tel}, Почта: ${email}`);
});
