import { file } from "../../core/helper.js"
import { html } from "../../core/vdom.js"

/**
 * 
 * @param {{contents: Array<{
 *      img: String,
 *      title: String,
 *      status: String,
 *      description: String,
 *      tagLine: Boolean
 * }>}} param0 
 * @returns 
 */
const LearnCards = ({ contents = [] }) => {
    return html.ul({ class: "learnCards"},contents.map(li => html.li([
        html.a({ class: 'learnCard' }, [
            html.img({ src: file(li.img), class: 'learnCard__image', alt: '' }),
            html.div({ class: 'learnCard__overlay' }, [
                html.div({ class: 'learnCard__header' }, [
                    html.svg({ class: "learnCard__arc", xmlns: "http://www.w3.org/2000/svg" }, [
                        html.path()
                    ]),
                    html.img({ class: "learnCard__thumb", src: file(li.img), alt: "" }),
                    html.div({ class: "learnCard__header-text" }, [
                        html.h3({ class: "learnCard__title" }, `${li.title}`),
                        li?.tagLine && html.span({ class: "learnCard__tagline" }),
                        html.span({ class: "learnCard__status" }, `${li.status}`)
                    ])
                ]),
                html.p({ class: "learnCard__description" }, `${li.description}`)
            ])
        ]),
    ])))

}

export default LearnCards