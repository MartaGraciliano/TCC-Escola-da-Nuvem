import React, { useState } from 'react';
import { FaWpforms } from 'react-icons/fa';
import './Forms.css';

function Forms() {
  const [file, setFile] = useState('');

  const handleChange = ({ target: { files } }) => {
    setFile(`Arquivo adicionado: ${files[0].name}`);
    console.log(files);
  }

  return (
    <section className="job-container">
      <div className="title-form">
        <h2>Envie seu Currículo</h2>
        <FaWpforms size={40} color="#024CB5" />
      </div>
      <h3>Venha trabalhar conosco!</h3>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>
        <div>
          <label className="custom-file-input" htmlFor="curriculo">
            Adicione seu currículo
          </label>
          <input
            className="file-input"
            type="file"
            id="curriculo"
            name="curriculo"
            onChange={handleChange}
            required
          />
          <p
          className={ file ? 'file-fill' : 'file-empty' }
          >{file}</p>
        </div>
        <button type="button">Enviar Currículo</button>
      </form>
    </section>
  );
}

export default Forms;
