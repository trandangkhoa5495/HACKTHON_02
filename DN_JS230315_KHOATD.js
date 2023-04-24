const data1 = JSON.parse(localStorage.getItem("reviews")) ?? [];

function renderdata(data) {
  let listdata = document.querySelector(".table");

  let content = "";
  data.forEach((item) => {
    content += `<li class="item">
    <span class="rate">${data1.rate}</span>
    ${data1.content}
    <div class="edit_remove">
      <button class="edit" onclick="handleEdit(this,${data1.id})">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="remove" onclick="handleDelete(this,${data1.id})">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </li>`;
  });
  listdata.innerHTML = content;
}

renderdata(data1);

let getrate;
function one(e, value) {
  const raTing = document.querySelectorAll(".button input");
  raTing.forEach((raTing) => {
    raTing.classList.remove("active");
  });
  e.classList.add("active");
  getrate = value;
}

const formElement = document.querySelector(".Feedback3");
let isEdit = false;
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const review_content = formElement.querySelector("#content").value;
  let id;
  if (data1.length > 0) {
    id = data1[data1.length - 1].id + 1;
  } else {
    id = 1;
  }
  const new_review = {
    id: id,
    rate: Number(getrate),
    content: review_content,
  };
  data1.push(new_review);
  localStorage.setItem("reviews", JSON.stringify(data1));
  renderdata(data1);
  formElement.querySelector("#content").value = "";
});

function handleDelete(id) {
  const data1 = JSON.parse(localStorage.getItem("reviews"));
  data1.forEach((item, index) => {
    if (item.id == id) {
      item.splice(index, 1);
    }
  });
  localStorage.setItem("reviews", JSON.stringify(data1));
  renderdata(data1);
}
