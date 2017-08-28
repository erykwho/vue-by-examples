<template>
  <div>

    <br>

    <b-alert variant="info" dismissible :show="info ? true : false" @dismissed="info=null">
      {{info}}
    </b-alert>

    <b-alert variant="danger" dismissible :show="error ? true : false" @dismissed="error=null">
      {{error}}
    </b-alert>

    <span v-if="loading.value">
      <loading :message="loading.message"></loading>
    </span>

    <span v-else>
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
                  <expense-actions :expense="expense" @alert="getInfo($event)">
                  </expense-actions>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{totalExpensesAmount}}</td>
            </tfoot>
          </table>
        </div>

      </span>

      <div class="row justify-content-center">
        <b-button size="lg" variant="outline-success" v-b-modal.newExpense>
          Create new expense
        </b-button>
      </div>

      <b-modal id="newExpense" title="Create a new expense" @ok="createExpense">
        <expense-form :expense="newExpense"></expense-form>
      </b-modal>

    </span>

  </div>
</template>

<script>
  import ExpenseActions from './ExpenseActions'
  import ExpenseForm from './ExpenseForm'
  import Loading from '@/components/Loading'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        info: null,
        error: null,

        loading: {
          value: true,
          message: 'Loading expenses...'
        },

        newExpense: {
          reference_date: null,
          description: null,
          category_id: null,
          amount: null,
          user_id: 1,
          payment_origin_id: 1
        }
      }
    },
    created () {
      this.$store.dispatch('getExpenses')
        .then(() => { this.loading = false })
        .catch((err) => {
          this.error = err
          this.loading = false
        })
    },
    methods: {
      createExpense () {
        this.loading = {
          value: true,
          message: 'Creating expense...'
        }
        this.$store.dispatch('createExpense', this.newExpense)
          .then(() => {
            this.info = 'Expense created'
            this.loading = false
          })
          .catch((err) => {
            this.error = err
            this.loading = false
          })
      },
      getInfo (message) {
        this.info = message
      }
    },
    computed: mapGetters([
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ]),
    components: {ExpenseActions, ExpenseForm, Loading}
  }
</script>
