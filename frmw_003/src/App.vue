<template>
  <div id="app">
    <h4 id="author" title="GossJS" hidden>Valentin Kiselev</h4>
    <h2>FRMW-003</h2>
    <ul id="tasks">
        <li v-for="task in tasks">
          {{ task }}
          <input type="checkbox" v-on:change="taskChanged" />
        </li>
    </ul>
    <input v-model="value" placeholder="пустое" />
    <button v-on:click="addTask">Добавить</button>
    <br />
    <button v-on:click="removeChecked">Удалить выполненные</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    // Fails with CORS
    fetch('https://kodaktor.ru/j/tasklist', { method: 'GET' }).then(r=>r.json()).then(j=>{ this.tasks=j.list }).catch(() => this.tasks = ['первое', 'второе']);
    return {
      tasks: [],
      value: ''
    }
  },
  components: {},
  methods: {
    addTask() {
      if (this.value.length == 0) {
        alert('Пустая задача? Такую не добавлю :)');
        return;
      }
      this.tasks.push(this.value);
      this.value = '';
    },
    taskChanged(event) {
      if(event.target.checked) {
        event.target.parentNode.classList.add('crossed');
      } else {
        event.target.parentNode.classList.remove('crossed');
      }
    },
    removeChecked() {
      let ul = document.querySelector('#tasks');
      Array.from(document.querySelectorAll('li.crossed')).forEach((li) => {
        ul.removeChild(li);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.crossed {
  text-decoration: line-through;
}
</style>
