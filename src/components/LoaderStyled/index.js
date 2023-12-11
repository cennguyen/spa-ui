import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const colorKeyFrames = keyframes`
  0% {
    stroke: ${({ color }) => color || 'FFFFFF_1￼'};
  }
  40% {
    stroke: ${({ color }) => color || 'FFFFFF_1￼'};
  }
  66% {
    stroke: ${({ color }) => color || 'FFFFFF_1￼'};
  }
  80%,
  90% {
    stroke: ${({ color }) => color || 'FFFFFF_1￼'};
  }
`

const SpinnerStyled = styled.svg`
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: ${({ height }) => height || '60px'};
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: ${({ width }) => width || '60px'};
    margin: auto;

    & .loader-path {
        stroke-dasharray: 150, 200;
        stroke-dashoffset: -10;
        -webkit-animation:
            dash 3s ease-in-out infinite,
            ${colorKeyFrames} 6s ease-in-out infinite;
        animation:
            dash 3s ease-in-out infinite,
            ${colorKeyFrames} 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @-webkit-keyframes rotate {
        100% {
            will-change: transform;
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }

    @keyframes rotate {
        100% {
            will-change: transform;
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
    @-webkit-keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -25;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -104;
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -25;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -104;
        }
    }
`

const Spinner = (props) => (
    <SpinnerStyled viewBox='8 8 15 15' color={props.strokeColor}>
        <circle
            className='loader-path'
            cx='15'
            cy='15'
            r='5'
            fill='none'
            stroke={props.strokeColor}
            strokeWidth={props.strokeWidth || 1}
        />
    </SpinnerStyled>
)

Spinner.propTypes = {
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
}

export default Spinner

