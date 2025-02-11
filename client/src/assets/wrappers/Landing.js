import styled from 'styled-components';

const Wrapper = styled.section`
  .hero {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    padding: 0em auto;
    /* margin-top: var(--nav-height); */
  }

  h1 {
    color: var(--black);
    font-weight: 700;
    span {
      color: var(--primary-1000);
    }
    margin-bottom: 1.5rem;
  }

  .info p {
    line-height: 2;
    color: var(--black);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  @media (min-width: 992px) {
    .hero {
      padding: 0em 5em;
    }

    .info {
      margin-top: 10em;
    }

    .info p {
      font-size: large;
    }
  }
`;

export default Wrapper;
