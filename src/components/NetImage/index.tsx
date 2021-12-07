import FastImage, {FastImageProps} from 'react-native-fast-image';
import React, {useState} from 'react';
import {Fade, Placeholder, PlaceholderMedia} from 'rn-placeholder';

const NetImage = ({style, ...rest}: FastImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const onError = () => {
    setLoading(false);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };
  const onLoadStart = () => {
    setLoading(true);
  };

  return (
    <FastImage
      style={style}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      onError={onError}
      {...rest}>
      {isLoading && (
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={style} />
        </Placeholder>
      )}
    </FastImage>
  );
};

export default NetImage;

export const NetImageStatic = {
  priority: FastImage.priority,
  preload: FastImage.preload,
  resizeMode: FastImage.resizeMode,
  cacheControl: FastImage.cacheControl,
};
