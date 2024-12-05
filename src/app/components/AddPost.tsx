
import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const AddPost =  async () => {
    const authObject = await auth(); 
    const userId = authObject.userId; 
    console.log(userId);

    const testAction = async (formData: FormData) => {
        "use server"

        if(!userId) return;
        const desc = formData.get("desc") as string;

        try {
            const res= await prisma.post.create({
                data: {
                    userId: userId,
                    desc: desc,
                },
            });
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* AVATAR */}
            <Image
                src="https://images.pexels.com/photos/29087206/pexels-photo-29087206.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                width={48}
                height={48}
                alt=""
                className="w-12 h-12 object-cover rounded-full"
            />
            {/* POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <form action={testAction} className="flex gap-4">
                    <textarea
                        placeholder="What's on your mind?"
                        className="bg-slate-100 rounded-lg flex-1 p-2"
                        name="desc"
                        id=""
                    ></textarea>
                    <Image
                        src="/emoji.png"
                        width={20}
                        height={20}
                        alt=""
                        className="w-5 h-5 cursor-pointer self-end"
                    />
                    <button>Send</button>
                </form>
                {/* POST OPTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" width={20} height={20} alt="" />
                        Photo
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" width={20} height={20} alt="" />
                        Video
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" width={20} height={20} alt="" />
                        Poll
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png" width={20} height={20} alt="" />
                        Event
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
