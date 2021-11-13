import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon'
import Image from '../Image/Image'

import './Chip.scss';

const Chip = ({
                  text,
                  withImage,
                  withIcon,
                  withClose,
                  imageSrc,
                  imgAlt,
                  iconName,
                  className,
                  id,
                  onChipClick,
                  onCloseClick,
                  active,
              }) => {

    const chipClasses = classNames(
        'chip',
        className,
        {active},
    );

    const onChipClickAction = () => {
        onChipClick(id);
    };

    const onCloseClickAction = (e) => {
        e.stopPropagation();
        onCloseClick(e, id);
    };

    return (
        <div className={chipClasses} onClick={onChipClickAction}>
            {withImage &&
            <span className='chipImage'>
                    <Image src={imageSrc} alt={imgAlt} width={24} height={24}/>
                </span>
            }
            {withIcon &&
            <span className='chipIcon'>
                    <Icon name={iconName}/>
                </span>
            }
            <span className='chipText'>{text}</span>
            {withClose &&
            <span className='chipClose' onClick={onCloseClickAction}>
                    <Icon name='close_alt'/>
                </span>
            }
        </div>
    );
};

Chip.propTypes = {
    text: PropTypes.string.isRequired,
    withImage: PropTypes.bool,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    imageSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChipClick: PropTypes.func,
    onCloseClick: PropTypes.func,

};

Chip.defaultProps = {
    withImage: false,
    withIcon: false,
    withClose: false,
    imageSrc: '',
    imgAlt: '',
    iconName: 'star_empty',
    className: '',
    id: null,
    onChipClick: () => {
    },
    onCloseClick: () => {
    },
};

export default Chip;