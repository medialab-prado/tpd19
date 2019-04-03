

$(document).ready(function(){
	targetBlank();
	generateTOC();
	navegacion();
    setTitle();
    pClassDo();
    pClassInfo();
    pClassWarning();
    pClassAd();
    divClassDo();
    divClassInfo();
    divClassWarning();
    divClassAd();
    divClassEj();

    /* 
     * For printing in several pages
     */ 
    //$('#notebook').attr('style','');
    $('body').attr('style','overflow:visible');
    //$("#notebook-container").prepend('<div class="text-right"></div><p class="text-right text-uppercase autor">Programación en Python<br> Yolanda García Ruiz</p>');
    $("#notebook-container").append('<p class="text-center text-uppercase autor"><br> Yolanda García Ruiz </p><p class="text-center autor">Universidad Complutense de Madrid<br>ygarciar@ucm.es<br>Content on this site is licensed under a Creative Commons Attribution 4.0 International license. </p><div class="text-center"><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a></div>');
});

function targetBlank() {
    $('a').attr('target', '_blank');
}

function generateTOC() {

    var tocSection = $('#tableOfContents');
    /*
     * Parte nueva para crear las nuevas cabeceras de la tabla de contenidos
     */
    var parSeccion = $('<p></p>').text($(".section-title").text());
    var parTitulo = $('<p></p>').text($("h1").text().slice(0, -1));
    $("#headTOC").append(parSeccion).append(parTitulo);

    /*
        Cabecera antigua:
        $("#headTOC").text($("h2").text());
     */

    $("h2").each(function() {
        var innerText = $(this).text().slice(0, -1);
				var anchorName = innerText.split(' ').join('_');
        anchorName = anchorName.replace(/[^\w\s]/gi, '');
        $(this).attr("id",anchorName);
        tocSection.append('<li><a class="aTOC" href="#'+anchorName+'">'+innerText+'</a></li>');
    });

    $('.aTOC').click(function () {
        var name = $(this).attr("href");
        var target = $(name);
        var offset = target.position();
        console.log(offset);
        $("html,body").animate({
            scrollTop: offset.top +70// +70 hack par la barra de navegación
        }, 600);
        return false;
    });
}

function navegacion(){
	var navData = $('#navegacion');
	$('#navegacion').remove();

    navData.append('<nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="container-fluid"><div class="navbar-collapse"><ul class="nav navbar-nav navbar-left"><li class="resalte"><a id="anterior" href="lec81.html"><span class="glyphicon glyphicon-backward"></span><span class="hidden-xs">  Sección anterior</span></a></li></ul><div id="navtitle" class="navbar-brand">Título</div><ul class="nav navbar-nav navbar-right"><li class="resalte"><a id="siguiente" href="lec83.html"><span class="hidden-xs">Sección siguiente  </span><span class="glyphicon glyphicon-forward"></span></a></li></ul></div></div></nav>');
    var prev = navData.attr('prev');
    var next = navData.attr('next');
    $('#anterior', navData).attr('href', prev);
    $('#siguiente', navData).attr('href',next);

    if(!prev)
        $('#anterior', navData).remove();
    if(!next)
        $('#siguiente', navData).remove();

    $('#navtitle', navData).text($("h1").text().slice(0, -1));
    $('body').prepend(navData);
}

function setTitle() {
    var sectionName = $(".section-title");
    if (sectionName)
        document.title = sectionName.text();
        console.log(sectionName)
}

function pClassDo() {
    var elements = $("p.do").wrap('<div class="do-container"></div>');
    /* Cambiar aquí el icono del do */
    elements = elements.before('<div class="beforedo"><span class="glyphicon glyphicon-cog"></span></div>');
    elements = elements.wrap('<div class="do-p"></div>');
}

function pClassInfo() {
    var elements = $("p.info").wrap('<div class="info-container"></div>');
    /* Cambiar aquí el icono del info */
    elements=elements.before('<div class="beforeinfo"><span class="glyphicon glyphicon-info-sign"></span></div>');
    elements = elements.wrap('<div class="info-p"></div>');
}

function pClassWarning() {
    var elements = $("p.warning").wrap('<div class="warn-container"></div>');
    /* Cambiar aquí el icono del do */
    elements=elements.before('<div class="beforewarn"><span class="glyphicon glyphicon-warning-sign"></span></div>');
    elements = elements.wrap('<div class="warn-p"></div>');
}

function pClassAd() {
    var elements = $("p.ad").wrap('<div class="ad-container"></div>');
    /* Cambiar aquí el icono del do */
    elements = elements.before('<div class="beforead"><span class="glyphicon glyphicon-ok-sign"></span></div>');
    elements = elements.wrap('<div class="ad-p"></div>');
}

function divClassDo() {
    var elements = $("div.do").wrap('<div class="do-container"></div>');
    /* Cambiar aquí el icono del do */
    elements = elements.before('<div class="beforedo"><span class="glyphicon glyphicon-cog"></span></div>');
    elements = elements.wrap('<div class="do-p"></div>');
}

function divClassInfo() {
    var elements = $("div.info").wrap('<div class="info-container"></div>');
    /* Cambiar aquí el icono del info */
    elements=elements.before('<div class="beforeinfo"><span class="glyphicon glyphicon-info-sign"></span></div>');
    elements = elements.wrap('<div class="info-p"></div>');
}

function divClassWarning() {
    var elements = $("div.warning").wrap('<div class="warn-container"></div>');
    /* Cambiar aquí el icono del do */
    elements=elements.before('<div class="beforewarn"><span class="glyphicon glyphicon-warning-sign"></span></div>');
    elements = elements.wrap('<div class="warn-p"></div>');
}

function divClassAd() {
    var elements = $("div.ad").wrap('<div class="ad-container"></div>');
    /* Cambiar aquí el icono del do */
    elements = elements.before('<div class="beforead"><span class="glyphicon glyphicon-ok-sign"></span></div>');
    elements = elements.wrap('<div class="ad-p"></div>');
}


function divClassEj() {
    $(".ej_content").each(function(index, elem) {
        var newElem;
        if (! $(elem).parent().is('.ej')) {
            newElem = $(elem).wrap('<div class="ej"></div>');
            newElem = newElem.before('<div class="icon"><span class="flaticon-write12"></span></div>');
        }
        var nextSibling;
        if (newElem)
            nextSibling = newElem.parent().next();
        else
            nextSibling = $(elem).next();
        console.log(nextSibling);
        if (nextSibling.is('.ej_solucion')) {
            console.log(newElem);
            var newElem = $(elem).wrap('<div class="ej_content_sol"></div>')
            newElem = newElem.after(nextSibling)
        }
    })
}


