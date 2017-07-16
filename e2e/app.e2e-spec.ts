import { ElectronNodeMusicPlayerPage } from './app.po';

describe('electron-node-music-player App', () => {
  let page: ElectronNodeMusicPlayerPage;

  beforeEach(() => {
    page = new ElectronNodeMusicPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
