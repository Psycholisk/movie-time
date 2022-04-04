import styled from 'styled-components'

const ListingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(p) => p.theme.space(4)};
`
export default ListingContainer
