class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
          case 'mago':
            ataque = 'Wizards staff';
            break;
          case 'warrior':
            ataque = 'sword';
            break;
          case 'monk':
            ataque = 'marcial arts';
            break;
          case 'ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque = 'attacked';
        }

        const mensagem = `The ${this.nome} ${this.tipo} attacked using ${ataque}`;
        console.log(mensagem);
      }
    } 

      const heroi1 = new Heroi('Aragorn', 30, 'warrior');
      heroi1.atacar();

      const heroi2 = new Heroi('Gandalf', 55000, 'mago');
      heroi2.atacar();