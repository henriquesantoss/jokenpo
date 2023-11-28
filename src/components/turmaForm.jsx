import  { useState } from 'react';
import PropTypes from 'prop-types';

const TurmaForm = ({ onAddTurma }) => {
  const [turma, setTurma] = useState('');

  const handleAddTurma = () => {
    if (turma) {
      onAddTurma({ turma });
      // Limpar os campos após adicionar
      setTurma('');
    } else {
      alert('Preencha todos os campos para adicionar a turma.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Turma</h2>
      <label>Turma:</label>
      <input type="text" value={turma} onChange={(e) => setTurma(e.target.value)} />

      <button onClick={handleAddTurma}>Adicionar Turma</button>
    </div>
  );
};

TurmaForm.propTypes = {
  onAddTurma: PropTypes.func.isRequired,
};

export default TurmaForm;
