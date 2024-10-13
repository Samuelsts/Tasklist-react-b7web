"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react"


function Page ()  {
    
    const [itemIpunt, setItemInput] = useState('');
    const [list,setList] = useState<TodoItem[]>([]);

    const handleaddButton = () =>{
        if(itemIpunt.trim() ==='') return;

        setList([...list, {label: itemIpunt, checked: false}]);
        setItemInput('');
    }

    const deleteItem = (index: Number) => {
        setList(list.filter((item, key) => key !== index));
    }

    const toogleItem = (index:number) =>{
        let newList = [...list];
        newList[index].checked = !newList[index].checked;
        setList(newList);
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
                {/* {(()=>{ if(list.length === 0){<p className="my-4">Lista Vazia</p>
                }else{ 
                    <p className="my-4">{list.length} {list.length === 1 ? "item na lista": "itens na lista"} </p>
                    }
                })} */}

                {(() => {
                if (list.length === 0) {
                    return <p className="my-4">lista vazia</p>;
                } else {
                    return <p className="my-4">{list.length} {list.length === 1 ? "item na lista": "itens na lista"} </p>
                }
                })()}


            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item, index) =>(
                    <li key={index}>
                        <input onClick={()=>toogleItem(index)} type="checkbox" checked={item.checked}  className="w-4 h-4 mr-3"/>
                        {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline">[ deletar ]</button></li>
                ))}
            
            </ul>
        </div>
    
    );

    
}

export default Page