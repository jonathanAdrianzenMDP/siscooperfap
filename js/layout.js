$(document).ready(function () {
	
//Acciones
$('[data-toggle="tooltip"]').tooltip();
//$('.collapse.in').toggleClass('in');//OCULTA LOS PANELES


//Clases
//$('.panel-heading').addClass('link');


$('.wrapper').html(

            '<nav id="sidebar">'+
                '<div id="dismiss"><i class="glyphicon glyphicon-arrow-left"></i></div>'+

                '<div class="sidebar-header"><img src="img/logo_cooperacion.png" class="img-circle" height="50px" width="50px" />'+
                    '<h5>EJERCICIO COOPERACIÓN IX</h5>'+
                '</div>'+

                '<ul class="list-unstyled components">'+
                '    <li>'+
                '        <a href="home.html" alt="GET ANIMATION TEAMS">HOME</a>'+//ANIMATION TEAMS
                
                '    </li>'+
                '    <li>'+
                '        <a href="#dipac" data-toggle="collapse" aria-expanded="true" alt="Ejercicio de Cooperación IX">COOPERATION EXERCISE IX</a>'+
                '        <ul class="list-unstyled collapse in" id="dipac">'+
                '           <li><a target="blank" href="pdf/mining.pdf">MANNING</a></li>'+
                '           <li><a target="blank" href="pdf/organization.pdf">ORGANIZATION</a></li>'+
                '           <li><a target="blank" href="pdf/RHYTHM_OF_BATTLE.pdf" alt="Ritmo de Batalla">RHYTHM OF BATTLE</a></li>'+
                '           <li><a target="blank" href="https://mail.fap.mil.pe/" alt="Ir al Correo Electrónico">EMAIL</a></li>'+
                '           <li><a href="#" alt="Ir al sistema de ICC">SOFTWARE ICC</a></li>'+
                '           <li><a href="#" alt="Ir al sistema MULA">SOFTWARE MULA</a></li>'+
                '           <li><a href="getTrainingDocs.html" alt="Ver Documentos de Entrenamiento">TRAINING DOCS</a></li>'+
                '       </ul>'+
                '    </li>'+

                
                '    <li>'+
                '        <a href="#menuAdmin" data-toggle="collapse" aria-expanded="false">ADMINSTRATION</a>'+
                '        <ul class="collapse list-unstyled" id="menuAdmin">'+
                '            <li><a href="gridAnimationTeams.html">SET ANIMATION TEAMS</a></li>'+//REGISTRO DE NOTICIAS 
                '           <li><a href="gridTrainingDocs.html">SET TRAINING DOCS</a></li>'+//CARGA DE PROCESOS DE ENTRENAMIENTO
                '            <li><a href="#">SYSTEM PARAMETERS</a></li>'+//VALORES RUTA_UPLOAD_FILE,TIPO_DOC_ENTRENAM,RESET_USUARIO.
                '        </ul>'+
                '    </li>'+
                '</ul>'+
            '</nav>'+

            
            '<nav class="navbar navbar-default">'+
            '    <div class="container-fluid">'+
                    
            '        <div class="navbar-header">'+
            '            <ul class="nav navbar-nav navbar-left">'+
            '                <li>'+
            '                    <button type="button" id="sidebarCollapse" class="navbar-btn navbar-toggle active openmenu">'+
            '                        <span class="icon-bar"></span>'+
            '                        <span class="icon-bar"></span>'+
            '                        <span class="icon-bar"></span>'+
            '                    </button>'+
            '                </li>'+
            '                <li class="text-center">'+
            '                    <img src="img/logo_cooperacion.png" width="60px" />'+
            '                    <label class="h5">EJERCICIO COOPERACIÓN IX - PERÚ</label>'+ 
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            
            '        <div class="collapse navbar-collapse">'+
            '            <div class="row pull-right text-center">'+
            
            '                <div class="col-sm-12">'+
            '                   <ul class="nav navbar-nav navbar-right iconos-sistema">'+
            '                    <li><label class="h5">TEN FAP JONATHAN ADRIANZEN MANRIQUE</label></li>'+
            '                    <li title="Inicio" data-toggle="tooltip" data-placement="bottom"><span class="glyphicon glyphicon-home"></span></li>'+
            '                    <li title="Cambiar Contraseña" data-toggle="tooltip" data-placement="bottom"><span class="glyphicon glyphicon-lock"></span></li>'+
            '                    <li title="Salir" data-toggle="tooltip" data-placement="bottom"><span class="glyphicon glyphicon-off"></span></li>'+
            '                   </ul>'+
            '                </div>'+
            '           </div>'+
            '		</div>'+

            '	</div>'+
            '</nav>'
	);


$('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
});


$('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').fadeIn();
    //$('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});
	
$("#sidebar").mCustomScrollbar({
    theme: "minimal"
});


$('#btnPrint').on('click', function(){
 
     var printWindow = window.open('', '', 'height=400,width=800');
            printWindow.document.write('<html><head><title>DIV Contents</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write($('#accordion').html());
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
 

});




});