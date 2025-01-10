import './style.css'
import { Artist } from './types';

const rooturl = "http://ws.audioscrobbler.com/2.0/";
const key = "48cf6b86b3381d563b42def2fdf8e870";

const getTopArtists = async (): Promise<Artist[]> => {
  const response = await fetch(`${rooturl}/?method=chart.gettopartists&api_key=${key}&format=json`);
  const data = await response.json();

  return data as Artist[];
}

console.log(await getTopArtists());

const getTopArtistsByCountry = async (country: string): Promise<Artist[]> => {
  const response = await fetch(`${rooturl}/?method=geo.gettopartists&country=${country}&api_key=${key}&format=json`);
  const data = await response.json();

  return data as Artist[];
}

console.log(await getTopArtistsByCountry("Sweden"));
console.log(`${rooturl}/?method=geo.gettopartists&country=Sweden&api_key=${key}&format=json`);