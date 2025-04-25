import React, {  ReactNode, SetStateAction, useContext, useState } from "react";

interface InterfaceMarcadorContext{
    marcador: number,
    setmarcador: React.Dispatch<SetStateAction<number>>
}

 const Contexto = React.createContext<InterfaceMarcadorContext>({
    marcador: 0,
    setmarcador: ()=>{}
 })

 export function Marcador_Provider({children}:{children:ReactNode}){
  const [marcador,setmarcador] = useState<number>(0)

  return<Contexto.Provider value={{marcador,setmarcador}}>{children}</Contexto.Provider>

 }

 export function UseMarcador_Provider(){
    const contexto_marcador = useContext(Contexto)
    if(!contexto_marcador){
        throw Error('Lo sentimos a ocurrido un error por favor recargue el sitio')
        
    }
    return contexto_marcador
 }