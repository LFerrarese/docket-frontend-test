type Alert = "success" | "warning";

const toastElement = document.getElementById("Toast") as HTMLDivElement;

export const toast = (alertType: Alert, text: string) => {
  let timer = 100;

  removeAllClasses();
  toastElement.innerHTML = "";
  toastElement.innerHTML = `<p>${text}</p>`;

  const timerElement = document.createElement("div");
  timerElement.className = "toast-timer";

  toastElement.appendChild(timerElement);

  toastElement.classList.add(alertType);
  toastElement.classList.add("active");

  setInterval(() => {
    if (timer === 0) {
      toastElement.classList.remove("active");
      timerElement.remove();
      toastElement.innerHTML = "";
      clearInterval();
    }

    timerElement.style.width = `${timer}%`;
    timer -= 1;
  }, 30);
};

const removeAllClasses = () =>
  toastElement.classList.forEach((className) =>
    className !== "toast" ? toastElement.classList.remove(className) : false
  );
