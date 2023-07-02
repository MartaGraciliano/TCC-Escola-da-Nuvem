import React from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import Carousel from 'react-elastic-carousel';
import './Vacancies.css';

const curriculums = [
  {
    img: '/assets/CV-Rayane-Pacote.png',
    pdf: '/assets/CV-Rayane-Pacote.pdf',
    nome: 'Rayane Pacote',
    local: 'João Pessoa, PB',
    descricao:
      'Formada em desenvolvimento Web-Fullstack na Trybe. Atualmente cursando Cloud Computing na Escola da Nuvem (Finalizo em Julho) . Participei de bootcamps de Game Dev, Power Bi, QA testes e UX na DIO. Cursando Computação em nuvem pela Descomplica Faculdade Digital e estagiei como Summer Job currículo Front-end pela Trybe. Estou constantemente em busca de novos aprendizados.',
  },
  {
    img: '/assets/CV - Robert Harlem Teixeira.png',
    pdf: '/assets/CV - Robert Harlem Teixeira.pdf',
    nome: 'Robert Harlem Teixeira',
    local: 'São Gonçalo, RJ',
    descricao:
      'Sou um entusiasta da tecnologia, atualmente estou cursando Tecnologia da Informação na Estácio. Durante meus estudos, me deparei com a fascinante área de Cloud Computing e desde então tenho buscado oportunidades para aprimorar minhas habilidades nesse campo, especialmente em plataformas como AWS, Azure e Google Cloud. Meu objetivo é ingressar como Estagiário em uma empresa onde eu possa crescer e aprimorar meus conhecimentos, contribuindo para atender às necessidades da organização e alcançar resultados excepcionais.',
  },
  {
    img: '/assets/CV - Murilo.Mendes.png',
    pdf: '/assets/CV - Murilo.Mendes.pdf',
    nome: 'Murilo Mendes',
    local: 'Barretos, SP',
    descricao:
      'Busco uma oportunidade como Jovem Aprendiz na área de tecnologia, com foco em Cloud Computing. Tenho adquirido conhecimento por meio de cursos na área de redes de computadores, além de estar atualmente estudando Python por meio de cursos na Udemy. Também estou participando de um curso na Escola da Nuvem, onde adquiri conhecimentos em fundamentos da AWS e em serviços como Ec2, EBS, S3, CloudFront, AWS Budget, Route 53 e AWS Cost Explorer. Estou entusiasmado em aplicar e expandir meus conhecimentos nesse campo promissor.',
  },
  {
    img: '/assets/CV - Mateus Figueiredo.png',
    pdf: '/assets/CV - Mateus Figueiredo.pdf',
    nome: 'Mateus Figueiredo',
    local: 'Laguna, SC',
    descricao:
      'Sou recém formado em Ciência da Computação, procurando pelo meu primeiro emprego para poder aplicar o que aprendi durante os meus estudos. Tenho experiência dando aulas particulares de programação e in- formática, assim como auxiliando professores no ensino de alunos. Também gosto de trabalhar em projetos pessoais de programação diversos, especialmente aplicações web e jogos. Busco um emprego que me desafie, no qual eu possa aplicar meus conhecimentos e adquirir novas experiências e habilidades.',
  },
  {
    img: '/assets/CV - Marta Graciliano - Cloud.png',
    pdf: '/assets/CV - Marta Graciliano - Cloud.pdf',
    nome: 'Marta Graciliano',
    local: 'Paracambi, RJ',
    descricao:
      'Profissional dinâmica com ampla experiência em funções administrativas, vendas e recrutamento e seleção, estou atualmente em transição de carreira para me dedicar à empolgante área de Cloud Computing. Ao longo de minha trajetória, adquiri habilidades valiosas em negociação, gestão de clientes e as quais pretendo aplicar na solução de desafios e na entrega de resultados na área de Cloud. Atualmente estou participando de um curso na Escola da Nuvem, onde adquiri conhecimentos em fundamentos da AWS e em serviços como Ec2, EBS, S3, CloudFront, AWS Budget, Route 53 e AWS Cost Explorer.',
  },
  {
    img: '/assets/CV - Marilia Clement.png',
    pdf: '/assets/CV - Marilia Clement.pdf',
    nome: 'Marilia Clement',
    local: 'Governors Beach, CYP',
    descricao:
      'Experiência em atendimento ao cliente, eu sempre me concentro na experiência que meu consumidor final terá com o produto. Tenho 7 anos de experiência em Gestão e Consultoria Digital. Entusiasta do mercado financeiro e tecnologia.',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  // { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  // { width: 768, itemsToShow: 1, itemsToScroll: 2 },
  // { width: 1200, itemsToShow: 1, itemsToScroll: 2 },
];

function Vacancies() {
  return (
    <section className="vacancy-container">
      <h2>Conheça nossos integrantes</h2>
      <ul>
        <Carousel breakPoints={breakPoints} isRTL={false}>
          {curriculums.map(({ nome, img, pdf, local, descricao }, index) => (
            <li className="vacancy-card" key={index}>
              <img src={img} alt={nome} />
              <div>
                <h3>{nome}</h3>
                <p>{local}</p>
                <p>{descricao}</p>
                <a href={pdf} target="_blank" rel="noreferrer">
                  Abrir PDF <MdPictureAsPdf />
                </a>
              </div>
            </li>
          ))}
        </Carousel>
      </ul>
    </section>
  );
}

export default Vacancies;
