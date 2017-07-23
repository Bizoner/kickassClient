import { FinalAppPage } from './app.po';

describe('final-app App', () => {
  let page: FinalAppPage;

  beforeEach(() => {
    page = new FinalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
