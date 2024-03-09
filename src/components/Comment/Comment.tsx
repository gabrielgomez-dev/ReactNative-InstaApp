import {View, Text} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {IComment} from '../../types/models';

const Comment = ({comment}: {comment: IComment}) => {
  let isLiked = false;

  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.textBold}>{comment.user.username}</Text>{' '}
        {comment.content}
      </Text>

      <AntDesign
        name={isLiked ? 'heart' : 'hearto'}
        style={styles.icon}
        color={isLiked ? colors.black : colors.gray}
      />

      {/* Comment Date */}
      <Text style={{color: colors.gray}}>{comment.createdAt}</Text>
    </View>
  );
};

export default Comment;
