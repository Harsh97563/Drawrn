'use client'
import { CaseUpper, Circle, Eraser, MousePointer, MoveUpRight, Pen, Square, Trash2 } from 'lucide-react'
import React from 'react'
import {activeTool} from '../utils/atom'
import { useRecoilState } from 'recoil';
function Bar() {
  const [tool, setTool] = useRecoilState(activeTool);
  
  return (
    <div className='flex justify-center items-center space-x-2 fixed top-5 left-[40%] text-white bg-gray-900 p-1 rounded-lg'>
        <Pen 
        size={40}
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "PEN" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}
        onClick={() => setTool('PEN')}
        />
        <MousePointer 
        size={40}
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "MOVE" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}
        onClick={() => setTool('MOVE')}
        />
        <MoveUpRight 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "ARROW" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}/>
        <Square 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "SQUARE" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}
        onClick={() => setTool('SQUARE')}
        />
        <Circle 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "CIRCLE" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}/>
        <CaseUpper 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "WRITE" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}/>
        <Eraser 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "ERASER" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}/>
        <Trash2 
        size={40} 
        strokeWidth={2} 
        className={` hover:bg-gray-950 ${tool === "CLEAR" ? 'bg-purple-400/30': ''} p-2 rounded-lg`}
        onClick={() => setTool('CLEAR')}
        />
    </div>
  )
}

export default Bar