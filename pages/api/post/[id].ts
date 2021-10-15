import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const postId = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not suppoerted at this route.`
    );
  }
}
