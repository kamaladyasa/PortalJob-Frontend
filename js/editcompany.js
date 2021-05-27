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
    const editForm = document.querySelector("#editCompany");
    let upData = new FormData(editForm);
    let data = Object.fromEntries(upData);
    
    if (data.email == "") {
      delete data.email;
    }   
    if (data.company_name == "") {
      delete data.company_name;
    }    
    if (data.profile_description == "") {
      delete data.profile_description;
    }
    if (data.website == "") {
      delete data.website;
    }
    if (data.address == "") {
      delete data.adress;
    }
    if (data.city == "") {
      delete data.city;
    }
    if (data.contact_number == "") {
      delete data.contact_number;
    }
    
    if (Object.entries(data).length === 0) {
      return alert("Blank form, data input not given");
    }
    
    data = JSON.stringify(data);
    
    fetch(`http://127.0.0.1:5000/companies/`, {
      method: "PUT",
      headers: head,
      body: data,
      credentials: "same-origin",
    })
    .then((response) => response.json())
    .then((response) => {
    alert("Successfully updated");
    window.location.href = "companyprofile.html";
    });
  });
});
