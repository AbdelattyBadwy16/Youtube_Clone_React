import { useState } from "react";
import ListItem from "./ListItem";
import { categories } from "../utils/category";

function NavBar({setSelctedCat,selectedCat}) {
    const categoriesList = categories;

    return (
        <div className="bg-gray-900 text-white border-t-2 border-r-2 border-gray-600">
            <ul>
                {
                    categoriesList.map((item) => <ListItem item={item} key={item.name} setSelctedCat={setSelctedCat} selectedCat={selectedCat}></ListItem>)
                }
            </ul>
        </div>
    )
}

export default NavBar
