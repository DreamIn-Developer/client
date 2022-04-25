import React from 'react';
import * as S from './styles';
import type { ImageUploadPropsType } from './types';

import useImageHandle from '../../../hooks/useImageHandle';

const ImageUploadWrapper: React.FC<ImageUploadPropsType> = ({ children, name }) => {
  const { storeImage } = useImageHandle(name);

  return (
    <S.Wrapper>
      <S.ProfileLabel htmlFor="file-input">{children}</S.ProfileLabel>
      <S.FileInput id="file-input" type="file" name={name} onChange={storeImage} />
    </S.Wrapper>
  );
};

export default ImageUploadWrapper;
