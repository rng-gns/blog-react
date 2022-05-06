import {createContext} from "react";

  export const  BannerCtx = createContext();
 export  const  BannerValue = {
    b1: {
        bg: "lightgreen",
        name: "Статьи для родителей о воспитании детей",
        text: "Советы и факты по воспитанию детей, средства, кружки, секции, мода.",
        className: "banner-card left"
    },
    b2: {
        bg: "lightsalmon",
        name: "Посты как развивать ребенка",
        text: "У Вас есть возможность на нашем сайте познакомится с актуальными статьями",
        className: "banner-card left"
    },
    b3: {
        bg: "plum",
        name: "Все об учебной мотивации школьников",
        text: "Советы родителям о том, как мотивировать ребенка к учебе, дисциплине или нелюбимому предмету. Развитие мотивации учебной деятельности у школьников.",
        className: "banner-card right"
    }
    // ,
    // b4: {
    //     bg: "#9CCD55",
    //     name: "Рога северного оленя",
    //     text: "от 10 до 30 кг."
    // },
    // b5: {
    //     bg: "#DB6825",
    //     name: "Слипы из шеи индейки",
    //     text: "100 % натуральное"
    // }

}