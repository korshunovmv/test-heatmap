export function buildQueryParams(params: any): string {
    const query = getParams(params);

    return query ? '?' + query : query;
}

function getParams(params: object, parentKey: string = null): string {
    return Object.keys(params)
        .filter(key => !!params[key])
        .map(key => {
            const value = params[key];
            if (value instanceof Object) {
                return getParams(value, key);
            }
            const paramKey = parentKey ? `${parentKey}[${key}]` : key;
            return `${paramKey}=${encodeURIComponent(value)}`;
        })
        .join('&');
}
