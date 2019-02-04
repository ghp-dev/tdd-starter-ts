// import 'mdn-polyfills/String.prototype.padStart';
import {Sut} from './sut';

describe('System under Test', () => {

    let subject: Sut;

    beforeEach(() => {
        subject = new Sut();

    });

    it('should pass', () => {
        expect(true).toBeTruthy();
    });
    // xit('should fail', () => {
    //     expect(false).toBeTruthy();
    // });
    // it('should be possible to use padStart', function () {
    //     expect("123".padStart(10, 'foo')).toEqual('foofoo123');
    // });

});

