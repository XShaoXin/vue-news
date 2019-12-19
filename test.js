var a = [{
    id: true,
    name: 'xsx'
  },
  {
    id: true,
    name: 'xsx'
  },
  {
    id: false,
    name: 'jjj'
  },
  {
    id: false,
    name: 'jjj'
  },
]
var b = a.filter((item, i) => 
  !item.id
)
console.log(a);
console.log(b);
