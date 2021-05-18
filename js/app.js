document.addEventListener('DOMContentLoaded', function() {
  fetch ('http://127.0.0.1:5000/users/job-lists/')
  .then((res) => res.json())
  .then((data) => {
    let joblists = '';
    data.forEach(function(post){
      joblists += `
        <div class="company-details">
        <div class="job-update">
        <h4><b>${post.title}</b></h4>
        <p>${post.company.company_name}</p>
        <i class="fas fa-briefcase"><span>&nbsp 0-1 yrs</span></i><br>
        <i class="fas fa-graduation-cap"><span>&nbsp 3.50 - 4.00 Lacs p. a.</span></i><br>
        <i class="fas fa-map-marker-alt"><span>&nbsp ${post.location_city}</span></i><br>
        <p>Skills <i class="fas fa-angle-double-right"></i><small>communication</small><small>secretarial</small>
        <small>HTML, CSS</small><small>.Net</small></p>
        <p>Description <i class="fas fa-angle-double-right"></i> ${post.job_description}<a href="#">Read more</a></p>
        </div></div>
        `;
    });
  document.getElementById('joblists').innerHTML = joblists;
  })
})