// console.log(1);
let user = {
  id: 1,
  name: "name 1",
  age: 30,
  address: "address 1",
};

let listUser = [
  {
    id: 1,
    name: "truong",
    age: 30,
    address: "address 1",
  },
  {
    id: 2,
    name: "long",
    age: 29,
    address: "address 2",
  },
  {
    id: 3,
    name: "nguyen",
    age: 34,
    address: "address 3",
  },
  {
    id: 4,
    name: "nam",
    age: 50,
    address: "address 4",
  },
];
// lấy elm
let elmBodyTable = document.getElementById("tbody__user");
let resRow = "";

function formatRowUser(user) {
  let _stringTr = `<tr>
                        <th scope="row">${user.id}</th>
                        <td>${user.name}</td>
                        <td>${user.age}</td>
                        <td>${user.address}</td>
                    </tr>`;
  return _stringTr;
}

listUser.map((user) => {
  resRow += formatRowUser(user);
});

elmBodyTable.innerHTML = resRow;
console.log(elmBodyTable);
// {
//   /* <tr>
//     <td>1</td>
//     <td>2</td>
//     <td>3</td>
//     <td>4</td>
// </tr> */
// }

// get elm body table
// dummy data row `<tr><td>1</td><td>2</td></tr>`
// elm.innerHTML -> render row table -> table co 1 row data

// for -> render 5 row 

// dummy listUser -> for listUser -> render data row listUser
