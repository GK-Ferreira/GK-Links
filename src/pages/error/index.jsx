import './error.css'
import {  TbError404  } from 'react-icons/tb'

import {  Link  } from 'react-router-dom'

export default function Error(){
  return(
    <div className="container-error">
        <TbError404 className='error404' size={300} color="#132742" />
        <h1>página não encontrada</h1>
        <Link to="/">
            Voltar para a home
        </Link>
    </div>
  )
}