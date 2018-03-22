import { SnowTestPage } from './app.po';

describe('snow-test App', function() {
  let page: SnowTestPage;

  beforeEach(() => {
    page = new SnowTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
