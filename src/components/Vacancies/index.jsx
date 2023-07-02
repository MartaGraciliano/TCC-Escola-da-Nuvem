import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Vacancies.css';

const vacancies = [
  {
    img: 'https://fptcloud.com/wp-content/uploads/2022/03/Tim-hieu-Cloud-Computing-la-gi-.jpg',
    empresa: 'Empresa ABC',
    vaga: 'Cloud Computing',
    descricao: 'Descrição da vaga: Trabalhar com a Nuvem',
  },
  {
    img: 'https://academiccollegeprojects.com/wp-content/uploads/2015/08/Cloud-Computing-Projects-for-Students.jpg',
    empresa: 'Empresa XYZ',
    vaga: 'Cloud Analyst',
    descricao: 'Descrição da vaga: Trabalhar com a Nuvem',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 2 },
  // { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  // { width: 768, itemsToShow: 1, itemsToScroll: 2 },
  // { width: 1200, itemsToShow: 1, itemsToScroll: 2 },
];

function Vacancies() {
  return (
    <section className="vacancy-container">
      <h2>Conheça nossas vagas</h2>
      <ul>
        <Carousel breakPoints={breakPoints} isRTL={false}>
          {vacancies.map(({ descricao, empresa, vaga, img }, index) => (
            <li className="vacancy-card" key={index}>
              <img src={img} alt={vaga} />
              <div>
                <h3>{vaga}</h3>
                <p>{empresa}</p>
                <p>{descricao}</p>
                <a href="Saiba">Saiba Mais</a>
              </div>
            </li>
          ))}
        </Carousel>
      </ul>
    </section>
  );
}

export default Vacancies;
