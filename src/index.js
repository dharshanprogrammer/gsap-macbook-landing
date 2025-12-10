import {create} from 'zustand'

const UseMacBookStore = create((set)=>({
    color:'#2e2c2e',
    SetColor:(color) =>set({color}),
    scale:0.08,
    SetScale:(scale) => set({scale}),
    reset:() =>set({color:'2e2c2e',scale:0.8}),
    
}))

export default UseMacBookStore ;