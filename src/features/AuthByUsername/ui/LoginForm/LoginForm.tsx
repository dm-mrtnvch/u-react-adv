import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState)

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('authorization form')} />
      {error && <Text text={t('incorrect login or password')} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        placeholder={t('user name')}
        autoFocus
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('sing in')}
      </Button>
    </div>
  )
})
