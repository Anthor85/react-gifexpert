import React, {useState} from 'react';
// import {AddCategory} from "./components/AddCategory";
// import {GifGrid} from "./components/GifGrid";
// import {getGifs} from "./helpers/getGifs";
import {GifGrid, AddCategory} from './components';

export const GifExpertApp = () => {

    // const [numero, setNumero] = useState(0);
    const [categories, setCategories] = useState<Array<string>>([]);
    // const [categories, setCategories] = useState([ 'Un puñetazo', 'Una patada' ]);

    const onAddCategory = (value: string) => {
        if (categories.includes(value)) return;

        setCategories([...categories, value]);
        // setCategories([...categories, 'inserción ' + numero])
        // setNumero(numero + 1);
    }

    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*input*/}
            {/*<AddCategory setCategories={setCategories} />*/}
            <AddCategory onAddCategory={onAddCategory} />
            {/*listado de gif*/}
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
            {/*<ol>*/}
                {/*No hay que usar el índice que facilita la función map*/}
                {/*{ categories.map(category => <li key={category}>{category}</li>)}*/}
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                        // <div key={category}>
                        //     <li>{ category }</li>
                        // </div>
                    ))
                }
            {/*</ol>*/}
            {/*gif item*/}
        </>
    )
}