var nome_usuario = "";
var quant_pizza = 0;
var quant_hamburguer = 0;
var quant_coxinha = 0;
var quant_esfirra_de_frango = 0; 
var quant_esfirra_de_pres_queijo = 0;
var quant_sansuiche = 0;
var quant_pastel = 0;
var quant_bolo_chocolate = 0;
var quant_bolo_morango = 0;
var quant_suco_maracuja= 0;
var quant_suco_limao= 0;
var quant_suco_uva= 0;
var quant_suco_morango= 0;
var quant_suco_manga= 0;
var quant_suco_abacaxi= 0;
var itens_pedidos = "";
var n_pedido = 0;
var total = 0.0;


// adc adiciona item rmv remove o item
function Adc_pizza(){
            quant_pizza += 1;
            document.getElementById("quant_pizza").innerText = quant_pizza;
 }

 function Rmv_pizza(){
            quant_pizza -= 1;
            document.getElementById("quant_pizza").innerText = quant_pizza;
 }

 function Adc_hamburguer(){
            quant_hamburguer += 1;
            document.getElementById("quant_hamburguer").innerText = quant_hamburguer;
 }

 function Rmv_hamburguer(){
            quant_hamburguer -= 1;
            document.getElementById("quant_hamburguer").innerText = quant_hamburguer;
 }

 function Adc_coxinha(){
            quant_coxinha += 1;
            document.getElementById("quant_coxinha").innerText = quant_coxinha;
 }

 function Rmv_coxinha(){
            quant_coxinha -= 1;
            document.getElementById("quant_coxinha").innerText = quant_coxinha;
 }

 function Adc_esfirra_de_frango(){
            quant_esfirra_de_frango += 1;
            document.getElementById("quant_esfirra_de_frango").innerText = quant_esfirra_de_frango;
 }

 function Rmv_esfirra_de_frango(){
            quant_esfirra_de_frango -= 1;
            document.getElementById("quant_esfirra_de_frango").innerText = quant_esfirra_de_frango;
 }

 function Adc_esfirra_de_pres_queijo(){
            quant_esfirra_de_pres_queijo += 1;
            document.getElementById("quant_esfirra_de_pres_queijo").innerText = quant_esfirra_de_pres_queijo;
 }

function Rmv_esfirra_de_pres_queijo(){
            quant_esfirra_de_pres_queijo -= 1;
            document.getElementById("quant_esfirra_de_pres_queijo").innerText = quant_esfirra_de_pres_queijo;
 }

 function Adc_sanduiche(){
            quant_sansuiche += 1;
            document.getElementById("quant_sanduiche").innerText = quant_sansuiche;
 }

 function Rmv_sanduiche(){
            quant_sansuiche -= 1;
            document.getElementById("quant_sanduiche").innerText = quant_sansuiche;
 }

 function Rmv_pastel(){
            quant_pastel -= 1;
            document.getElementById("quant_pastel").innerText = quant_pastel;
 }

 function Adc_pastel(){
            quant_pastel += 1;
            document.getElementById("quant_pastel").innerText = quant_pastel;
 }

 function Adc_bolo_chocolate(){
            quant_bolo_chocolate += 1;
            document.getElementById("quant_bolo_chocolate").innerText = quant_bolo_chocolate;
 }

 function Rmv_bolo_chocolate(){
            quant_bolo_chocolate -= 1;
            document.getElementById("quant_bolo_chocolate").innerText = quant_bolo_chocolate;
 }

 function Adc_bolo_morango(){
            quant_bolo_morango += 1;
            document.getElementById("quant_bolo_morango").innerText = quant_bolo_morango;
 }

 function Rmv_bolo_morango(){
            quant_bolo_morango -= 1;
            document.getElementById("quant_bolo_morango").innerText = quant_bolo_morango;
 }


  function Adc_suco_maracuja(){
            quant_suco_maracuja += 1;
            document.getElementById("quant_suco_maracuja").innerText = quant_suco_maracuja;

 }
  
  function Rmv_suco_maracuja(){
            quant_suco_maracuja -= 1;
            document.getElementById("quant_suco_maracuja").innerText = quant_suco_maracuja;
 }


 function Adc_suco_limao(){
            quant_suco_limao += 1;
            document.getElementById("quant_suco_limao").innerText = quant_suco_limao;

 }

 function Rmv_suco_limao(){
            quant_suco_limao -= 1;
            document.getElementById("quant_suco_limao").innerText = quant_suco_limao;
 }

  function Adc_suco_uva(){
            quant_suco_uva += 1;
            document.getElementById("quant_suco_uva").innerText = quant_suco_uva;

 }

 function Rmv_suco_uva(){
            quant_suco_uva -= 1;
            document.getElementById("quant_suco_uva").innerText = quant_suco_uva;
 }

 function Adc_suco_morango(){
            quant_suco_morango += 1;
            document.getElementById("quant_suco_morango").innerText = quant_suco_morango;

 }

 function Rmv_suco_morango(){
            quant_suco_morango -= 1;
            document.getElementById("quant_suco_morango").innerText = quant_suco_morango;
 }

  function Adc_suco_manga(){
            quant_suco_manga += 1;
            document.getElementById("quant_suco_manga").innerText = quant_suco_manga;

 }

 function Rmv_suco_manga(){
            quant_suco_manga -= 1;
            document.getElementById("quant_suco_manga").innerText = quant_suco_manga;
 }

  function Adc_suco_abacaxi(){
            quant_suco_abacaxi += 1;
            document.getElementById("quant_suco_abacaxi").innerText = quant_suco_abacaxi;

 }

 function Rmv_suco_abacaxi(){
            quant_suco_abacaxi -= 1;
            document.getElementById("quant_suco_abacaxi").innerText = quant_suco_abacaxi;
 }


 function Pega_nome_e_inicia(){
   
    location.replace("inicio.html");//abre a  pagina inicio

}

  
 
 function Fazer_pedido(){
location.replace("index.html");//retorna para a pagina nome.html 
}

