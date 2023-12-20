const terms =
  [ ["KEY1", ["dummy1","dummy2","dummy3"]]
  , ["KEY2", ["dummy4","dummy5","dummy6","dummy7"]]
  , ["KEY3", ["dummy8","dummy9"]]
  ]
  
const dict =
  new Map(terms.flatMap(([ k, vs ]) => vs.map(v => [ v, k ])))
console.log(dict)
console.log(dict.get("dummy2"))
console.log(dict.get("dummy5"))
console.log(dict.get("dummy7"))
console.log(dict.get("dummy9"))
console.log(dict.get("dummy0"))