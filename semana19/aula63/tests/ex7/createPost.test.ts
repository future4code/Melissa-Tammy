import { PostDatabase } from '../../src/data/PostDatabase'

test("Create Post", async () => {
    const postDatabase = new PostDatabase
    try {
      const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
      };
  
      await postDatabase.createPost(post.id, post.title, post.content);
      await postDatabase.createPost(post.id, post.title, post.content);
    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });
