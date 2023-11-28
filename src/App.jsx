import  { useState } from 'react';
import ProfessorForm from './components/professorForm';
import DisciplinaForm from './components/diciplinaForm';
import TurmaForm from './components/turmaForm';
import ListaProfessores from './components/listaProfessor';
import AssociarTurma from './components/associarTurma';
import ListaDadosProfessor from './components/listaDadosProfessor';
import './App.css'
const App = () => {
  const [professores, setProfessores] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [dadosProfessores, setDadosProfessores] = useState([]);

  const handleAddProfessor = (professor) => {
    setProfessores([...professores, professor]);
  };

  const handleAddDisciplina = (disciplina) => {
    setDisciplinas([...disciplinas, disciplina]);
  };

  const handleAddTurma = (turma) => {
    setTurmas([...turmas, turma]);
  };

  const handleAssociarTurma = ({ professor, disciplina, turma, dataInicio, dataFim }) => {
    // Aqui você pode realizar a lógica necessária para associar a turma ao professor, disciplina, etc.
    const dadosProfessor = { professor, disciplina, turma, dataInicio, dataFim };
    setDadosProfessores([...dadosProfessores, dadosProfessor]);
  };

  return (
    <div>
      <h1>Cadastro Escolar</h1>
      <ProfessorForm onAddProfessor={handleAddProfessor} />
      <DisciplinaForm onAddDisciplina={handleAddDisciplina} />
      <TurmaForm professores={professores} disciplinas={disciplinas} onAddTurma={handleAddTurma} />
      <AssociarTurma
        professores={professores}
        disciplinas={disciplinas}
        turmas={turmas}
        onAssociarTurma={handleAssociarTurma}
      />
      <ListaDadosProfessor dadosProfessores={dadosProfessores} />
    </div>
  );
};

export default App;
