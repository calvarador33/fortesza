export interface Cat {
    id: string;
    name: string;
    description: string;
    origin: string;
    life_span: string;
    affection_level:number;
    adaptability: number;
    child_friendly:number;
    dog_friendly: number;
    energy_level:number;
    grooming:number;
    health_issues:number;
    intelligence:number;
    shedding_level:number;
    social_needs:number;
    stranger_friendly:number;
    vocalisation:number;
    wikipedia_url:string;
    image?: {
        url: string;
    }
}