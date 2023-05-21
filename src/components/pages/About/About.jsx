import React from 'react'
import "./about.css"
import abImg1 from "./aboutImages/Снимок экрана 2023-05-21 143906.png"
import abImg2 from "./aboutImages/Снимок экрана 2023-05-21 143945.png"
import abImg3 from "./aboutImages/Снимок экрана 2023-05-21 144027.png"
import abImg4 from "./aboutImages/Снимок экрана 2023-05-21 144055.png"
import abImages1 from "./aboutImages/abBlockFoto1.png"
import abImages2 from "./aboutImages/blockforo3.png"
import abImages3 from "./aboutImages/blockfoto4.png"
import abImages4 from "./aboutImages/fotoBlock2.png"
import abImages5 from "./aboutImages/f1.png"
import abImages6 from "./aboutImages/f2.png"
import abIcon1 from "./aboutImages/abf1.png"
import abIcon2 from "./aboutImages/abf2.png"



const About = () => {
  return (
    <div className='AboutWrap'>
      <div className='About'>
        <div className='aboutContent'>
          <div className='aboutBlockFirst'>
            <div className='abBlockLeft'>
              <h1>Краткая история создания и развития Республиканского спортивного колледжа им. Шералы Сыдыкова РСК:</h1>
            </div>
            <div className='abBlockRight'>
              <img src={abImg1} alt="" />
              <img src={abImg2} alt="" />
              <img src={abImg3} alt="" />
              <img src={abImg4} alt="" />
            </div>
          </div>
          <div className='aboutBlockSecond'>
            <div className='abBlockLeftsecond'>
              <h2 className='h11'>РСК является республиканской образовательной организацией среднего профессионального образования.

В 1971 году в г. Фрунзе организована Республиканская общеобразовательная школа спортивного профиля им. Н.К.Крупской, а в 1989 году приказом Государственного комитета СССР по физической культуре и спорту была преобразована во Фрунзенское училище олимпийского резерва с организацией 1 и 3 курсов, в 2001 году переименовано в Республиканское училище олимпийского резерва им.Ш.Сыдыкова.В 2019 году переименовано в Республиканский спортивный колледж им Ш.Сыдыкова.</h2>
            </div>
            <div className='abBlockRightsecond'>
              <img src={abImages1} alt="" />
              <img src={abImages2} alt="" />
              <img src={abImages3} alt="" />
              <img src={abImages4} alt="" />
            </div>
          </div>
          <div className='aboutBlockThree'>
            <div className='abBlockLeftsecond'>
              <h2 className='h11'>РСК является единственным в республике учебным заведением, в котором готовятся резервы в национальные сборные команды Кыргызской Республики среди юношей, юниоров и взрослых по 8 видам спорта: вольной, женской, греко-римской борьбе, дзюдо, женское дзюдо, тяжелой атлетике,боксу, легкой атлетике. Отбор в РСК производиться в августе месяце, после окончания 7-го класса и 11 класса на 1-курсы.

В колледже учатся, проживают и занимаются 395 одаренных юношей и девушек со всех регионов республики.</h2>
            </div>
            <div className='abBlockRightsecond'>
              <img src={abImages5} alt="" />
              <img src={abImages6} alt="" />
              <h2>РСК располагает учебным корпусом, общежитием, спортивным комплексом, медсанчастью, сауной, столовой с четырехразовым питанием.</h2>
             
            </div>
          </div>
          <div className='abBlockFoure'>
            <div className='abCard'>
              <h3>ФИО руководителя образовательной организации и контактные данные:</h3>
            </div>
            <h2>Ташматов Айбек Айтбекович</h2>
            <div className='miniCard'>
              <img src={abIcon1} alt="" />
              <h3>Рабочий телефон: 0312-334187</h3>
            </div>
            <div className='miniCard'>
              <img src={abIcon2} alt="" />
              <h3>Электронная почта: ruor33@mail.ru</h3>
            </div>
          </div>
          <div className='abBlockFoure'>
            <div className='abCard'>
              <h3>ФИО заместителя директора по учебной части и контактные данные:</h3>
            </div>
            <h2>Кайырбек к Нургул</h2>
            <div className='miniCard'>
              <img src={abIcon1} alt="" />
              <h3>Рабочий телефон: 0312-334676</h3>
            </div>
            <div className='miniCard'>
              <img src={abIcon2} alt="" />
              <h3>Электронная почта: ruor.kolbaeva33@mail.ru</h3>
            </div>
          </div>
          <div className='abBlockFoure'>
            <div className='abCard'>
              <h3>ФИО заместителя директора по воспитательской части и контактные данные:</h3>
            </div>
            <h2>Кожомат уулу Тилек</h2>
            <div className='miniCard'>
              <img src={abIcon1} alt="" />
              <h3>Рабочий телефон: 0312-334187</h3>
            </div>
            <div className='miniCard'>
              <img src={abIcon2} alt="" />
              <h3>Электронная почта: tilekkojomat@mail.ru</h3>
            </div>
          </div>
          <div className='abBlockFoure'>
            <div className='abCard'>
              <h3>ФИО заместителя директора по спортивной части и контактные данные:</h3>
            </div>
            <h2>Ибраимов Данияр Анарбекович</h2>
            <div className='miniCard'>
              <img src={abIcon1} alt="" />
              <h3>Рабочий телефон: 0312-334038</h3>
            </div>
            <div className='miniCard'>
              <img src={abIcon1} alt="" />
              <h3>Мобильный телефон: 0508 770 333</h3>
            </div>
            <div className='miniCard'>
              <img src={abIcon2} alt="" />
              <h3>Электронная почта: ruor33@mail.ru</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
