export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GDOmQn1SZURK242JuZ1Z50FqCerWHYDw`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(({id,title,images})=>{
        const {downsized_medium} = images,
            url = downsized_medium.url;
        return {
            id,
            title,
            url
        }
    });

    return gifs;
}