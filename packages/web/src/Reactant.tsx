import React, { FC } from 'react';
import PlatformReactant from '@reactant/platform/Reactant';

export interface ReactantProps {
  [key: string]: any;
}

const Reactant: FC<ReactantProps> = props => <PlatformReactant {...props} />;

export default Reactant;