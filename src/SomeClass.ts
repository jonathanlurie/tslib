// This type is going to be exported (see import in index.ts)
export type someClassOptionsType = {
  firstname?: string;
  lastname?: string;
};

/**
 * A demo class
 */
export default class SomeClass {
  private fullName: string;

  constructor(options: someClassOptionsType = {}) {
    this.fullName = `${options.firstname ?? "John"} ${
      options.lastname ?? "Doe"
    }`;
  }

  getFullName(): string {
    return this.fullName;
  }
}
