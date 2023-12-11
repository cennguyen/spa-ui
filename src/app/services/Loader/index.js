import { memo } from 'react'
import { LoaderStyled } from './styled'
import PropTypes from 'prop-types'

const Loader = (props) => {
    const { iconClassName, hasSpin, overlay } = props
    return (
        <LoaderStyled $hasSpin={hasSpin} $overlay={overlay}>
            <i className={iconClassName}></i>
        </LoaderStyled>
    )
}

Loader.propTypes = {
    iconClassName: PropTypes.string,
    hasSpin: PropTypes.bool,
    overlay: PropTypes.bool,
}

Loader.defaultProps = {
    iconClassName: 'icon-soccer',
    hasSpin: true,
    overlay: false,
}

export default memo(Loader)

