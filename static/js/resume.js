function getProfile() {
    let url = `${base_url}author/get_profile/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
        //console.log(data)
        if(data['status'] == 'success') {
            p = data.data
            $('.res-name').html(`${p.first_name} ${p.last_name}`)
            $('.res-email').html(`${p.email}`)
            $('.res-phone').html(`${p.phone_number}`)
            $('.res-address').html(`${p.address}`)
            $('.res-bio').html(`${p.work_description}`)
            $('.res-dob').html(`${p.dob}`)
            $('#res-linkedin').attr('href', `${p.linkedin}`).text(`${p.linkedin}`)
            $('#res-github').attr('href', `${p.github}`).text(`${p.github}`)
            $('#res-twitter').attr('href', `${p.twitter}`).text(`${p.twitter}`)
            $('#res-facebook').attr('href', `${p.facebook}`).text(`${p.facebook}`)
            $('#res-instagram').attr('href', `${p.instagram}`).text(`${p.instagram}`)
            if(p.image) {
                $('.res-img').attr('src', `${base_image_url}${p.image}`)
            }
        }
        else if(data['status'] == 'error') {
            swal('Error', data['message'], 'error')
        }
    })
    .catch(err => {console.log(err)})
}
function getResumeProjects() {
    let url = `${base_url}projects/get_resume_projects/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    $('.res-pro-content').empty()
      //console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                date = new Date(p[i].created).toLocaleDateString();
                let temp = `<div class="res-pro">
                <div class="w-flex w-flex-between w-align-center">
                  <div class="w-bold-x">${p[i].title}</div>
                  <div>${date}</div>
                </div>
                <ul>
                  <li>${p[i].short_description}</li>
                </ul>
              </div>`;
              $('.res-pro-content').append(temp)
            }
        }
      }
      else if(data['status'] == 'error') {
        
      }
    })
    .catch(err => {console.log(err)})
}
function getSkills() {
    let url = `${base_url}skills/get_skills/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    $('.res-skill-content').empty()
      console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                let temp = `<li>${p[i].description}</li>`;
              $('.res-skill-content').append(temp)
            }
        }
      }
      else if(data['status'] == 'error') {
        
      }
    })
    .catch(err => {console.log(err)})
}
function getInterests() {
    let url = `${base_url}interests/get_interests/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    $('.res-int-content').empty()
      console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                let temp = `<li>${p[i].title}</li>`;
              $('.res-int-content').append(temp)
            }
        }
      }
      else if(data['status'] == 'error') {
        
      }
    })
    .catch(err => {console.log(err)})
}
function getEducation() {
    let url = `${base_url}education/get_education/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    $('.res-edu-content').empty()
      console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                s_date = new Date(p[i].start_date).toLocaleDateString();
                e_date = new Date(p[i].end_date).toLocaleDateString();
                let temp = `<div class="res-pro">
                <div class="w-flex w-flex-between w-align-center">
                  <div class="w-bold-x">${p[i].institution}</div>
                  <div>${s_date} - ${e_date}</div>
                </div>
                <p class="w-padding-left">${p[i].qualification} - ${p[i].grade}</p>
              </div>`;
              $('.res-edu-content').append(temp)
            }
        }
      }
      else if(data['status'] == 'error') {
        
      }
    })
    .catch(err => {console.log(err)})
}
function setPage() {
    $('body').css({
        'width': '230mm',
        'background': 'rgb(204,204,204)',
        'margin': '0 auto',
        'font-size': '12pt',
        'font-family': 'Times New Roman',
        'height': '100%',
        'padding': '0',
        'max-width': 'auto',
        'overflow-x': 'auto'
    })
}
setPage()
getResumeProjects();
getEducation();
getProfile();
getSkills();
getInterests()