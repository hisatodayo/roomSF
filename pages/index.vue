<template>
  <div class="container">
    <div>
      <h1 class="title">
        roomSF
      </h1>
    </div>
    <div id='msgDiv'></div>
    <input type='text' id='nameIn' placeholder='name'>
    <input type='text' id='msgIn' size='60' placeholder='msg'>
    <button @click='getMsg'>get msg</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      db: this.$fire.firestore
    }
  },
  created() {
    console.log('loaded', this.db)
    this.addMsg()
    // this.getMsg()
  },
  methods: {
    addMsg() {
      this.db.collection('talks').add({
        name: 'hisato',
        id: 1,
        body: 'This is test text'
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    },
    getMsg() {
      console.log('getMsg')
      this.db.collection('talks').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}
</style>
