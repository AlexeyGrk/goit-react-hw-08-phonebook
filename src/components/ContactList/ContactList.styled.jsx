import styled from "@emotion/styled/macro";

export const ContactCtalog = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 5px;
`;
export const ContactListItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ContactListDeleteButton = styled.button`
  text-align: center;
  margin: 0 5px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
export const ContactListDeleteButtonText = styled.span`
  color: tomato;
  font-size: 20px;
  font-weight: 600;
`;
export const NotFoundContainer = styled.div`
  width: 300px;
  display: grid;
  place-items: center;
`;
