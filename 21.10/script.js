// selecione o canvas pelo ID e armazene na variavél 'canvas'
const canvas =document.getElementById('gameCanvas');

// obtém contexto 2D do canvas que permite desenhar dele
const ctx = canvas.getContext('2D')

// defina o tamanho de cada quadrado (para a cobra e a comida)
const box = 20;

// inicializa a cobra como um array com um segmento na posição (100, 100)
let snake = [{ x: box * 5, y: box * 5 }];

// defina a dirção inicial da cobra como "RIGHT"
let direction = 'RIGHT';

// gera a posição inicial da comida aleatóriamente dentro dio canvas
let food = {
x: Math.floor(Math.random () * 20) * box, // cordena X da comida
y: Math.floor(Math.random () * 20) * box, // cordena y da comida

};

//adiciona um ouvinte para eventos de tecla que chama a função changeDirection
document.addEventListener('keydown', changeDirection);

// função para mudar a direção  da cobra com base na tecla perssionada
function changeDirection(event) {
// verifique a tecla pressionada é na seta esquerdae se a direção não é "right"
if ( event.keycode === 37 && direction !== 'RIGHT') (DIRECTION = 'LEFT');
//verifica se a tecla pressionada é a seta para cima e se a direção não é "DOWN"
if (event.keycode === 36 && direction !== 'DOWN') (direction = 'UP');
 
    
















}