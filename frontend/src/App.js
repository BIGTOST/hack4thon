import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faGit } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [campo1, setcampo1] = useState("");
  const [campo2, setcampo2] = useState("");
  const [campo3, setcampo3] = useState("");
  const [campo4, setcampo4] = useState("");
  const [campo5, setcampo5] = useState("");
  const [campo6, setcampo6] = useState("");
  const [campo7, setcampo7] = useState("");
  const [campo8, setcampo8] = useState("");

  useEffect(() => {
    var header1 = document.getElementById("myDIV1");
    var header2= document.getElementById("myDIV2");
    var header3 = document.getElementById("myDIV3");
    var header4 = document.getElementById("myDIV4");
    var header5 = document.getElementById("myDIV5");
    var header6 = document.getElementById("myDIV6");
    var header7 = document.getElementById("myDIV7");
    var header8 = document.getElementById("myDIV8");

    if (header1) {
      var btns = header1.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }
    if(header2){
      var btns = header2.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header3){
      var btns = header3.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header4){
      var btns = header4.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header5){
      var btns = header5.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header6){
      var btns = header6.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header7){
      var btns = header7.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }else if(header8){
      var btns = header8.getElementsByClassName("button");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
          }
          this.className += " active";
        });
      }
    }
  }, []); //ainda está por resolver - botões ficarem com a cor diferente ao clicar
  

  return (
    <div className="background font">
      <nav class="navbar navbar-expand-lg navbar bg-dark justify-content-between">
        <div className="container">
          <img class="navbar-brand mx-auto mt-2" src="LOGO.png" alt="GitHub" height="75" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " href="https://github.com/seu-usuario-do-github">
                <img src="github.png" alt="GitHub" width="30" height="30" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row justify-content-around mb-5">
          <div className="col-12 text-center">
            <h3 className="text-light mb-3">StudyBot: Educação Personalizada para Todos</h3>
            <p className="text-light w-75 mx-auto">O StudyBot revoluciona o aprendizado, oferecendo métodos personalizados, horários otimizados e acesso a recursos de qualidade, promovendo a igualdade educacional global.</p>
          </div>
        </div>
        <div className="row justify-content-around mb-5">
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faBook} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Como prefere aprender sobre um novo tópico?</div>
            <div className="btn-group d-flex flex-column mt-4 " id="myDIV1">
              <button className="mb-2 button text-light py-2" value={campo1} onClick={value =>
                setcampo1(value.target.value)}>Lendo um livro ou texto</button>
              <button className="mb-2 button text-light py-2" value={campo1} onClick={value =>
                setcampo1(value.target.value)}>Ouvindo um palestrante</button>
              <button className="mb-2 button text-light py-2" value={campo1} onClick={value =>
                setcampo1(value.target.value)}>Assistindo a vídeos</button>
              <button className="mb-2 button text-light py-2" value={campo1} onClick={value =>
                setcampo1(value.target.value)}>Fazendo atividades práticas</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faComments} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Quando estuda com outros, como aprende melhor?</div>
            <div className="btn-group d-flex flex-column mt-4" id="myDIV2">
              <button className="mb-2 button text-light py-2" value={campo2} onClick={value =>
                setcampo2(value.target.value)}>Discussões e interações</button>
              <button className="mb-2 button text-light py-2" value={campo2} onClick={value =>
                setcampo2(value.target.value)}>Ensinar e explicar o material aos outros</button>
              <button className="mb-2 button text-light py-2" value={campo2} onClick={value =>
                setcampo2(value.target.value)}>Trabalhar em grupo em projetos</button>
              <button className="mb-2 button text-light py-2" value={campo2} onClick={value =>
                setcampo2(value.target.value)}>Ver os outros a resolver problemas</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faChalkboard} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Qual é o ambiente de aprendizagem que prefere?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo3} onClick={value =>
                setcampo3(value.target.value)}>Um local silencioso</button>
              <button className="mb-2 button text-light py-2" value={campo3} onClick={value =>
                setcampo3(value.target.value)}>Um ambiente com música suave</button>
              <button className="mb-2 button text-light py-2" value={campo3} onClick={value =>
                setcampo3(value.target.value)}>Um espaço de estudo movimentado</button>
              <button className="mb-2 button text-light py-2" value={campo3} onClick={value =>
                setcampo3(value.target.value)}>Ambiente ao ar livre</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faSitemap} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Como lida com informações complexas?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo4} onClick={value =>
                setcampo4(value.target.value)}>Organizar em notas e esquemas</button>
              <button className="mb-2 button text-light py-2" value={campo4} onClick={value =>
                setcampo4(value.target.value)}>Ouvir explicações detalhadas</button>
              <button className="mb-2 button text-light py-2" value={campo4} onClick={value =>
                setcampo4(value.target.value)}>Gráficos e imagens para simplificar</button>
              <button className="mb-2 button text-light py-2" value={campo4} onClick={value =>
                setcampo4(value.target.value)}>Experimentar e resolver problemas</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mb-5">
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faFlagCheckered} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Com  um novo desafio, qual é a sua abordagem preferida?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo5} onClick={value =>
                setcampo5(value.target.value)}>Planear cuidadosamente</button>
              <button className="mb-2 button text-light py-2" value={campo5} onClick={value =>
                setcampo5(value.target.value)}>Conversar com especialistas</button>
              <button className="mb-2 button text-light py-2" value={campo5} onClick={value =>
                setcampo5(value.target.value)}>Tentar diferentes abordagens</button>
              <button className="mb-2 button text-light py-2" value={campo5} onClick={value =>
                setcampo5(value.target.value)}>Agir e aprender com a experiência</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faClock} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Qual a sua atitude em relação a prazos de entrega?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo6} onClick={value =>
                setcampo6(value.target.value)}>Gosto de seguir um cronograma</button>
              <button className="mb-2 button text-light py-2" value={campo6} onClick={value =>
                setcampo6(value.target.value)}>Prefiro ter flexibilidade de tempo</button>
              <button className="mb-2 button text-light py-2" value={campo6} onClick={value =>
                setcampo6(value.target.value)}>Os prazos são importantes</button>
              <button className="mb-2 button text-light py-2" value={campo6} onClick={value =>
                setcampo6(value.target.value)}>Gosto de trabalhar ao meu ritmo</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faCheckSquare} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Como costuma reagir ao feedback crítico?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo7} onClick={value =>
                setcampo7(value.target.value)}>Aceito e aplico as sugestões</button>
              <button className="mb-2 button text-light py-2" value={campo7} onClick={value =>
                setcampo7(value.target.value)}>Levo em consideração o feedback</button>
              <button className="mb-2 button text-light py-2" value={campo7} onClick={value =>
                setcampo7(value.target.value)}>Fico defensivo  com feedback crítico</button>
              <button className="mb-2 button text-light py-2" value={campo7} onClick={value =>
                setcampo7(value.target.value)}>Prefiro não receber feedback crítico</button>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="icon text-light mb-3 mx-auto">
              <FontAwesomeIcon icon={faGraduationCap} className="text-info" />
            </div>
            <div className="text-wrapper mx-auto text-light h6 w-75 fw-bold">Quando ensina algo a alguém, como o faz?</div>
            <div className="btn-group d-flex flex-column mt-4" >
              <button className="mb-2 button text-light py-2" value={campo8} onClick={value =>
                setcampo8(value.target.value)}>Usar gráficos, esquemas e diagramas</button>
              <button className="mb-2 button text-light py-2" value={campo8} onClick={value =>
                setcampo8(value.target.value)}>Explicar verbalmente, fazer perguntas</button>
              <button className="mb-2 button text-light py-2" value={campo8} onClick={value =>
                setcampo8(value.target.value)}>Demonstrar com exemplos práticos</button>
              <button className="mb-2 button text-light py-2" value={campo8} onClick={value =>
                setcampo8(value.target.value)}>Ensinar através de atividades práticas</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mt-5 mb-5">
          <div className="message-input">
            <div className="input-group">
              <input type="text" className="form-control mx-4 input-bg text-light bg-dark " placeholder="Escreva qual o  tema que é do seu interesse..." />
              <div className="input-group-append">
                <button className=" button-send my-2 text-light py-2 px-2" onClick=""><FontAwesomeIcon className="px-2" icon={faPaperPlane} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;