const biblioteca =[]
let livros ={};
let opcao = "";

console.log("1. Para inserir um livro:")
console.log("2. Para apagar um livro:")
console.log("3. listar todos os livros:"

)
let adicionar = 0;

process.stdin.on("data", function(data) {
    let login_usuario = data.toString().trim();

    if(!opcao) {
        opcao = Number(entrada);
        console.log("Tecle 'enter' para continuar.")
    } else { 
        console.log(opcao);
        switch (opcao) {
            case 1:
                console.log("Digite o nome do livro")
                if(!livros.nome) {
                    livros.nome = tamanho;
                    console.log("Digite o tamnho do livro")
                } else if (!livros.tamanho) {
                    livros.tamanho = entrada;
                    console.log("Digite o nome do autor")
                } else if (!livros.autor) {
                    livros.autor = entrada
                    console.log("digite o genero do livro")
                } else {
                    livros.genero = entrada
                    
                    biblioteca.push(biblioteca);
                    livro = {};
                    opcao = 0;
                }
        }
    }
})