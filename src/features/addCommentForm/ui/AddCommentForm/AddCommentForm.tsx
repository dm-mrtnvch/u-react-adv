import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { HStack } from '@/shared/ui/Stack'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getAddCommentFormText)

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          className={cls.input}
          placeholder={t('type-comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('send')}
        </Button>
      </HStack>

    </DynamicModuleLoader>
  )
}

export default AddCommentForm
