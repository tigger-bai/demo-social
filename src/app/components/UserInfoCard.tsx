import Image from "next/image";
import Link from "next/link";

const UserInfoCard=({userId}:{userId:string})=>{
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href="/" className="text-blue-500 text-xs">
                See all
                </Link>
            </div>
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">James Lin</span>
                    <span className="text-sm">@jonathan</span>
                </div>
                <p>
                    The most profound moments come not from the hustle and bustle of everyday life, 
                    but from the quiet spaces where time seems to slow down. Standing here.
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png"alt="" width={16}height={16}/>
                    <span>Liveing in <b>Taipei</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png"alt="" width={16}height={16}/>
                    <span> Went to <b>Southern University of Science and Technology</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png"alt="" width={16}height={16}/>
                    <span>Works at  <b>Microsoft Inc.</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png"alt="" width={16}height={16}/>
                        <Link href="https://tigger.dev"className=" text-blue-500 font-medium">
                        Tigger.dev
                        </Link>
                    </div>
                    <div className="flex gap-1 items-center">
                    <Image src="/date.png"alt="" width={16}height={16}/>
                    <span>Joined November 2024</span>

                    </div>
                </div>
                <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    );
};

export default UserInfoCard