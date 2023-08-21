import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Dos = () => {
  const miNombreAhora=useSelector(state => state.unValor.miNombre)
  const miArrayAhora= useSelector(state => state.unValor.bibliotecas)
  
  return (
    <>
    <h1>{miNombreAhora}</h1>
    {miArrayAhora.map(valor =>
      <div>{valor.nombre}({valor.inicio})</div>)}
    </>
  )
}

export default Dos
