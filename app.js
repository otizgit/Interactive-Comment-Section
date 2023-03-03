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

const container = document.querySelector(".container");

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
  console.log(commentContent);
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

const replyBox = document.querySelector(".reply-box");
const textArea = replyBox.querySelector(".reply-input textarea");
let repliesBox = document.querySelector(".replies-box");
const sibling = repliesBox.previousElementSibling;
const user = sibling.querySelector(".user");

const reply = replyBox.querySelector(".reply");
reply.addEventListener("click", function () {
  if (textArea.value.trim() === "") {
    alert("Please enter a comment");
  } else {
    let newComment = document.createElement("div");
    newComment.classList.add("comment-container");
    newComment.innerHTML = `
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
                    <span>@${user.innerHTML}</span> ${textArea.value}
                </div>
                <div class="update">Update</div>
            </div>
        </div>
    </div>`;

    repliesBox.appendChild(newComment);

    let votes = newComment.querySelector(".votes");
    votes.addEventListener("click", function (e) {
      let target = e.target;
      let track = votes.querySelector(".track");

      if (target.classList.value === "plus") {
        track.innerText = parseInt(track.innerText) + 1;
      } else if (target.classList.value === "minus") {
        track.innerText = parseInt(track.innerText) - 1;
      }
    });
    textArea.value = "";

    let deleteBtn = newComment.querySelector(".delete");
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
          newComment.classList.add("remove-comment");
          newComment.addEventListener("animationend", function () {
            this.remove();
          });
        }
      });
    });

    let editBtn = newComment.querySelector(".edit");
    editBtn.addEventListener("click", function () {
      let commentContent = newComment.querySelector(".comment-content");
      commentContent.setAttribute("contenteditable", true);
      commentContent.classList.add("active-comment");
      let update = newComment.querySelector(".update");
      update.classList.add("show-update");

      update.addEventListener("click", function () {
        this.classList.remove("show-update");
        commentContent.removeAttribute("contenteditable", true);
        commentContent.classList.remove("active-comment");
      });
    });
  }
});

const replyBtns = document.querySelectorAll(".reply-btn");

let replyState1 = true;

let firstBtn = replyBtns[0];
firstBtn.addEventListener("click", function () {
  let parentElement =
    firstBtn.parentElement.parentElement.parentElement.parentElement
      .parentElement;

  if (replyState1) {
    const replyBox = document.createElement("div");
    replyBox.classList.add("reply-box");
    replyBox.innerHTML = `
            <img class="main-user-img" src="./images/avatars/image-juliusomo.png" alt="">
            <div class="reply-input">
                <textarea placeholder="Add a comment..." id="" rows="3"></textarea>
            </div>
            <div class="reply">Reply</div>`;
    parentElement.appendChild(replyBox);
  } else {
    let replyBox = parentElement.querySelector(".reply-box");
    replyBox.remove();
  }
  replyState1 = !replyState1;

  const replyBox = parentElement.querySelector(".reply-box");
  const textArea = replyBox.querySelector(".reply-input textarea");

  const user = parentElement.querySelector(".user");

  const reply = parentElement.querySelector(".reply");
  reply.addEventListener("click", function () {
    if (textArea.value.trim() === "") {
      alert("Please enter a comment");
    } else {
      let repliesBox = document.createElement("div");
      repliesBox.classList.add("replies-box");
      repliesBox.innerHTML = `
        <div class="comment-container">
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
                        <span>@${user.innerHTML}</span> ${textArea.value}
                    </div>
                    <div class="update">Update</div>
                </div>
            </div>
        </div>
        </div>`;

      const time = repliesBox.querySelector(".time");
      let trackSeconds = 0;
      let trackMinutes = 0;
      let trackHours = 0;

      setInterval(() => {
        trackSeconds++;
        if (trackSeconds / 60 === 1) {
          trackSeconds = 0;
          trackMinutes++;
          time.innerText = trackMinutes.toString() + " minute ago";
          if (trackMinutes > 1) {
            time.innerText = trackMinutes.toString() + " minutes ago";
          }
        }
        if (trackMinutes / 60 === 1) {
          trackMinutes = 0;
          trackHours++;
          time.innerText = trackHours.toString() + " hour ago";
          if (trackHours > 1) {
            time.innerText = trackHours.toString() + " hours ago";
          }
        }
      }, 1000);

      let commentDiv = parentElement.querySelector(".comment-div");
      commentDiv.appendChild(repliesBox);

      let votes = repliesBox.querySelector(".votes");
      votes.addEventListener("click", function (e) {
        let target = e.target;
        let track = votes.querySelector(".track");

        if (target.classList.value === "plus") {
          track.innerText = parseInt(track.innerText) + 1;
        } else if (target.classList.value === "minus") {
          track.innerText = parseInt(track.innerText) - 1;
        }
      });
      textArea.value = "";

      let deleteBtn = repliesBox.querySelector(".delete");
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
            repliesBox.classList.add("remove-comment");
            repliesBox.addEventListener("animationend", function () {
              this.remove();
            });
          }
        });
      });

      let editBtn = repliesBox.querySelector(".edit");
      editBtn.addEventListener("click", function () {
        let commentContent = repliesBox.querySelector(".comment-content");
        commentContent.setAttribute("contenteditable", true);
        commentContent.classList.add("active-comment");
        let update = repliesBox.querySelector(".update");
        update.classList.add("show-update");

        update.addEventListener("click", function () {
          this.classList.remove("show-update");
          commentContent.removeAttribute("contenteditable", true);
          commentContent.classList.remove("active-comment");
        });
      });
    }
  });
});

