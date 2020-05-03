import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #12105a;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 100px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        opacity: 0.6;
        transition: opacity 0.2s;
        position: relative;

        & + a {
          margin-left: 32px;
        }

        &:hover,
        &.active {
          opacity: 1;
        }

        &.active:after {
          content: '';
          width: 76px;
          height: 4px;
          background: #5465ff;
          position: absolute;
          top: 32px;
          left: 0;
        }
      }
    }
  }
`;
