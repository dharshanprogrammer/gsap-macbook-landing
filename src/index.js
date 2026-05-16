import {create} from 'zustand'

const useMacBookStore = create((set)=>({
    color:'#2e2c2e',
    setColor:(newColor) =>set({color:newColor}),
    scale:0.08,
    setScale:(newScale) => set({scale: newScale}),
    texture:'/videos/feature-1.mp4',
    setTexture:(newTexture)=>set({texture:newTexture}),
    reset:() =>set({color:'2e2c2e',scale:0.8,texture:'/videos/feature-1.mp4'}),
    
}))

export default useMacBookStore ;