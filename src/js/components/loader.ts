export const loader = {
  _isLoading: false,
  loaderElement: document.getElementById("Loader") as HTMLDivElement,

  set isLoading(value: boolean) {
    this._isLoading = value;

    if (value) {
      if (!this.loaderElement.classList.contains("active")) {
        this.loaderElement.classList.add("active");
      }
    } else {
      if (this.loaderElement.classList.contains("active")) {
        this.loaderElement.classList.remove("active");
      }
    }
  },

  get isLoading() {
    return this._isLoading;
  },
};
