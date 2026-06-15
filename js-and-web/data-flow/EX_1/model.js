const posts = [];

export function getPostsList() {
  return posts;
}

export function addPost(post) {
  return posts.push(post);
}

export function removePost(post) {
  const index = posts.findIndex(
    (item) => item.name === post.name && item.post === post.post,
  );

  if (index !== -1) {
    posts.splice(index, 1); 
  }
}
