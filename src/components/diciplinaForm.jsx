import  { useState } from 'react';
import PropTypes from 'prop-types';

const DisciplinaForm = ({ onAddDisciplina }) => {
  const [disciplina, setDisciplina] = useState('');

  const handleAddDisciplina = () => {
    if (disciplina) {
      onAddDisciplina(disciplina);
      // Limpar o campo após adicionar
      setDisciplina('');
    } else {
      alert('Preencha o nome da disciplina para adicionar.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Disciplina</h2>
      <label>Nome da Disciplina:</label>
      <input type="text" value={disciplina} onChange={(e) => setDisciplina(e.target.value)} />
      <button onClick={handleAddDisciplina}>Adicionar Disciplina</button>
    </div>
  );
};

DisciplinaForm.propTypes = {
  onAddDisciplina: PropTypes.func.isRequired,
};

export default DisciplinaForm;
