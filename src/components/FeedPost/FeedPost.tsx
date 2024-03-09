import {View, Text, Image} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';

const FeedPost = ({post}: {post: IPost}) => {
  let isLiked = false;

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo
          size={16}
          name="dots-three-horizontal"
          style={styles.threeDots}
        />
      </View>

      {/* Content Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Icons section */}
      <View style={styles.footer}>
        {/* Icons */}
        <View style={styles.iconsContainer}>
          <AntDesign
            size={24}
            name={isLiked ? 'heart' : 'hearto'}
            style={styles.icon}
            color={isLiked ? colors.black : colors.gray}
          />

          <Ionicons size={24} name="chatbubble-outline" style={styles.icon} />

          <Feather size={24} name="send" style={styles.icon} />

          <Feather size={24} name="bookmark" style={{marginLeft: 'auto'}} />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.textBold}>gabrielgo</Text> and{' '}
          <Text style={styles.textBold}>{post.nofLikes} others</Text>
        </Text>

        {/* Description */}

        <Text style={styles.commentText}>
          <Text style={styles.textBold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        {/* Comments Section */}
        <Text style={{color: colors.gray}}>
          View all {post.nofComments} comments
        </Text>

        {/* Comment */}
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </View>
    </View>
  );
};

export default FeedPost;
