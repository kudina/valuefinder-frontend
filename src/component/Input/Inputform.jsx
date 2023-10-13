const Index = (props)=>{
    return(
    <>
        <label className='text-[12px] '>{props.label}</label>
           <input 
           value={props.value}
             onChange={props.onChange}
             placeholder={props.placeholder}
             type={props.type}
             disabled={props.disabled}
             className=" w-full mt-2 p-4  mr-2   rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0"
     />
    </>
    )
}

export default Index