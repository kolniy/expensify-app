import authReducer from '../../reducers/auth'

test('should setup default authentication state', () => {
    const state = authReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({})
})

test('should setup user id on reducer for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abcd12345'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe('abcd12345')
})

test('should clear user id on logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'anything'}, action)
    expect(state).toEqual({})
})