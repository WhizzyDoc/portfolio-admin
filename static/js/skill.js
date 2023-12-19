function getSkills() {
    let url = `${base_url}skills/get_skills/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    $('.skill-tab').empty()
      console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                let temp = `<tr>
                <td>${p[i].title}</td>
                <td>${p[i].description}</td>
                <td>
                    <a class="w-large edit-skill"><i class="fa fa-edit w-text-blue"></i></a>&nbsp;&nbsp;&nbsp;
                    <a class="w-large del-skill"><i class="fa fa-trash w-text-red"></i></a>
                </td>
                </tr>`;
              $('.skill-tab').append(temp)
            }
        }
        else {
            let temp = `<tr>
                <td colspan="3">No skills added</td>
                </tr>`;
              $('.skill-tab').append(temp)
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
    $('.interest-tab').empty()
      console.log(data);
      if(data['status'] == 'success') {
        if(data.data) {
            let p = data.data;
            for(let i in p) {
                let temp = `<tr>
                <td>${p[i].title}</td>
                <td>
                    <a class="w-large edit-int"><i class="fa fa-edit w-text-blue"></i></a>&nbsp;&nbsp;&nbsp;
                    <a class="w-large del-int"><i class="fa fa-trash w-text-red"></i></a>
                </td>
                </tr>`;
              $('.interest-tab').append(temp)
            }
        }
        else {
            let temp = `<tr>
                <td colspan="3">No interests added</td>
                </tr>`;
              $('.interest-tab').append(temp)
        }
      }
      else if(data['status'] == 'error') {
        
      }
    })
    .catch(err => {console.log(err)})
}

getSkills();
getInterests();