<template>
  <div class="resultados-container">
    <div class="card">
      <h2>Resultados da Análise de Perfil</h2>
      
      <div class="descricao">
        <p>Com base nas suas respostas, aqui está a análise do seu perfil nas cinco áreas avaliadas:</p>
      </div>
      
      <div class="graficos">
        <div class="grafico-container">
          <canvas ref="graficoRadar"></canvas>
        </div>
        
        <div class="barras-container">
          <div v-for="(valor, area) in resultados" :key="area" class="barra-item">
            <div class="barra-label">
              <span class="area-nome">{{ formatarNomeArea(area) }}</span>
              <span class="area-valor">{{ valor }}%</span>
            </div>
            <div class="barra-bg">
              <div class="barra-progresso" :style="{ width: `${valor}%`, backgroundColor: getCor(area) }"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="interpretacao">
        <h3>Interpretação dos Resultados</h3>
        <div v-for="(valor, area) in resultados" :key="area" class="area-interpretacao">
          <h4>{{ formatarNomeArea(area) }}: {{ valor }}%</h4>
          <p>{{ getInterpretacao(area, valor) }}</p>
        </div>
      </div>
      
      <div class="acoes">
        <button class="btn-reiniciar" @click="reiniciarQuestionario">Refazer Questionário</button>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Resultados',
  data() {
    return {
      resultados: {
        paciencia: 0,
        estresse: 0,
        comunicacao: 0,
        conhecimento: 0,
        foco: 0
      },
      graficoRadar: null,
      cores: {
        paciencia: '#4cc9f0',
        estresse: '#f72585',
        comunicacao: '#7209b7',
        conhecimento: '#3f37c9',
        foco: '#4361ee'
      }
    };
  },
  mounted() {
    // Carrega os resultados do localStorage
    const resultadosSalvos = localStorage.getItem('resultados');
    if (resultadosSalvos) {
      this.resultados = JSON.parse(resultadosSalvos);
      this.criarGraficoRadar();
    } else {
      // Se não houver resultados, volta para a página inicial
      this.$router.push('/');
    }
  },
  methods: {
    criarGraficoRadar() {
      const ctx = this.$refs.graficoRadar.getContext('2d');
      
      // Destrói o gráfico anterior se existir
      if (this.graficoRadar) {
        this.graficoRadar.destroy();
      }
      
      this.graficoRadar = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [
            'Paciência',
            'Comunicação',
            'Conhecimento',
            'Foco',
            'Controle de Estresse'
          ],
          datasets: [{
            label: 'Seu Perfil',
            data: [
              this.resultados.paciencia,
              this.resultados.comunicacao,
              this.resultados.conhecimento,
              this.resultados.foco,
              100 - this.resultados.estresse // Inverte o valor do estresse para representar "controle de estresse"
            ],
            backgroundColor: 'rgba(67, 97, 238, 0.2)',
            borderColor: 'rgba(67, 97, 238, 0.8)',
            pointBackgroundColor: 'rgba(67, 97, 238, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(67, 97, 238, 1)'
          }]
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: true
              },
              suggestedMin: 0,
              suggestedMax: 100
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    },
    formatarNomeArea(area) {
      const nomes = {
        paciencia: 'Paciência',
        estresse: 'Estresse',
        comunicacao: 'Comunicação',
        conhecimento: 'Conhecimento',
        foco: 'Foco'
      };
      return nomes[area] || area;
    },
    getCor(area) {
      return this.cores[area] || '#4361ee';
    },
    getInterpretacao(area, valor) {
      const interpretacoes = {
        paciencia: {
          baixo: 'Você tende a ficar impaciente em situações que exigem espera ou tolerância. Desenvolver técnicas de respiração e mindfulness pode ajudar a aumentar sua paciência.',
          medio: 'Você demonstra um nível moderado de paciência, conseguindo lidar com situações que exigem espera, mas ainda pode melhorar em cenários mais desafiadores.',
          alto: 'Você demonstra excelente capacidade de manter a calma e a paciência mesmo em situações desafiadoras, o que é uma grande vantagem para resolução de problemas complexos.'
        },
        estresse: {
          baixo: 'Você demonstra excelente controle sobre o estresse, mantendo a calma mesmo em situações de pressão. Continue praticando técnicas que funcionam para você.',
          medio: 'Você lida razoavelmente bem com o estresse, mas pode se beneficiar de técnicas adicionais de gerenciamento em situações mais desafiadoras.',
          alto: 'Você tende a experimentar níveis elevados de estresse. Considere incorporar técnicas de relaxamento, exercícios físicos e melhor organização do tempo em sua rotina.'
        },
        comunicacao: {
          baixo: 'Sua comunicação pode se beneficiar de mais clareza e assertividade. Praticar a escuta ativa e buscar feedback sobre sua forma de se expressar pode ajudar.',
          medio: 'Você possui habilidades de comunicação razoáveis, conseguindo expressar ideias e ouvir os outros, mas ainda há espaço para aprimoramento.',
          alto: 'Você demonstra excelentes habilidades de comunicação, sabendo expressar ideias com clareza e escutar ativamente, o que facilita suas interações pessoais e profissionais.'
        },
        conhecimento: {
          baixo: 'Você pode se beneficiar de uma abordagem mais estruturada para adquirir e reter conhecimentos. Experimente diferentes métodos de estudo e aprendizado.',
          medio: 'Você demonstra boa capacidade de adquirir e aplicar conhecimentos, mas pode aprimorar suas estratégias de aprendizado para resultados ainda melhores.',
          alto: 'Você possui excelente capacidade de adquirir, reter e aplicar conhecimentos, o que é uma grande vantagem para seu desenvolvimento pessoal e profissional.'
        },
        foco: {
          baixo: 'Você pode enfrentar desafios para manter o foco, especialmente em ambientes com distrações. Técnicas como Pomodoro e eliminação de distrações podem ajudar.',
          medio: 'Você consegue manter o foco em tarefas importantes, mas pode se beneficiar de técnicas adicionais para melhorar a concentração em ambientes desafiadores.',
          alto: 'Você demonstra excelente capacidade de concentração e foco, conseguindo manter-se produtivo mesmo em ambientes com distrações.'
        }
      };
      
      let nivel;
      if (valor < 40) {
        nivel = 'baixo';
      } else if (valor < 70) {
        nivel = 'medio';
      } else {
        nivel = 'alto';
      }
      
      return interpretacoes[area][nivel];
    },
    reiniciarQuestionario() {
      localStorage.removeItem('resultados');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.resultados-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 900px;
  width: 100%;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
}

.descricao {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--dark-gray);
}

.graficos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.grafico-container {
  height: 300px;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
}

.barras-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.barra-item {
  width: 100%;
}

.barra-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}

.area-nome {
  font-weight: 500;
}

.area-valor {
  font-weight: 700;
}

.barra-bg {
  height: 12px;
  background-color: var(--light-gray);
  border-radius: 6px;
  overflow: hidden;
}

.barra-progresso {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease-out;
}

.interpretacao {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.interpretacao h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
}

.area-interpretacao {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--background-color);
}

.area-interpretacao h4 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.acoes {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn-reiniciar {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-reiniciar:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .grafico-container {
    height: 250px;
  }
}
</style>
