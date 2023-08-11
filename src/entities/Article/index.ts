export { getArticleDetailsData } from './model/selectors/articleDetails'
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'
export { ArticleList } from './ui/ArticleList/ArticleList'
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
export type {
  Article,
} from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
export { articleDetailsReducer } from './model/slice/articleDetailsSlice'
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
export { ArticleView } from '@/entities/Article/model/consts/consts'
export { ArticleSortField } from '@/entities/Article/model/consts/consts'
export { ArticleType } from '@/entities/Article/model/consts/consts'
