class WikipediaService {

  constructor($http) {
    this.$http = $http;
  }

  getItems(wikipediaUsername) {
    var wikipediaUrl = 'https://api.wikipedia.com';
    return this.$http({
      method: 'JSONP',
      url: wikipediaUrl + '/users/' +
      wikipediaUsername + '?callback=JSON_CALLBACK'
    }).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      return data.data.toJSON();
    }).
    error(function(data, status) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });
  }

}

export default WikipediaService;
