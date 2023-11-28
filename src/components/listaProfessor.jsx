import React from 'react';

const ListaProfessores = ({ professores }) => {
  return (
    <div>
      <h2>Lista de Professores</h2>
      <ul>
        {professores.map((professor, index) => (
          <li key={index}>{professor.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProfessores;
