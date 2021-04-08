import 'default-passive-events';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { AliveScope } from 'react-activation';
import vconsole from 'vconsole';
import fastclick from 'fastclick';
// @ts-ignore 解决点击事件延迟300毫秒
fastclick.attach(document.body);

// 移动端调试
if (process.env.NAME !== 'production') new vconsole();

// 根页面配置
const App: FC = props => {
  return (
    <AliveScope>
      <RecoilRoot>{props.children}</RecoilRoot>
    </AliveScope>
  );
};

// 页面创建
export function rootContainer(
  container: FC
): React.FunctionComponentElement<Record<string, never>> {
  return React.createElement(App, null, container);
}
