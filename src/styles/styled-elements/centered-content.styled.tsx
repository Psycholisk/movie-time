import styled from 'styled-components'

const CenteredContent = styled.section`
  display: flex;
  justify-content: space-around;

  padding-left: ${(props) => props.theme.space(12.5)}; // 100px
  padding-right: ${(props) => props.theme.space(12.5)};

  @media (max-width: ${(props) => props.theme.breakpoints.largeScreen}px) {
    padding-left: ${(props) => props.theme.space(7.5)}; // 60px
    padding-right: ${(props) => props.theme.space(7.5)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    padding-left: ${(props) => props.theme.space(5)}; // 40px
    padding-right: ${(props) => props.theme.space(5)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    padding-left: ${(props) => props.theme.space(3.5)}; // 28px
    padding-right: ${(props) => props.theme.space(3.5)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding-left: ${(props) => props.theme.space(2)}; // 16px
    padding-right: ${(props) => props.theme.space(2)};
  }
`

export default CenteredContent
