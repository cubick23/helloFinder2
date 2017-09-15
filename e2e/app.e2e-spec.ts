import { HelloFinder2Page } from './app.po';

describe('hello-finder2 App', () => {
  let page: HelloFinder2Page;

  beforeEach(() => {
    page = new HelloFinder2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
