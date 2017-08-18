<template>
  <div>

    <span v-if="loading">
      <loading target="expenses"></loading>
    </span>
    <span v-else>
      <h3>Here you can see all the expenses, as shown below (or noit)</h3>
      <span v-if="expenses && expenses.length">
        <p>Total of {{totalExpenses}} expenses</p>
        <div class="row justify-content-center">
          <table class="table table-hover">
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

    </span>
  </div>
</template>

<script>
  import axios from 'axios'
  import ExpenseActions from './ExpenseActions'
  import Loading from '@/components/Loading'
  export default {
    data () {
      return {
        loading: true,
        expenses: [],
        errors: [],
        totalExpenses: null
      }
    },
    created () { this.getExpenses() },
    methods: {
      getExpenses () {
        axios.get('http://localhost:5000/v1/expenses')
          .then(response => {
            // JSON responses are automatically parsed.
            this.expenses = response.data.content
            this.totalExpenses = response.data.total
            this.loading = false
          })
          .catch(e => {
            this.errors.push(e)
            this.loading = false
          })
      }
    },
    computed: {
      totalAmount () {
        // TODO: Calculate expenses total amount
        return 0
      }
    },
    components: { ExpenseActions, Loading }
  }
</script>
