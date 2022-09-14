// import {useEffect, useState} from "react";
import {GifItem} from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category} : {category: string}) => {

    // const [gifs, setGifs] = useState<Array<{ id: string, url: string, title: string }>>([]);
    //
    // const getImages = async () => {
    //     setGifs(await getGifs(category));
    // }
    //
    // // const gifs = [1,2,3,4,5]
    // useEffect(() => {
    //     getImages();
    // }, []);

    //Pasamos to-do el código de arriba a un hook
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {isLoading ? (<h2>Cargando...</h2>) : (<div className='card-grid'>
                {gifs.length > 0 && (
                    gifs.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                )}
            </div>)
            }
        </>
    )
}