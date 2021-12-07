import {NonAvatar} from 'components/Avatar'
import {IconType, VectorIcon} from 'components/VectorIcon'
import moment from 'moment'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {c, l, t} from 'styles/shared'
import {PostTopicHashtagType, UserType} from 'types/Properties'

interface Props {
  onPressMore?: () => void
  user: UserType
  createAt: string
  updateAt: string
  postTopicHashtag: PostTopicHashtagType[]
}

export const PostHeader = React.memo(
  ({onPressMore, user, createAt, updateAt, postTopicHashtag}: Props) => {
    return (
      <>
        <View style={[l.flexRow, l.py5, l.alignCtr, l.px15]}>
          <View style={[l.pr15]}>
            <NonAvatar name={user.name} type={'circle'} />
          </View>

          <View>
            <View style={[l.flexRow, l.alignCtr]}>
              <Text
                style={[
                  t.h5,
                  {
                    fontFamily: t.fontFamily.RobotoSlab.ExtraBold,
                    color: c.white,
                  },
                ]}>
                {user.name}
              </Text>

              <View style={[l.flexCenter, l.px5]}>
                <VectorIcon
                  type={IconType.entypo}
                  name="dot-single"
                  size={15}
                  color={c.white}
                />
              </View>

              <Text
                style={[
                  {
                    fontFamily: t.fontFamily.RobotoSlab.Light,
                    color: c.white,
                  },
                ]}>
                {moment(updateAt).locale('vi').startOf('hour').fromNow()}
              </Text>
            </View>

            <View style={[l.mt5, {flexDirection: 'row'}]}>
              {postTopicHashtag?.map(topic => (
                <Text
                  key={topic.id}
                  style={[
                    {
                      fontFamily: t.fontFamily.RobotoSlab.Light,
                      color: c.white,
                      backgroundColor: c.gray,
                      borderRadius: 5,
                    },
                    l.px5,
                    t.pSM,
                    l.mr10,
                  ]}>
                  {topic.name}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[l.abs, {right: 15, top: 10}]}
          activeOpacity={0.7}
          onPress={onPressMore}>
          <VectorIcon
            type={IconType.entypo}
            name={'dots-three-horizontal'}
            color={c.white}
            size={25}
          />
        </TouchableOpacity>
      </>
    )
  },
)
