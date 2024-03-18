import {FlatList, Image, View, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarouselProps {
  images: string[];
  onDoublePress: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarouselProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const window = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image
              source={{uri: item}}
              style={{width: window.width, aspectRatio: 1}}
            />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={({viewableItems}) =>
          viewableItems.length > 0 &&
          setActiveImageIndex(viewableItems[0].index || 0)
        }
        viewabilityConfig={{
          itemVisiblePercentThreshold: 51,
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              backgroundColor:
                activeImageIndex === index ? colors.white : colors.gray,
              aspectRatio: 1,
              borderRadius: 100,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
