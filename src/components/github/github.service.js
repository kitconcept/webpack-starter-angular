class GithubService {

  constructor($http) {
      this.$http = $http;
  }

  getItems(githubUsername) {
    var githubUrl = 'https://api.github.com';
    return this.$http({
      method: 'JSONP',
      url: githubUrl + '/users/' +
      githubUsername + '?callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      return JSON.stringify(data.data, null, 2);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });;
  }

}

export default GithubService;
