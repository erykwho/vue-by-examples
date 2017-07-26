<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="border">
          <h2>Father</h2>
          <p>Count of children: {{children.length}}</p>
          <p>Do we have here a good father? <input type="checkbox" v-model="daddyGood"></p>

          <div class="row" v-show="children.length > 2">
            <label for="shuffle">Press this button (it's super cool)</label>
            <button @click="shuffle" type="button" id="shuffle" class="btn btn-danger">
              Shuffle
            </button>
          </div>
          <div class="row">
            <div class="col-6">
              <h4>Create</h4>
              <button @click="makeChild" type="button" class="btn btn-success">Make Child</button>
            </div>

            <div class="col-6" v-show="! daddyGood && children.length">
              <h4>Kill</h4>
              <select class="form-control" v-model="childIndexToKill">
                <option value="-1">Choose the lamb</option>
                <option v-for="(name, index) in children"
                        v-bind:value="index">
                  {{name}}
                </option>
              </select>
              <button v-on:click="removeChild(childIndexToKill)" type="button" class="btn btn-warning">Kill</button>
              <button @click="killAll" type="button" class="btn btn-danger">Kill All</button>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <span v-show="children.length">
        <h2 class="col-12">Daddy's Children</h2>

        <transition-group name="flip-list" tag="div" class="row">
          <template v-for='(name, index) in children'>

            <div :key="name" class="col-auto border">
              <child
                v-bind:index="index"
                v-bind:name="name"
                v-bind:daddyGood="daddyGood"
                v-on:abortChild="removeChild($event)"
                v-on:rename="renameChild($event)">
              </child>
            </div>
          </template>
        </transition-group>
      </span>
    </div>

  </div>
</template>


<script>
import Child from '@/components/Child.vue'
import _ from 'lodash'
export default {
  data () {
    return {
      children: [],
      currentChild: 1,
      total: 0,
      childNameToKill: '',
      childIndexToKill: '-1',
      daddyGood: true
    }
  },
  methods: {
    makeChild: function () {
      var newName = ''
      if (this.daddyGood) {
        newName = 'Good boy ' + String(this.currentChild)
      } else {
        newName = 'Traumatized boy ' + String(this.currentChild)
      }
      this.children.splice(this.total, 0, newName)
      this.currentChild += 1
      this.total += 1
    },
    removeChild: function (index) {
      if (isNaN(index) || index < 0) {
        // index should be a number
        return
      }
      if (this.total > 0) {
        this.children.splice(index, 1)
        this.total -= 1
      }
    },
    renameChild: function ($event) {
      this.children.splice($event.index, 1)
      this.children.splice($event.index, 0, $event.newName)
    },
    killAll: function () {
      this.children = []
      this.total = 0
    },
    killChildFromName: function () {
      var index = this.children.indexOf(this.childNameToKill)
      console.log(this.childNameToKill)
      console.log(index)
      if (index !== -1) {
        this.removeChild(index)
      }
    },
    shuffle: function () {
      this.children = _.shuffle(this.children)
    }
  },
  components: {
    Child
  }
}
</script>


<style>
  .flip-list-move {
    transition: transform .40s;
  }

  .border {
    border: 1px solid black;
    padding: 0px 20px 10px 20px;
    margin: 0px 0px 10px 0px;
  }
</style>
