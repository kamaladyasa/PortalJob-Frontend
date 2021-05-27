document.addEventListener("DOMContentLoaded", function () {
  const logout = document.querySelector("#signout");
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    delete localStorage.email;
    window.location.href = "/index.html";
  });

  let head = {
    "Content-Type": "application/json",
    email: localStorage.email,
  };
  
  const sbmtBtn = document.querySelector("#btn-submit");
  sbmtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const editForm = document.querySelector("#editUser");
    let upData = new FormData(editForm);
    let data = Object.fromEntries(upData);
    
    if (data.email == "") {
      delete data.email;
    }   
    if (data.first_name == "") {
      delete data.first_name;
    }    
    if (data.last_name == "") {
      delete data.last_name;
    }
    if (data.date_of_birth == "") {
      delete data.date_of_birth;
    }
    if (data.contact_number == "") {
      delete data.contact_number;
    }
    
    if (Object.entries(data).length === 0) {
      return alert("Blank form, data input not given");
    }
    
    data = JSON.stringify(data);
    
    fetch(`http://127.0.0.1:5000/users/`, {
      method: "PUT",
      headers: head,
      body: data,
      credentials: "same-origin",
    })
    .then((response) => response.json())
    .then((response) => {
    alert("Successfully updated");
    window.location.href = "userprofile.html";
    });
  });
});
