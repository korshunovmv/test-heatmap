import { buildQueryParams } from './build-query-params';

describe('buildQueryParams', () => {

    const testObj1 = {
        asd: 'asd',
        asdd: 'asdd'
    };

    const testResult1 = '?asd=asd&asdd=asdd';

    const testObj2 = {
        asd: 'asd',
        asdd: {
            asd: 'asd',
            asdd: 'asdd'
        }
    };

    const testResult2 = '?asd=asd&asdd[asd]=asd&asdd[asdd]=asdd';

    const testObj3 = {
        key1: 'val1',
        key2: {
            key1: 'val1key2',
            key2: 'val2key2'
        }
    };

    const testResult3 = '?key1=val1&key2[key1]=val1key2&key2[key2]=val2key2';

    it('testObj1 == testResult1', () => {
        expect(buildQueryParams(testObj1)).toBe(testResult1);
    });

    it('testObj2 == testResult2', () => {
        expect(buildQueryParams(testObj2)).toBe(testResult2);
    });

    it('testObj3 == testResult3', () => {
        expect(buildQueryParams(testObj3)).toBe(testResult3);
    });
});
