
//we can set animation delay as following in ms (default 1000)
ProgressBar.singleStepAnimation = 1500;
ProgressBar.init(
  [ 'P01: Registro de Idea de Inversion',
    'P01: PMI Institucional',
	'P01: Solicitud de Ejecucion IOARR',
	'P02: Comite de Trabajo',
	'P02: Plan de Trabajo o Términos de Referencia',
	'P02: Perfil',
	'P03: Expediente Tecnico o Documento Equivalente',
	'P03: Informe de Consistencia',
	'P03: Ejecucion Fisica y Financiera',
	'P03: Liquidacion de Inversion'
  ],
  'Hired Professional',
  'progress-bar-wrapper' // created this optional parameter for container name (otherwise default container created)
);