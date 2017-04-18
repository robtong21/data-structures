var list = {
  nick: ['connie'],
  connie: ['luke'],
  luke: ['ben', 'connie'],
  ben: ['nick', 'connie','david'],
  david: [],
  fred: ['luke'],
  james: []
}

function isPath(startName, endName) {
  for (var i=0; i<list.startName.length; i++) {
    if (list.startName[endName]) {
      return true
    }
  }
}
