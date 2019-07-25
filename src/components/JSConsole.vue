<template>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>

          <v-data-table
            :headers="headers"
            :items="inputs"
            
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.value }}</td>
            </template>
          </v-data-table>

          <codemirror v-model="code" :options="cmOptions"></codemirror>
          <button @click="test">TEST</button>
          <textarea disabled v-model="result"></textarea> 
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>

import Commander from 'safe-run';
import Vue from 'vue'


import { codemirror } from 'vue-codemirror'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/keymap/sublime'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/paraiso-light.css'
import 'codemirror/theme/mbo.css'




export default {
  name: 'jsConsole',
  props: {
  },
  data() {
    return {
      headers: [{
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        }, {
          text: 'Value', 
          align: 'left', 
          sortable: false, 
          value: 'value'
        }],
      inputs: [{name: 'arg1', value: 100}],
      result: "",
      code: `//return moment().format('dddd MMMM D, YYYY') // External Library!!!

function add(val1, val2) {
  return val1 + val2
} 

var inputs = [10, 20]

return add(...inputs) // ES6!!!`,
      commander: new Commander(50000),
      cmOptions: {
        tabSize: 2, 
        electricChars: true,
        styleActiveLine: true,
        mode: 'text/javascript',
        theme: 'mbo',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        styleSelectedText: true,
        keymap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
      }
    }
  },
  methods: {
    async test() { 
      await this.commander.run(['https://momentjs.com/downloads/moment.js'], this.code, ["arg1"], [100])
      .then((result) => {
        this.result = result
      })
      .catch((err) => {
        this.result = err
      }) }
  },
  components: {
    codemirror
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
