import { View, Image, ImageSourcePropType } from "react-native";

interface IEmojiSticker {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: IEmojiSticker) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
