import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((categorie,index)=>(
                        <GifGrid key={index} category={categorie}/>
                    ))
                }
            </ol>
        </div>
    )
}
