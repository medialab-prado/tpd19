

$(document).ready(function(){
    $("#notebook-container").prepend('<div class="text-right"><a rel="license" href="http://www.cunef.edu/"><img alt="cunef" style="border-width:0" src="../logo/logo.png" /></a></div><p class="text-right text-uppercase autor">Programación en Python<br> Yolanda García Ruiz</p>');
    $("#notebook-container").append('<p class="text-center autor">Content on this site is licensed under a Creative Commons Attribution 4.0 International license. </p><div class="text-center"><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a></div>');
});

$(document).ready(function(){
	targetBlank();
	generateTOC();
	navegacion();
	// $("#notebook-container").prepend('<p class="text-right text-uppercase autor">14-DATAPYTHON - Análisis de datos con Python</p>');
	// $("#notebook-container").append('<div class="text-center"><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a></div>');
});

function targetBlank() {
    $('a').attr('target', '_blank');
}

function generateTOC() {

    var tocSection = $('#tableOfContents');
    /*
     * Parte nueva para crear las nuevas cabeceras de la tabla de contenidos
     */
    $("#tableOfContents").prepend('<a href="http://cursosinformatica.ucm.es" target="_blank"><img id="logo-CFI" src="../logo/logo-CFI.png"></a>');
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
        $("body").animate({
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
