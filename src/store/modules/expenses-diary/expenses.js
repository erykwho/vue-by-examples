import axios from 'axios'
// const EXD_EXPENSES_URL = 'http://localhost:5000/v1/expenses'
const EXD_EXPENSES_URL = process.env.EXD_EXPENSES_URL
console.log(EXD_EXPENSES_URL)

const state = {
  expenses: [],
  totalExpenses: 0
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
  createExpense: (state, expense) => {
    state.expenses.push(expense)
    state.totalExpenses++
  },
  editExpense: (state, expense) => {
    let index = state.expenses.map((el) => el.id).indexOf(expense.id)
    state.expenses.splice(index, 1)
    state.expenses.splice(index, 0, expense)
  },
  deleteExpense: (state, expense) => {
    let index = state.expenses.map((el) => el.id).indexOf(expense.id)
    state.expenses.splice(index, 1)
    state.totalExpenses--
  }
}

const actions = {
  getExpenses: (context) => {
    return new Promise((resolve, reject) => {
      axios.get(EXD_EXPENSES_URL)
        .then((response) => {
          context.commit('getExpenses', response.data)
          resolve()
        })
        .catch(() => {
          console.log('Error while getting expenses')
          reject()
        })
    })
  },
  createExpense: (context, expense) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_EXPENSES_URL, {
        ...expense
      })
        .then(() => {
          context.commit('createExpense', expense)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },
  editExpense: (context, expense) => {
    axios.patch(EXD_EXPENSES_URL + '/' + String(expense.id), {
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
    axios.delete(EXD_EXPENSES_URL + '/' + String(expense.id))
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
