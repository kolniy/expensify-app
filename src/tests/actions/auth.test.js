import { login, logout } from '../../actions/auth'

test('should setup login action object', () => {
    const action = login('abcd12345')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abcd12345'
    })
})

test('should setup logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})