document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.querySelector("#btn-signup");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const regForm = document.querySelector("#registerCompany");
    let regData = new FormData(regForm);
    let data = Object.fromEntries(regData);

    data = JSON.stringify(data);

    fetch(`http://127.0.0.1:5000/companies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
      alert("Successfully registered");
      window.location.href = "companylogin.html";
      });
  });
});