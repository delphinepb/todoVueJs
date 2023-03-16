const app = Vue.createApp({
    data() {
      return {
        notes: [],
        note: "",
      };
    },
    methods: {
      addNote: function () {
        if (!this.note) {
          return;
        }
  
        const note = {
          id: Date.now(),
          text: this.note,
        };
  
        this.notes.unshift(note);
        this.note = "";
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },

      removeNote: function (note) {
        const newNotes = this.notes.filter((n) => {
          return note.id != n.id;
        });
        this.notes = newNotes;
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },

      str_limit: function(value, size) {
        if (!value) return '';
        value = value.toString();
    
        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + '...';
      },

    },
    mounted: function () {
      if (localStorage.getItem("notes")) {
        this.notes = JSON.parse(localStorage.getItem("notes"));
      }
    },
  }).mount("#app");
  