// =============================
// CLASSE MÃE
// =============================

class Voo {

  constructor(codigo, origem, destino) {
    this.codigo = codigo
    this.origem = origem
    this.destino = destino
    this.altitude = 0
    this.status = "Em solo"
  }

  decolar() {
    this.altitude = 10000
    this.status = "Em voo"
    console.log(`✈️ Voo ${this.codigo} decolou`)
  }

  pousar() {
    this.altitude = 0
    this.status = "Pousado"
    console.log(`🛬 Voo ${this.codigo} pousou`)
  }

  comunicarTorre() {
    return `Torre, aqui é o voo ${this.codigo} solicitando instruções`
  }

}


// =============================
// CLASSE FILHA - JATO EXECUTIVO
// =============================

class JatoExecutivo extends Voo {

  constructor(codigo, origem, destino) {
    super(codigo, origem, destino)
    this.modoSupersonico = false
  }

  ativarSupersonico() {
    this.modoSupersonico = true
    this.altitude = 20000
    console.log("🚀 Modo supersônico ativado!")
  }

  desativarSupersonico() {
    this.modoSupersonico = false
    this.altitude = 10000
    console.log("✈️ Modo supersônico desativado")
  }

  comunicarTorre() {
    return `Torre, voo VIP ${this.codigo} na escuta, prioridade de pouso`
  }

}


// =============================
// CLASSE FILHA - VOO DE CARGA
// =============================

class VooCarga extends Voo {

  constructor(codigo, origem, destino, capacidadeMaxima) {
    super(codigo, origem, destino)

    this.capacidadeMaxima = capacidadeMaxima
    this.cargaAtual = 0
  }

  embarcarCarga(toneladas) {

    if (this.cargaAtual + toneladas > this.capacidadeMaxima) {
      console.log("❌ Capacidade máxima excedida!")
      alert("Capacidade máxima excedida!")
      return
    }

    this.cargaAtual += toneladas

    console.log(`📦 ${toneladas} toneladas embarcadas`)
  }

  comunicarTorre() {
    return `Torre, cargueiro pesado ${this.codigo} se aproximando`
  }

}


// =============================
// INSTÂNCIAS DOS VOOS
// =============================

const meuJato = new JatoExecutivo(
  "VIP001",
  "São Paulo",
  "Nova York"
)

const meuCargueiro = new VooCarga(
  "CARGO77",
  "Curitiba",
  "Miami",
  100
)


// =============================
// ATUALIZAR INFORMAÇÕES NA TELA
// =============================

function atualizarTela() {

  document.getElementById("statusJato").innerText =
`Código: ${meuJato.codigo}
Origem: ${meuJato.origem}
Destino: ${meuJato.destino}
Status: ${meuJato.status}
Altitude: ${meuJato.altitude}
Modo Supersônico: ${meuJato.modoSupersonico ? "Ativado 🚀" : "Normal ✈️"}
Comunicação: ${meuJato.comunicarTorre()}`


  document.getElementById("statusCarga").innerText =
`Código: ${meuCargueiro.codigo}
Origem: ${meuCargueiro.origem}
Destino: ${meuCargueiro.destino}
Status: ${meuCargueiro.status}
Altitude: ${meuCargueiro.altitude}
Carga: ${meuCargueiro.cargaAtual}/${meuCargueiro.capacidadeMaxima} toneladas
Comunicação: ${meuCargueiro.comunicarTorre()}`

}


// =============================
// FUNÇÕES DOS BOTÕES - JATO
// =============================

function decolarJato() {
  meuJato.decolar()
  atualizarTela()
}

function pousarJato() {
  meuJato.pousar()
  atualizarTela()
}

function ativarSupersonico() {
  meuJato.ativarSupersonico()
  atualizarTela()
}

function desativarSupersonico() {
  meuJato.desativarSupersonico()
  atualizarTela()
}


// =============================
// FUNÇÕES DOS BOTÕES - CARGA
// =============================

function decolarCarga() {
  meuCargueiro.decolar()
  atualizarTela()
}

function pousarCarga() {
  meuCargueiro.pousar()
  atualizarTela()
}

function embarcar() {

  const peso = Number(document.getElementById("pesoCarga").value)

  if (!peso) {
    alert("Digite um valor válido")
    return
  }

  meuCargueiro.embarcarCarga(peso)

  atualizarTela()
}


// =============================
// INICIAR TELA
// =============================

atualizarTela()