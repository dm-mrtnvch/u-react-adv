import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { memo, useCallback } from 'react'
import { VStack } from 'shared/ui/Stack'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { ValidateProfileError } from '../../model/consts/consts'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {
  EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import {
  getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'

interface EditableProfileCardProps {
    className?: string;
    id?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server-error'),
    [ValidateProfileError.NO_DATA]: t('no-data'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect-user-data'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect-country'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect-age'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value || 0),
    }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        max
        gap="8"
        className={classNames('', {}, [className])}
      >
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={validateErrorTranslates[err]}
            text={err}
            theme={TextTheme.ERROR}
            data-testid="EditableProfileCard.Error"
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>

    </DynamicModuleLoader>

  )
})
