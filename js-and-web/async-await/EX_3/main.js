// Given Promise-based code:

async function getCombinedData() {
  let user;
  let posts;
  let comment;

  try {
    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (resUser.ok) {
      user = await resUser.json();
    } else {
      throw new Error("User not found");
    }

    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (resPost.ok) {
      posts = await resPost.json();
    } else {
      throw new Error("Posts not found");
    }

    const resComments = await fetch(
      `https://jsonplaceholder.typicode.com/comments`,
    );

    if (resComments.ok) {
      comments = await resComments.json();
    } else {
      throw new Error("Comments not found");
    }
    return { user, posts, comments };
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

function getUserNameById(users, id) {
  const user = users.find((u) => u.id === id);
  return user ? user.name : null;
}

async function getUserPost(posts, userId) {
  const userPosts = await posts.filter((post) => post.userId === userId);
  const postIds = await userPosts.map((post) => post.id);

  return {
    totalPosts: userPosts.length,
    postIds,
  };
}

function countCommentsForUser(userId, posts, comments) {
  // Step 1: get all post IDs that belong to this user
  const userPostIds = posts
    .filter((post) => post.userId === userId)
    .map((post) => post.id);

  // Step 2: count comments whose postId is in that list
  const totalComments = comments.filter((comment) =>
    userPostIds.includes(comment.postId),
  ).length;

  return totalComments;
}

function getUserWithMostPosts(posts) {
  const counts = {};
  const postsByUser = {};

  // Count posts and group posts by userId
  for (const post of posts) {
    const uid = post.userId;

    counts[uid] = (counts[uid] || 0) + 1;

    if (!postsByUser[uid]) postsByUser[uid] = [];
    postsByUser[uid].push(post);
  }

  // Find user with the most posts
  let maxUserId = null;
  let maxCount = 0;

  for (const uid in counts) {
    if (counts[uid] > maxCount) {
      maxCount = counts[uid];
      maxUserId = Number(uid);
    }
  }

  return {
    userId: maxUserId,
    totalPosts: maxCount,
    posts: postsByUser[maxUserId],
  };
}

function getNumOfCommentsPerPosts(commentArr, postIdArr) {
  let count = 0;
  for (postId of postIdArr) {
    const post = commentArr.filter((u) => u.postId === postId.id);
    count += post.length;
  }
  return count;
}

async function getProcessedData() {
  let data = await getCombinedData();
  let totalUsers = data.user.length;
  let totalPosts = data.posts.length;
  let totalComments = data.comments.length;
  let averagePostsPerUser = totalPosts / totalUsers;
  let averageCommentsPerPost = totalComments / totalPosts;

  let mostPostUser = getUserWithMostPosts(data.posts);
  let mostUserName = await getUserNameById(data.user, mostPostUser.userId);
  let comments = countCommentsForUser(
    mostPostUser.userId,
    data.comments,
    data.posts,
  );
  let commentsForUserPost = getNumOfCommentsPerPosts(data.comments, mostPostUser.posts); 

  console.log(
    totalUsers,
    totalPosts,
    totalComments,
    averagePostsPerUser,
    averageCommentsPerPost,
  );
  console.log(
    mostPostUser.userId,
    mostPostUser.totalPosts,
    mostUserName,
    commentsForUserPost,
  );
}

getProcessedData();
