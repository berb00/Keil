
  export interface Keil {
    readonly $el: Element;
    
    add(): void;
  }

  export interface KeilConstructor<K extends Keil = Keil> {
    // new <
    //     Data = object,
    //     PropNames extends string = never>
    //     (options?: ThisTypedComponentOptionsWithArrayProps<K>)
    //     : CombinedKeilInstance<K>
    //     ;

    new (x: number, y: number): KeilConstructor;

    add(a: number, b: number): KeilConstructor;

    version: string;
  }
  
  export const Keil: KeilConstructor;
  