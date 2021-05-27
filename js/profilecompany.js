document.addEventListener("DOMContentLoaded", function () {
  let head = {
    "Content-Type": "application/json",
    email: localStorage.email,
  };

  fetch(`http://127.0.0.1:5000/companies/profile/`, {
    method: "GET",
    headers: head,
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((response) => {
      const email = document.querySelector(".email");
      const company_name = document.querySelector(".company_name");
      const website = document.querySelector("#website");
      const city =document.querySelector(".city");
      const address =document.querySelector(".address");
      const contact_number =document.querySelector(".contact_number");
      const profile_description =document.querySelector(".profile_description");


      company_name.innerHTML = response.company_name;
      website.innerHTML = response.website;
      email.innerHTML = response.email;
      city.innerHTML = response.city;
      address.innerHTML = response.address;
      contact_number.innerHTML = response.contact_number;
      profile_description.innerHTML = response.profile_description;
    });
  
    const logout = document.querySelector("#signout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      delete localStorage.email;
      window.location.href = "/index.html";
    });
    
    const editBtn = document.querySelector("#btn-editCompany");
    editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "companyedit.html";
  });


});
