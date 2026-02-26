class Voo {
    // O constructor define os atributos iniciais do objeto
    constructor(codigo, origem, destino, altitude) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = altitude;
        this.status = "No Pátio"; // Status inicial padrão
    }

    // Método para atualizar o texto na tela (Integração com o DOM)
    atualizarTela() {
        document.getElementById("txt-codigo").innerText = this.codigo;
        document.getElementById("txt-origem").innerText = this.origem;
        document.getElementById("txt-destino").innerText = this.destino;
        document.getElementById("txt-altitude").innerText = this.altitude;
        document.getElementById("txt-status").innerText = this.status;

        // Pequena animação no CSS baseada no status
        const imgAviao = document.getElementById("aviao");
        if (this.status === "Em Voo") {
            imgAviao.style.bottom = "50px"; // Sobe a imagem
            imgAviao.style.left = "150px";  // Move para o lado
        } else {
            imgAviao.style.bottom = "0px";
            imgAviao.style.left = "10px";
        }
    }

    atualizarTela2() {
        document.getElementById("txt-codigo").innerText = this.codigo;
        document.getElementById("txt-origem").innerText = this.origem;
        document.getElementById("txt-destino").innerText = this.destino;
        document.getElementById("txt-altitude").innerText = this.altitude;
        document.getElementById("txt-status").innerText = this.status;

        // Pequena animação no CSS baseada no status
        const imgAviao = document.getElementById("aviao");
        if (this.status === "Em Voo") {
            imgAviao.style.bottom = "50px"; // Sobe a imagem
            imgAviao.style.left = "150px";  // Move para o lado
        } else {
            imgAviao.style.bottom = "0px";
            imgAviao.style.left = "300px";
        }
    }

    // Método para decolar
    decolar() {
        if (this.status !== "Em Voo") {
            this.status = "Em Voo";
            this.altitude += 35000;
            console.log(`Voo ${this.codigo} decolou!`);
            this.atualizarTela();
        }
    }

    // Método para pousar
    pousar() {
        if (this.status === "Em Voo") {
            this.status = "Pousado";
            this.altitude = 0;
            console.log(`Voo ${this.codigo} pousou com segurança.`);
            this.atualizarTela2();
        }
    }
}

// Criando um objeto (Instanciando a classe)
const meuVoo = new Voo("AD123", "São Paulo (GRU)", "Lisboa (LIS)", 0);

// Exibir os dados iniciais assim que a página carregar
meuVoo.atualizarTela();