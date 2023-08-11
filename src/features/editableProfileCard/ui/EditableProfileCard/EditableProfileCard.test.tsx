import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { $api } from '@/shared/api/api'
import { Profile } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.USA,
  city: 'Moscow',
  username: 'admin213',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('features/EditableProfileCard', () => {
  test('readonly mode should change ', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('reset data after cancel', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
  })

  test('should display error', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('send put request if no errors', async () => {
    const mockPutReq = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
