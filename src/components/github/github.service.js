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
    }).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      return angular.toJson(data.data);
    }).
    error(function(data, status) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });
  }

  static githubService($http){
    return new GithubService($http);
  }
}

export default GithubService;
