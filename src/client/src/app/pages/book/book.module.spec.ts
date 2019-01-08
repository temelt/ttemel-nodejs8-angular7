import { BookModule } from './book.module';

describe('AuthorModule', () => {
  let authorModule: BookModule;

  beforeEach(() => {
    authorModule = new BookModule();
  });

  it('should create an instance', () => {
    expect(authorModule).toBeTruthy();
  });
});
