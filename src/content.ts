import browser from 'webextension-polyfill';
import { type BrowserMessageType, type ColorScheme } from './models/app_models';
import axios from '../node_modules/axios/index';
import { fzReq } from './models/fromzero_res_models';

browser.runtime.onMessage.addListener(message => {
  console.log('got message', message);
  switch (message.type as BrowserMessageType) {
    case 'getColorScheme': {
      return Promise.resolve(getColorScheme());
    }
  }
});

function getColorScheme() {
  let scheme: ColorScheme = 'light';
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkModeMediaQuery.matches) {
    scheme = 'dark';
  }
  return scheme;
}

const t = async () => {
  let fzUrl = window.location.href;
  // @ts-ignore
  const urlParams = URL.parse(fzUrl).pathname.split('/')
  if (urlParams[1] !== "courses" || urlParams.length === 4) {
    return
  }
  console.log('----------------[ FZ Downaloder Up and Running ]---------------------')

  const url = `https://www.fromzero.com/api/course/jfz2/lessons/${urlParams[3]}/sublessons/${urlParams[4]}`
  const resRaw = await axios.get(url)
  const res = JSON.parse(resRaw.request.response) as fzReq
  console.log(res.si_sublesson.parts)
  res.si_sublesson.parts.forEach(part => {
    part.widgets.forEach(widget => {
      if (!widget.table) {
        return
      }
      widget.table.rows.forEach(t => {
        console.log('----------------[ New Word ]---------------------')
        console.log(t[0][0].text)
        const recordLink = t[0][0].record?.sounds['Kanako']
        const recordId = t[0][0].record?._id
        const wordSpan = document.querySelector(`span[data-t="sound-text-${recordId}"]`);

        const downloadContainer = wordSpan?.parentNode?.parentNode?.parentNode?.parentNode;
        if (downloadContainer?.lastChild?.nodeName === "A") {
          return
        }
        const link = document.createElement("a")
        link.classList.add("downloadButton")

        const i = document.createElement("i")
        link.appendChild(i)
        link.href = recordLink ?? ""
        i.classList.add(...["play", "circular", "icon", "no-select", "FZPlayButton"])

        downloadContainer?.appendChild(link)
      })
    })
  })
}
t()

const courseButtons = document.querySelectorAll("button[title], .sc-crhfPb")
const onReload = () => {
  const hasPlaceholder = document.querySelectorAll(".fill-enter-done").length > 0
  if (hasPlaceholder) {
    setTimeout(() => {
      onReload()
    }, 1000);
  }
  t()
}

courseButtons.forEach(btn => {
  btn.addEventListener("click", onReload)
})