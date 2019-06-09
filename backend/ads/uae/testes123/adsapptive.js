const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        msisdn: null,
        password: null,
        message: 'vuejsTest',
        title: 'call'
    },
    mounted() {
        axios
            .get('http://backoffice-cg-backend/ads/uae/testes123/config.js')
            .then(response => {
                this.info = response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        checkForm: function (e) {
            if (this.msisdn && this.password) {
                console.log(this.msisdn);
                console.log(this.password);
                //return true;
            }

            this.errors = [];

            if (!this.msisdn) {
                this.errors.push('msisdn required.');
            }
            if (!this.password) {
                this.errors.push('password required.');
            }

            e.preventDefault();
        }
    }
})