const fetch = require('node-fetch')

function getColumn (id) {
  const url = `www.baidu.com/column${id}`
  fetch(url)
    .then(response => response.json())
    .then(column => {
      console.log(column.name, column.intro)
    })
}
getColumn('id')

async function getColumns (id) {
  const url = `www.baidu.com/column${id}`
  const response = await fetch(url)
  const column = await response.json()
  console.log(column.name, column.intro)
}
getColumns('asdf')

async function getColumn1 (id) {
  const url = `www.baidu.com/column${id}`
  const response = await fetch(url)
  const column = await response.json()
  return column
}
getColumn1('sadf')
  .the(column => {
    console.log(column.name, column.intro)
  })

const getColumn2 = async (id) => {
  const url = `www.baidu.com/column${id}`
  const response = await fetch(url)
  const column = await response.json()
  return column
}
(async => {
  const column = await getColumn2('asdf')
  console.log(column.name, column.intro)
})()

class APIClient {
  async getColumn3 (id) {
    const url = `www.baidu.com/column${id}`
    const response = await fetch(url)
    const column = await response.json()
    return column
  }
}
(async => {
  const client = new APIClient();
  const column = await client.getColumn3('asdf')
  console.log(column.name, column.intro)
})()

// 错误处理
async function zz (id) {
  const url = `www.baidu.com/column${id}`
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error(response.statusText)
  }
}
const showColumnInfo = async (id) => {
  try {
    const column = await zz('asdf')
    console.log(column.name, column.intro)
  } catch (err) {
    console.log(err)
  }
}
showColumnInfo('asddfs')

async function getColumn5 (id) {
  const url = `www.baidu.com/column${id}`
  const response = await fetch(url)
  const column = await response.json()
  return column
}
const showColumnInfo2 = async (id) => {
  try {
    // 串行
    const column1 = await getColumn5('asdf')
    const column2 = await getColumn5('acc')
    console.log(column1.name, column1.intro)
    console.log(column2.name, column2.intro)

     // 并行  提升速度
     const feweeklyPromise = getColumn5('asdf')
     const totlingPromise = getColumn5('totling')
     const column3 = await feweeklyPromise
     const column4 = await totlingPromise
     console.log(column3.name, column3.intro)
     console.log(column4.name, column4.intro)
  } catch (err) {
    console.log(err)
  }
}
showColumnInfo2()

// 多个一起完成并行
const showColumnInfo3 = async (id) => {
  const [feweekly, toolingtips] = await Promise.all([
    getColumn5('feweekly'),
    getColumn5('toolingtips')
  ])

  console.log(feweekly.name, feweekly.intro)
  console.log(toolingtips.name, toolingtips.intro)
}

async function main () {
  //const number = await 890
  const number = await Promise.resolve(890)
  console.log(number)
}

main()