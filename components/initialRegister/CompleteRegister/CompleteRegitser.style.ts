import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Logo = styled(Image)`
  object-fit: contain;
  object-position: center top;
`;
export const CelebrateImage = styled(Image)``;

export const InfoWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Info = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 46px;
  color: rgba(0, 0, 0, 0.87);
`;

export const SubInfo = styled.p`
  margin: 16px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
  color: #616161;
`;
