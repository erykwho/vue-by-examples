<template>
  <div>
    <b-button size="sm" variant="secondary" v-b-modal="'editExpense ' + String(expense.id)">
      Edit
    </b-button>
    <b-button size="sm" variant="secondary" v-b-modal="'deleteExpense ' + String(expense.id)">
      Delete
    </b-button>

    <b-modal :id="'editExpense ' + String(expense.id)" title="Edit expense" @ok="editExpense">
      <expense-form :expense="expense"></expense-form>
    </b-modal>

    <b-modal :id="'deleteExpense ' + String(expense.id)" title="Delete expense" @ok="deleteExpense">
      <p>Are you sure you want to delete this expense?</p>
    </b-modal>

  </div>
</template>

<script>
  import ExpenseForm from './ExpenseForm'
  export default {
    props: ['expense'],
    methods: {
      editExpense () {
        this.$emit('info', 'Expense edited')
        this.$store.dispatch('editExpense', this.expense)
      },
      deleteExpense () {
        this.$emit('info', 'Expense deleted')
        this.$store.dispatch('deleteExpense', this.expense)
      }
    },
    components: { ExpenseForm }
  }
</script>
