import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion"

export default function Card({data,reference}) {
    return (
        <>
            <motion.div drag dragTransition={{bounceStiffness:100,bounceDamping:10}} dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden">
                <FaRegFileAlt />
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.title}</p>
                <div className="footer absolute bottom-0 w-full left-0">
                    <div className='flex items-center px-8 justify-between mb-1 py-3'> <h5>{data.fileSize}</h5> <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>{data.close ? <SlClose size=".9em" color='#fff'/> : <MdOutlineFileDownload size=".9em" color='#fff' />  }</span> </div>
                    {data.tag.isOpen && ( <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`} >
                        <h4 className='text-sm font-semibold'>{data.tag.tagTitle}</h4>
                    </div>)}      
                </div>
            </motion.div>
        </>
    )
}
