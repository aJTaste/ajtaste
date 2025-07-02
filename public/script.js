document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("school-mode-toggle");
  const status = document.getElementById("school-mode-status");
  let schoolMode = false;

  const updateUI = () => {
    if (schoolMode) {
      document.title = "９学年（令和７年度）";
      document.querySelector("link[rel='icon']").href = "https://ssl.gstatic.com/classroom/favicon.ico";
      status.textContent = "現在：有効";
    } else {
      document.title = "俺等のWebアプリ";
      document.querySelector("link[rel='icon']").href = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23434343'%3e%3cpath d='M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40ZM160-360h640v-400H160v400Zm320-200Z'/%3e%3c/svg%3e";
      status.textContent = "現在：無効";
    }
  };

  toggle.addEventListener("click", () => {
    schoolMode = !schoolMode;
    updateUI();
  });

  updateUI();
});