// 스포일러 포함, 비공개 여부 - 토글 스위치
import React, { useState } from 'react';
import '../../styles/Write/Toggle.scss'; // 스타일을 위한 CSS 파일

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`toggle-switch ${isOn ? 'on' : ''}`} onClick={toggleSwitch}>
      <div className="switch"></div>
    </div>
  );
};

export default Toggle;
