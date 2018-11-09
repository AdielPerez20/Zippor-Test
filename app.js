const axios = require('axios')

axios
  .post(
    'http://tests.zippormedia.com/backstage/oauth/token?client_id=adiel_peretz&client_secret=6m4o534mk6hm5d2hovyw4964793m4m34ij&grant_type=client_credentials',
    {
      headers: { "content-type": "application/x-www-form-urlencoded"}
    }
  )

  .then(res =>{
    console.log(res);
  })
  .catch(error => {
  console.log(error);
  })
