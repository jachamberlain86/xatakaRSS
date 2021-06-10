import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingHorizontal: 32,
    paddingTop: 96,
  },
  logo: {
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginBottom: -192,
    marginLeft: -128,
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
