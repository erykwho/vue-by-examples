<template>
  <div>
    <b-button size="sm" variant="secondary" v-b-modal="String(expense.id)">
      Edit
    </b-button>
    <b-button size="sm" variant="secondary" @click="deleteExpense">
      Delete
    </b-button>

    <b-modal :id="String(expense.id)" title="Edit expense" @ok="editExpense">
      <expense-form :expense="expense"></expense-form>
    </b-modal>

  </div>
</template>

<script>
  import ExpenseForm from './ExpenseForm'
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
    components: { ExpenseForm }
  }
</script>
