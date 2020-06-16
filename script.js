const app = new Vue({
    el: '.app',
    data: {
        notes: [],
        currentNote: null
    },
    watch: {
        notes:  {
            handler(newNotes) {
                localStorage.notes = JSON.stringify(newNotes);
            },
            deep: true
        }
    },
    mounted() {
        if (localStorage.notes) {
            this.notes = JSON.parse(localStorage.notes);
        }
    },
    methods: {
        createNote() {
            const newNote = {
                title: '',
                contents: ''
            }
            this.notes.push(newNote);
            this.currentNote = newNote;
            this.$nextTick(function () {
                this.$refs.noteTitle.focus();
            });
        }
    }
});

