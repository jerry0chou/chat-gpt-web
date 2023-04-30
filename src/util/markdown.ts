import createMD from 'markdown-it'
import hljs from 'highlight.js/lib/common'
// import 'highlight.js/styles/github-dark.css'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/brown-paper.css'
// @ts-ignore
import mk from 'markdown-it-katex'
import parse, {domToReact} from 'html-react-parser'

const renderer = createMD({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, {language: lang}).value
            } catch (err) {
                console.error(err)
            }
        }
        return ''
    },
    typographer: true,
}).use(mk)

export default function mdRender(content: string): JSX.Element {
    // @ts-ignore
    return parse(renderer.render(content))
}