let replyState3 = true;

let thirdBtn = replyBtns[2];
thirdBtn.addEventListener("click", function () {
  let parentElement =
    thirdBtn.parentElement.parentElement.parentElement.parentElement
      .parentElement;

  if (replyState3) {
    const replyBox = document.createElement("div");
    replyBox.classList.add("reply-box");
    replyBox.innerHTML = `
            <img class="main-user-img" src="./images/avatars/image-juliusomo.png" alt="">
            <div class="reply-input">
                <textarea placeholder="Add a comment..." id="" rows="3"></textarea>
            </div>
            <div class="reply">Reply</div>`;
    parentElement.appendChild(replyBox);
  } else {
    let replyBox = parentElement.querySelector(".reply-box");
    replyBox.remove();
  }
  replyState3 = !replyState3;

  const replyBox = parentElement.querySelector(".reply-box");
  const textArea = replyBox.querySelector(".reply-input textarea");

  const user = parentElement.querySelector(".user");

  const reply = parentElement.querySelector(".reply");
  reply.addEventListener("click", function () {
    if (textArea.value.trim() === "") {
      alert("Please enter a comment");
    } else {
      let repliesBox = document.createElement("div");
      repliesBox.classList.add("replies-box");
      repliesBox.innerHTML = `
        <div class="comment-container">
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
                        <span>@${user.innerHTML}</span> ${textArea.value}
                    </div>
                    <div class="update">Update</div>
                </div>
            </div>
        </div>
        </div>`;

      const time = repliesBox.querySelector(".time");
      let trackSeconds = 0;
      let trackMinutes = 0;
      let trackHours = 0;

      setInterval(() => {
        trackSeconds++;
        if (trackSeconds / 60 === 1) {
          trackSeconds = 0;
          trackMinutes++;
          time.innerText = trackMinutes.toString() + " minute ago";
          if (trackMinutes > 1) {
            time.innerText = trackMinutes.toString() + " minutes ago";
          }
        }
        if (trackMinutes / 60 === 1) {
          trackMinutes = 0;
          trackHours++;
          time.innerText = trackHours.toString() + " hour ago";
          if (trackHours > 1) {
            time.innerText = trackHours.toString() + " hours ago";
          }
        }
      }, 1000);

      let commentDiv = parentElement.querySelector(".comment-div");
      commentDiv.appendChild(repliesBox);

      let votes = repliesBox.querySelector(".votes");
      votes.addEventListener("click", function (e) {
        let target = e.target;
        let track = votes.querySelector(".track");

        if (target.classList.value === "plus") {
          track.innerText = parseInt(track.innerText) + 1;
        } else if (target.classList.value === "minus") {
          track.innerText = parseInt(track.innerText) - 1;
        }
      });
      textArea.value = "";

      let deleteBtn = repliesBox.querySelector(".delete");
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
            repliesBox.classList.add("remove-comment");
            repliesBox.addEventListener("animationend", function () {
              this.remove();
            });
          }
        });
      });

      let editBtn = repliesBox.querySelector(".edit");
      editBtn.addEventListener("click", function () {
        let commentContent = repliesBox.querySelector(".comment-content");
        commentContent.setAttribute("contenteditable", true);
        commentContent.classList.add("active-comment");
        let update = repliesBox.querySelector(".update");
        update.classList.add("show-update");

        update.addEventListener("click", function () {
          this.classList.remove("show-update");
          commentContent.removeAttribute("contenteditable", true);
          commentContent.classList.remove("active-comment");
        });
      });
    }
  });
});
