


import React,{useRef,useState} from 'react'
import Card from './Card'




function Forground() {
    const ref = useRef(null)

let data = [
    {
        desc:" lorem we are so sorry to say that and we all are going for a ",
        fileSize : ".9mb",
        close : true,
        tag: {isopen : true,tagtitle: "Download Now", tagcolor : "green"}
    },
    {
        desc:" lorem we are so sorry to say that and we all are going for a ",
        fileSize : ".9mb",
        close : true,
        tag: {isopen : true,tagtitle: "Download Now", tagcolor : "blue"}
    },
    {
        desc:" lorem we are so sorry to say that and we all are going for a ",
        fileSize : ".9mb",
        close : false,
        tag: {isopen : true,tagtitle: "Upload Now", tagcolor : "green"}
    },
];


  return (
 <>
     <div ref={ref} className='w-full h-screen fixed z-[3] top-0 left-0 flex p-[15px] gap-[10px] flex-wrap'>
    
{data.map((item ,index) => (
    <Card data = {item} refrence = {ref}/>
) )}
       
   
     </div>
     </>
   
  )
}

export default Forground
