$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "mapa.xml",
        dataType: "xml",
        success: (xml) => {
            console.log(xml)
            let a = $(xml).find("continente").each(function () {
                let nome = $(this).find("regiao").first().text()
                $("#tcontinente").append($("<option/>", { value: nome, text: nome }))
            })
        },
        error: (error) => {
            console.log(error)
        }
    })

    $("#tcontinente").change(function () {
        let nome = $(this).val()
        $("#tpaises").empty()
        $.ajax({
            type: "GET",
            url: "mapa.xml",
            dataType: "xml",
            success: (xml) => {
                console.log(xml)
                $(xml).find("continente").each(function () {
                    //let nome = $(this).find("regiao").first().text()
                    if (nome == $(this).find("regiao").first().text()) {
                       // alert(nome)

                        $(this).find("pais").each(function () {
                            $("#tpaises").append($("<option/>", { value: $(this).text(), text: $(this).text() }))
                        })
                    }
                })
            },
            error: (error) => {
                console.log(error)
            }
        })
    })
    $("#tpaises").change(function () {
        let pais = $(this).val();
        //alert(pais)
        $.ajax({
            type: "GET",
            url: "mapa.xml",
            dataType: "xml",
            success: (xml) => {
               $(xml).find("pais").each(function(){
                    if($(this).text() == pais){
                        let bandeira = $(this).find("bandeira").first();
                        let fullPath = `_img/${bandeira.text()}.png`
                        $("#bandeira").children("img").attr("src", fullPath)
                    }
                    
                })
            },
            error: (error) => {
                console.log(error)
            }
        })
    })
})










//-- Exemplo de funcao para obter o continente selecionado
$("#tcontinente").change(function () {
    var selectedItem = $("#tcontinente").val()[0];
    
});

//-- Exemplo de funcao para obter o pais selecionado
$("#tpaises").change(function () {
    var selectedItem = $("#tpaises").val()[0];
    
});

//-- Exemplo de estrutura de condicao
var continenteXml = "África";
var selectedItem = $("#tcontinente").val()[0];

if(continenteXml === selectedItem) {
    
}

//-- Algumas dicas --//
/*
 * Utilize a funcao empty para apagar todos os itens da caixa de selecao
 * Utilize a funcao append para adicionar novo item para não apagar o item anteriormente adicionado
 * Melhor separar tratar cada area de forma isolada, mas tudo deve estar no callback do success
 * As estrutura de condicao irao ajudar a criar filtros
 */




