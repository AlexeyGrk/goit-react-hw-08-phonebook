import styled from "@emotion/styled/macro";
import { device } from "../../devices/device-sizes";

export const SectionContainer = styled.section`
  padding: 12px;
`;

export const PhonebookMainTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: tomato;
  @media ${device.tablet} {
    font-size: 20px;
    justify-content: flex-start;
    color: black;
    margin: 0;
  }
`;
export const PhonebookSecondaryTitle = styled.h2`
  color: tomato;
`;
export const ContactsAndFilterContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;
export const ContainerPhonebookWithoutMainTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
