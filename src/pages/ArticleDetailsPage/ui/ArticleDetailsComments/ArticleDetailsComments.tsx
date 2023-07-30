import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/addCommentForm'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/AddCommentForArticle/AddCommentForArticle'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments = memo(({
  className, id,
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <VStack className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('comments')}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  )
})
