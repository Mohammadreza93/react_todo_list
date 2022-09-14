import {atom} from 'recoil'

export const Mode = atom({
    key: 'mode',
    default: 'dark'
})

export const User = atom({
    key: 'user',
    default: ''
})