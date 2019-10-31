import styled from "styled-components";

export const BooksContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: whitesmoke;
`;

export const BooksUlStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  margin: 10px;
`;

export const BooksLiStyled = styled.li`
  row-gap: 10px;
  column-gap: 10px;
  list-style: none;
  margin: 10px;
`;

export const ListContainerStyled = styled.div`
  display: grid;
`;

export const BookCoverStyled = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  width: 200px;
  margin: 5px;
`;

export const BookAuthorStyled = styled.span`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin: 5px;
`;

export const BookNameStyled = styled.h3`
  color: #0066c0;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 5px;
`;

export const BookIsbnStyled = styled.span`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 5px;
`;
