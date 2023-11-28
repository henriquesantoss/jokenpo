import  { useState } from 'react';
import PropTypes from 'prop-types';

const AssociarTurma = ({ professores, disciplinas, turmas, onAssociarTurma }) => {
  const [professor, setProfessor] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [turma, setTurma] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const handleAssociarTurma = () => {
    if (professor && disciplina && turma && dataInicio && dataFim) {
      onAssociarTurma({ professor, disciplina, turma, dataInicio, dataFim });
      // Limpar os campos após associar
      setProfessor('');
      setDisciplina('');
      setTurma('');
      setDataInicio('');
      setDataFim('');
    } else {
      alert('Preencha todos os campos para associar a turma.');
    }
  };

  return (
    <div>
      <h2>Associar Turma</h2>
      <label>Professor:</label>
      <select value={professor} onChange={(e) => setProfessor(e.target.value)}>
        <option value="">Selecione um Professor</option>
        {professores.map((p) => (
          <option key={p.nome} value={p.nome}>
            {p.nome}
          </option>
        ))}
      </select>

      <label>Disciplina:</label>
      <select value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
        <option value="">Selecione uma Disciplina</option>
        {disciplinas.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <label>Turma:</label>
      <select value={turma} onChange={(e) => setTurma(e.target.value)}>
        <option value="">Selecione uma Turma</option>
        {turmas.map((t) => (
          <option key={t.turma} value={t.turma}>
            {t.turma}
          </option>
        ))}
      </select>

      <label>Data de Início:</label>
      <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />

      <label>Data de Fim:</label>
      <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />

      <button onClick={handleAssociarTurma}>Associar Turma</button>
    </div>
  );
};

AssociarTurma.propTypes = {
  professores: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
    })
  ).isRequired,
  disciplinas: PropTypes.arrayOf(PropTypes.string).isRequired,
  turmas: PropTypes.arrayOf(
    PropTypes.shape({
      turma: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAssociarTurma: PropTypes.func.isRequired,
};

export default AssociarTurma;
