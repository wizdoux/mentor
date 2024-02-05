import styled from 'styled-components';

export const Container = styled.section`
  background: var(--color-primary);
  padding: 4.8rem 0.8rem 12.8rem;
`;

export const Content = styled.div`
  @media (min-width: 700px) {
    max-width: 73.6rem;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  width: min(40rem, 60vw);

  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-size: min(3.6rem, 5vw);
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
`;

export const Description = styled.p`
  width: 30rem;
  margin-top: 2.4rem;

  font-size: min(1.6rem, 3vw);
  color: var(--color-text-in-primary);
`;
