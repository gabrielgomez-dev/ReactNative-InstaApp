import {Pressable} from 'react-native';
import React, {useRef} from 'react';

interface IDoublePressableProps {
  children: React.ReactNode;
  onDoublePress: () => void;
}

const DoublePressable = ({children, onDoublePress}: IDoublePressableProps) => {
  const lastTapRef = useRef(0);

  const handleDoublePress = () => {
    const now = Date.now();

    if (now - lastTapRef.current < 300) {
      onDoublePress();
      lastTapRef.current = 0;
    }

    lastTapRef.current = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
