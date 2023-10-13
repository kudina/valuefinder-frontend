const Index =(props)=>{
    
    return(
        <div className='mt-3'>
    <label className='text-[12px]'>{props.label}</label>
    <select 
    
    onChange={props.onChange}
     className=" text-textInputborderColor w-full mt-1 p-3  mr-2  rounded-[5px]  h-[50px] focus:outline-none focus:border-gray-400 focus:ring-0">
        {props.options?.map((i)=>{
            return(
              <option  value={i.value}>{i.title}</option>
            )
        })}
    
    
    </select>
</div>
    )
}

export default Index