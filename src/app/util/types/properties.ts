type Omit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P]; };

export type MethodKeys<T> = { [P in keyof T]: T[P] extends (...args) => any ? P : never }[keyof T];

export type Methods<T> = Pick<T, MethodKeys<T>>;

export type PropertiesKeys<T> = Exclude<keyof T, MethodKeys<T>>;

export type Properties<T> = Omit<T, MethodKeys<T>>;
