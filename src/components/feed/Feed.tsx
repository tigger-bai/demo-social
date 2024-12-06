import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import Post from "./Post";
import { Post as PrismaPost, User } from "@prisma/client";


type PostWithRelations = PrismaPost & {
  user: User;
  likes: { userId: string }[];
  _count: { comments: number };
};
type PostProps = {
  post: PostWithRelations;
};
const Feed = async ({ username }: { username?: string }) => {
  const { userId } = await auth();

  let posts: PostWithRelations[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: { user: { username } },
      include: {
        user: true,
        likes: { select: { userId: true } },
        _count: { select: { comments: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  } else if (userId) {
    const following = await prisma.follower.findMany({
      where: { followerId: userId },
      select: { followingId: true },
    });

    const ids = [userId, ...following.map((f) => f.followingId)];

    posts = await prisma.post.findMany({
      where: { userId: { in: ids } },
      include: {
        user: true,
        likes: { select: { userId: true } },
        _count: { select: { comments: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        "No posts found!"
      )}
    </div>
  );
};

export default Feed;
