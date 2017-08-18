<template>
  <b-modal id="edit" title="Edit expense" @ok="submit">
    <form @submit.stop.prevent="submit">

      <div class="row">
        <label for="reference_date" class="control-label col-3 m-3">Date:</label>
        <b-form-input id="reference_date" type="date" placeholder="Date"
                      v-model="expense.reference_date" class="form-control col-7 m-2">
        </b-form-input>
      </div>

      <div class="row">
        <label for="description" class="control-label col-3 m-3">Description:</label>
        <b-form-input id="description" type="text" placeholder="Description"
                      v-model="expense.description" class="form-control col-7 m-2">
        </b-form-input>
      </div>

      <!--<div class="row">-->
        <!--<label for="category_id" class="control-label col-3 m-3">Category Id:</label>-->
        <!--<b-form-input id="category_id" type="number" placeholder="Category"-->
                      <!--v-model="expense.category_id" class="form-control col-7 m-2">-->
        <!--</b-form-input>-->
      <!--</div>-->

      <!--<div class="row">-->
        <!--<label for="regreted" class="control-label col-3 m-3">Regreted:</label>-->
        <!--<b-form-input id="regreted" type="checkbox"-->
                      <!--v-model="expense.regreted" class="form-control col-2 align-self-center">-->
        <!--</b-form-input>-->
      <!--</div>-->

      <!--<div class="row">-->
        <!--<label for="amount" class="control-label col-3 m-3">Amount:</label>-->
        <!--<b-form-input id="amount" type="number" placeholder="Amount"-->
                      <!--v-model="expense.amount" class="form-control col-7 m-2">-->
        <!--</b-form-input>-->
      </div>

    </form>
  </b-modal>
</template>

<script>
  export default {
    props: ['expense'],
    methods: {
      submit () {
        console.log('submiting edit expense')
        this.$emit('editExpense')
      }
    }
  }
</script>
