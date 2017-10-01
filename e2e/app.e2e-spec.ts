import { VideoBlogPage } from './app.po';

describe('video-blog App', () => {
  let page: VideoBlogPage;

  beforeEach(() => {
    page = new VideoBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
