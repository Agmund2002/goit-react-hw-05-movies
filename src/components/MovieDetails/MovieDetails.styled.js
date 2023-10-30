import styled from 'styled-components';

export const PositionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(7)};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${p => p.theme.spacing(5)};
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};

  @media only screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(3)};
  }

  @media only screen and (min-width: 1280px) {
    gap: ${p => p.theme.spacing(5)};
  }
`;

export const Image = styled.img`
  height: 500px;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    height: 350px;
  }

  @media only screen and (min-width: 1280px) {
    height: 500px;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const Rating = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 500;
`;


