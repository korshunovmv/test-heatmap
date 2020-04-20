import {
    remove as _remove,
    curry  as _curry,
    flatten as _flatten
} from 'lodash';

/**
 * @desc Constructor doesnt support nested and massive fields. Thats why there is a need of this parser
 * @example we get such fields form constructor
 * fields: [
 *  {name: 'Cutomer1_name', ...},
 *  {name: 'Cutomer1_lastname', ...},
 *  {name: 'Cutomer2_name', ...},
 *  ...
 * ]
 */

/**
* @desc compare name of field with a list of necessary fields
* @param {string[]} fieldsArr - list of necessary fields
* @param {any} field - exact field
* @returns {boolean} - field exists in the list
 */
const compare = _curry((fieldsArr, field): boolean => fieldsArr.includes(field.name));
/**
* @desc compare prefix of name of field with a necessary prefix
* @param {string} prefix - prefix
* @param {any} field - exact field
* @returns {boolean} - field has prefix
 */
const isPrefixed = _curry((prefix, field): boolean => field.name.indexOf(prefix) === 0);
/**
* @desc parse array of fields to form array of group of fields
* @param {string} prefix - prefix
* @param {any[]} reducedArray - array of grouped fields
* @param {any} field - exact field
* @returns {any[]} - array of grouped fields
 */
const parser = _curry((prefix, reducedArray, field) => {
    /**
     * get index of current item, all massive fields must have index in their name
     */
    const index = parseInt(field.name.slice(prefix.length + 2), 10);
    /**
     * get name of field without its prefix and index
     */
    const fieldName = field.name.slice((prefix + '__' + index + '__').length);

    if (!reducedArray[index - 1]) {
        reducedArray[index - 1] = {};
    }
    /**
     * deal different fields to different items of array
     */
    reducedArray[index - 1][fieldName] = field.value;

    return reducedArray;
});

/**
* @desc group fields by known names of fields. All pointed fields will be removed from source array! The function has
* been curried.
* @param {any[]} fields - array of fields from constructor
* @param {string[]} fieldNames - array of names of known fields to be grouped
* @returns {any} - object with target fields
 */
const group = _curry((fields: any[], fieldNames: string[]): any =>
    _remove(fields, compare(fieldNames)).reduce((obj, field) => {
        obj[field.name] = field.value;

        return obj;
    }, {})
);

/**
* @desc group fields by known prefix of names of fields. All compared fields will be removed from source array! The
* function has been curried.
* @param {any[]} fields - array of fields from constructor
* @param {string[]} prefix - prefix of name which all target fields have
* @returns {any[]} - array of grouped fields
 */
const parse = _curry((fields: any[], prefix: string) => _remove(fields, isPrefixed(prefix)).reduce(parser(prefix), []));

/**
* @desc flatten array of grouped fields to send them to backend
* @param {any[]} groups - array of grouped field
* @param {string[]} prefix - prefix of name which all target fields have
* @returns {any} - object with all ungrouped fields as props
 */
const flatenn = (groups: any[], prefix: string) =>
    groups.reduce((groupedFields, fields, index) =>
        Object.keys(fields).reduce((acc, name) => {
            acc[`${prefix}__${index + 1}__${name}`] = fields[name];

            return acc;
        }, groupedFields), {});

export {
    group,
    parse,
    flatenn,
};
