import React, { createContext, useState } from "react";

export const MediaContext = createContext({});
export const MediaProvider = ({ children }) => {
    const [slideImages, setSlideImages] = useState([
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaXixn0y4cpT_Dln6no6rwxU6zqi54WwAFIjMskesBjToULRaTGkEEVhaiXX73SEIbGob5LNN1MM97CUgoTytO7rKqCemyp1s-HUYBQ_7m1zBkIJYzSbzr0jbVf3UDxzPGRNlJY1yoKGfE7Cp41LpYEkWw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate1",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWeNVj6jLqMAg123TIQiifpIG3bsq-cv6pjY_WMj47echY4zsc-KgrAgEqBOd0mipPBMxuJ6T-Eb2FqZganLxdsHDC7Lw5-qcwYTYv-tGKdEULq39aYRrVU7H6Zt3llKle_F91Po5uY1Lonkb5hTNWHvw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate2",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaUgx_wtXL6P41mXudive6AqgcYMpMul098uCpYfQHQNHJdH6hCcsGOsCx9ju_I9aBRRQ2TJtOHodjzajpNW1qU19iF3mt0fCzXXZeDXHbQr7uu1b5zGGF5OQl-93gsEVH-b8VWPjCRID4ZZIQFxGMH_iw=w1252-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate3",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWhtP1EXBPfk83o8rds_nrwQQ9alzP9liDD3twFWdShNGqk9QDC9e9-wr-jJTeik7JcxOhCm-lL5stYCnZLUvnxQ0OIatBhQ6sUje61RbAjgM7SP6P0D7mkIbWMKPtPH5kczuieWAgJOoWIW7Nvf6sIbg=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate4",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AJFCJaWhtP1EXBPfk83o8rds_nrwQQ9alzP9liDD3twFWdShNGqk9QDC9e9-wr-jJTeik7JcxOhCm-lL5stYCnZLUvnxQ0OIatBhQ6sUje61RbAjgM7SP6P0D7mkIbWMKPtPH5kczuieWAgJOoWIW7Nvf6sIbg=w2224-h1668-s-no?authuser=0",
            tags: ["indoors", "empty"],
            name: "blank-slate5",
        },
        {
            url: "https://photos.google.com/share/AF1QipNgRzLXJAG0LM7TPZcjH8UoyN9B9-x67fIp7qlzI9S6zlfPgrIBoVGIdv0h_kBygA/photo/AF1QipMvWFaUMxtqsj5Kk2FXlpYMHQb3ip7Mb_Egzqwd?key=UTU1aUVzam50SU9iaFl3RGFFY01BODBCU2NZTmJn",
            tags: ["indoors", "empty"],
            name: "blank-slate6",
        },
    ]);

    return (
        <MediaContext.Provider value={{ slideImages }}>
            {children}
        </MediaContext.Provider>
    );
};
