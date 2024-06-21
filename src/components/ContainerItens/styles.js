import styled from "styled-components";

export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg, black, transparent);
  border-radius: 61px, 61px, 0px, 0px;
  border-radius: 20px;
  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height: 100vh;

  ${(props) =>
    props.isBlur &&
      `
        backdrop-filter: blur(45px);
        min-height: calc(100vh - 170px);
      `
    }
`;
