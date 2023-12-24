
var base_url2 = `https://riganapi.pythonanywhere.com/api/v2/`
var admin = [
    // For site API
    {
        title: "Get Author Information",
        value: "get_author_info",
        method: "GET",
        url: `${base_url2}author/get_profile/?api_token={api_key}`,
        request: `
        const url = "${base_url2}author/get_profile/?api_token={api_key}"
        
        fetch(url)
        .then(res => {return res.json()})
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
        `,
        success_response: `
        {
          "status": "success",
          "message": "data fetched successfully",
          "data": {
          "id": 1,
          "user": {
            "id": 3,
            "username": "WhizzyDoc",
            "email": "hassanridwan2536@gmail.com",
            "first_name": "Eniola",
            "last_name": "Hassan",
            "is_superuser": false
          },
          "first_name": "Eniola",
          "last_name": "Hassan",
          "email": "hassanridwan2536@gmail.com",
          "phone_number": "07011978058",
          "site_title": "WhizzyPort",
          "work_description": "A backend Engineer for Web, Desktop and Mobile Application as well As Hardware Inegrations.",
          "intro": "Hi, I'm Hassan",
          "dob": "2001-04-22",
          "github": "https://github.com/WhizzyDoc/",
          "linkedin": "https://linkedin.com",
          "twitter": "https://x.com/",
          "facebook": "https://web.facebook.com/",
          "instagram": "https://instagram.com/",
          "bio": "A backend Engineer for Web, Desktop and Mobile Application",
          "api_token": "c8ghjdkk5tosrtmvbyhpcexeiook5x2gq5gd87ckobhj0jikvtkwh3g2t5xa",
          "image": "/media/portfolio/author/images/avatar-2_8zvDGyk.jpg",
          "site_logo": null,
          "address": "Harmony Villa, GT Junction, Oke Ose, Ilorin, Kwara State"
        }`,
        error_response: `
        {
          "status": "error",
          "message": "invalid API token"
        }`
    },
  /* =========================== Projects ========================= */
  {
    title: "Get Projects",
    value: "get_projects",
    method: "GET",
    url: `${base_url2}projects/get_projects/?api_token={api_key}`,
    request: `
    const url = '${base_url2}projects/get_projects/?api_token={api_key}';
    
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "title": "Rigan API",
              "category": {
                  "id": 3,
                  "title": "API"
              },
              "database": {
                  "id": 3,
                  "title": "MongoDB"
              },
              "frameworks": [
                  {
                      "id": 1,
                      "title": "Django"
                  },
                  {
                      "id": 2,
                      "title": "Restful API"
                  },
                  {
                      "id": 8,
                      "title": "Vanilla JS"
                  }
              ],
              "description": "<p>An API Hub</p>",
              "image": null,
              "short_description": "A Platform that provides various API integrations",
              "live_url": "https://riganapi.pythonanywhere.com/",
              "github_url": "https://github.com/riganapi",
              "views": 2,
              "created": "2023-12-18T07:12:47Z"
          }
      ],
      "message": "project list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
  }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "no project found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 0,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting project list"
        }`,
  },
  {
    title: "Get Specific Project",
    value: "get_project",
    method: "GET",
    url: `${base_url2}projects/get_project/?project_id={id_of_project}&api_token={api_key}`,
    request: `
    const url = '${base_url2}projects/get_project/?project_id={id_of_project}&api_token={api_key}';
    
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})`,
    success_response: `{
      "status": "success",
      "data": {
          "id": 1,
          "title": "Rigan API",
          "category": {
              "id": 3,
              "title": "API"
          },
          "database": {
              "id": 3,
              "title": "MongoDB"
          },
          "frameworks": [
              {
                  "id": 1,
                  "title": "Django"
              },
              {
                  "id": 2,
                  "title": "Restful API"
              },
              {
                  "id": 8,
                  "title": "Vanilla JS"
              }
          ],
          "description": "<p>An API Hub</p>",
          "image": null,
          "short_description": "A Platform that provides various API integrations",
          "live_url": "https://riganapi.pythonanywhere.com/",
          "github_url": "https://github.com/riganapi",
          "views": 2,
          "created": "2023-12-18T07:12:47Z"
      },
      "message": "project details retrieved"
  }`,
    error_response: `
    // error due to
        {
          "status": "success",
          "message": "Invalid project ID or API Token"
        }`,
  },
  // template
  {
    title: "",
    value: "",
    method: "",
    url: `${base_url2}`,
    request: `
    const url = "${base_url2}";
    `,
    success_response: ``,
    error_response: ``,
  },
]



function loadApi() {
  var x = admin
  $('.api-main').empty();
  for (var i in x) {
      var temp = `
      <section id="${x[i].value}" class="w-card w-padding">
          <h3 class="w-bold-xx mt-3">${x[i].title}</h3>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>Method</td>
                  <td>${x[i].method}</td>
                </tr>
                <tr>
                  <td>URL</td>
                  <td>${x[i].url}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section>
              <div class="code-header">
                  <div>Request</div>
                  <select class="lang-sel">
                      <option selected value="axios">Fetch</option>
                  </select>
              </div>
<pre aria-hidden="true">
<code class="language-javascript highlighting-content axios">
${x[i].request}
</code>
</pre>
</section>
<section>
<div class="code-header">
  <div>Response</div>
  <select class="res-sel">
    <option selected value="success">success</option>
    <option value="error">error</option>
  </select>
</div>            
<pre aria-hidden="true">
<code class="language-javascript highlighting-content success">
${x[i].success_response}
</code>
<code class="language-javascript highlighting-content error">
${x[i].error_response}
</code>
</pre>
</section>

</section>
      `;
      $('.api-main').append(temp);
  }
  $('.res-sel').on('change', function() {
    $(this).parent('.code-header').siblings('pre').children('code').hide();
    var val = $(this).val();
    val = '.' + val;
    //alert(val)
    $(this).parent('.code-header').siblings('pre').children(val).show();
})
$('.lang-sel').on('change', function() {
  $(this).parent('.code-header').siblings('pre').children('code').hide();
  var val = $(this).val();
  val = '.' + val;
  //alert(val)
  $(this).parent('.code-header').siblings('pre').children(val).show();
})
}

loadApi();