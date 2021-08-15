export interface PhotosTemplate{ 
    userId: number;
    id: number;
    title: string;
    length: number;
    thumbnailUrl: string;
}

export interface PhotosResultsTemplate{
    [index: number]: {
        userId: number;
        id: number;
        title: string;
        length: number;
        thumbnailUrl: string;
    }
} 