import {PostDatabase} from '../../src/data/PostDatabase'

test("Create Post", async () => {
    const postDB = new PostDatabase;
    const post = {
      id: "id do post",
      title: "Título",
      content: "Conteúdo",
    };

    await postDB.createPost(post.id, post.title, post.content);
    const postFromDb = await postDB.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: "id do post",
      title: "Título",
      content: "Conteúdo",
    });
  });