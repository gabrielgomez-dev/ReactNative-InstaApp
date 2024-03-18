import {View, Text, Image, Pressable} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import {useState} from 'react';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';

const FeedPost = ({post}: {post: IPost}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  let contentMedia = null;
  if (post.image) {
    contentMedia = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    contentMedia = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

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
      {contentMedia}

      {/* Icons section */}
      <View style={styles.footer}>
        {/* Icons */}
        <View style={styles.iconsContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.gray}
            />
          </Pressable>

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
        <Text
          style={styles.commentText}
          numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.textBold}>{post.user.username}</Text>{' '}
          {post.description}{' '}
        </Text>
        <Text
          style={styles.commentText}
          onPress={() => setIsDescriptionExpanded(v => !v)}>
          {isDescriptionExpanded ? 'Show less' : 'Show more'}
        </Text>

        {/* Comments Section */}
        <Text style={{color: colors.gray, marginVertical: 3}}>
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
