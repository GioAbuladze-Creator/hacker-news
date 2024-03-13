export interface Item {
    id: number;
    title: string;
    points: number;
    user: string;
    time: number;
    time_ago: string;
    type: string;
    url: string;
    domain: string;
    comments_count:number;
    comments?:Item[]
    text?:string,
    content?:string,
    
}