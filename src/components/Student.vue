<template>
    ini adalah data siswa bernama {{studentName}} <button @click="showData">Show Detail</button>
</template>

<script>
    export default {
        props: {
            studentName : String
        },
        emits : ['response'],
        methods: {
            showData() {
                this.$emit('response', this.studentName)
            }
        }
    }
</script>                     