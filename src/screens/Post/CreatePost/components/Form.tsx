import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import {CreatePostFormValues} from 'types/Properties'
import {ChooseHashTag} from './ChooseHashTag'
import {InputTitle} from './InputTitle'
import {PostImagesUploader} from './PostImagesUploader'

interface Props {
  initialValues: CreatePostFormValues
  setInitialValues: React.Dispatch<React.SetStateAction<CreatePostFormValues>>
}

const CreateOrUpdateProductForm = ({
  initialValues,
  setInitialValues,
}: Props) => {
  const [content, setContent] = useState<string>(initialValues.content)
  const [images, setImages] = useState<Array<string>>(initialValues.images)

  useEffect(() => {
    setInitialValues({
      ...initialValues,
      content: content,
      images: images,
    })
  }, [images, content])

  return (
    <View>
      <ChooseHashTag />
      <InputTitle content={content} setContent={setContent} />
      <PostImagesUploader images={images} setImages={setImages} />
    </View>
  )
}

export default CreateOrUpdateProductForm
