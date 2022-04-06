<template>
    <div class="contenido">
      <v-alert
          type="success"
          v-if="this.AlertaState"
      >Tu publicación sera verificada!</v-alert>
      <div>
          <form action="" class="formulario">
            <h1 class="formulario__titulo">PUBLICA TU NOTICIA</h1>
            <br>
            <br>
              <input type="text" class="formulario__input" v-model="nombre_responsable">
              <label for="" class="formulario__label">Persona responsable de la publicación*</label>
              <input type="email" class="formulario__input" v-model="email">
              <label for="" class="formulario__label" >Email*</label>
              <input type="date" class="formulario__input" v-model="fecha">
              <label for="" class="formulario__label" >Fecha*</label>
              <input type="select" class="formulario__input" v-model="categoria">
              <label for="" class="formulario__label">Tipo de publicación* </label>    
              <input type="text" class="formulario__input" v-model="Titulo">
              <label for="" class="formulario__label">Titulo de la notica*</label>  
              <input type="textarea" class="formulario__input" v-model="descripccion">
              <label for="" class="formulario__label">Cuerpo de la noticia*</label>
              <input type="text" class="formulario__input"  v-model="descripccion_dos">
              <label for="" class="formulario__label">Datos para más información de la noticia</label>
              <input type="file" class="formulario__input" >
              <label for="" class="formulario__label"  >Adjuntar imágenes del articulo</label>
              <v-btn @click="EnviarFormulario" class="formulario__submit" dark>Publicar</v-btn>
          </form>
      </div>
    </div>
</template>

<script>
const axios = require('axios');
export default {
  data:()=>({
    nombre_responsable:'',
    email:'',
    fecha:'',
    categoria:'',
    Titulo:'',
    descripccion:'',
    descripccion_dos:null,
    AlertaState:''
  }),
  methods:{
    Variable(){
      console.log(this.nombre_responsable,this.email,this.categoria,this.Titulo,this.descripccion,this.descripccion_dos,this.fecha)
    },
    EnviarFormulario(){
      let data = JSON.stringify({
        "nombre_responsable": this.nombre_responsable,
        "email": this.email,
        "fecha": this.fecha,
        "categoria": this.categoria,
        "Titulo": this.Titulo,
        "descripccion":this.descripccion,
        "descripccion_dos": this.descripccion_dos,
      });

      let config = {
        method: 'post',
        url: 'http://localhost:3001/api/Noticias/registrar',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.AlertaState=true;
          })
          .catch((error) => {
            console.log(error);
          });

    }
  }
}
</script>


<style scoped>
*{
  box-sizing: border-box;
}
.contenido{
  min-height: calc(100vh - 70px - 70px);
}
.formulario{
  width: 640px;
  max-width: 100%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 0 0 20px 1px rgba(0,0,0,0.3);
  position: relative;
}
.formulario__titulo{
  text-align: center;
  margin-top: 0;
  color: rgba(0,0,0,0.7); 
}
.formulario__input, .formulario__label, .formulario__submit{
  display: block;
  width: 100%;
  font-size: 1.3em;

}
.formulario__input {
  padding: 15px;
  background: rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.3);
  margin-bottom: 40px;
}
.formulario__input:focus {
  outline: 1px solid rgba(0,0,0,0.7);
}
.formulario__input:focus + .formulario__label {
  margin-top: -140px;
}
.formulario__label{
  padding-left: 15px;
  position: absolute;
  margin-top: -140px;
  color: rgba(0,0,0,0.5);
}
.formulario__submit {
 background: rgba(0,0,0,0.9);
 color: white;
 padding: 10px 20px;
 cursor: pointer;
 border: none;
}
</style>