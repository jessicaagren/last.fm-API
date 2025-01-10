export type Root = {
    topartists: {
      artist: Artist[]
      attr: Attr;
    }
  }
  

export type Artist = {
    name: string;
    playcount: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: string;
    image: Array<{
      "#text": string
      size: string
    }>
  }
  
  export type Attr = {
        country: string;
        page: string;
        perPage: string;
        totalPages: string;
        total: string;
      }