

export interface AlbumTemplate{ 
    userId: number;
    id: number;
    title: string;
}

export interface AlbumDataTemplate extends AlbumTemplate{ 
    photosCount: number,
    thumbnailUrl: string
}

export interface AlbumResultsTemplate{
    [index: number]: {
        userId: number;
        id: number;
        title: string;
    },
    length: number
} 

export interface PhotosTemplate{ 
    userId: number;
    id: number;
    title: string;
    length: number;
    thumbnailUrl: string;
}

