import React from "react";
import ListItem from "../ListItem/index";

// items hard-coded for now
const items = [1, 2, 3, 4];

export const mappedItems = items.map((item) => {
    return <ListItem> List Item{item} </ListItem>;
});
