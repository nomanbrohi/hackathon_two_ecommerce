interface propTypes{
    name:string
    classname?: string
}

const Btn = (props:propTypes) =>{
    const {name, classname} = props;
    return(
        <button className={`w-[210px] h-[52px] bg-black rounded-full ${classname}`}>{name}</button>
    )
}

export default Btn