import PropTypes from 'prop-types';

const ListaDadosProfessor = ({ dadosProfessores }) => {
  const excluirFinaisDeSemana = (dataInicio, dataFim) => {
    const diasSemana = [];
    const dataAtual = new Date(dataInicio);
    const dataFimObj = new Date(dataFim);

    while (dataAtual <= dataFimObj) {
      const diaSemana = dataAtual.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
      if (diaSemana !== 0 && diaSemana !== 6) {
        diasSemana.push(new Date(dataAtual));
      }

      dataAtual.setDate(dataAtual.getDate() + 1);
    }

    return diasSemana;
  };

  const calcularCargaHoraria = (dataInicio, dataFim) => {
    const diasSemana = excluirFinaisDeSemana(dataInicio, dataFim);
    return diasSemana.length;
  };

  return (
    <div>
      <h2>Lista de Dados do Professor</h2>
      <ul>
        {dadosProfessores.map((dados, index) => (
          <li key={index}>
            <strong>Professor:</strong> {dados.professor},{' '}
            <strong>Disciplina:</strong> {dados.disciplina}, <strong>Turma:</strong> {dados.turma},{' '}
            <strong>Primeiro Dia:</strong> {excluirFinaisDeSemana(dados.dataInicio, dados.dataFim)[0].toLocaleDateString()},{' '}
            <strong>Último Dia:</strong> {excluirFinaisDeSemana(dados.dataInicio, dados.dataFim).pop().toLocaleDateString()},{' '}
            <strong>Carga Horária (excluindo finais de semana):</strong> {calcularCargaHoraria(dados.dataInicio, dados.dataFim)} dias
          </li>
        ))}
      </ul>
    </div>
  );
};

ListaDadosProfessor.propTypes = {
  dadosProfessores: PropTypes.arrayOf(
    PropTypes.shape({
      professor: PropTypes.string.isRequired,
      disciplina: PropTypes.string.isRequired,
      turma: PropTypes.string.isRequired,
      dataInicio: PropTypes.string.isRequired,
      dataFim: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListaDadosProfessor;
