import React from 'react';

import { useRecoilState } from 'recoil';
import { userRegisterInfoState } from '../recoil/auth';
import type { UserRegisterInfoType } from '../recoil/auth';

import { readFile } from '../utils/readFile';

const useImageHandle = (property: string) => {
  const [userInfo, setUserInfo] = useRecoilState<UserRegisterInfoType>(userRegisterInfoState);
  console.log(userInfo);
  const storeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = (e.target as HTMLInputElement).files[0];
    const readedFile = currentFile && (await readFile(currentFile));

    const uploadedUserProfileInfo = { ...userInfo, [property]: readedFile };

    setUserInfo(uploadedUserProfileInfo);
  };

  return { storeImage };
};

export default useImageHandle;
