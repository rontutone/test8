import { Test8Page } from './app.po';

describe('test8 App', function() {
  let page: Test8Page;

  beforeEach(() => {
    page = new Test8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
