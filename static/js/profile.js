
function getProfile() {
    let url = `${base_url}author/get_profile/?api_token=${localStorage.api_key}`;
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
        //console.log(data)
        if(data['status'] == 'success') {
            p = data.data
            $('#fname').val(p.first_name)
            $('#lname').val(p.last_name)
            $('#email').val(p.email)
            $('#number').val(p.phone_number)
            $('#address').val(p.address)
            $('#dob').val(p.dob)
            $('#work').val(p.work_description)
            $('#intro').val(p.intro)
            $('#highlight').val(p.qualification_highlight)
            $('#github').val(p.github)
            $('#linkedin').val(p.linkedin)
            $('#twitter').val(p.twitter)
            $('#facebook').val(p.facebook)
            $('#site-name').val(p.site_title)
            $('#instagram').val(p.instagram)
            $('#about-me').val(p.bio)
            $('#api_key').val(p.api_token)
            if(p.image) {
                $('.comp_image').attr('src', `${base_image_url}${p.image}`)
            }
        }
        else if(data['status'] == 'error') {
            swal('Error', data['message'], 'error')
        }
    })
    .catch(err => {console.log(err)})
}
getProfile();


function readFile() {
    let reader = new FileReader();
    let file = document.querySelector('#comp_image_in').files[0];
    reader.onload = function(e) {
        document.querySelector('.comp_image').src = e.target.result;
    }
    reader.readAsDataURL(file);
}
function saveProfile() {
    let url = `${base_url}author/edit_profile/`;

    let fname = $('#fname').val()
    let lname = $('#lname').val()
    let email = $('#email').val()
    let phone = $('#number').val()
    let address = $('#address').val()
    let dob = $('#dob').val()
    let work = $('#work').val()
    let intro = $('#intro').val()
    let highlight = $('#highlight').val()
    let github = $('#github').val()
    let facebook = $('#facebook').val()
    let linkedin = $('#linkedin').val()
    let twitter = $('#twitter').val()
    let insta = $('#instagram').val()
    let site = $('#site-name').val()
    let about = $('#about-me').val()
    let image = $('.comp-im')[0].files[0]
    if(fname.trim() === '' || email.trim() === '' || lname.trim() === '') {
        swal("OOps", "Names or Email cannot be empty", "warning");
        return;
    }
    const formData = new FormData();
    formData.append('api_token', localStorage.api_key);
    formData.append('fname', fname)
    formData.append('lname', lname)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('address', address)
    formData.append('dob', dob)
    formData.append('work', work)
    formData.append('intro', intro)
    formData.append('highlight', highlight)
    formData.append('github', github)
    formData.append('facebook', facebook)
    formData.append('instagram', insta)
    formData.append('site-name', site)
    formData.append('about', about)
    formData.append('linkedin', linkedin)
    formData.append('twitter', twitter)
    if(image) {
        formData.append('image', image)
    }
    $('.comp-btn').html('Saving Profile...').attr('disabled', true)
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'Application/json'
        },
        body: formData
    })
    .then(res => {return res.json()})
    .then(data => {
        //console.log(data);
        if(data['status'] == 'success') {
            swal("Success", data.message, 'success')
            if(data.data.image) {
                localStorage.dp = data.data.image
            }
            getProfile();
        }
        else if(data['status'] == 'error') {
            swal("Error", data.message, 'error')
            getProfile();
        }
        $('.comp-btn').html('Save Profile').attr('disabled', false)
    })
    .catch(err => {
        console.log(err);
        $('.comp-btn').html('Save Profile').attr('disabled', false)
    })
}


function copyText(message) {
    const textArea = document.createElement('textarea');
    textArea.value = message;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea)
    swal('Success', 'copied!', 'success')
}
/*
tinymce.init({
    selector: '.html-text',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Admin',
    mergetags_list: [
        {value: 'First.Name', title: 'First Name'},
        {value: 'Email', title: 'Email'},
    ],
});
*/
