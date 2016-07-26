//test.spec.js

describe('Protractor Test', function() {
  var addField = element(by.css('[placeholder="add new todo here"]'));
  var checkedBox = element(by.model('todo.done'));
  var addButton = element(by.css('[value="add"]'));

  it('should navigate to the AngularJS homepage', function() {
    browser.get('https://angularjs.org/'); //overrides baseURL
  });

  it('should show a search field', function() {
    browser.sleep(5000); //used just to give you enough time to scroll to todo section
    addField.isDisplayed();
  });

  it('should let you add a new task ', function() {
    addField.sendKeys('New Task');
    addButton.click();
    browser.sleep(5000); //used just to see the task list update
  });
});
