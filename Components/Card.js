



import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, refrence }) {
  return (
    <>
      <motion.div drag  dragConstraints= {refrence} whileDrag = {{scale : 1.2}} dragElastic= {1} className=" relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900 text-white py-10 px-5 overflow-hidden">
        <FaRegFileAlt />

        <p className="mt-5 leading-tight text-sm font-semibold">{data.desc}</p>
        <div className="footer w-full absolute bottom-0 left-0   text-white ">
          <div className="flex justify-between items-center px-8 py-3 mb-3 ">
            <h4>{data.fileSize}</h4>
            <span className="w-6 h-6 rounded-full flex justify-center items-center bg-zinc-500">

              {data.close ? <IoCloseSharp/> :    <MdOutlineFileDownload />}
           
            </span>
          </div>

          {data.tag.isopen ? (  <div className={`tag w-full h-10 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
            <h3 className="text-md font-semibold">{data.tag.tagtitle}</h3>
          </div>) : null
          }
        
        </div>
      </motion.div>
    </>
  );
}

export default Card;
