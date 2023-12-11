import styled, { css } from 'styled-components'

const RowInline = styled.div`
    display: flex;
`

const ColInline = styled(RowInline)`
    flex-direction: column;
`

const Row = styled(RowInline)`
    display: flex;
    width: 100%;
    ${({ $gap }) =>
        $gap &&
        css`
            gap: ${$gap}px;
        `}
`

const Col = styled(Row)`
    flex-direction: column;
`

const RowAlignCenter = styled(RowInline)`
    align-items: center;
`

const RowCenter = styled(Row)`
    justify-content: space-between;
`

const ColCenter = styled(Col)`
    justify-content: center;
`

const BlockStyled = styled.div`
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.colors.main};
`

const RowContent = styled(Row)`
    ${({ $justify }) => {
        switch ($justify) {
            case 'lcr':
            case 'lr':
                return css`
                    justify-content: space-between;
                `
            case 'c':
            case 'cr':
                return css`
                    justify-content: center;
                `
            case 'r':
                return css`
                    justify-content: flex-end;
                `
            default:
                return css`
                    justify-content: flex-start;
                `
        }
    }}
`

export {
    RowInline,
    ColInline,
    Col,
    RowCenter,
    ColCenter,
    RowAlignCenter,
    BlockStyled,
    RowContent,
}

export default Row