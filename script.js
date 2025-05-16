document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const resultScreen = document.getElementById('result-screen');
    const gameoverScreen = document.getElementById('gameover-screen');
    
    const playerNameInput = document.getElementById('player-name');
    const startBtn = document.getElementById('start-btn');
    const displayName = document.getElementById('display-name');
    const timeDisplay = document.getElementById('time');
    const powerDisplay = document.getElementById('power');
    
    const resultName = document.getElementById('result-name');
    const resultTime = document.getElementById('result-time');
    const restartBtn = document.getElementById('restart-btn');
    const gameoverRestartBtn = document.getElementById('gameover-restart-btn');
    const gameoverMessage = document.getElementById('gameover-message');
    
    // Игровые элементы
    const gameContainer = document.getElementById('game-container');
    const player = document.getElementById('player');
    const gameElements = document.getElementById('game-elements');
    const background = document.getElementById('background');
    
    // Игровые переменные
    let playerName = '';
    let gameTime = 0;
    let power = 50;
    let gameInterval;
    let timeInterval;
    let powerInterval;
    let isPaused = false;
    let gameSpeed = 2;
    let walls = [];
    let batteries = [];
    
    // Состояние клавиш
    let keysPressed = {
        'w': false,
        's': false,
        'ArrowUp': false,
        'ArrowDown': false
    };
    
    // Размеры игрового поля
    const gameWidth = window.innerWidth;
    const gameHeight = window.innerHeight;
    
    // Размеры игрока
    const playerWidth = 60;
    const playerHeight = 40;
    let playerY = gameHeight / 2 - playerHeight / 2;
    
    // Настройки игры
    const wallGap = 300;
    const wallWidth = 50;
    const batteryWidth = 30;
    const batteryHeight = 50;
    
    // Проверка ввода имени
    playerNameInput.addEventListener('input', function() {
        startBtn.disabled = this.value.trim() === '';
    });
    
    // Начало игры
    startBtn.addEventListener('click', function() {
        playerName = playerNameInput.value.trim();
        displayName.textContent = playerName;
        
        welcomeScreen.classList.add('hidden');
        setTimeout(() => {
            gameScreen.classList.remove('hidden');
            startGame();
        }, 500);
    });
    
    // Рестарт игры
    restartBtn.addEventListener('click', restartGame);
    gameoverRestartBtn.addEventListener('click', restartGame);
    
    // Управление игроком
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            togglePause();
        }
        
        if (['w', 's', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            keysPressed[e.key] = true;
        }
    });
    
    document.addEventListener('keyup', function(e) {
        if (['w', 's', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            keysPressed[e.key] = false;
        }
    });
    
    function movePlayer(amount) {
        playerY += amount;
        
        // Проверка границ с небольшим отступом
        const margin = 5;
        if (playerY < margin) playerY = margin;
        if (playerY > gameHeight - playerHeight - margin) playerY = gameHeight - playerHeight - margin;
        
        player.style.top = playerY + 'px';
    }
    
    function startGame() {
        // Сброс значений
        gameTime = 0;
        power = 50;
        walls = [];
        batteries = [];
        gameElements.innerHTML = '';
        playerY = gameHeight / 2 - playerHeight / 2;
        player.style.top = playerY + 'px';
        
        // Сброс состояния клавиш
        keysPressed = {
            'w': false,
            's': false,
            'ArrowUp': false,
            'ArrowDown': false
        };
        
        // Запуск таймеров
        timeInterval =
        }
    }
});
