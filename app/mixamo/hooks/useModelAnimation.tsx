import { useAnimations } from '@react-three/drei';
import React from 'react';

export const idle = (api) => {
  const { actions } = api;
  actions.knockDown?.reset().fadeIn(0.5).play();
  return () => void actions.knockDown?.fadeOut(0.5);
};

const useModelAnimation = ({ animations, ...props }, group) => {
  const api = useAnimations(animations, group);
  console.log(api);
  const memo = React.useMemo(() => ({ stop: () => {} }));

  React.useEffect(() => idle(api), [api]);
};

export default useModelAnimation;
