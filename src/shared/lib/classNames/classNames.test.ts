import { classNames } from './classNames'

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with additional class and truthy mods', () => {
    const expected = 'someClass class1 class2 hover scrollable'
    expect(classNames(
      'someClass',
      { hover: true, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected)
  })

  test('with additional class and truthy/falsy mods', () => {
    const expected = 'someClass class1 class2 hover'
    expect(classNames(
      'someClass',
      { hover: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected)
  })

  test('with additional class and null/undefined mods', () => {
    const expected = 'someClass class1 class2'
    expect(classNames(
      'someClass',
      { hover: null, scrollable: undefined },
      ['class1', 'class2'],
    )).toBe(expected)
  })
})
