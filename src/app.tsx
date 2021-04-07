import 'default-passive-events';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { AliveScope } from 'react-activation';
import vconsole from 'vconsole';

// vconsole
if (process.env.NAME !== 'production') {
  new vconsole();
}


const App: FC = props => {
  return (
    <AliveScope>
      <RecoilRoot>{props.children}</RecoilRoot>
    </AliveScope>
  );
};

export function rootContainer(
  container: FC
): React.FunctionComponentElement<Record<string, never>> {
  return React.createElement(App, null, container);
}
