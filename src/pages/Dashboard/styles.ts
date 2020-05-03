import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -110px;

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 30px;
  }
`;

export const Card = styled.div`
  @media (max-width: 780px) {
    &:hover {
      transform: translateX(20px);
    }
  }

  @media (min-width: 780px) {
    &:hover {
      transform: translateY(-20px);
    }
  }

  transition: all 0.2s;
  background: ${({ total }: CardProps): string => (total ? '#5465FF' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #2dd881;
      }

      &.outcome {
        color: #ef476f;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const NoTransactions = styled.div`
  margin-top: 162px;

  @media (max-width: 780px) {
    margin-top: 64px;
  }
  text-align: center;
  color: #969cb3;

  h1 {
    font-size: 26px;
  }

  p {
    font-size: 20px;
  }

  a {
    color: #5465ff;
    text-decoration: none;
    font-size: 14px;
  }
`;
