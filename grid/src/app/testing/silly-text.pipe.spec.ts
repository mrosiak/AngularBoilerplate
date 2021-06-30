import { SillyTextPipe } from '../common/silly-text.pipe';

describe('SillyTextPipe', () => {
  it('create an instance', () => {
    const pipe = new SillyTextPipe();
    expect(pipe).toBeTruthy();
  });
  it('create silly text', () => {
    const pipe = new SillyTextPipe();
    var result = pipe.transform('silyText');
    expect(result).toBe('sIlYtExT');
  });
});
