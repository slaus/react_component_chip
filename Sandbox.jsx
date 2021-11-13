import React, { Fragment } from 'react';
import {Trans} from 'react-i18next';

import Chip from './Chip';
import Example from './Example';

const Sandbox = () => (
    <Fragment>
        <h3 className="mt-5">Chip</h3>
        <h5><span>1. Chip with text:</span></h5>
        <Chip text={<Trans>__app_person_name</Trans>} />

        <h5><span>2. Chip with long text:</span></h5>
        <Chip text="Very long chip text should be cropped" active />

        <h5><span>3. Chips with icon and close button:</span></h5>
        <Chip text="Chip" withIcon /><Chip text="Chip" withClose />

        <h5><span>4. Full Chip:</span></h5>
        <Chip text="Full Chip" withIcon withClose />

        <h5><span>5. Chip with image:</span></h5>
        <Chip text="Angular" withImage imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748" imgAlt="react" />

        <h5><span>6. Chip with actions on Body and cross-icon:</span></h5>
        <Chip
            text="Angular"
            withImage
            imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
            imgAlt="angular"
            onCloseClick={() => { console.log('clicked on a close icon'); }}
            withClose
        />
        <Chip
            text="Vue"
            withImage
            imageSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
            imgAlt="vue"
            onCloseClick={() => { console.log('clicked on a close icon'); }}
            onChipClick={() => { console.log('clicked on a chip body'); }}
            withClose
        />

        <h5><span>7. Example of using:</span></h5>
        <Example />

    </Fragment>
);

export default Sandbox;