let obj = {
  name: "father",
  children: [
    {
      name: "son",
      children: [],
    },
    {
      name: "son2",
      children: [
        { name: "grandSon1", children: [] },
        { name: "grandSon2", children: [] },
      ],
    },
  ],
}

function childrenRecursive(obj) {
  if (obj.children.length === 0) {
    return
  }

  obj.children.forEach((child) => {
    console.log(child.name)
    childrenRecursive(child)
  })
}

childrenRecursive(obj)
