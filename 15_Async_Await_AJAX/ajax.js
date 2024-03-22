let users = [];
const api_url = "https://jsonplaceholder.typicode.com/";
const show_detail = (user) => {
  let cont = $("#detail");
  if (cont) {
    $("#main").append($("<div>").attr("id", "detail"));
    cont = $("#detail");
  }
  $("#detail").empty();

  let det = $("<table>");
  det.addClass("user-detail");

  const fieldsToShow = [
    "name",
    "username",
    "address",
    "email",
    "phone",
    "website",
  ];
  fieldsToShow.forEach((field) => {
    let row = $("<tr>");
    row.append($("<td>").text(field));
    if (field === "address") {
      row.append($("<td>").text(user[field].city + ", " + user[field].street));
    } else {
      row.append($("<td>").text(user[field]));
    }
    det.append(row);
  });

  cont.append(det);

  let button = $("<button>");
  button.addClass("btn");
  button.text("Show Posts");
  button.click(() => {
    get_post(user.id);
  });

  cont.append(button);
};

const get_post = async (userId) => {
  await my_get(api_url + `posts?userId=${userId}`).then(
    (data) => {
      show_post(data);
    },
    (error) => {
      console.log(error);
    }
  );
};

const show_post = (data) => {
  let cont = $("#detail");

  console.log(data);

  // Создаем контейнер для постов
  let postContainer = $("<div>").addClass("post-container");

  // Перебираем все посты
  data.forEach((post) => {
    // Создаем блок для каждого поста
    let postElement = $("<div>").addClass("post");

    // Добавляем заголовок поста
    let titleElement = $("<h3>").text(post.title);
    postElement.append(titleElement);

    // Добавляем текст поста
    let bodyElement = $("<p>").text(post.body);
    postElement.append(bodyElement);

    // Добавляем блок поста в контейнер
    postContainer.append(postElement);
  });

  // Очищаем контейнер и добавляем новые посты
  cont.append(postContainer);
};

async function my_get(url) {
  return await $.getJSON(url);
}

$(document).ready(() => {
  // получаем пользователей.
  my_get(api_url + "users").then(
    (data) => {
      console.log(data);
      users = data;
      addUsersName(users);
    },
    (error) => {
      console.log(error);
    }
  );

  const addUsersName = (data) => {
    let cont = $("#users_cont");
    data.forEach((element) => {
      let user = $("<div>");
      user.addClass("user").text(element.name);

      user.click(() => {
        show_detail(element);
      });
      cont.append(user);
    });
  };
});
