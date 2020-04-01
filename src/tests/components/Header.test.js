import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
import { startLogin } from '../../actions/auth'
import { LoginPage } from '../../components/LoginPage'
 
test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogOut={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
     
})

test('should call startLogOut on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogOut={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})
