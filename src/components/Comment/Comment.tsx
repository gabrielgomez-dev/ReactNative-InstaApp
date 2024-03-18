import {View, Text} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import styles from './styles';
import {IComment} from '../../types/models';

const Comment = ({comment}: {comment: IComment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.textBold}>{comment.user.username}</Text>{' '}
        {comment.content}
      </Text>

      {/* Comment Date */}
      <Text style={{color: colors.gray}}>{comment.createdAt}</Text>
    </View>
  );
};

export default Comment;
