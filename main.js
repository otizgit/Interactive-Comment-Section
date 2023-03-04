const container = document.querySelector(".container");

const votes = document.querySelectorAll(".votes");

votes.forEach((vote) => {
  vote.addEventListener("click", function (e) {
    let target = e.target;
    let track = vote.querySelector(".track");

    if (target.classList.value === "plus") {
      track.innerText = parseInt(track.innerText) + 1;
    } else if (target.classList.value === "minus") {
      track.innerText = parseInt(track.innerText) - 1;
    }
  });
});

const deleteBtn = container.querySelector(".delete");
deleteBtn.addEventListener("click", function () {
  let parentElement =
    this.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement;

  const overlay = document.querySelector(".overlay");
  overlay.classList.add("show-overlay");
  const modalContainer = overlay.querySelector(".modal-container");
  modalContainer.classList.add("show-modal");

  overlay.addEventListener("click", function () {
    this.classList.remove("show-overlay");
    modalContainer.classList.remove("show-modal");
  });

  modalContainer.addEventListener("click", function (e) {
    if (e.target.classList.value === "cancel") {
      this.classList.remove("show-modal");
    } else {
      parentElement.classList.add("remove-comment");
      parentElement.addEventListener("animationend", function () {
        this.remove();
      });
    }
  });
});

const editBtn = container.querySelector(".edit");
editBtn.addEventListener("click", function () {
  let parentElement =
    this.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement;

  let commentContent = parentElement.querySelector(".comment-content");
  commentContent.setAttribute("contenteditable", true);
  commentContent.classList.add("active-comment");
  let update = parentElement.querySelector(".update");
  update.classList.add("show-update");

  update.addEventListener("click", function () {
    this.classList.remove("show-update");
    commentContent.removeAttribute("contenteditable", true);
    commentContent.classList.remove("active-comment");
  });
});

let replyState = true;

container.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.value === "reply-btn") {
    let parentElement =
      target.parentElement.parentElement.parentElement.parentElement
        .parentElement;

    if (replyState) {
      let replyBox = document.createElement("div");
      replyBox.classList.add("reply-box");
      replyBox.innerHTML = `
          <img class="main-user-img" src="./images/avatars/image-juliusomo.png" alt="">
          <div class="reply-input">
              <textarea id="" rows="3" placeholder="Add a comment..."></textarea>
          </div>
          <div class="reply">Reply</div>`;

      parentElement.append(replyBox);

      let textArea = parentElement.querySelector(".reply-input textarea");
      let replyBtn = parentElement.querySelector(".reply");
      let user = parentElement.querySelector(".user");

      replyBtn.addEventListener("click", function () {
        if (textArea.value.trim() === "") {
          alert("Please enter a comment.");
        } else {
          let repliesBox = parentElement.querySelector(".replies-box");

          let commentContainer = document.createElement("div");
          commentContainer.innerHTML = `
            <div class="comment-div">
            <div class="comment">
              <div class="votes">
                  <img class="plus" src="./images/icon-plus.svg" alt="icon-plus">
                  <div class="track">0</div>
                  <img class="minus" src="./images/icon-minus.svg" alt="icon-minus">
              </div>
              <div class="comment-box">
                  <div class="comment-top">
                      <div class="comment-info">
                          <img class="user-img" src="./images/avatars/image-juliusomo.png" alt="image-juliusomo">
                          <div class="user">juliusolmo</div>
                          <div class="user-notifier">you</div>
                          <div class="time">Just Now</div>
                      </div>
                      <div class="comment-options">
                          <div class="delete">
                              <img src="./images/icon-delete.svg" alt="delete">
                              <p>Delete</p>
                          </div>
                          <div class="edit">
                              <img src="./images/icon-edit.svg" alt="edit">
                              <p>Edit</p>
                          </div>
                      </div>
                  </div>
                  <div class="comment-content">
                      <span>@${user.innerText}</span> ${textArea.value}.
                  </div>
                  <div class="update">Update</div>
              </div>
            </div>
            </div>`;

          repliesBox.appendChild(commentContainer);
          textArea.value = "";
          replyBox.remove();
          replyState = true;

          const plus = commentContainer.querySelector(".plus");
          const minus = commentContainer.querySelector(".minus");
          const track = commentContainer.querySelector(".track");

          plus.addEventListener("click", function () {
            track.innerText = parseInt(track.innerText) + 1;
          });
          minus.addEventListener("click", function () {
            track.innerText = parseInt(track.innerText) - 1;
          });

          let deleteBtn = commentContainer.querySelector(".delete");
          deleteBtn.addEventListener("click", function () {
            const overlay = document.querySelector(".overlay");
            overlay.classList.add("show-overlay");
            const modalContainer = overlay.querySelector(".modal-container");
            modalContainer.classList.add("show-modal");

            overlay.addEventListener("click", function () {
              this.classList.remove("show-overlay");
              modalContainer.classList.remove("show-modal");
            });

            modalContainer.addEventListener("click", function (e) {
              if (e.target.classList.value === "cancel") {
                this.classList.remove("show-modal");
              } else {
                commentContainer.classList.add("remove-comment");
                commentContainer.addEventListener("animationend", function () {
                  this.remove();
                });
              }
            });
          });

          let editBtn = commentContainer.querySelector(".edit");
          editBtn.addEventListener("click", function () {
            let commentContent =
              commentContainer.querySelector(".comment-content");
            commentContent.setAttribute("contenteditable", true);
            commentContent.classList.add("active-comment");
            let update = commentContainer.querySelector(".update");
            update.classList.add("show-update");

            update.addEventListener("click", function () {
              this.classList.remove("show-update");
              commentContent.removeAttribute("contenteditable", true);
              commentContent.classList.remove("active-comment");
            });
          });
        }
      });
    } else {
      let replyBox = parentElement.querySelector(".reply-box");
      replyBox.remove();
    }
    replyState = !replyState;
  }
});
