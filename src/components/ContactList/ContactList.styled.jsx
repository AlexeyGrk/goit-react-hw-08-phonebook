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
  text-decoration: none;
  color: #333;
  background: #fff;
  cursor: pointer;
  border: 1px solid #fff;

  position: relative;
  transition: all 0.35s;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: tomato;
    transition: all 0.15s;
    border-radius: 49% 51% 47% 53% / 18% 16% 84% 82%;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    width: 100%;
  }
`;
export const ContactListDeleteButtonText = styled.span`
  position: relative;
  z-index: 2;
`;
export const NotFoundContainer = styled.div`
  width: 300px;
  display: grid;
  place-items: center;
`;
