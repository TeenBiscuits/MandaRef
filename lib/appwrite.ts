import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.andresrc.aora",
  projectId: "66524c27002fdd4330ae",
  databaseId: "66524d7d00241da9fb06",
  userCollectionId: "66524d9a001779a5c5f3",
  videosCollectionId: "66524dc5003a0f16e38c",
  bookmarksCollectionId: "665620ea0003f2443700",
  storageId: "66524f560033288a3157",
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videosCollectionId,
  bookmarksCollectionId,
  storageId,
} = config;

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username); // Crear un avatar en base a las iniciales del usuario

    await signIn(email, password);

    const newUser = await databases.createDocument(
      // Crear un nuevo usuario en la base de datos
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      },
    );
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};
// Sign-In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getFilePreview = async (fileId, type) => {
  let fileUrl;

  try {
    if (type === "image") {
      fileUrl = storage.getFilePreview(
        storageId,
        fileId,
        2000,
        2000,
        "top",
        100,
      );
    } else if (type === "video") {
      fileUrl = storage.getFileView(storageId, fileId);
    } else {
      throw new Error("No se ha encontrado el tipo de archivo");
    }
    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
};

export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

export const uploadFile = async (file, type) => {
  if (!file) return;

  const asset = {
    name: file.fileName,
    type: file.mimeType,
    size: file.fileSize,
    uri: file.uri,
  };

  try {
    const uploadFile = await storage.createFile(storageId, ID.unique(), asset);
    const fileUrl = await getFilePreview(uploadFile.$id, type);
    console.log("fileUrl", fileUrl);
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
};

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    throw new Error("Error", error.message);
  }
}
export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(databaseId, videosCollectionId);

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videosCollectionId,
      [Query.orderDesc("$createdAt", Query.limit(7))],
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videosCollectionId,
      [Query.search("tittle", query)], // De forma supermegasencilla hacemos una búsqueda en el tittle de los videos
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserPost = async (userId) => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videosCollectionId,
      [Query.equal("users", userId)], // De forma supermegasencilla hacemos una búsqueda en el tittle de los videos
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const createVideo = async (form) => {
  try {
    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile(form.thumbnail, "image"),
      uploadFile(form.video, "video"),
    ]);

    console.log("esto es el final", thumbnailUrl, videoUrl, form);
    const newPost = await databases.createDocument(
      databaseId,
      videosCollectionId,
      ID.unique(),
      {
        tittle: form.title,
        thumbnail: thumbnailUrl,
        video: videoUrl,
        prompt: form.prompt,
        users: form.userId,
      },
    );
    return newPost;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSavedPosts = async () => {
  try {
    console.log("getSavedPosts");
  } catch (error) {
    throw new Error(error);
  }
};

export const updateLikeVideo = async (videoId, userId) => {
  try {
    const video = await databases.updateDocument(
      databaseId,
      videosCollectionId,
      videoId,
      {
        users: userId,
      },
    );
    return video;
  } catch (error) {
    throw new Error(error);
  }
};
