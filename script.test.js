import { JSDOM } from "jsdom";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

describe("Modal Open Button", () => {
  let openBtn;
  let modalCont;

  beforeEach(() => {
    openBtn = document.createElement("button");
    openBtn.className = "open";
    modalCont = document.createElement("div");
    modalCont.className = "container";
    document.body.appendChild(openBtn);
    document.body.appendChild(modalCont);

    openBtn.addEventListener("click", () => {
      modalCont.classList.add("open");
    });
  });
});
