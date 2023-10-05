import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface IImageViewer {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string;
}

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: IImageViewer) {
  const imageSource: ImageSourcePropType = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
