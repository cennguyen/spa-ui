
import styled, { css } from 'styled-components'

export const LoaderStyled = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $overlay }) =>
        $overlay &&
        css`
            position: absolute;
            top: 0;
            left: 0;
            background: ${({ theme }) => theme.colors?.betSlip.border};
            width: calc(100%);
            height: 100%;
            z-index: 999;
        `}

    > i {
        font-size: 20px;
        color: #6B6464;
        animation: ${({ $hasSpin }) =>
            $hasSpin ? `rotate 2s linear infinite` : `none`};
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`