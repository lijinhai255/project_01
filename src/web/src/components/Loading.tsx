import React from 'react';
import { Spin } from 'antd';
import './styles.scss';

interface Iprops {
  height?: string;
  tip?: string;
}

const Loading: React.FunctionComponent<Iprops> = ({
  height = '50px',
  tip = '',
}) => (
  <div className="common-loading" style={{ lineHeight: height, height }}>
    <Spin tip={tip} />
  </div>
);

export default Loading;
