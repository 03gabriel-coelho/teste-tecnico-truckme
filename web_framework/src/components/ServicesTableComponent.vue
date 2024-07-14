<script setup>
defineProps({})
</script>

<template>
  <div class="service-table-container">
    <table class="service-table" id="service-table">
      <h1 class="title">Serviços</h1>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Preço</th>
      </tr>
      <tr>
        <td>Transporte Rápido</td>
        <td>Entrega expressa de mercadorias com prazo máximo de 24 horas.</td>
        <td>R$ 150,00</td>
      </tr>
      <tr>
        <td>Frete Econômico</td>
        <td>Solução de transporte com custo reduzido para grandes volumes.</td>
        <td>R$ 100,00</td>
      </tr>
      <tr>
        <td>Logística Reversa</td>
        <td>
          Serviço de devolução de mercadorias com gestão completa do processo.
        </td>
        <td>R$ 80,00</td>
      </tr>
      <tr>
        <td>Armazenagem Segura</td>
        <td>Serviço de armazenagem em depósitos seguros e monitorados.</td>
        <td>R$ 200,00/mês</td>
      </tr>
      <tr>
        <td>Gestão de Fretes</td>
        <td>
          Gestão completa do transporte de mercadorias com otimização de rotas.
        </td>
        <td>R$ 250,00</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.service-table-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.service-table tr th {
  min-width: 25vw;
  background-color: #f05123;
  color: #fff;
  padding-top: 5px;
  padding-bottom: 5px;
}

.service-table tr td {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f5bdae;
}
</style>
