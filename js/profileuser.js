document.addEventListener("DOMContentLoaded", function () {
  let head = {
    "Content-Type": "application/json",
    email: localStorage.email,
  };

  fetch(`http://127.0.0.1:5000/users/profile/`, {
    method: "GET",
    headers: head,
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((response) => {
      const email = document.querySelector(".email");
      const fullname = document.querySelector(".fullname");
      const date_of_birth = document.querySelector(".date_of_birth");
      const gender =document.querySelector(".gender");
      const contact_number =document.querySelector(".contact_number");


      fullname.innerHTML = `${response.first_name} ${response.last_name}`;
      email.innerHTML = response.email;
      gender.innerHTML = response.gender;
      contact_number.innerHTML = response.contact_number;
      date_of_birth.innerHTML = response.date_of_birth;
    });
  
    const logout = document.querySelector("#signout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      delete localStorage.email;
      window.location.href = "/index.html";
    });
    
    const editBtn = document.querySelector("#btn-editUser");
    editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "useredit.html";
    });
    
    const eduBtn = document.querySelector("#btn-edu");
    eduBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "useredu.html";
    });

    const expBtn = document.querySelector("#btn-exp");
    expBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "expuser.html";
    });


});
