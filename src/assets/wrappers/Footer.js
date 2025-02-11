import styled from 'styled-components';

const Wrapper = styled.section`
  .footer {
    background-color: var(--grey-900);
    color: var(--white);
    padding: 1em 7.5rem 0em 5em;
    display: flex;
    gap: 3em;
  }

  #homeLink {
    color: var(--primary-1000);
  }

  h3 {
    margin-bottom: 1.5rem;
    color: var(--primary-1000);
  }

  .footerLink {
    color: white;
  }

  p {
    line-height: 2;
  }

  @media (min-width: 992px) {
    .footer {
      grid-template-columns: repeat(3, 1fr);
      text-align: justify;
    }

    h3 {
      font-size: 24px;
    }
  }
`;
export default Wrapper;
