import Image from "next/image"

const Comments=()=>{
    return(
        <div className="">
<<<<<<< HEAD
            
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/29342832/pexels-photo-29342832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" 
                width={32}
                height={32} 
                className="w-8 h-8 rounded-full"
                />
                
            <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" 
                placeholder="Write a comment..." 
                className="bg-transparent outline-none flex-1"
                />
                <Image 
                src="/emoji.png"
                alt="" 
                width={16}
                height={16} 
                className="cursor-pointer"
                />
            </div>
            </div>
             {/* COMMENTS */}
             <div className="">
                {/* COMMENT */}
                <div className="flex gap-4 justify-between mt-6">
                    {/* AVATAR */}
                    <Image 
                        src="https://images.pexels.com/photos/16191748/pexels-photo-16191748.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="" 
                        width={40}
                        height={40} 
                        className="w-10 h-10 rounded-full"
                    />
                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Eric Tsai</span>
                        <p>
                        Standing here, 
                        in the presence of natures vast beauty, I am reminded of how small we are, a
                        nd yet how deeply connected we are to the world around us.
                        </p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                            <Image 
                        src="/like.png" 
                        alt=""
                        width={12}
                        height={12} 
                        className="cursor-pointer w-4 h-4"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">
                                Reply
                            </div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image 
                        src="/more.png" 
                        alt=""
                        width={16}
                        height={16} 
                        className="cursor-pointer w-4 h-4"
                    />
                </div>
             </div>
                
                
=======
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
>>>>>>> c0295b76aaeabaa8ed10e8d57d7a139439c3d141
        </div>
    )
}

export default Comments