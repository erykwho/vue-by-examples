<template>
  <div>

    <h3>Here you can see all the expenses, as shown below (or noit)</h3>
    <span v-if="expenses && expenses.length">
      <p>Total of {{totalExpenses}} expenses</p>
      <div class="row justify-content-center">
        <table class="table table-responsive table-hover">
          <thead>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Regreted</th>
            <th>Amount</th>
          </thead>
          <tbody v-for="expense in expenses">
            <tr>
              <td>{{expense.reference_date}}</td>
              <td>{{expense.description}}</td>
              <td>{{expense.category_id}}</td>
              <td>{{expense.regreted}}</td>
              <td>{{expense.amount}}</td>
              <td>
                <expense-actions :expense="expense">
                </expense-actions>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{totalAmount}}</td>
          </tfoot>
        </table>
      </div>

    </span>

    <ul v-if="errors && errors.length">
      <li v-for="error in errors">
        {{error.message}}
      </li>
    </ul>

    <button @click="getExpenses">
      Get all expenses
    </button>

  </div>
</template>

<script>
  import axios from 'axios'
  import ExpenseActions from './ExpenseActions'

  export default {
    data () {
      return {
        // mocked
        expenses: [
          {
            'amount': 300.5,
            'category_id': 1,
            'comments': 'Comentário do Gasto 1',
            'description': 'Gasto 1',
            'id': 1,
            'payment_origin_id': 1,
            'reference_date': '2019-06-05',
            'regreted': false,
            'user_id': 1
          },
          {
            'amount': 510.9,
            'category_id': 1,
            'comments': 'Comentário do Gasto 2',
            'description': 'Bebi pa carai',
            'id': 2,
            'payment_origin_id': 1,
            'reference_date': '2019-07-06',
            'regreted': true,
            'user_id': 1
          }
        ],

//        expenses: [],
        errors: [],
        totalExpenses: null
      }
    },
    methods: {
      getExpenses () {
        axios.get(`http://localhost:5000/v1/expenses`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.expenses = response.data.content
            this.totalExpenses = response.data.total
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    create () { this.getExpenses() },
    computed: {
      totalAmount () {
        // TODO: Calculate expenses total amount
        return 0
      }
    },
    components: {ExpenseActions}
  }
</script>
