<template>
  <div>
    <b-dropdown :key="expense.id" class="">
      <b-dropdown-item v-b-modal.edit>Edit</b-dropdown-item>
      <b-dropdown-item @click="deleteExpense">Delete</b-dropdown-item>
    </b-dropdown>

      <edit-expense :expense="expense" @editExpense="editExpense"></edit-expense>


  </div>
</template>

<script>
  import EditExpense from './EditExpense'
  export default {
    props: ['expense'],
    methods: {
      editExpense () {
        console.log('Editing expense...')
        this.$store.dispatch('editExpense', this.expense)
      },
      deleteExpense () {
        this.$store.dispatch('deleteExpense', this.expense)
      }
    },
    components: { EditExpense }
  }
</script>
