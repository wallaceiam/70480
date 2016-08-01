window.onload = function () {
    queryById();
    queryByElement();
    queryByClass();

    alterDom();
}

function queryById() {
    var element = document.getElementById("outerDiv");
    alert(element.innerHTML);
    var queryElement = document.querySelector("#outerDiv");
    alert(queryElement.innerHTML);
}

function queryByElement() {
    var paragraphs = document.getElementsByTagName("p");
    alert(paragraphs.length);
    var queryParagraphs = document.querySelectorAll("p");
    alert(queryParagraphs.length);
}

function queryByClass() {
    var paragraphs = document.getElementsByClassName("subPara");
    alert("<p> elements with class subPara:" + paragraphs.length);
}

function alterDom() {

}