import { FiLink } from 'react-icons/fi'
import { TbUnlink } from 'react-icons/tb'

import { useState } from 'react'

import Menu from '../../components/menu/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/Api'
import { savelink } from '../../services/storeLinks'

import './home.css'

export default function Home(){
  const[link,setLink] = useState("");
  const [data,setData] = useState('');
  const [showmodal,setShowModal] = useState(false);

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten',{
        long_url: link
      })
      setData(response.data);
      setShowModal(true);

      savelink('@gklink',response.data)

      setLink('')

    }catch{
      alert('Ops,parece que algo deu errado')
      setLink('');
    }
  }

  return(
    <div className="container-home">

      <div className="logo">
      <TbUnlink size={300} color="#132742" className='link' />
      <h1>GK Link</h1>
      <span>Cole seu link para ser encurtado</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff"  />
          <input type="text"
          value={link}
          onChange={ (e) => setLink(e.target.value) }
          placeholder='cole seu link aqui...' />
        </div>

        <button onClick={handleShortLink}>gerar link</button>
      </div>

      <Menu />
      
      {showmodal && (
      <LinkItem
        closeModal={ () => setShowModal(false) }
        content = {data}
      />
      )}

    </div>
    
  )
}