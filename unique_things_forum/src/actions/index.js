export function genItem(item){
    return {
        type: "GEN_ITEM",
        item
    }
}

export function delItem(index){
    return {
        type: "DEL_ITEM",
        index
    }
}

export function edit(item, index){
    return {
        type: "EDIT",
        item,
        index
    }
}