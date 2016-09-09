class WikipediaController {

  constructor(wikipediaService) {
    this.result = {};
    this.service = wikipediaService;
  }

  getDetails() {
    this.service.getItems(this.wikipediaUsername).then((res) => {
      this.result = res.data;
    });
  }

}

export default WikipediaController;
