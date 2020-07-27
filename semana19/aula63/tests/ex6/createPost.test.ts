import { PostDatabase } from '../../src/data/PostDatabase'

test("Create Post", async () => {
  const postDB = new PostDatabase;


  afterAll(async () => {
    await postDB.deletePostById("id do post");
    await PostDatabase.destroyConnection();
  });


  const post = {
    id: "1",
    title: "Título",
    content: "Conteúdo",
  };

  await postDB.createPost(post.id, post.title, post.content);
  const postFromDb = await postDB.getPostById(post.id);

  expect(postFromDb).not.toBe(undefined);
  expect(postFromDb).toEqual({
    id: "1",
    title: "Título",
    content: "Conteúdo",
  });
});