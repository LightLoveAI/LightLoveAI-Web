/**
 * Lazy load PingFangSC font
 */
// export async function loadFont() {
//   try {
//     const fontUrl = 'https://static.guygubaby.top/fonts/PingFangSC.ttf'

//     const raw = await fetch(fontUrl, {
//       headers: {
//         'Content-Type': 'application/octet-stream',
//       },
//     })
//     const buffer = await raw.arrayBuffer()

//     const font = new FontFace('花园明朝体', buffer, {
//       style: 'normal',
//       weight: '400',
//     })
//     await font.load()
//     // @ts-expect-error ignore this line
//     document.font.add(font)

//     const styleTag = document.createElement('style')
//     styleTag.textContent = `
//     .font-sans, [font-sans=""] {
//       font-family: 花园明朝体, PingFangSC, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//     }`
//     document.head.appendChild(styleTag)
//   }
//   catch (error) {

//   }
// }

export function loadFontAsync(fontName: string, fontUrl: string) {
  const fontFace = new FontFace(fontName, `url(${fontUrl})`)

  fontFace.load().then((loadedFace) => {
    // @ts-expect-error ignore this line
    document.fonts.add(loadedFace)
    document.body.style.fontFamily = fontName
    console.log(`${fontName} 字体加载成功！`)
  }).catch((error) => {
    console.error(`${fontName} 字体加载失败:`, error)
  })
}
