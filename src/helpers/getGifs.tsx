const limit = 5;
const apiKey = 'TRbTkm4AUCMLtwreKhibqWil78AT5lAn';

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( ({id, images, title}: {id: string, images: {downsized_medium: { url: string }}, title: string}) => ({ //Se puede usar interfaz
        id: id,
        url: images.downsized_medium.url,
        title: title,
    }));

    return gifs;
}