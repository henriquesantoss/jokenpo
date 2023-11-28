import React, { useState } from 'react';

const ProfessorForm = ({ onAddProfessor }) => {
  const [nome, setNome] = useState('');

  const handleAddProfessor = () => {
    if (nome) {
      onAddProfessor({ nome });
      // Limpar os campos após adicionar
      setNome('');
    } else {
      alert('Preencha o nome do professor para adicionar.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Professor</h2>
      <label>Nome do Professor:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={handleAddProfessor}>Adicionar Professor</button>
    </div>
  );
};

export default ProfessorForm;
