// Given Promise-based code:

async function getUserWithPosts(userId) {
  let user;
  let posts;

  try {
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (resUser.ok) {
      user = await resUser.json();
    } else {
      throw new Error("User not found");
    }
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );

    if (resPost.ok) {
      posts = await resPost.json();
    } else {
      throw new Error("Posts not found");
    }
    return { user, posts };
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

getUserWithPosts(3);
