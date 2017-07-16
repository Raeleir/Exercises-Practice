export function pickName(name) {
    console.log("pickName Parameter", name);
    return {
        type: "PICK_NAME",
        name
    }
}