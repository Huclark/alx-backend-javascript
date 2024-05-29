import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promises = [uploadPhoto(), createUser()];
    const [photo, user] = await Promise.all(promises);

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
