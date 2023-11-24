import { useState } from 'react';
import styles from './formulario.module.css'

const Diagnostico = () => {
  const [respostas, setRespostas] = useState({
    prurido: '',
    eritema: '',
    escamas: '',
    distribuicaoLesoes: '',
    evolucaoSintomas: '',
    antecedentesFamiliares: '',
    sensibilidadeADeterminadosProdutos: '',
    exposicaoAoSol: '',
    outrosSintomas: '',
  });

  const [diagnostico, setDiagnostico] = useState('');

  const handleInputChange = (pergunta, resposta) => {
    setRespostas({ ...respostas, [pergunta]: resposta });
  };

  const realizarDiagnostico = () => {
    // Lógica simplificada para determinar o diagnóstico com base nas respostas
    // Aqui, é apenas um exemplo fictício. Na prática, você precisaria de uma lógica mais sofisticada.

    const pontuacao = Object.values(respostas).reduce((total, resposta) => total + parseInt(resposta), 0);

    if (pontuacao >= 35) {
      setDiagnostico('Os sintomas indicam a possibilidade de uma condição dermatológica significativa. Recomendamos uma avaliação profissional imediata.');
    } else if (pontuacao >= 25) {
      setDiagnostico('Os sintomas sugerem uma condição dermatológica moderada. Consulte um dermatologista para uma avaliação aprofundada.');
    } else {
      setDiagnostico('Não podemos fornecer um diagnóstico conclusivo com base nas respostas fornecidas. Recomendamos uma avaliação profissional para um diagnóstico preciso.');
    }
  };

  return (
    <div className={styles.forms}>
      <h1>Pré-Triagem Dermatológica</h1>
      <p>Por favor, forneça informações detalhadas sobre seus sintomas:</p>
      <label>
        Intensidade do prurido (coceira) de 0 a 10:
        <input
          type="number"
          value={respostas.prurido}
          onChange={(e) => handleInputChange('prurido', e.target.value)}
        />
      </label>
      <br />
      <label>
        Intensidade do eritema (vermelhidão) de 0 a 10:
        <input
          type="number"
          value={respostas.eritema}
          onChange={(e) => handleInputChange('eritema', e.target.value)}
        />
      </label>
      <br />
      <label>
        Intensidade da presença de escamas de 0 a 10:
        <input
          type="number"
          value={respostas.escamas}
          onChange={(e) => handleInputChange('escamas', e.target.value)}
        />
      </label>
      <br />
      <label>
        Distribuição das lesões cutâneas (localizada, generalizada, etc.):
        <input
          type="text"
          value={respostas.distribuicaoLesoes}
          onChange={(e) => handleInputChange('distribuicaoLesoes', e.target.value)}
        />
      </label>
      <br />
      <label>
        Evolução dos sintomas ao longo do tempo:
        <input
          type="text"
          value={respostas.evolucaoSintomas}
          onChange={(e) => handleInputChange('evolucaoSintomas', e.target.value)}
        />
      </label>
      <br />
      <label>
        Antecedentes familiares de condições dermatológicas:
        <input
          type="text"
          value={respostas.antecedentesFamiliares}
          onChange={(e) => handleInputChange('antecedentesFamiliares', e.target.value)}
        />
      </label>
      <br />
      <label>
        Sensibilidade a determinados produtos ou substâncias:
        <input
          type="text"
          value={respostas.sensibilidadeADeterminadosProdutos}
          onChange={(e) => handleInputChange('sensibilidadeADeterminadosProdutos', e.target.value)}
        />
      </label>
      <br />
      <label>
        Exposição recente ao sol ou a agentes irritantes:
        <input
          type="text"
          value={respostas.exposicaoAoSol}
          onChange={(e) => handleInputChange('exposicaoAoSol', e.target.value)}
        />
      </label>
      <br />
      <label>
        Outros sintomas relevantes (febre, mal-estar, etc.):
        <input
          type="text"
          value={respostas.outrosSintomas}
          onChange={(e) => handleInputChange('outrosSintomas', e.target.value)}
        />
      </label>
      <br />
      <button onClick={realizarDiagnostico}>Realizar Diagnóstico</button>
      <div>
        <h2>Diagnóstico:</h2>
        <p>{diagnostico}</p>
      </div>
    </div>
  );
};

export default Diagnostico;
