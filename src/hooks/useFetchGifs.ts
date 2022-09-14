import {getGifs} from "../helpers/getGifs";
import {useEffect, useState} from "react";

export const useFetchGifs = (category: string) => {

    const [gifs, setGifs] = useState<Array<{ id: string, url: string, title: string }>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async () => {
        setGifs(await getGifs(category));
        setIsLoading(false);
    }

    // const gifs = [1,2,3,4,5]
    useEffect(() => {
        getImages();
    }, []);

    return {
        gifs,
        isLoading,
    } as {gifs: Array<any>, isLoading: boolean}
}