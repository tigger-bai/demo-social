import Image from "next/image"
import Comments from "./Comments";

const Post=()=>{
    return(
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image 
                        src="https://images.pexels.com/photos/27853697/pexels-photo-27853697.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        width={40}
                        height={40} 
                        alt="" 
                        className="w-10 h-10 rounded-full"
                    />
                </div>
                <span className="font-medium">Tigger Bai</span>
                  <Image 
                        src="/more.png"
                        width={16}
                        height={16} 
                        alt="" 
                    />          
            </div>
                           
             {/* DESC */}
             <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image 
                        src="https://images.pexels.com/photos/29155251/pexels-photo-29155251.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
                        fill 
                        className="object-cover rounded-md" 
                        alt=""
                    />
                </div>
                <p>The most profound moments come not from the hustle and bustle of everyday life, 
                    but from the quiet spaces where time seems to slow down. Standing here, 
                    in the presence of natures vast beauty, I am reminded of how small we are, a
                    nd yet how deeply connected we are to the world around us. 
                </p>
             </div>

              {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/like.png" 
                        width={16}
                        height={16}
                        alt=""
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        123<span className="hidden md:inline">Likes</span>
                    </span>

                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image 
                        src="/comment.png" 
                        width={16}
                        height={16}
                        alt=""
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        123<span className="hidden md:inline"> Comments</span>
                    </span>

                    </div>
                    
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <Image 
                        src="/share.png" 
                        width={16}
                        height={16}
                        alt=""
                        className="cursor-pointer"
                    />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                        123<span className="hidden md:inline"> Shares</span>
                    </span>

                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    );
};

export default Post