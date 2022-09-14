import {FormEvent, useEffect, useState} from "react";

// export const AddCategory = ({setCategories} : any) => {
export const AddCategory = ({onAddCategory} : { onAddCategory: (value: string) => void }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (value: string) => {
        setInputValue(value);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue);
        //Si pasamos las categorías
        // setCategories(categories => [inputValue, ...categories]);
    }

    // useEffect((() =>
    //     console.log(inputValue)), [inputValue]
    // )

    return (
        <form onSubmit={onSubmit}>
        {/*<form onSubmit={ (event) => onSubmit(event)}>*/}
            <input
                type='text'
                placeholder='buscar gifs'
                value={inputValue}
                onChange={event => onInputChange(event.target.value)}
            />
        </form>
    )
}