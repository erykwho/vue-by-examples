import axios from 'axios'
import store from '@/store'
// const EXD_EXPENSES_URL = 'http://localhost:5000/v1/expenses'
const EXD_EXPENSES_URL = process.env.EXD_EXPENSES_URL + 'v1/expenses'
const EXD_EXPENSE_URL = process.env.EXD_EXPENSES_URL + 'v1/expense'
console.log('Expenses URL: ', EXD_EXPENSES_URL)
console.log('Expense URL: ', EXD_EXPENSE_URL)

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
      axios.get(EXD_EXPENSES_URL, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('getExpenses', response.data)
          resolve()
        })
        .catch((err) => {
          reject(err.response.data.message)
        })
    })
  },
  createExpense: (context, expense) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_EXPENSES_URL, {
        ...expense
      }, {
        headers: store.getters.authHeaders
      })
        .then(() => {
          context.commit('createExpense', expense)
          resolve()
        })
        .catch((err) => {
          reject(err.response.data.message)
        })
    })
  },
  editExpense: (context, expense) => {
    return new Promise((resolve, reject) => {
      axios.patch(EXD_EXPENSE_URL + '/' + String(expense.id), {
        payment_origin_id: expense.payment_origin_id,
        category_id: expense.category_id,
        reference_date: expense.reference_date,
        description: expense.description,
        amount: expense.amount,
        regreted: expense.regreted,
        comments: expense.comments
      }, {
        headers: store.getters.authHeaders
      })
        .then(() => {
          // JSON responses are automatically parsed.
          context.commit('editExpense', expense)
          console.log('Expense edited')
        })
        .catch((err) => {
          reject(err.response.data.message)
        })
    })
  },
  deleteExpense: (context, expense) => {
    return new Promise((resolve, reject) => {
      axios.delete(EXD_EXPENSE_URL + '/' + String(expense.id), {
        headers: store.getters.authHeaders
      })
        .then(() => {
          // JSON responses are automatically parsed.
          context.commit('deleteExpense', expense)
          console.log('Expense deleted')
        })
        .catch(err => {
          reject(err.response.data.message)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
