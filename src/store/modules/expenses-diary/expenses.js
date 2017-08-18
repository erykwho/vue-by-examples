import axios from 'axios'

const state = {
  expenses: []
}

const getters = {
  expenses: (state) => {
    return state.expenses
  },
  totalExpenses: (state) => {
    return state.totalExpenses
  },
  totalExpensesAmount: (state) => {
    return 0
  }
}

const mutations = {
  getExpenses: (state, expenses) => {
    state.expenses = expenses.content
    state.totalExpenses = expenses.total
  },
  createExpense: (state, expense) => { console.log('Mutation: Create create expense'); console.log(expense) },
  editExpense: (state, expense) => { console.log('Mutation: Edit expense ' + String(expense.id)) },
  deleteExpense: (state, expense) => { console.log('Mutation: Delete expense ' + String(expense.id)) }
}

const actions = {
  getExpenses: (context) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:5000/v1/expenses')
        .then(response => {
          context.commit('getExpenses', response.data)
          resolve()
        })
        .catch(error => {
          console.log('Error while getting expenses')
          reject(error)
        })
    })
  },
  createExpense: (context, expense) => {
    axios.post('http://localhost:5000/v1/expenses', {
      ...expense
    })
      .then(response => {
        context.commit('createExpense', expense)
        console.log('Expense created')
      })
      .catch(error => {
        console.log('Error')
        console.log(error)
      })
  },
  editExpense: (context, expense) => {
    axios.patch('http://localhost:5000/v1/expenses/' + String(expense.id), {
      payment_origin_id: expense.payment_origin_id,
      category_id: expense.category_id,
      reference_date: expense.reference_date,
      description: expense.description,
      amount: expense.amount,
      regreted: expense.regreted,
      comments: expense.comments
    })
      .then(response => {
        // JSON responses are automatically parsed.
        context.commit('editExpense', expense)
        console.log('Expense edited')
      })
      .catch(error => {
        console.log('Error')
        console.log(error)
      })
  },
  deleteExpense: (context, expense) => {
    axios.delete('http://localhost:5000/v1/expenses/' + String(expense.id))
      .then(response => {
        // JSON responses are automatically parsed.
        context.commit('deleteExpense', expense)
        console.log('Expense deleted')
      })
      .catch(error => {
        console.log('Error')
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
