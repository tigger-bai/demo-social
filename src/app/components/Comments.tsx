import Image from "next/image"

const Comments=()=>{
    return(
        <div className="">
            {/* WITTE */}
                <div className="flex items-center gap-4">
                    <Image 
                    src="https://images.pexels.com/photos/28191695/pexels-photo-28191695.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                    width={32}
                    height={32} 
                    className="w-8 h-8 rounded-full"
                    />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text"
                    placeholder="Writea comment..." 
                    className="bg-transparent outline-none flex-1"/>
                    <Image 
                    src="/emoji.png" 
                    alt="" 
                    width={16} 
                    height={16} 
                    className="cursor-pointer"/>
                </div>
                </div>
             {/* COMMENTS */} 
            <div className="">
                             {/* COMMENT */} 
                             <div className="">
                                             {/* AVATAR */} 
                                             <Image 
                    src="https://images.pexels.com/photos/28191695/pexels-photo-28191695.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                    width={40}
                    height={40} 
                    className="w-10 h-10 rounded-full"
                    />                                              {/* DESC */} 
                                              <div className=""></div>
                                              {/* ICON */} 
                                              <div className=""></div>
                                             <Image src="/more.png" alt=""width={16}height={16} className="cursor-pointer w-4 h-4"></Image> 
                             </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Comments