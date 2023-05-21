import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <div className='headwrapper'>
      
     <div className='headContent'>
      <div className='headBlockleft'>
        <Link to='/'><h3 className='tagH3'>Главная</h3></Link>
        <Link to='/about'><h3 className='tagH3'>О нас</h3></Link>
        <h3 className='tagH3'>Условия приёма</h3>
        <Link to='/akredition'><h3 className='tagH3'>Аккредитация</h3></Link>
        <Link to='/new'><h3 className='tagH3'>
                                    Новости</h3></Link>
        <Link to='/nasha'><h3 className='tagH3'>Наша гордость</h3></Link>
        <Link to='/pikure'><h3 className='tagH3'>Галерея</h3></Link>
      </div>
      <div className='headBlockleft'>
        <Link to='/sport'><h3 className='tagH3'>Отдел спорта</h3></Link>
        <h3 className='tagH3'>Нормативные документы</h3>
        <Link to='/colledj'><h3 className='tagH3'>Колледж</h3></Link>
        <h3 className='tagH3'>
Спорт-техническая база</h3>
        <Link to='/contact'><h3 className='tagH3'>
        Контакты</h3></Link>
      
      </div>

     </div>
    </div>
  )
}

export default Header
