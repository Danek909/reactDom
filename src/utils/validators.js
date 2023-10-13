 export const required = value =>{
    if (value) return undefined;
    return "Field is required";
}

export const maxLenghtCreator = (MaxLenght) => (value) =>{
    if (value.lenght > MaxLenght) return `Max lenght is ${MaxLenght} symbol`;
    return undefined;
}