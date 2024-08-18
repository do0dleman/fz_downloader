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

let url = window.location.href;
// @ts-ignore
const urlParams = URL.parse(url).pathname.split('/')
const t = async () => {
  if (urlParams[1] !== "courses" || urlParams.length === 4) {
    return
  }
  console.log('----------------[ FZ Downaloder Up and Running ]---------------------')
  const url = `https://www.fromzero.com/api/course/jfz2/lessons/${urlParams[3]}/sublessons/${urlParams[4]}`
  const resRaw = await axios.get(url)
  const res = JSON.parse(resRaw.request.response) as fzReq
  res.si_sublesson.parts[0].widgets[0].table.rows.forEach(t => {
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
}
t()