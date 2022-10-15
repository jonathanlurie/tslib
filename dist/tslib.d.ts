declare type someClassOptionsType = {
    firstname?: string;
    lastname?: string;
};
/**
 * A demo class
 */
declare class SomeClass {
    private fullName;
    constructor(options?: someClassOptionsType);
    getFullName(): string;
}

export { SomeClass, someClassOptionsType };
