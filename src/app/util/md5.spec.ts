

import {md5} from './md5';

describe('Тест MD5',
    () => {
        it('Test 1 - first random string',
            () => expect(md5('ldg=mappmethod=product.getCitiesproduct=cards6ec3c5ec042ca6a7e2924ea67ed8306d'))
                .toBe('3ebac9ff2bf762b13e64f2843e30fdb9'));

        it('Test 2- first random string',
            () => expect(md5('ldg=asda=productasdas.getCitiesproduct=cards6ec3c5ec042ca6a7e2924ea67ed8306d'))
                .toBe('12d728683c8ba5f78b9abe62c9790c31'));

        it('Test 3 - first random string',
            () => expect(md5('test'))
                .toBe('098f6bcd4621d373cade4e832627b4f6'));

    }
);
