
import styled from 'styled-components'
import Row, { Col } from '../Row'


const DesktopLayout = styled(Col)`
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`

const Wrapper = styled(Row)`
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    margin: 0 auto;
    align-items: ${({ $stretch }) => ($stretch ? 'stretch' : 'flex-start')};

    &.wrapper-header {
        height: 65px;
    }
`
const LoaderStyled = styled(Row)`
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export { DesktopLayout, Wrapper, LoaderStyled }