import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

export default StyleSheet.create({
  icon: {
    marginRight: 10,
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
