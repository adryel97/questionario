<template>
  <div class="inicio-container">
    <div class="card">
      <h2>Bem-vindo ao Questionário de Perfil</h2>
      <p class="description">
        Este questionário foi desenvolvido para analisar seu perfil em cinco áreas principais:
      </p>
      
      <div class="areas">
        <div class="area-item">
          <div class="area-icon" style="background-color: #4cc9f0;">P</div>
          <div class="area-name">Paciência</div>
        </div>
        <div class="area-item">
          <div class="area-icon" style="background-color: #f72585;">E</div>
          <div class="area-name">Estresse</div>
        </div>
        <div class="area-item">
          <div class="area-icon" style="background-color: #7209b7;">C</div>
          <div class="area-name">Comunicação</div>
        </div>
        <div class="area-item">
          <div class="area-icon" style="background-color: #3f37c9;">C</div>
          <div class="area-name">Conhecimento</div>
        </div>
        <div class="area-item">
          <div class="area-icon" style="background-color: #4361ee;">F</div>
          <div class="area-name">Foco</div>
        </div>
      </div>
      
      <p class="instructions">
        O questionário contém 20 perguntas com 5 alternativas cada. Escolha a alternativa que melhor representa seu comportamento habitual.
      </p>
      
      <p class="time-estimate">
        Tempo estimado: 5-10 minutos
      </p>
      
      <button class="start-button" @click="iniciarQuestionario">
        Iniciar Questionário
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  methods: {
    iniciarQuestionario() {
      this.$router.push('/questionario');
    }
  }
}
</script>

<style scoped>
.inicio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  text-align: center;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--dark-gray);
}

.areas {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.area-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.area-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.area-name {
  font-weight: 500;
}

.instructions {
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
}

.time-estimate {
  font-style: italic;
  color: var(--medium-gray);
  margin-bottom: 2rem;
}

.start-button {
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

.start-button:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
  
  .areas {
    gap: 1rem;
  }
  
  .area-item {
    width: 80px;
  }
}
</style>
