interface Item {
    health?: number;
    power?: number;
  }
  
  class Player {
    name: string;
    health: number;
    power: number;
  
    constructor(_name: string, _health: number = 100, _power: number = 10) {
      this.name = _name;
      this.health = _health;
      this.power = _power;
    }
  
    hit = (power: number) => {
      this.health -= power;
    };
  
    useItem = (item: Item) => {
      if (item.health !== undefined) {
        this.health += item.health;
      } else if (item.power !== undefined) {
        this.power += item.power;
      }
    };
  
    showStatus = () => {
      return `${this.name}: HEALTH = ${this.health}, POWER = ${this.power}`;
    };
  }
  
  class ShootingGame {
    player1: Player;
    player2: Player;
  
    constructor(_player1: Player, _player2: Player) {
      this.player1 = _player1;
      this.player2 = _player2;
    }
  
    getRandomItem = (): Item => {
      let healthRandom = Math.random() >= 0.5 ? 10 : 0;
      let powerRandom = Math.random() >= 0.5 ? 10 : 0;
  
      return Math.random() >= 0.5 ? { health: healthRandom } : { power: powerRandom };
    };
  
    itemToString = (item: Item) => {
      if (item.health !== undefined) {
        return `Health +${item.health}`;
      } else if (item.power !== undefined) {
        return `Power +${item.power}`;
      }
      return 'No effect';
    };
  
    start = () => {
      alert(`🔫STARTS ROUND🔫\n\nFirst Player: ${this.player1.name}\n\nVS\n\nSecond Player: ${this.player2.name}`);
      while (this.player1.health > 0 && this.player2.health > 0) {
        // Menampilkan stats pemain
        alert(`🔫THE STATS🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
        // Menggacha item
        const itemPlayer1 = this.getRandomItem();
        const itemPlayer2 = this.getRandomItem();
        //Menggunakan item
        this.player1.useItem(itemPlayer1);
        this.player2.useItem(itemPlayer2);
        // Menampilkan stats setelah menggunakan item
        alert(
          `🔫PICK ITEM🔫\n\n${this.player1.name}: ${this.itemToString(itemPlayer1)} => ${this.player1.showStatus()}\n\n${
            this.player2.name
          }: ${this.itemToString(itemPlayer2)} => ${this.player2.showStatus()}`
        );
  
        // Menentukan secara acak pemain yang menembak duluan
        if (Math.random() < 0.5) {
          this.player2.hit(this.player1.power); // Pemain pertama menembak pemain kedua
          if (this.player2.health <= 0) {
            alert(`🔫AFTER SHOOTING🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
            alert(`${this.player1.name} MENANG!`);
            break;
          }
          this.player1.hit(this.player2.power); // Pemain kedua menembak pemain pertama
          if (this.player1.health <= 0) {
            alert(`🔫AFTER SHOOTING🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
            alert(`${this.player2.name} MENANG!`);
            break;
          }
        } else {
          this.player1.hit(this.player2.power); // Pemain kedua menembak pemain pertama
          if (this.player1.health <= 0) {
            alert(`🔫AFTER SHOOTING🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
            alert(`${this.player2.name} MENANG!`);
            break;
          }
          this.player2.hit(this.player1.power); // Pemain pertama menembak pemain kedua
          if (this.player2.health <= 0) {
            alert(`🔫AFTER SHOOTING🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
            alert(`${this.player1.name} MENANG!`);
            break;
          }
        }
        // Menampilkan stats pemain setelah menembak
        alert(`🔫AFTER SHOOTING🔫\n\n${this.player1.showStatus()}\n\n${this.player2.showStatus()}`);
        alert(`🔫NEXT ROUND🔫`);
      }
    };
  }
  
  export function shootingGame() {
    let player1 = new Player(prompt("Masukkan nama pemain pertama:") || '');
    let player2 = new Player(prompt("Masukkan nama pemain kedua:") || '');
  
    let game = new ShootingGame(player1, player2);
    game.start();
  }