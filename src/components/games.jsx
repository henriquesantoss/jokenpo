import { useState, useEffect } from "react";

const Game = () => {
  const choices = ["pedra", "papel", "tessoura"];
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draws, setDraws] = useState(0);

  // Função para gerar a escolha aleatória do computador
  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // Função para determinar o vencedor de uma rodada
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setDraws(draws + 1);
      return "Empate!";
    } else if (
      (player === "pedra" && computer === "tessoura") ||
      (player === "papel" && computer === "pedra") ||
      (player === "tessoura" && computer === "papel")
    ) {
      setPlayerScore(playerScore + 1);
      return "Jogador vence!";
    } else {
      setComputerScore(computerScore + 1);
      return "Computador vence!";
    }
  };

  // Função para lidar com a escolha do jogador
  const handlePlayerChoice = (choice) => {
    const computer = generateComputerChoice();
    const roundResult = determineWinner(choice, computer);
    setComputerChoice(computer);
    setResult(roundResult);
  };

  useEffect(() => {
    // Chame a função para escolher aleatoriamente o computador quando o componente é montado
    handlePlayerChoice(choices[Math.floor(Math.random() * choices.length)]);
  }, []);

  return (
    <div>
      <h2>Escolha do Jogador</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <h2>Escolha do Computador</h2>
      <div className="choices">
        <button disabled>{computerChoice}</button>
      </div>
      <h2>Resultado</h2>
      <p>{result}</p>
      <h2>Placar</h2>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
      <p>Empates: {draws}</p>
    </div>
  );
};

export default Game;
