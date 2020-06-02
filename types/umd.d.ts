import * as K from "./index";

// Expose some types for backword compatibility...
declare namespace Keil {
  // Keil.d.ts
  export type KeilConstructor<K extends Keil = Keil> = '';

}

declare class Keil extends K.default {}

export = Keil;

export as namespace Keil;
