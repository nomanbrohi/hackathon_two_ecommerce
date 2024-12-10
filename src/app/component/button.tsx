interface propTypes{
    name:string
    classname?: string
}

const Btn = (props:propTypes) =>{
    const {name, classname} = props;
    return(
        <button className={`md:w-[210px] w-[360px] h-[52px] text-base bg-black rounded-full  ${classname}`}>{name}</button>
    )
}

export default Btn