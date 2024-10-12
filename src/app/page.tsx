"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react"


function Page ()  {
    const [itemIpunt, setItemInput] = useState('');
    const [list,setList] = useState<TodoItem[]>([]);

    const handleaddButton = () =>{
        setList([...list, {label: itemIpunt, checked: false}]);
        setItemInput('');
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center text2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
                <input type="text" 
                placeholder="O que deseja fazer"
                className="flex-1 border border-black p3 text-2xl text-black rounded-md mr-3"
                value={itemIpunt}
                onChange={e=> setItemInput(e.target.value)}
                />
                <button onClick={handleaddButton}>Adicionar</button>
            </div>

            <p className="my-4">{list.length} itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map(item =>(
                    <li>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
                ))}
            
            </ul>
        </div>
    
    );

    
}

export default Page