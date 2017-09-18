var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

//return a single user object that matches username parameter
function getProfile(username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(function (user) {
      return user.data;
    });
}

//takes username, returns 100 repos for that user 'https://api.github.com/users/Costle784/repos?client_id=YOUR_CLIENT_ID&client_secret=YOUR_SECRET_ID&per_page=100'
function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}

function getStarCount(repos) {
  return repos.data.reduce() 
}


module.exports = {
  battle: function(players) {

  },
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
    })
  }
}
