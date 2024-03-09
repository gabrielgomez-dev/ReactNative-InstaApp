import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  userName: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: size.xs,
    color: colors.black,
    lineHeight: 18,
  },
  textBold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: size.xs,
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
});
