<template>
<div class="card">
    <h5 class="card-header">Contact Us</h5>
    <div class="card-body">
        <!-- <form> -->
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                
                <input type="email" v-model.trim="$v.contact.email.$model" class="form-control" id="email" name="email" placeholder="Enter email">
                
                <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>

                <div v-show="$v.contact.email.$error">
                    <small class="text-danger" v-show="!$v.contact.email.required">Quantity is required</small>
                    <small class="text-danger" v-show="!$v.contact.email.minLength">Minimum value is 4</small>
                    <small class="text-danger" v-show="!$v.contact.email.maxLength">Maximum value is 200</small>
                </div>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>

                <input type="text" v-model.trim="$v.contact.subject.$model" class="form-control" id="subject" name="subject" placeholder="Enter subject">
                
                <div v-show="$v.contact.subject.$error">
                    <small class="text-danger" v-show="!$v.contact.subject.required">Quantity is required</small>
                    <small class="text-danger" v-show="!$v.contact.subject.minLength">Minimum value is 4</small>
                    <small class="text-danger" v-show="!$v.contact.subject.maxLength">Maximum value is 200</small>
                </div>
            </div>
            <div class="form-group">
                <label for="message">Message</label>

                <textarea v-model.trim="$v.contact.message.$model" class="form-control" id="message" name="message" rows="3"></textarea>
                
                <div v-show="$v.contact.message.$error">
                    <small class="text-danger" v-show="!$v.contact.message.required">Quantity is required</small>
                    <small class="text-danger" v-show="!$v.contact.message.minLength">Minimum value is 4</small>
                    <small class="text-danger" v-show="!$v.contact.message.maxLength">Maximum value is 200</small>
                </div>
            </div>

            <button @click="initContact" :disabled="(submitStatus === 'PENDING') || ($v.contact.$error)" class="btn btn-primary">
                <span v-show="submitStatus === 'PENDING'" class="spinner-border spinner-border-sm"></span>Submit
            </button>

        <!-- </form> -->
    </div>
</div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            contact: {
                email: '',
                subject: '',
                message: ''
            },
            submitStatus: ''
        }
    },
    validations: {
        contact: {
            email: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(200),
            },
            subject: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(200),
            },
            message: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(200),
            }
        }
    },
    methods: {
        initContact(e) {
            console.log('init contact');
            console.log('submit!')
            
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.submitStatus = 'PENDING'

                this.$http.post(`/api/contact`, this.contact)
                .then(response => {
                    console.log(response.data)
                    this.submitStatus = 'OK'
                })
                .catch(()=> {
                    console.log('error')
                    this.submitStatus = 'ERROR'
                })
            }
        }
    }
}
</script>

<style scoped>
.card {
    width: 50%;
    margin: auto;
}
@media (max-width: 700px) {
    .card {
        width: 100%;
        margin: auto;
    }
}
</style>