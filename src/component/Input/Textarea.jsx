const Index = (props)=>{
    return(
    <>
        <label className='text-[12px]'>{props.label}</label>
           <textarea
           value={props.value}
            disabled={props.disabled}
             onChange={props.onChange}
             placeholder={props.placeholder}
             type={props.type}
             className=" w-full mt-3 p-4  mr-2  rounded-[5px]  h-[100px] focus:outline-none focus:border-gray-400 focus:ring-0"
     />
    </>
    )
}

export default Index