import { SosoAdminUIPage } from './app.po';

describe('soso-admin-ui App', function() {
  let page: SosoAdminUIPage;

  beforeEach(() => {
    page = new SosoAdminUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
