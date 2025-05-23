<template>
  <div class="questionario-container">
    <div v-if="!concluido" class="card">
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${progresso}%` }"></div>
      </div>
      <div class="progress-text">Pergunta {{ perguntaAtual + 1 }} de {{ perguntas.length }}</div>
      
      <div class="pergunta">
        <h3>{{ perguntas[perguntaAtual].texto }}</h3>
        
        <div class="alternativas">
          <div 
            v-for="(alternativa, index) in perguntas[perguntaAtual].alternativas" 
            :key="index"
            class="alternativa"
            :class="{ 'selecionada': respostaSelecionada === index }"
            @click="selecionarResposta(index)"
          >
            <div class="alternativa-texto">{{ alternativa.texto }}</div>
          </div>
        </div>
        
        <div class="navegacao">
          <button 
            v-if="perguntaAtual > 0" 
            class="btn-anterior" 
            @click="perguntaAnterior"
          >
            Anterior
          </button>
          <button 
            class="btn-proximo" 
            :disabled="respostaSelecionada === null"
            @click="proximaPergunta"
          >
            {{ perguntaAtual === perguntas.length - 1 ? 'Concluir' : 'Próxima' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import perguntas from './perguntas.js';

export default {
  name: 'Questionario',
  data() {
    return {
      perguntas,
      perguntaAtual: 0,
      respostas: Array(perguntas.length).fill(null),
      respostaSelecionada: null,
      concluido: false
    };
  },
  computed: {
    progresso() {
      return ((this.perguntaAtual + 1) / this.perguntas.length) * 100;
    }
  },
  methods: {
    selecionarResposta(index) {
      this.respostaSelecionada = index;
      this.respostas[this.perguntaAtual] = index;
    },
    perguntaAnterior() {
      if (this.perguntaAtual > 0) {
        this.perguntaAtual--;
        this.respostaSelecionada = this.respostas[this.perguntaAtual];
      }
    },
    proximaPergunta() {
      if (this.respostaSelecionada !== null) {
        // Salva a resposta atual
        this.respostas[this.perguntaAtual] = this.respostaSelecionada;
        
        if (this.perguntaAtual < this.perguntas.length - 1) {
          // Avança para a próxima pergunta
          this.perguntaAtual++;
          this.respostaSelecionada = this.respostas[this.perguntaAtual];
        } else {
          // Finaliza o questionário
          this.concluido = true;
          this.calcularResultados();
        }
      }
    },
    calcularResultados() {
      const resultados = {
        paciencia: 0,
        estresse: 0,
        comunicacao: 0,
        conhecimento: 0,
        foco: 0
      };
      
      // Calcula a pontuação para cada área
      this.respostas.forEach((resposta, index) => {
        const alternativaSelecionada = this.perguntas[index].alternativas[resposta];
        resultados.paciencia += alternativaSelecionada.valor.paciencia;
        resultados.estresse += alternativaSelecionada.valor.estresse;
        resultados.comunicacao += alternativaSelecionada.valor.comunicacao;
        resultados.conhecimento += alternativaSelecionada.valor.conhecimento;
        resultados.foco += alternativaSelecionada.valor.foco;
      });
      
      // Calcula a média para cada área (0-100%)
      const numPerguntas = this.perguntas.length;
      Object.keys(resultados).forEach(area => {
        resultados[area] = Math.round(resultados[area] / numPerguntas);
      });
      
      // Armazena os resultados e navega para a página de resultados
      localStorage.setItem('resultados', JSON.stringify(resultados));
      this.$router.push('/resultados');
    }
  },
  created() {
    // Limpa resultados anteriores
    localStorage.removeItem('resultados');
  }
}
</script>

<style scoped>
.questionario-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 800px;
  width: 100%;
}

.progress-bar {
  height: 8px;
  background-color: var(--light-gray);
  border-radius: 4px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.progress-text {
  text-align: right;
  font-size: 0.9rem;
  color: var(--medium-gray);
  margin-bottom: 2rem;
}

.pergunta h3 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: 1.3rem;
}

.alternativas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.alternativa {
  padding: 1rem;
  border: 2px solid var(--light-gray);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.alternativa:hover {
  border-color: var(--accent-color);
  background-color: rgba(67, 97, 238, 0.05);
}

.alternativa.selecionada {
  border-color: var(--primary-color);
  background-color: rgba(67, 97, 238, 0.1);
}

.navegacao {
  display: flex;
  justify-content: space-between;
}

.btn-anterior, .btn-proximo {
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-anterior {
  background-color: var(--light-gray);
  color: var(--dark-gray);
  border: none;
}

.btn-anterior:hover {
  background-color: var(--medium-gray);
  color: white;
}

.btn-proximo {
  background-color: var(--primary-color);
  color: white;
  border: none;
}

.btn-proximo:hover {
  background-color: var(--secondary-color);
}

.btn-proximo:disabled {
  background-color: var(--medium-gray);
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .pergunta h3 {
    font-size: 1.1rem;
  }
  
  .alternativa {
    padding: 0.8rem;
  }
  
  .btn-anterior, .btn-proximo {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
