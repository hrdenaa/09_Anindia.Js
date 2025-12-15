// Mengambil elemen
const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");
const commentList = document.getElementById("commentList");
const errorComment = document.getElementById("errorComment");

// Event tombol klik
submitComment.addEventListener("click", function () {

    const text = commentInput.value.trim();
    errorComment.textContent = ""; // reset error

    // Validasi input
    if (text === "" || text.length < 5) {
        errorComment.textContent = "Komentar harus diisi minimal 5 karakter!";
        return;
    }

    // Membuat elemen comment-item
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");

    const p = document.createElement("p");
    p.textContent = text;
    commentItem.appendChild(p);

    // Fitur ekstra: tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        commentList.removeChild(commentItem);
    });

    commentItem.appendChild(deleteBtn);

    // Masukkan ke daftar komentar
    commentList.appendChild(commentItem);

    // Reset textarea
    commentInput.value = "";
});
