export interface Pokemon {
    id: string;
    number: string;
    name: string;
    weight: {
      minimum: string;
      maximum: string;
    };
    height: {
      minimum: string;
      maximum: string;
    };
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
    evolutions?: Evolution[];
  }

  export interface Attack {
    name: string;
    type: string;
    damage: number; 
  }
  
  export interface Attacks {
    fast: Attack[];
    special: Attack[];
  }
  export interface Evolution {
    id: string;
    number: string;
    name: string;
    classification: string;
    image: string;
  }
  