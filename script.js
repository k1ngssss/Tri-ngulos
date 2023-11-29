//Função tipo de triângulo quanto aos lados
function calculart() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);
    let ttriangulo;

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert("Por favor preencha todos os campos.")
        return;
    }
    else if (lado1 <= 0) {
        alert("Os lados do triângulo não podem ter valores negativos nem nulos de comprimento!")
        return;
    }
    else if (lado2 <= 0) {
        alert("Os lados do triângulo não podem ter valores negativos nem nulos de comprimento!")
        return;
    }
    else if (lado3 <= 0) {
        alert("Os lados do triângulo não podem ter valores negativos nem nulos de comprimento!")
        return;
    }
    else if (lado1 == lado2 && lado1 == lado3) {
        ttriangulo = "Triângulo equilátero";
        alert("O triângulo formado é equilátero!");
        document.getElementById('ttriângulo').innerHTML = `
        <p>Tipo de triângulo: ${ttriangulo}</p>`;
        return;
    }
    else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1) {
        ttriangulo = "Triângulo isósceles";
        alert("O triângulo formado é isósceles!");
        document.getElementById('ttriângulo').innerHTML = `
        <p>Tipo de triângulo: ${ttriangulo}</p>`;
        return;
    }
    else if (lado1 != lado2 && lado1 != lado3) {
        ttriangulo = "Triângulo escaleno";
        alert("O triângulo formado é escaleno!");
        document.getElementById('ttriângulo').innerHTML = `
        <p>Tipo de triângulo: ${ttriangulo}</p>`;
        return;
    }

   
}

//Função mudar imagens tipo de triângulo quanto aos lados
function imagenstl() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);
    let imagem = '';
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (lado1 == lado2 && lado1 == lado3) {
        imagem = "/Imagens/Triângulo equilátero.png"
    }
    else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1) {
        imagem = "/Imagens/Triângulo isósceles.png"
    }
    else if (lado1 != lado2 && lado1 != lado3) {
        imagem = "/Imagens/Triângulo escaleno.png"
    }
    
//Output HTML
document.getElementById('imagem').src = imagem;

}

//--

//Função tipo de triângulo quanto aos ângulos
function calculara() {
    var angulo1 = parseFloat(document.getElementById('ângulo1').value);
    var angulo2 = parseFloat(document.getElementById('ângulo2').value);
    var angulo3 = parseFloat(document.getElementById('ângulo3').value);
    let sangulos = angulo1 + angulo2 + angulo3;
    let tangulo;

    if (angulo1 >= 179 || angulo2 >= 179 || angulo3 >= 179) {
        tangulo = "";
        alert("Por favor atribua valores válidos, a soma dos três ângulos interiores de um triângulo tem de ser 180°.")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)) {
        tangulo = "";
        alert("Por favor preencha todos os campos.")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (angulo1 <= 0) {
        tangulo = "";
        alert("Os ângulos interiores de um triângulo não podem ser nulos nem negativos!")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (angulo2 <= 0) {
        tangulo = "";
        alert("Os ângulos interiores de um triângulo não podem ser nulos nem negativos!")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (angulo3 <= 0) {
        tangulo = "";
        alert("Os ângulos interiores de um triângulo não podem ser nulos nem negativos!")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (sangulos != 180) {
        tangulo = "";
        alert("Por favor atribua valores válidos. A soma dos ângulos interiores de um triângulo tem de ser 180°.")
        document.getElementById('tângulo').innerHTML = `
        <p>${tangulo}</p>`;
        return;
    }
    else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        tangulo = "Triângulo acutângulo";
        alert("Todos os ângulos interiores do triângulo são agudos.");
        document.getElementById('tângulo').innerHTML = `
        <p>Tipo de triângulo: ${tangulo}</p>`;
        return;
    }
    else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        tangulo = "Triângulo retângulo";
        alert("O triângulo forma um ângulo reto e dois ângulos agudos no seu interior.");
        document.getElementById('tângulo').innerHTML = `
        <p>Tipo de triângulo: ${tangulo}</p>`;
        return;
    }
    else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        tangulo = "Triângulo obtusângulo";
        alert("O triângulo forma um ângulo obtuso e dois ângulos agudos no seu interior.");
        document.getElementById('tângulo').innerHTML = `
        <p>Tipo de triângulo: ${tangulo}</p>`;
        return;
    }

}

//Função mudar imagens tipo de triângulo quanto aos ângulos
function imagensta() {
    var angulo1 = parseFloat(document.getElementById('ângulo1').value);
    var angulo2 = parseFloat(document.getElementById('ângulo2').value);
    var angulo3 = parseFloat(document.getElementById('ângulo3').value);
    let imagem = '';
    if (isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        imagem = "/Imagens/Triângulo acutângulo.png.png"
    }
    else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
        imagem = "/Imagens/Triângulo retângulo.png"
    }
    else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        imagem = "/Imagens/Triângulo obtusângulo.png"
    }  
    
//Output HTML
document.getElementById('imagema').src = imagem;

}

